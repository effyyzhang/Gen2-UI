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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/effy.zhang/Documents/Gen2-UI/components/Card.tsx\",\n    _this = undefined;\n\n\n\n\nvar Card = function Card(_ref) {\n  var Props = _ref.props;\n  var lines = props.poem.split(\",\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n        flexDirection: \"column\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n          bg: \"tomato\",\n          padding: \"1rem\",\n          w: \"360px\",\n          h: \"640px\",\n          borderRadius: \"xl\",\n          overflow: \"hidden\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n            children: props.poem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            children: props.id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiPlus, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 29\n          }, _this),\n          size: \"lg\",\n          children: \"Generate new\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLnRzeD9jOTYwIl0sIm5hbWVzIjpbIkNhcmQiLCJQcm9wcyIsInByb3BzIiwibGluZXMiLCJwb2VtIiwic3BsaXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQWFBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFuQkMsS0FBbUI7QUFDakMsTUFBSUMsS0FBZSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUF0QjtBQUVBLHNCQUNFLDhEQUFDLGlEQUFEO0FBQUEsMkJBQ0UsOERBQUMsb0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLHFCQUFhLEVBQUMsUUFBcEI7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUNFLFlBQUUsRUFBQyxRQURMO0FBRUUsaUJBQU8sRUFBQyxNQUZWO0FBR0UsV0FBQyxFQUFDLE9BSEo7QUFJRSxXQUFDLEVBQUMsT0FKSjtBQUtFLHNCQUFZLEVBQUMsSUFMZjtBQU1FLGtCQUFRLEVBQUMsUUFOWDtBQUFBLGtDQVFFLDhEQUFDLHFEQUFEO0FBQUEsc0JBQVVILEtBQUssQ0FBQ0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQVNFLDhEQUFDLGtEQUFEO0FBQUEsc0JBQU9GLEtBQUssQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLG9EQUFEO0FBQVEsa0JBQVEsZUFBRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFsQjtBQUE4QixjQUFJLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQXpCRDs7S0FBTU4sSTtBQTJCTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaW5rLFxuICBGbGV4LFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgR3JpZCxcbiAgVGV4dCxcbiAgU2ltcGxlR3JpZCxcbiAgSGVhZGluZyxcbiAgQWxlcnQsXG4gIEFzcGVjdFJhdGlvLFxuICBDZW50ZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGaVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcG9lbTogU3RyaW5nO1xuICBpZDogU3RyaW5nO1xufTtcblxuY29uc3QgQ2FyZCA9ICh7IHByb3BzOiBQcm9wcyB9KSA9PiB7XG4gIHZhciBsaW5lczogU3RyaW5nW10gPSBwcm9wcy5wb2VtLnNwbGl0KFwiLFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8Q2VudGVyPlxuICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGJnPVwidG9tYXRvXCJcbiAgICAgICAgICAgIHBhZGRpbmc9XCIxcmVtXCJcbiAgICAgICAgICAgIHc9XCIzNjBweFwiXG4gICAgICAgICAgICBoPVwiNjQwcHhcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwieGxcIlxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nPntwcm9wcy5wb2VtfTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0Pntwcm9wcy5pZH08L1RleHQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCdXR0b24gbGVmdEljb249ezxGaVBsdXMgLz59IHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgR2VuZXJhdGUgbmV3XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ2VudGVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ })

});