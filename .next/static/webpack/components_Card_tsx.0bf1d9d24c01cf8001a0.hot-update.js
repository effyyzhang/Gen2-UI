/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Card_tsx",{

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/effy.zhang/Documents/Gen2-UI/components/Card.tsx\",\n    _this = undefined;\n\n\n\n\nvar Card = function Card(_ref) {\n  var data = _ref.data;\n  var lines = data.poem.split(\", \");\n  console.log(lines);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        flexDirection: \"column\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n          bg: \"tomato\",\n          padding: \"1rem\",\n          w: \"360px\",\n          h: \"640px\",\n          borderRadius: \"xl\",\n          overflow: \"hidden\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n            size: \"lg\",\n            children: [lines[0], \",\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), lines[1], \",\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), lines[2]]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            children: data.id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPlus, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 29\n          }, _this),\n          m: \"lg\",\n          size: \"lg\",\n          borderRadius: \"xl\",\n          children: \"Generate new\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLnRzeD9jOTYwIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhIiwibGluZXMiLCJwb2VtIiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFDN0MsTUFBSUMsS0FBZSxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUMsS0FBVixDQUFnQixJQUFoQixDQUF0QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUEsMkJBQ0UsOERBQUMsb0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLHFCQUFhLEVBQUMsUUFBcEI7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUNFLFlBQUUsRUFBQyxRQURMO0FBRUUsaUJBQU8sRUFBQyxNQUZWO0FBR0UsV0FBQyxFQUFDLE9BSEo7QUFJRSxXQUFDLEVBQUMsT0FKSjtBQUtFLHNCQUFZLEVBQUMsSUFMZjtBQU1FLGtCQUFRLEVBQUMsUUFOWDtBQUFBLGtDQVFFLDhEQUFDLHFEQUFEO0FBQVMsZ0JBQUksRUFBQyxJQUFkO0FBQUEsdUJBQ0dBLEtBQUssQ0FBQyxDQUFELENBRFIsb0JBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQUdHQSxLQUFLLENBQUMsQ0FBRCxDQUhSLG9CQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsRUFLR0EsS0FBSyxDQUFDLENBQUQsQ0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFlRSw4REFBQyxrREFBRDtBQUFBLHNCQUFPRCxJQUFJLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFrQkUsOERBQUMsb0RBQUQ7QUFBUSxrQkFBUSxlQUFFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWxCO0FBQThCLFdBQUMsRUFBQyxJQUFoQztBQUFxQyxjQUFJLEVBQUMsSUFBMUM7QUFBK0Msc0JBQVksRUFBQyxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQS9CRDs7S0FBTVAsSTtBQWlDTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaW5rLFxuICBGbGV4LFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgR3JpZCxcbiAgVGV4dCxcbiAgU2ltcGxlR3JpZCxcbiAgSGVhZGluZyxcbiAgQWxlcnQsXG4gIEFzcGVjdFJhdGlvLFxuICBDZW50ZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGaVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IFBvZW1EYXRhIH0gZnJvbSBcIi4uL2xpYi90eXBlc1wiO1xuXG5jb25zdCBDYXJkID0gKHsgZGF0YSB9OiB7IGRhdGE6IFBvZW1EYXRhIH0pID0+IHtcbiAgdmFyIGxpbmVzOiBTdHJpbmdbXSA9IGRhdGEucG9lbS5zcGxpdChcIiwgXCIpO1xuICBjb25zb2xlLmxvZyhsaW5lcyk7XG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxDZW50ZXI+XG4gICAgICAgIDxGbGV4IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgYmc9XCJ0b21hdG9cIlxuICAgICAgICAgICAgcGFkZGluZz1cIjFyZW1cIlxuICAgICAgICAgICAgdz1cIjM2MHB4XCJcbiAgICAgICAgICAgIGg9XCI2NDBweFwiXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJ4bFwiXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgIHtsaW5lc1swXX0sXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7bGluZXNbMV19LFxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2xpbmVzWzJdfVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQ+e2RhdGEuaWR9PC9UZXh0PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8QnV0dG9uIGxlZnRJY29uPXs8RmlQbHVzIC8+fSBtPVwibGdcIiBzaXplPVwibGdcIiBib3JkZXJSYWRpdXM9XCJ4bFwiPlxuICAgICAgICAgICAgR2VuZXJhdGUgbmV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ2VudGVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ })

});