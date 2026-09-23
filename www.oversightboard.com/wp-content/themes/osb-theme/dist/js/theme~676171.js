/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/animations.js":
/*!*****************************************!*\
  !*** ./src/js/components/animations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animations: () => (/* binding */ animations)
/* harmony export */ });
/**
 * Add is-in-view class to elements when they are scrolled into view
 */
var animations = function animations() {
  var els = Array.from(document.querySelectorAll('.animate'));
  if (!els.length) return;
  var handleIntersection = function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !entry.target.classList.contains('is-in-view')) {
        entry.target.classList.add('is-in-view');

        // disconnect observer for the element
        observer.unobserve(entry.target);
      }
    });
  };
  var observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -5% 0px'
  });
  els.forEach(function (el) {
    observer.observe(el);
  });
};

/***/ }),

/***/ "./src/js/components/desktop-menu.js":
/*!*******************************************!*\
  !*** ./src/js/components/desktop-menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desktopMenu: () => (/* binding */ desktopMenu)
/* harmony export */ });
var desktopMenu = function desktopMenu() {
  // add minimized class to body when scrolled down
  var handleScroll = function handleScroll() {
    document.body.classList.toggle('minimized', window.scrollY >= 200);
  };
  window.addEventListener('scroll', handleScroll);

  // on main-navigation items with children, add ada attributes & keyboard functionality
  var menuItems = Array.from(document.querySelectorAll('.main-navigation > ul > .menu-item-has-children, .main-navigation .languages'));
  menuItems.forEach(function (item) {
    // if this menu item's href="#", add role="button"
    var button = item.querySelector('a, button');
    var isAnchor = button && button.getAttribute('href') === '#';
    if (isAnchor) {
      button.setAttribute('role', 'button');
      // add aria-haspopup to item
      button.setAttribute('aria-haspopup', true);
    }

    // copy ID to the submenu
    var submenu = item.querySelector('ul');
    var id = item.getAttribute('id');
    var submenuId = "".concat(id, "-submenu");
    submenu.setAttribute('id', submenuId);

    // set aria attributes
    button.setAttribute('aria-expanded', false);
    button.setAttribute('aria-controls', submenuId);

    // add blur event to submenu items
    submenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        console.log('click link in submenu');
        item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', item.classList.contains('is-open'));
      });
    });
    button.addEventListener('click', function (e) {
      if (isAnchor) e.preventDefault();

      // close other open submenus
      menuItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          otherItem.querySelector('a').setAttribute('aria-expanded', false);
        }
      });
      item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', item.classList.contains('is-open'));

      // focus first link in submenu
      var firstLink = submenu.querySelector('a');
      firstLink.focus();
    });
  });
};

/***/ }),

/***/ "./src/js/components/faqs.js":
/*!***********************************!*\
  !*** ./src/js/components/faqs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   faqs: () => (/* binding */ faqs)
/* harmony export */ });
/** FAQs accordion */
var faqs = function faqs() {
  var questions = document.querySelectorAll('.question');
  if (!questions.length) return;

  // Add click event listener to each question
  questions.forEach(function (question) {
    // Initial ARIA attributes setup
    question.setAttribute('aria-expanded', 'false');
    question.nextElementSibling.setAttribute('aria-hidden', 'true');

    // on click, toggle answer and active class
    question.addEventListener('click', function () {
      toggleAnswerAndActiveClass(question);
    });
  });
};
function toggleAnswerAndActiveClass(question) {
  // Toggle the 'active' class on the parent 'section'
  question.classList.toggle('active');

  // Toggle visibility of the next sibling (the answer)
  var answer = question.nextElementSibling;
  var isExpanded = answer.style.display === 'block';
  answer.style.display = isExpanded ? 'none' : 'block';

  // Set ARIA attributes
  question.setAttribute('aria-expanded', !isExpanded);
  answer.setAttribute('aria-hidden', isExpanded);
}

/***/ }),

/***/ "./src/js/components/form-translation.js":
/*!***********************************************!*\
  !*** ./src/js/components/form-translation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formTranslation: () => (/* binding */ formTranslation)
