const SENTRY_SOURCE_TAG = {
  'dotcom.sourceIssue': 'ab-testing-module'
};

async function getBandFromDOM(bandID, pageID, treatmentLabel) {
  const CHECK_INTERVAL = 50;
  const CHECK_TIMEOUT = 1000;

  const getBandSync = () => {
    const treatmentBand = document.getElementById(`page${pageID}-band${bandID}`);
    if (treatmentBand) treatmentBand.treatmentLabel = treatmentLabel;

    return treatmentBand;
  };

  return new Promise((resolve, reject) => {
    const band = getBandSync();

    if (band) {
      resolve(band);
    } else {
      const checker = setInterval(() => {
        const band = getBandSync();

        if (band) {
          clearInterval(checker);
          resolve(band);
        }
      }, CHECK_INTERVAL);

      setTimeout(() => {
        clearInterval(checker);
        sendErrorEvent({
          error: new Error(
            `Error with treatment band rendering on page`.concat(
              `bandID: ${bandID}, pageID: ${pageID}, treatmentLabel: ${treatmentLabel}`
            )
          )
        });
        reject(
          `Waited for ${
            CHECK_TIMEOUT / 1000
          } second but bands we're not ready in the DOM. Will not render treatment`
        );
      }, CHECK_TIMEOUT);
    }
  });
}

function getDecisionsFromUser(label, experimentId, experimentArgs) {
  const experimentConfig = experimentArgs.configs.find((config) => config.experiment_id === experimentId);
  if (!experimentConfig) {
    throw `The provided experiment ID (${experimentId}) does not match any experiment configs`;
  }

  const isLabelValid = experimentConfig.treatments.some((treatment) => treatment.title === label);
  if (!isLabelValid) {
    throw `The provided label (${label}) does not match any treatments for experiment ID ${experimentId}`;
  }

  return {
    decisions: [
      {
        active: false,
        showTreatment: label !== 'C',
        label,
        status: 'success',
        treatmentId: undefined,
        experimentId
      }
    ],
    trackDecision: () => {}
  };
}

function getDecisionsFromSDK({
  configs,
  experimentIds,
  seedId,
  trackUrl,
  sessionId,
  LabsSDK,
  userCountry,
  webVersion,
  labsSDKVersion
}) {
  const sdkConfig = {
    trackUrl,
    experimentIds
  };
  const sdk = LabsSDK(sdkConfig, configs);

  const getDecisionsArguments = {
    seedId,
    experimentIds,
    context: {
      sessionId,
      userAgent: globalThis.navigator.userAgent,
      webVersion,
      labsSDKVersion
    }
  };

  const { decisions, track } = sdk.getDeferredDecisions(getDecisionsArguments);

  const validatedDecisions = decisions.map((decision) => {
    if (decision.status !== 'success' || decision.message) {
      sendErrorEvent({
        classification: 'DATA_INVALID',
        error: new Error(`Error from SDK. Message: ${JSON.stringify(decision)}`)
      });
    }

    return {
      ...decision,
      ...{
        showTreatment: !decision.control
      }
    };
  });

  return {
    decisions: validatedDecisions,
    trackDecision: track
  };
}

function getDecisions(experimentArgs) {
  try {
    const params = new URLSearchParams(globalThis.location.search);
    const labelFromUser = params.get('treatmentLabel');
    const experimentFromUser = params.get('experimentId') ?? params.get('experimentID');

    if (labelFromUser && experimentFromUser) {
      try {
        return getDecisionsFromUser(labelFromUser, experimentFromUser, experimentArgs);
      } catch (e) {
        console.warn(`Got invalid query param from user:`, e);
      }
    }

    return getDecisionsFromSDK(experimentArgs);
  } catch (error) {
    sendErrorEvent({
      error,
      message: 'Error getting experiment decisions'
    });
    return [];
  }
}

function validateExperimentConfigs({ configs }) {
  return configs.filter((config) => {
    if (config.error) {
      sendErrorEvent({
        classification: 'DATA_INVALID',
        error: new Error(config.error),
        message: 'Filtering out config with error'
      });
      return false;
    }

    return true;
  });
}

function didUserConsent() {
  const userConsents = globalThis?.WM?.userConsentElections;
  const userConsentsReady = globalThis?.WM?.userConsentsReady;

  if (userConsents && userConsentsReady) {
    const { privacyDomain } = globalThis?.WM?.consentsPayload || {};
    if (privacyDomain === 'emea') {
      return userConsents?.ftc || false;
    }

    return true;
  }

  return false;
}

function sendISDKData(eventName, data) {
  function dispatch() {
    document.dispatchEvent(
      new CustomEvent('emitEventData', {
        detail: {
          eventName,
          iSDK: data
        }
      })
    );
  }

  if (globalThis?.WM?.iSDKInitialized) {
    dispatch();
  } else {
    document.addEventListener('onAnalyticsInitialized', () => {
      dispatch();
    });
  }
}

async function showTreatment(decision, bandsByExperimentID, pageID) {
  const { label, showTreatment, experimentId } = decision;
  if (!showTreatment) return;

  const experimentBands = bandsByExperimentID[experimentId];
  for (const { bandID, treatmentLabel } of experimentBands) {
    const band = await getBandFromDOM(bandID, pageID, treatmentLabel);
    if (band) {
      if (band.treatmentLabel === label) {
        band.classList.remove('hide');
      } else {
        band.classList.add('hide');
      }
    }
  }
}

