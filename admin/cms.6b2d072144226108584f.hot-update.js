webpackHotUpdate("cms",{

/***/ "./src/pages/contact/form.js":
/*!***********************************!*\
  !*** ./src/pages/contact/form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/gatsby/node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/gatsby/node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/gatsby/node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout.js");







var _jsxFileName = "/Users/princiya/workspace/gatsby-starter-netlify-cms/src/pages/contact/form.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
}

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, _this$setState[e.target.name] = e.target.value, _this$setState));
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = e.target;
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encode(Object.assign({
          'form-name': form.getAttribute('name')
        }, _this.state))
      }).then(function () {
        return Object(gatsby_link__WEBPACK_IMPORTED_MODULE_8__["navigate"])(form.getAttribute('action'));
      }).catch(function (error) {
        return alert(error);
      });
    };

    _this.state = {
      isValidated: false
    };
    return _this;
  }

  var _proto = Index.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
      className: "section",
      style: {
        width: '80%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
      src: "https://docs.google.com/forms/d/e/1FAIpQLScFLTRzNjHWV4PBQ6DNzMuY0EE4v1BmWPCayPY0MH4mCE2y8w/viewform?embedded=true",
      width: "100%",
      height: "400",
      frameborder: "0",
      marginheight: "0",
      marginwidth: "0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "Loading\u2026"))) // <section className="section" style={{width: '80%'}}>
    //   <div className="container">
    //     <div className="content">
    //       <form
    //         name="contact"
    //         method="post"
    //         action="/contact/thanks/"
    //         data-netlify="true"
    //         data-netlify-honeypot="bot-field"
    //         onSubmit={this.handleSubmit}
    //       >
    //         {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
    //         <input type="hidden" name="form-name" value="contact" />
    //         <div hidden>
    //           <label>
    //             Don’t fill this out:{' '}
    //             <input name="bot-field" onChange={this.handleChange} />
    //           </label>
    //         </div>
    //         <div className="field">
    //           <label className="label" htmlFor={'name'}>
    //             Name
    //           </label>
    //           <div className="control">
    //             <input
    //               className="input"
    //               type={'text'}
    //               name={'name'}
    //               onChange={this.handleChange}
    //               id={'name'}
    //               required={true}
    //               placeholder="Name"
    //             />
    //           </div>
    //         </div>
    //         <div className="field">
    //           <label className="label" htmlFor={'email'}>
    //             Email
    //           </label>
    //           <div className="control">
    //             <input
    //               className="input"
    //               type={'email'}
    //               name={'email'}
    //               onChange={this.handleChange}
    //               id={'email'}
    //               required={true}
    //               placeholder="Email Address"
    //             />
    //           </div>
    //         </div>
    //         <div className="field">
    //           <label className="label" htmlFor={'message'}>
    //             Message
    //           </label>
    //           <div className="control">
    //             <textarea
    //               className="textarea"
    //               name={'message'}
    //               onChange={this.handleChange}
    //               id={'message'}
    //               required={true}
    //             />
    //           </div>
    //         </div>
    //         <div className="field">
    //           <button className="button is-rounded bca-button-primary" type="submit">
    //             Submit
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    ;
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(encode, "encode", "/Users/princiya/workspace/gatsby-starter-netlify-cms/src/pages/contact/form.js");
  reactHotLoader.register(Index, "Index", "/Users/princiya/workspace/gatsby-starter-netlify-cms/src/pages/contact/form.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.6b2d072144226108584f.hot-update.js.map