/* harmony export */ });
var formTranslation = function formTranslation() {
  // if html lang attribue is en-US exit this script
  if (document.documentElement.lang === 'en-US') {
    return;
  }

  // if .pcp_name element is not present exit this script
  if (!document.querySelector('.pcp_name')) {
    return;
  }

  // console.log('formTranslation');

  var requiredMark = '<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span>';

  // Parse the JSON data from the script tag
  var formData = JSON.parse(document.getElementById('pcp-form-labels').textContent);

  // Function to replace text content for form labels and descriptions
  function replaceTextContent(selector, newText) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
      // replace the text content with new text html
      element.innerHTML = newText;
    });
  }

  // Function to update select options
  function updateSelectOptions(selector, newOptions) {
    var selectElement = document.querySelector(selector);
    if (selectElement) {
      var options = newOptions.split('\n'); // Split by new line

      // loop through existing options and update the text content with the new options
      var existingOptions = selectElement.querySelectorAll('option');
      existingOptions.forEach(function (option, index) {
        option.textContent = options[index];
      });
    }
  }

  // Function to update the first option of a select element
  function updateFirstOption(selector, newText) {
    var selectElement = document.querySelector(selector);
    if (selectElement) {
      selectElement.querySelector('option').textContent = newText;
    }
  }

  // Replace form labels and descriptions with data from JSON
  replaceTextContent('.pcp_name .name_first .gform-field-label--type-sub', formData.first_name);
  replaceTextContent('.pcp_name .name_last .gform-field-label--type-sub', formData.first_name);
  replaceTextContent('.pcp_email .gform-field-label', formData.email + requiredMark);
  replaceTextContent('.pcp_job_title .gform-field-label', formData.job_title);
  replaceTextContent('.pcp_organization .gform-field-label', formData.organization);
  replaceTextContent('.pcp_organization_website .gform-field-label', formData.organization_website);
  replaceTextContent('.pcp_region .gform-field-label', formData.location_region + requiredMark);
  replaceTextContent('.pcp_country .gform-field-label', formData.location_countries + requiredMark);
  replaceTextContent('.pcp_preferred_lang .gform-field-label', formData.language_preference_for_public_comment + requiredMark);
  replaceTextContent('.pcp_full_comment .gform-field-label', formData.provide_the_full_comment);
  replaceTextContent('.pcp_full_comment .gfield_description', formData.provide_the_full_text_of_your_comment);
  replaceTextContent('.pcp_document .gform-field-label', formData.upload_document);
  replaceTextContent('.pcp_document .gfield_description', formData.upload_document_instructions);
  replaceTextContent('.pcp_consent_publish .gform-field-label', formData.consent_publish + requiredMark);
  replaceTextContent('.pcp_consent_publish .gfield_description', formData.consent_publish_instructions);
  replaceTextContent('.pcp_consent_name .gform-field-label', formData.consent_name + requiredMark);
  replaceTextContent('.pcp_consent_org .gform-field-label', formData.consent_organization + requiredMark);
  replaceTextContent('.pcp_consent_email .gform-field-label', formData.consent_contact + requiredMark);
  replaceTextContent('.pcp_special_category_data .gform-field-label', formData.special_category_data + requiredMark);
  replaceTextContent('.pcp_special_category_data .gfield_consent_label', formData.special_category_data_instructions);
  replaceTextContent('.pcp_privacy .gform-field-label', formData.privacy_notice + requiredMark);
  replaceTextContent('.pcp_privacy .gfield_consent_label', formData.privacy_notice_instructions);
  replaceTextContent('.gform_button[type="submit"]', formData.submit_button);
  replaceTextContent('.gform_confirmation_message', formData.confirmation_message);

  // Update select options
  updateSelectOptions('.pcp_region .gfield_select', formData.location_region_choices);
  updateSelectOptions('.pcp_country .gfield_select', formData.location_country_choices);
  updateSelectOptions('.pcp_consent_publish .gfield_select', formData.consent_publish_choices);
  updateSelectOptions('.pcp_consent_name .gfield_select', formData.consent_name_choices);
  updateSelectOptions('.pcp_consent_org .gfield_select', formData.consent_organization_choices);
  updateSelectOptions('.pcp_consent_email .gfield_select', formData.consent_contact_choices);

  // Update first option
  updateFirstOption('.pcp_preferred_lang .gfield_select', formData.language_preference_select);
};

/***/ }),

/***/ "./src/js/components/llms-lowercase.js":
/*!*********************************************!*\
  !*** ./src/js/components/llms-lowercase.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   llmsLowercase: () => (/* binding */ llmsLowercase)
/* harmony export */ });
/** Lowercase the trailing "s" in "LLMs" within the title of post 61718 */
var llmsLowercase = function llmsLowercase() {
  var post = document.getElementById('post-61718');
  if (!post) return;
  var h1 = post.querySelector('h1');
  if (!h1 || h1.querySelector('.lowercase-letter')) return; // avoid double-wrapping

  h1.innerHTML = h1.innerHTML.replace(/LLMs/g, 'LLM<span class="lowercase-letter">s</span>');
};

/***/ }),

