/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/poem/[id]",{

/***/ "./pages/poem/[id].tsx":
/*!*****************************!*\
  !*** ./pages/poem/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/effy.zhang/Documents/Gen2-UI/pages/poem/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Card = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-icons_fi_index_esm_js\"), __webpack_require__.e(\"components_Card_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Card */ \"./components/Card.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/Card */ \"./components/Card.tsx\")];\n    },\n    modules: [\"poem/[id].tsx -> \" + \"../../components/Card\"]\n  }\n});\n_c2 = Card;\n\n\n\nvar fetcher = /*#__PURE__*/function () {\n  var _ref = (0,_Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n    var res, data;\n    return _Users_effy_zhang_Documents_Gen2_UI_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            res = _context.sent;\n\n            if (res.ok) {\n              _context.next = 5;\n              break;\n            }\n\n            throw Error(\"Yo that's Not OK!!!\");\n\n          case 5:\n            _context.next = 7;\n            return res.json();\n\n          case 7:\n            data = _context.sent;\n            return _context.abrupt(\"return\", data);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetcher(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar PoemData = function PoemData() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n  var id = router.query.id;\n  var result = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)(\"/api/poem/\".concat(id), fetcher);\n  var data = result.data;\n  var error = result.error;\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n      status: \"error\",\n      children: [\"Loading failed: \", error.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }, _this);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Alert, {\n      status: \"info\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, _this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n    data: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(PoemData, \"aCaabkY9bep/elB+3W/u27hVO+0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, swr__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c3 = PoemData;\n\nvar PoemPage = function PoemPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PoemData, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, _this);\n};\n\n_c4 = PoemPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemPage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Card$dynamic\");\n$RefreshReg$(_c2, \"Card\");\n$RefreshReg$(_c3, \"PoemData\");\n$RefreshReg$(_c4, \"PoemPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9lbS9baWRdLnRzeD80OTIwIl0sIm5hbWVzIjpbIkNhcmQiLCJkeW5hbWljIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiUG9lbURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmVzdWx0IiwidXNlU1dSIiwiZXJyb3IiLCJtZXNzYWdlIiwiUG9lbVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtQQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBQztBQUFEO0FBQUE7QUFBQTtBQUFBLEVBQXBCO01BQU1ELEk7QUFDTjtBQUNBOztBQU1BLElBQU1FLE9BQU87QUFBQSwyVEFBRyxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNJQyxLQUFLLENBQUNELEdBQUQsQ0FEVDs7QUFBQTtBQUNSRSxlQURROztBQUFBLGdCQUVUQSxHQUFHLENBQUNDLEVBRks7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBR05DLEtBQUssQ0FBQyxxQkFBRCxDQUhDOztBQUFBO0FBQUE7QUFBQSxtQkFLV0YsR0FBRyxDQUFDRyxJQUFKLEVBTFg7O0FBQUE7QUFLUkMsZ0JBTFE7QUFBQSw2Q0FNUEEsSUFOTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQUCxPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7O0FBU0EsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHFCLE1BRWJDLEVBRmEsR0FFTkYsTUFBTSxDQUFDRyxLQUZELENBRWJELEVBRmE7QUFHckIsTUFBTUUsTUFBTSxHQUFHQyw0Q0FBTSxxQkFBY0gsRUFBZCxHQUFvQlgsT0FBcEIsQ0FBckI7QUFDQSxNQUFNTyxJQUFVLEdBQUdNLE1BQU0sQ0FBQ04sSUFBMUI7QUFDQSxNQUFNUSxLQUFZLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBNUI7O0FBRUEsTUFBSUEsS0FBSixFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUMsT0FBZDtBQUFBLHFDQUF1Q0EsS0FBSyxDQUFDQyxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ1QsSUFBTCxFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBQ0Qsc0JBQU8sOERBQUMsSUFBRDtBQUFNLFFBQUksRUFBRUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQWZEOztHQUFNQyxRO1VBQ1dFLGtELEVBRUFJLHdDOzs7TUFIWE4sUTs7QUFpQk4sSUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixzQkFBTyw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O01BQU1BLFE7QUFJTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BvZW0vW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgQ2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KGAuLi8uLi9jb21wb25lbnRzL0NhcmRgKSk7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHBvZW0gZnJvbSBcIi4uL2FwaS9wb2VtL1tpZF1cIjtcbmV4cG9ydCB0eXBlIERhdGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHBvZW06IHN0cmluZztcbn07XG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJZbyB0aGF0J3MgTm90IE9LISEhXCIpO1xuICB9XG4gIGNvbnN0IGRhdGE6IERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IFBvZW1EYXRhID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCByZXN1bHQgPSB1c2VTV1IoYC9hcGkvcG9lbS8ke2lkfWAsIGZldGNoZXIpO1xuICBjb25zdCBkYXRhOiBEYXRhID0gcmVzdWx0LmRhdGE7XG4gIGNvbnN0IGVycm9yOiBFcnJvciA9IHJlc3VsdC5lcnJvcjtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+TG9hZGluZyBmYWlsZWQ6IHtlcnJvci5tZXNzYWdlfTwvQWxlcnQ+O1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxBbGVydCBzdGF0dXM9XCJpbmZvXCI+TG9hZGluZy4uLjwvQWxlcnQ+O1xuICB9XG4gIHJldHVybiA8Q2FyZCBkYXRhPXtkYXRhfSAvPjtcbn07XG5cbmNvbnN0IFBvZW1QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPFBvZW1EYXRhIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9lbVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/poem/[id].tsx\n");

/***/ })

});