async function runExperiment({ experimentArgs, pageData }) {
  try {
    /*
    These breadcrumbs will be added to any Sentry exception caught inside runExperiment.

    We're adding these objecst as separate breadcrumbs because there is a limit to the depth
    that Sentry will display in these objects. If we passed in experimentArgs and pageData
    in one object, we would loose one level of depth in these objects when viewing in Sentry.
    */
    Sentry.addBreadcrumb({
      message: 'Running AB experiment with experiment args:',
      data: { experimentArgs, ...SENTRY_SOURCE_TAG }
    });
    Sentry.addBreadcrumb({
      message: 'Running AB experiment with pageData:',
      data: { pageData, ...SENTRY_SOURCE_TAG }
    });

    experimentArgs.configs = validateExperimentConfigs(experimentArgs);
    const { decisions, trackDecision } = getDecisions(experimentArgs);
    let experimentsResults = [];
    const { bandsByExperimentID, pageID } = pageData;
    const { seedId } = experimentArgs;

    const trackDecisionsCalled = decisions.reduce((experimentDict, decision) => {
      experimentDict[decision.experimentId] = false;
      return experimentDict;
    }, {});

    const attemptToTrackAllDecisions = () => {
      const didConsent = didUserConsent();
      const contextOverrides = globalThis.WM?.getSessionId
        ? {
            sessionId: globalThis.WM.getSessionId
          }
        : {};
      /* general conditions to track decision */
      if (didConsent && trackDecision) {
        for (const { experimentId, treatmentId } of decisions) {
          /* experiment-specific conditions to track decision */
          if (!trackDecisionsCalled[experimentId]) {
            trackDecisionsCalled[experimentId] = true;
            trackDecision(experimentId, contextOverrides);

            sendISDKData('labsdecision', {
              flagId: experimentId,
              seedId,
              source: 'EXPERIMENT',
              variantId: treatmentId
            });
          }
        }
      }
    };

    document.addEventListener('onConsentsUpdate', attemptToTrackAllDecisions);
    attemptToTrackAllDecisions();

    try {
      for (const decision of decisions) {
        const { label, status, active, treatmentId, experimentId } = decision;
        await showTreatment(decision, bandsByExperimentID, pageID);

        if (active && status === 'success') {
          experimentsResults.push({
            experimentId,
            treatmentId,
            label
          });
        }
      }
    } catch (error) {
      sendErrorEvent({
        error,
        message: 'Error attempting to show hidden treatment band'
      });
    }

    globalThis.AB_EXPERIMENTS = globalThis.AB_EXPERIMENTS ? globalThis.AB_EXPERIMENTS : {};
    globalThis.AB_EXPERIMENTS.results = experimentsResults;
    document.dispatchEvent(new CustomEvent('ABExperimentsReady'));
  } catch (error) {
    sendErrorEvent({
      error,
      message: 'Error attempting to run experiment'
    });
  }
}

function getCookie(key) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
    ?.split('=')[1];
}

function createCookie({ key, value, expires }) {
  const domainWithNoSubDomains = globalThis.location.hostname.split('.').slice(-2).join('.');

  document.cookie = `${key}=${value}`.concat(
    `; domain=${domainWithNoSubDomains}`,
    `; path=/`,
    `; max-age=${expires}`
  );

  return value;
}

function getOrCreateTransientId() {
  const tenYearsInSeconds = 60 * 60 * 24 * 365 * 10;

  return (
    getCookie('transientID') ||
    createCookie({
      key: 'transientID',
      value: crypto.randomUUID(),
      expires: tenYearsInSeconds
    })
  );
}

function getOrCreateSessionId() {
  const oneYearInSeconds = 60 * 60 * 24 * 365;
  const thirtyMinutes = 60 * 30 * 1000;
  const currentTime = Date.now();
  let session = {
    uuid: crypto.randomUUID(),
    created: currentTime,
    expires: currentTime + thirtyMinutes
  };

  const sessionCookie = getCookie('session');
  const existingSession = sessionCookie ? JSON.parse(sessionCookie) : null;
  const existingSessionHasNotExpired = existingSession?.expires > currentTime;

  if (existingSessionHasNotExpired) {
    existingSession.expires = currentTime + thirtyMinutes;
    session = existingSession;
  }

  createCookie({
    key: 'session',
    value: JSON.stringify(session),
    expires: oneYearInSeconds
  });

  return session.uuid;
}

function sendErrorEvent({ classification, scope, error = new Error('Unknown error'), message }) {
  if (message) {
    error.message = `${message}: ${error.message}`;
  }

  console.error(error);

  Sentry.captureException(error, {
    tags: {
      SENTRY_SOURCE_TAG
    }
  });

  sendISDKData('FeatureFlagsError', {
    classification: classification || 'INIT_FAILED',
    scope: scope || 'Recoverable',
    error
  });
}

export default {
  getOrCreateTransientId,
  getOrCreateSessionId,
  runExperiment
};