/***/ "./src/js/components/load-more.js":
/*!****************************************!*\
  !*** ./src/js/components/load-more.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMore: () => (/* binding */ loadMore)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// cache results
var cache = new Map();

/**
 * Fetch paginated content from ACF blocks with data-load-more-* attributes
 */
var loadMore = function loadMore() {
  var paginatedContent = document.querySelectorAll('[data-load-more-id]');
  if (!paginatedContent.length) return;
  var url = window.location.href.split('?')[0];
  paginatedContent.forEach(function (block) {
    var button = block.querySelector('[data-load-more-button');
    if (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        fetchNextPage(e.target.href, block);
      });
    }
    var filters = block.querySelectorAll('[data-load-more-filter]');
    if (filters) {
      filters.forEach(function (filter) {
        // if filter is select element
        if (filter.tagName === 'SELECT') {
          // set initial filter widths
          var span = document.createElement('span');
          // set span text to selected option
          span.innerText = filter.options[0].text;
          document.body.appendChild(span);
          // set width of select to width of span
          filter.style.width = "".concat(span.offsetWidth + 60, "px");
          // remove span
          span.remove();
          filter.addEventListener('change', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // console.log('change');

            var span = document.createElement('span');
            // set span text to selected option
            span.innerText = e.target.options[e.target.selectedIndex].text;
            document.body.appendChild(span);
            // set width of select to width of span
            var offset = e.target.getAttribute('name') === 'tag' ? 70 : 50;
            e.target.style.width = "".concat(span.offsetWidth + offset, "px");
            // remove span
            span.remove();

            // href = url + filter=value
            //const href = `${url}?${e.target.name}=${e.target.value}`;

            // href = url + the name and value of each [data-load-more-filter]
            //console.log(url);
            // get url param lang value
            var urlParams = new URLSearchParams(window.location.search);
            var lang = urlParams.get('lang');
            var href = '';
            // console.log(lang);

            if (lang != '') {
              href = "".concat(url, "?lang=").concat(lang);
            } else {
              href = "".concat(url, "?");
            }
            filters.forEach(function (f) {
              href += "&".concat(f.name, "=").concat(f.value);
            });
            // console.log(href);

            // filters.forEach((f) => {
            // 	href += `&${f.name}=${f.value}`;
            // });

            fetchNextPage(href, block, true);
          });
        } else {
          // button filter
          filter.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // toggle active class
            filters.forEach(function (f) {
              if (f !== filter) f.classList.remove('active');else f.classList.toggle('active');
            });

            // if filter is active, fetch new results, else reset
            var href = filter.classList.contains('active') ? e.target.href : url;
            fetchNextPage(href, block, true, false);
          });
        }
      });
    }

    // set initial page cache
    var id = block.getAttribute('data-load-more-id');
    var items = block.querySelectorAll('[data-load-more-list] > *');
    var nextPageLink = button === null || button === void 0 ? void 0 : button.href;
    var key = "".concat(id, "-").concat(url);
    cache.set(key, {
      items: items,
      nextPageLink: nextPageLink
    });
  });
};

/** Parse html string into dom nodes
 * @param {string} html
 */
var parse = function parse(html) {
  var doc = document.createElement('html');
  doc.innerHTML = html;
  return doc.lastChild;
};

/**
 * Fetch next page of paginated or filtered content
 * @param {Event} event
 * @param {HTMLElement} block
 * @param {boolean} isFilter
 * @param {boolean} useCache
 */
