(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/web-vitals/base.js":
/*!*****************************************!*\
  !*** ./node_modules/web-vitals/base.js ***!
  \*****************************************/
/*! exports provided: getCLS, getFCP, getFID, getLCP, getTTFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/web-vitals.base.js */ "./node_modules/web-vitals/dist/web-vitals.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__["getCLS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__["getFCP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__["getFID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__["getLCP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return _dist_web_vitals_base_js__WEBPACK_IMPORTED_MODULE_0__["getTTFB"]; });

// Creates the `web-vitals/base` import in node-based bundlers.
// This will not be needed when export maps are widely supported.



/***/ }),

/***/ "./node_modules/web-vitals/dist/web-vitals.base.js":
/*!*********************************************************!*\
  !*** ./node_modules/web-vitals/dist/web-vitals.base.js ***!
  \*********************************************************/
/*! exports provided: getCLS, getFCP, getFID, getLCP, getTTFB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return v; });
var t=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},e=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},n=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},i=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},a="function"==typeof WeakSet?new WeakSet:new Set,r=function(t,e,n){var i;return function(){e.value>=0&&(n||a.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},o=function(a,o){var u,c=t("CLS",0),s=function(t){t.hadRecentInput||(c.value+=t.value,c.entries.push(t),u())},f=e("layout-shift",s);f&&(u=r(a,c,o),n((function(){f.takeRecords().map(s),u()})),i((function(){c=t("CLS",0),u=r(a,c,o)})))},u=-1,c=function(){n((function(t){var e=t.timeStamp;u=e}),!0)},s=function(){return u<0&&((u=self.webVitals.firstHiddenTime)===1/0&&c(),i((function(){setTimeout((function(){u="hidden"===document.visibilityState?0:1/0,c()}),0)}))),{get timeStamp(){return u}}},f=function(n,o){var u,c=s(),f=t("FCP"),d=function(t){"first-contentful-paint"===t.name&&(v&&v.disconnect(),t.startTime<c.timeStamp&&(f.value=t.startTime,f.entries.push(t),a.add(f),u()))},m=performance.getEntriesByName("first-contentful-paint")[0],v=m?null:e("paint",d);(m||v)&&(u=r(n,f,o),m&&d(m),i((function(e){f=t("FCP"),u=r(n,f,o),requestAnimationFrame((function(){requestAnimationFrame((function(){f.value=performance.now()-e.timeStamp,a.add(f),u()}))}))})))},d=function(o,u){var c,f=s(),d=t("FID"),m=function(t){t.startTime<f.timeStamp&&(d.value=t.processingStart-t.startTime,d.entries.push(t),a.add(d),c())},v=e("first-input",m);c=r(o,d,u),v&&n((function(){v.takeRecords().map(m),v.disconnect()}),!0),v||window.webVitals.firstInputPolyfill(m),i((function(){d=t("FID"),c=r(o,d,u),window.webVitals.resetFirstInputPolyfill(),window.webVitals.firstInputPolyfill(m)}))},m=function(o,u){var c,f=s(),d=t("LCP"),m=function(t){var e=t.startTime;e<f.timeStamp&&(d.value=e,d.entries.push(t)),c()},v=e("largest-contentful-paint",m);if(v){c=r(o,d,u);var p=function(){a.has(d)||(v.takeRecords().map(m),v.disconnect(),a.add(d),c())};["keydown","click"].forEach((function(t){addEventListener(t,p,{once:!0,capture:!0})})),n(p,!0),i((function(e){d=t("LCP"),c=r(o,d,u),requestAnimationFrame((function(){requestAnimationFrame((function(){d.value=performance.now()-e.timeStamp,a.add(d),c()}))}))}))}},v=function(e){var n,i=t("TTFB");n=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(i.value=i.delta=t.responseStart,i.value<0)return;i.entries=[t],e(i)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)};


/***/ })

}]);
//# sourceMappingURL=0.js.map