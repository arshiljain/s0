
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Db3KX98s.js","/cdn/shopifycloud/checkout-web/assets/c1/app.D3JDh5Ol.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CFwZ9ZF7.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.DGfZkhvW.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-stopwatch.CqCyeoze.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.1j-4V9A-.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.DuafY792.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.BMXJ8Hww.js","/cdn/shopifycloud/checkout-web/assets/c1/page-rendered-hooks.BOs9QLTa.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument.B_Cnnik7.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.DsPqd9J0.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.N6qDUJsX.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.DfQK-CEL.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error.Ck110D0c.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.DXQNjSaV.js","/cdn/shopifycloud/checkout-web/assets/c1/mappers-checkout-policy.45wJB_EB.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.CLKtuZAq.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.kI0sBpAe.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BY6huxHp.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.DiNLNrGP.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.DlHO6uqv.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.BmBm1yAh.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization.BbIe45vI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.CAgJlcK2.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.CrKzCP4K.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.CFFKhT92.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.B7KDzlL0.js","/cdn/shopifycloud/checkout-web/assets/c1/ExpressCheckout-ExpressCheckoutButton.module.Cf-p3hIP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.KVhqNGBL.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-compact.Cwhcza2D.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.DkaTDNX3.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.BjilsdRH.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.HuN_S5Gs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.C9q-dqlS.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.CLphDGwP.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.CMc5aSpR.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.CzrWEtCW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DYzHgvtT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.CTZu2uPr.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.DlXuhSp_.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.C7VVctCM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.CFWguL9e.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.Cbyzbt71.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BlsXqabN.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.z9kR1VzC.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.Cv-estxD.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation.eZ9hFXEc.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.L_GOpFR9.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.WrkgtCa3.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride.CJMDamHz.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.8O8UCzLC.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.SDC6usfH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.C1Z4Sshv.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.0FlWJGr_.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.B9ueT9Rk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.CHVVJA6V.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module.BuoF2_7F.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.gt4gu-JU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.DpU9laDc.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.Z6sHFUxL.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.CGt6K91k.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.B50DZ_LM.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.CaP0NSlp.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.PwH5ROMU.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.Cbq9UBsH.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.C93mhhX7.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DAuHl8_3.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.C18Cl5Z4.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.D9j-2q15.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.BKNvs-lc.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.D29OHTfA.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail.CY7wTM4M.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.DuNHc-rV.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent.IRli_6V_.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha.BZ3Bm45-.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha.DGA7KPRf.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.D9T9WcY7.js","/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost.CGAjFXL0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.D1jobwa2.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.pJGtq0ZH.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.BYXA3_gv.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DK37Lok6.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.BhojpQj7.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops.Dyij2Egt.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.hvZ4yF72.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-pay-alternative-payment-flow.C0buJCLJ.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector.BoyUOUUE.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.CU8BG_-V.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.BFTthOyB.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine.0O2IY8Ye.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors.DKXFR6l4.js","/cdn/shopifycloud/checkout-web/assets/c1/performance-index.mu6MOGR9.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.CUMHaAcD.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.DMN-e2Ym.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.Uy2r1ORq.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode.DAMGXHIP.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.BfnU_EUE.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.Clxn5-Cj.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField.Cma19Tby.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet.DkdB7mn_.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.CcAff9Ce.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4.EwEgHOG0.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.Cx2gX5ex.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.DtdmsNxT.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.CphAGbZv.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.D1aPqhNY.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.DCV3miiE.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Sxsz5knT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.BUDzuiNK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.BuSCGSwA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.BPR3LV8c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useAddressMutationsWithNegotiation.BcTJoNaV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShouldRevealCustomization.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.aPApdPe_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.Dlnp55te.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/installments-monorail.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C8No5WOn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BwQxlzN-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ExpressCheckoutButton.BnDF3H7t.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.SrYMuQu4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DWE5rRxz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.CpR5hiDV.css"];
      var fontPreconnectUrls = ["https://cdn.shopify.com"];
      var fontPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0023/3789/8540/files/nb_international_pro_regular-webfont.woff2?v=1723482474","https://cdn.shopify.com/s/files/1/0023/3789/8540/files/nb_international_pro_bold-webfont.woff2?v=1723482474"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0023/3789/8540/files/XMLID_1_x320_b5d7f83b-0988-492b-b5a0-e5f89fc65d78_x320.webp?v=1723481168"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  