function fetchNextPage(_x, _x2) {
  return _fetchNextPage.apply(this, arguments);
}
function _fetchNextPage() {
  _fetchNextPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, block) {
    var isFilter,
      useCache,
      id,
      list,
      button,
      items,
      nextPageLink,
      key,
      _cache$get,
      html,
      fakeDom,
      parent,
      _parent$querySelector,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          isFilter = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
          useCache = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
          if (url) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return");
        case 4:
          id = block.getAttribute('data-load-more-id');
          list = block.querySelector('[data-load-more-list]');
          button = block.querySelector('[data-load-more-button]');
          key = "".concat(id, "-").concat(url); // check cache
          if (!(useCache && cache.has(key))) {
            _context.next = 14;
            break;
          }
          _cache$get = cache.get(key);
          items = _cache$get.items;
          nextPageLink = _cache$get.nextPageLink;
          _context.next = 25;
          break;
        case 14:
          _context.prev = 14;
          _context.next = 17;
          return fetch(url).then(function (rez) {
            return rez.text();
          });
        case 17:
          html = _context.sent;
          fakeDom = parse(html);
          parent = fakeDom.querySelector("[data-load-more-id=".concat(id, "]"));
          if (parent) {
            items = parent.querySelectorAll('[data-load-more-list] > *');
            nextPageLink = (_parent$querySelector = parent.querySelector('[data-load-more-button]')) === null || _parent$querySelector === void 0 ? void 0 : _parent$querySelector.href;

            // cache result
            cache.set(key, {
              items: items,
              nextPageLink: nextPageLink
            });
          }
          _context.next = 25;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](14);
        case 25:
          if (items.length > 0) {
            if (isFilter) list.innerHTML = '';
            items.forEach(function (item, i) {
              list.appendChild(item);
              if (i === 0) {
                item.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest'
                });
              }
            });
          }

          // update pagination link
          if (nextPageLink) {
            button.href = nextPageLink;
            button.style.display = '';
          } else {
            button.style.display = 'none';
          }
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[14, 23]]);
  }));
  return _fetchNextPage.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var mobileMenu = function mobileMenu() {
  var nav = document.getElementById('site-navigation');
  var button = nav === null || nav === void 0 ? void 0 : nav.querySelector('button');
  var menu = nav === null || nav === void 0 ? void 0 : nav.querySelector('ul');

  // Hide menu toggle button if menu is empty and return early.
  if (!nav || !button || !menu) {
    button === null || button === void 0 || button.classList.add('hidden');
    return;
  }
  if (!menu.classList.contains('nav-menu')) {
    menu.classList.add('nav-menu');
  }

  // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
  button.addEventListener('click', function () {
    nav.classList.toggle('toggled');
    //toggle menu-shown class on body
    document.body.classList.toggle('menu-shown');
    var isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
  });

  // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
  document.addEventListener('click', function (event) {
    var isClickInside = nav.contains(event.target);
    if (!isClickInside) {
      nav.classList.remove('toggled');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  // Get all the link elements within the menu.
  var links = menu.getElementsByTagName('a');

  // Get all the link elements with children within the menu.
  var linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
};
function handleBlurFocus(event) {
  var currentElement = event.currentTarget;
  // Move up through the ancestors of the current link until we hit .nav-menu.
  while (currentElement && !currentElement.classList.contains('nav-menu')) {
    // On li elements toggle the class .focus.
    if ('li' === currentElement.tagName.toLowerCase()) {
      currentElement.classList.toggle('focus');
    }
    currentElement = currentElement.parentNode;
  }
}
function handleTouchFocus(event) {
  event.preventDefault();
  var menuItem = event.currentTarget.parentNode;
  var _iterator = _createForOfIteratorHelper(menuItem.parentNode.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      if (menuItem !== link) {
        link.classList.remove('focus');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  menuItem.classList.toggle('focus');
}

/***/ }),

/***/ "./src/js/components/more-less-text.js":
/*!*********************************************!*\
  !*** ./src/js/components/more-less-text.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moreLessText: () => (/* binding */ moreLessText)
/* harmony export */ });
var moreLessText = function moreLessText() {
  // console.log('moreLessText init');
  var els = document.querySelectorAll('.contents');
  els.forEach(function (el) {
    var mark = el.querySelector('.mark');
    var toggle = el.querySelector('.more-toggle');

    // Create a new span to wrap the text following the markSpan
    var hiddenText = document.createElement('span');
    hiddenText.classList.add('hidden-text');
    hiddenText.style.display = 'none'; // Initially hide the text

    // Move all nodes after mark into the hiddenText
    while (mark.nextSibling) {
      hiddenText.appendChild(mark.nextSibling);
    }

    // Insert hiddenText after mark
    mark.parentNode.insertBefore(hiddenText, mark.nextSibling);

    // On button click, toggle content
    toggle.addEventListener('click', function () {
      // console.log('moreLessText clicked');
      // Toggle the .expanded class on the .contents div
      el.classList.toggle('expanded');
      var isExpanded = el.classList.contains('expanded');

      // Toggle the visibility of the hidden text & update aria attributes
      hiddenText.style.display = isExpanded ? '' : 'none';

      // Update the button text based on data attributes
      toggle.textContent = isExpanded ? toggle.getAttribute('data-less-label') : toggle.getAttribute('data-more-label');
      toggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    });
  });
};

/***/ }),

/***/ "./src/js/components/people-modal.js":
/*!*******************************************!*\
  !*** ./src/js/components/people-modal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   peopleModal: () => (/* binding */ peopleModal)
/* harmony export */ });
var peopleModal = function peopleModal() {
  var people = document.querySelectorAll('.wp-block-people-a__people .person');
  //exit if no people
  if (people.length === 0) {
    return;
  }

  // Separate popup and single-page people
  var popupPeople = Array.from(people).filter(function (p) {
    return p.dataset.linkMode !== 'single';
  });
  var singlePeople = Array.from(people).filter(function (p) {
    return p.dataset.linkMode === 'single';
  });

  // Initialize popup functionality only if there are popup-mode people
  if (popupPeople.length > 0) {
    initializePopupMode(popupPeople);
  }

  // Initialize single-page mode for single-page people
  if (singlePeople.length > 0) {
    initializeSinglePageMode(singlePeople);
  }
};
var initializePopupMode = function initializePopupMode(people) {
  var popupOverlay = document.querySelector('.popup-overlay');
  var contentContainer = popupOverlay.querySelector('.content-container');
  var closeButton = popupOverlay.querySelector('.close-btn');
  var prevButton = popupOverlay.querySelector('.prev-btn');
  var nextButton = popupOverlay.querySelector('.next-btn');
  var lastFocusedElement;
  var currentIndex = 0; // Global current index

  var showPopup = function showPopup(index) {
    currentIndex = index;
    lastFocusedElement = document.activeElement;
    var personContent = people[currentIndex].querySelector('.person-content');
    contentContainer.innerHTML = personContent.innerHTML;
    document.body.classList.add('popup-open');
    popupOverlay.setAttribute('aria-hidden', 'false');
    popupOverlay.setAttribute('aria-label', people[currentIndex].querySelector('.person-name').innerText);
    contentContainer.focus();
    popupOverlay.scrollTop = 0;
  };
  var closePopup = function closePopup() {
    popupOverlay.setAttribute('aria-hidden', 'true');
    lastFocusedElement.focus();
    document.body.classList.remove('popup-open');
  };
  closeButton.addEventListener('click', closePopup);
  prevButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop event propagation
    showPopup((currentIndex - 1 + people.length) % people.length);
  });
  nextButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Stop event propagation
    showPopup((currentIndex + 1) % people.length);
  });
  popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
      closePopup();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });
  people.forEach(function (person, index) {
    person.setAttribute('role', 'button');
    person.setAttribute('aria-haspopup', 'dialog');
    person.addEventListener('click', function (event) {
      event.preventDefault();
      showPopup(index);
    });
  });
};
var initializeSinglePageMode = function initializeSinglePageMode(people) {
  people.forEach(function (person) {
    var url = person.dataset.personUrl;
    if (url) {
      person.style.cursor = 'pointer';
      person.setAttribute('role', 'button');
      person.setAttribute('tabindex', '0');

      // Navigate to single page on click
      person.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = url;
      });

      // Also handle Enter key for accessibility
      person.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
          event.preventDefault();
          window.location.href = url;
        }
      });
    }
  });
};

/***/ }),

/***/ "./src/js/components/public-comments.js":
/*!**********************************************!*\
  !*** ./src/js/components/public-comments.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publicComments: () => (/* binding */ publicComments)
/* harmony export */ });
var publicComments = function publicComments() {
  var commentToggles = document.querySelectorAll('.wp-block-custom .public-comment .btn');

  // If .public comment only has one paragraph and class .is-short
  var comments = document.querySelectorAll('.wp-block-custom .public-comment');
  comments.forEach(function (comment) {
    var paragraphs = comment.querySelectorAll('p');
    if (paragraphs.length <= 1) {
      comment.classList.add('is-short');
    }
  });
  commentToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var commentContainer = toggle.closest('.public-comment');
      var isExpanded = commentContainer.classList.toggle('is-open');

      // Update the button text and ARIA attributes
      toggle.textContent = isExpanded ? toggle.getAttribute('data-less-label') : toggle.getAttribute('data-more-label');
      toggle.setAttribute('aria-expanded', isExpanded);

      // Optionally, adjust ARIA attributes on the commentContainer if needed
      commentContainer.setAttribute('aria-hidden', !isExpanded);
    });
  });
};

/***/ }),

/***/ "./src/js/components/scroll-snap-button.js":
/*!*************************************************!*\
  !*** ./src/js/components/scroll-snap-button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollSnapButton: () => (/* binding */ scrollSnapButton)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var scrollSnapButton = function scrollSnapButton() {
  var nextButton = document.querySelector('.scroll-button.next');
  var prevButton = document.querySelector('.scroll-button.prev');
  if (!nextButton || !prevButton) return;
  var container = nextButton.parentElement.previousElementSibling;
  if (!container) return;
  var cards = container.querySelectorAll('.detail-card');
  if (!cards.length) return;

  // Function to scroll to the next card
  var scrollToNextCard = function scrollToNextCard() {
    var containerRect = container.getBoundingClientRect();
    var _iterator = _createForOfIteratorHelper(cards),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var card = _step.value;
        var cardRect = card.getBoundingClientRect();
        if (cardRect.left > containerRect.left) {
          card.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          });
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  // Function to scroll to the previous card
  var scrollToPrevCard = function scrollToPrevCard() {
    var containerRect = container.getBoundingClientRect();
    for (var i = cards.length - 1; i >= 0; i--) {
      var card = cards[i];
      var cardRect = card.getBoundingClientRect();
      if (cardRect.right < containerRect.right) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'end'
        });
        break;
      }
    }
  };

  // Attach event listeners to buttons
  nextButton.addEventListener('click', scrollToNextCard);
  prevButton.addEventListener('click', scrollToPrevCard);

  // Event listener for scrolling
  container.addEventListener('scroll', function () {
    var containerRect = container.getBoundingClientRect();
    var isEnd = container.scrollLeft + containerRect.width >= container.scrollWidth;
    var isStart = container.scrollLeft <= 0;
    nextButton.classList.toggle('disabled', isEnd);
    prevButton.classList.toggle('disabled', isStart);
  });

  // Check and update button states based on overflow
  var checkOverflow = function checkOverflow() {
    var containerRect = container.getBoundingClientRect();
    var hasOverflow = container.scrollWidth > containerRect.width;
    nextButton.classList.toggle('active', hasOverflow);
    prevButton.classList.toggle('active', hasOverflow);
  };
  checkOverflow();
  window.addEventListener('resize', checkOverflow);
};

/***/ }),

/***/ "./src/js/components/search.js":
/*!*************************************!*\
  !*** ./src/js/components/search.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
var search = function search() {
  var searchToggle = document.querySelector('.search-toggle');
  var searchClose = document.querySelector('.search-close');
  var headerSearch = document.getElementById('header-search');
  var searchField = document.querySelector('.search-field'); // Select the search field
  var menuToggle = document.querySelector('.menu-toggle'); // Select the menu toggle
  var searchForm = headerSearch.querySelector('form'); // Assuming the form is within #header-search

  // Function to open the search
  var openSearch = function openSearch() {
    headerSearch.style.display = 'flex';
    headerSearch.setAttribute('aria-expanded', 'true');
    searchToggle.setAttribute('aria-expanded', 'true');
    searchField.focus(); // Focus the search field
    menuToggle.click();
  };

  // Function to close the search
  var closeSearch = function closeSearch() {
    headerSearch.style.display = 'none';
    headerSearch.setAttribute('aria-expanded', 'false');
    searchToggle.setAttribute('aria-expanded', 'false');
    return false;
  };

  // Event listener for opening search
  searchToggle.addEventListener('click', function () {
    if (headerSearch.style.display === 'none') {
      openSearch();
      //scroll to top of window
      window.scrollTo(0, 0);
    } else {
      closeSearch();
    }
  });

  // Event listener for closing search
  searchClose.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission or any default action
    closeSearch();
  });

  // hide label if search field has value
  searchField.addEventListener('input', function (event) {
    // if has value, add class to parent
    searchField.parentNode.classList.toggle('has-value', event.target.value);
  });
  // set initial label visibility
  searchField.parentNode.classList.toggle('has-value', searchField.value);

  // Event listener for Enter key in search field
  searchField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault(); // Prevent the default Enter key action
      searchForm.submit(); // Submit the form
    }
  });
};

/***/ }),

/***/ "./src/js/components/stats-counter.js":
/*!********************************************!*\
  !*** ./src/js/components/stats-counter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   statsCounter: () => (/* binding */ statsCounter)
/* harmony export */ });
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ "./node_modules/countup.js/dist/countUp.min.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var statsCounter = function statsCounter() {
  var numbers = document.querySelectorAll('.number');
  if (!numbers.length) return;
  numbers.forEach(function (number) {
    // get the number from the string
    var numberValue = number.textContent.replace(/[^0-9.]/g, '');

    // get the index of the first number
    var firstIntIndex = number.textContent.search(/\d/);
    var hasPrefix, hasSuffix;

    // if firstIntIndex > 0, then there is a prefix
    if (firstIntIndex > 0) {
      hasPrefix = number.textContent.substring(0, firstIntIndex);
      hasSuffix = number.textContent.replace(/[0-9]/g, '').slice(firstIntIndex);
    } else {
      hasPrefix = false;
      hasSuffix = number.textContent.replace(/[0-9]/g, '');
    }
    var prefix = hasPrefix ? hasPrefix : '';
    var suffix = hasSuffix ? hasSuffix : '';
    var hasDecimals = numberValue.indexOf('.') === -1 ? 0 : 1;
    if (suffix === '.') {
      suffix = '';
    }
    var options = {
      startVal: 0,
      useEasing: false,
      useGrouping: true,
      decimalPlaces: hasDecimals,
      duration: 3,
      scrollSpyDelay: 0,
      prefix: prefix,
      suffix: suffix,
      enableScrollSpy: true,
      scrollSpyOnce: true
    };
    if (numberValue && parseFloat(numberValue) === 1) {
      new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(number, parseFloat(numberValue), _objectSpread(_objectSpread({}, options), {}, {
        duration: 1
      }));
    }
    if (numberValue && parseFloat(numberValue) > 1) {
      new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp(number, parseFloat(numberValue), options);
    }
  });
};

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
function tabs() {
  var buttons = document.querySelectorAll('.tab-button');
  if (!buttons) return;
  var removeActiveState = function removeActiveState(button) {
    // Toggle aria-expanded and aria-selected attributes
    button.setAttribute('aria-expanded', false);
    // button.setAttribute('aria-selected', false);

    // get associated content div
    var content = document.getElementById(button.getAttribute('aria-controls'));

    // Remove active class from associated content div
    content === null || content === void 0 || content.classList.remove('active');
  };
  var handleButtonClick = function handleButtonClick(button) {
    return function (event) {
      event.preventDefault();

      // remove active state from all buttons
      buttons.forEach(removeActiveState);

      // Toggle aria-expanded and aria-selected attributes
      button.setAttribute('aria-expanded', true);
      // button.setAttribute('aria-selected', true);

      // Add active class to associated content div
      var content = document.getElementById(button.getAttribute('aria-controls'));
      content === null || content === void 0 || content.classList.add('active');
    };
  };
  buttons.forEach(function (button) {
    button.addEventListener('click', handleButtonClick(button));
  });
}

/***/ }),

/***/ "./src/js/components/video-lightbox.js":
/*!*********************************************!*\
  !*** ./src/js/components/video-lightbox.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   videoLightbox: () => (/* binding */ videoLightbox)
/* harmony export */ });
/* harmony import */ var reframe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reframe.js */ "./node_modules/reframe.js/dist/reframe.es.js");

var videoLightbox = function videoLightbox() {
  // Create lightbox container
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('tabindex', '-1'); // Make it focusable

  var lightboxContent = document.createElement('div');
  lightboxContent.className = 'lightbox-content';
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'close-btn';
  closeButton.setAttribute('aria-label', 'Close video');
  lightboxContent.appendChild(closeButton);
  lightbox.appendChild(lightboxContent);
  document.body.appendChild(lightbox);

  // Function to open lightbox
  var openLightbox = function openLightbox(url) {
    var iframe = document.createElement('iframe');
    iframe.src = url.replace('watch?v=', 'embed/');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('aria-label', 'YouTube video');
    lightboxContent.appendChild(iframe);
    lightbox.style.display = 'flex';
    (0,reframe_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.lightbox-content iframe');
    closeButton.focus();
  };

  // Function to close lightbox
  var closeLightbox = function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxContent.removeChild(lightboxContent.lastChild); // Remove the iframe
  };

  // Event listener for video items
  document.querySelectorAll('.videos-item').forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var videoUrl = item.getAttribute('href');
      openLightbox(videoUrl);
    });
  });

  // Close lightbox when close button is clicked
  closeButton.addEventListener('click', closeLightbox);

  // Close lightbox when clicking outside of the iframe
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox when pressing the ESC key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
};

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountUp: () => (/* binding */ i)
/* harmony export */ });
var t=function(){return t=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t},t.apply(this,arguments)},i=function(){function i(i,n,s){var a=this;this.endVal=n,this.options=s,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration);var n=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=n?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(t){var i,n,s,e,o=t<0?"-":"";i=Math.abs(t).toFixed(a.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?a.options.decimal+r[1]:"",a.options.useGrouping){e="";for(var l=3,h=0,u=0,p=n.length;u<p;++u)a.options.useIndianSeparators&&4===u&&(l=2,h=1),0!==u&&h%l==0&&(e=a.options.separator+e),h++,e=n[p-u-1]+e;n=e}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),o+a.options.prefix+n+s+a.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=t(t({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof i?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,i):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return a.handleScroll(a)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return i.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<i&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||s>i)&&!t.paused&&t.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},i.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},i.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();


/***/ }),

/***/ "./node_modules/reframe.js/dist/reframe.es.js":
/*!****************************************************!*\
  !*** ./node_modules/reframe.js/dist/reframe.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reframe)
/* harmony export */ });
/**
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v4.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
**/
/**
 * REFRAME.TS 🖼
 * ---
 * @param target
 * @param cName
 * @summary defines the height/width ratio of the targeted <element>
 */
function reframe(target, cName) {
    var _a, _b;
    var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
    var c = cName || 'js-reframe';
    if (!('length' in frames))
        frames = [frames];
    for (var i = 0; i < frames.length; i += 1) {
        var frame = frames[i];
        var hasClass = frame.className.split(' ').indexOf(c) !== -1;
        if (hasClass || frame.style.width.indexOf('%') > -1) {
            return;
        }
        // get height width attributes
        var height = frame.getAttribute('height') || frame.offsetHeight;
        var width = frame.getAttribute('width') || frame.offsetWidth;
        var heightNumber = typeof height === 'string' ? parseInt(height) : height;
        var widthNumber = typeof width === 'string' ? parseInt(width) : width;
        // general targeted <element> sizes
        var padding = (heightNumber / widthNumber) * 100;
        // created element <wrapper> of general reframed item
        // => set necessary styles of created element <wrapper>
        var div = document.createElement('div');
        div.className = c;
        var divStyles = div.style;
        divStyles.position = 'relative';
        divStyles.width = '100%';
        divStyles.paddingTop = "".concat(padding, "%");
        // set necessary styles of targeted <element>
        var frameStyle = frame.style;
        frameStyle.position = 'absolute';
        frameStyle.width = '100%';
        frameStyle.height = '100%';
        frameStyle.left = '0';
        frameStyle.top = '0';
        // reframe targeted <element>
        (_a = frame.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(div, frame);
        (_b = frame.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(frame);
        div.appendChild(frame);
    }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/animations.js */ "./src/js/components/animations.js");
/* harmony import */ var _components_desktop_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/desktop-menu.js */ "./src/js/components/desktop-menu.js");
/* harmony import */ var _components_faqs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/faqs.js */ "./src/js/components/faqs.js");
/* harmony import */ var _components_form_translation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-translation.js */ "./src/js/components/form-translation.js");
/* harmony import */ var _components_llms_lowercase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/llms-lowercase.js */ "./src/js/components/llms-lowercase.js");
/* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/load-more */ "./src/js/components/load-more.js");
/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobile-menu.js */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_more_less_text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/more-less-text.js */ "./src/js/components/more-less-text.js");
/* harmony import */ var _components_people_modal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/people-modal.js */ "./src/js/components/people-modal.js");
/* harmony import */ var _components_public_comments_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/public-comments.js */ "./src/js/components/public-comments.js");
/* harmony import */ var _components_scroll_snap_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scroll-snap-button.js */ "./src/js/components/scroll-snap-button.js");
/* harmony import */ var _components_search_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search.js */ "./src/js/components/search.js");
/* harmony import */ var _components_stats_counter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/stats-counter.js */ "./src/js/components/stats-counter.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_video_lightbox_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/video-lightbox.js */ "./src/js/components/video-lightbox.js");















var rdy = function rdy(fn) {
  if (!document.body) document.addEventListener('DOMContentLoaded', fn);else fn();
};
rdy(function () {
  // site wide
  (0,_components_animations_js__WEBPACK_IMPORTED_MODULE_0__.animations)();
  (0,_components_desktop_menu_js__WEBPACK_IMPORTED_MODULE_1__.desktopMenu)();
  (0,_components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_6__.mobileMenu)();
  (0,_components_search_js__WEBPACK_IMPORTED_MODULE_11__.search)();
  // blocks + components
  (0,_components_faqs_js__WEBPACK_IMPORTED_MODULE_2__.faqs)();
  (0,_components_form_translation_js__WEBPACK_IMPORTED_MODULE_3__.formTranslation)();
  (0,_components_llms_lowercase_js__WEBPACK_IMPORTED_MODULE_4__.llmsLowercase)();
  (0,_components_load_more__WEBPACK_IMPORTED_MODULE_5__.loadMore)();
  (0,_components_more_less_text_js__WEBPACK_IMPORTED_MODULE_7__.moreLessText)();
  (0,_components_people_modal_js__WEBPACK_IMPORTED_MODULE_8__.peopleModal)();
  (0,_components_public_comments_js__WEBPACK_IMPORTED_MODULE_9__.publicComments)();
  (0,_components_scroll_snap_button_js__WEBPACK_IMPORTED_MODULE_10__.scrollSnapButton)();
  (0,_components_stats_counter_js__WEBPACK_IMPORTED_MODULE_12__.statsCounter)();
  (0,_components_tabs_js__WEBPACK_IMPORTED_MODULE_13__.tabs)();
  (0,_components_video_lightbox_js__WEBPACK_IMPORTED_MODULE_14__.videoLightbox)();
});
})();

/******/ })()
;
//# sourceMappingURL=theme.js.map