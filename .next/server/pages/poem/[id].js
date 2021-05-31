/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/poem/[id]";
exports.ids = ["pages/poem/[id]"];
exports.modules = {

/***/ "./pages/poem/[id].tsx":
/*!*****************************!*\
  !*** ./pages/poem/[id].tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/effy.zhang/Documents/Gen2-UI/pages/poem/[id].tsx\";\n\n\nconst Card = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-icons_fi_index_esm_js\"), __webpack_require__.e(\"components_Card_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Card */ \"./components/Card.tsx\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Card */ \"./components/Card.tsx\")],\n    modules: [\"poem/[id].tsx -> \" + `../../components/Card`]\n  }\n});\n\n\n\nconst fetcher = async url => {\n  const res = await fetch(url);\n\n  if (!res.ok) {\n    throw Error(\"Yo that's Not OK!!!\");\n  }\n\n  const data = await res.json();\n  return data;\n};\n\nconst PoemData = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    id\n  } = router.query;\n  const result = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/poem/${id}`, fetcher);\n  const data = result.data;\n  const error = result.error;\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {\n      status: \"error\",\n      children: [\"Loading failed: \", error.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {\n      status: \"info\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n    props: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst PoemPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PoemData, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HZW4yLVVJLy4vcGFnZXMvcG9lbS9baWRdLnRzeD80OTIwIl0sIm5hbWVzIjpbIkNhcmQiLCJkeW5hbWljIiwiZmV0Y2hlciIsInVybCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiUG9lbURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicmVzdWx0IiwidXNlU1dSIiwiZXJyb3IiLCJtZXNzYWdlIiwiUG9lbVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sK1BBQVA7QUFBQTtBQUFBLHdDQUFlLG9EQUFmO0FBQUEsb0NBQWUsdUJBQWY7QUFBQTtBQUFBLEVBQXBCO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQyxPQUFPLEdBQUcsTUFBT0MsR0FBUCxJQUF1QjtBQUNyQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQXZCOztBQUNBLE1BQUksQ0FBQ0MsR0FBRyxDQUFDRSxFQUFULEVBQWE7QUFDWCxVQUFNQyxLQUFLLENBQUMscUJBQUQsQ0FBWDtBQUNEOztBQUNELFFBQU1DLElBQVUsR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUosRUFBekI7QUFDQSxTQUFPRCxJQUFQO0FBQ0QsQ0FQRDs7QUFTQSxNQUFNRSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDBDQUFNLENBQUUsYUFBWUgsRUFBRyxFQUFqQixFQUFvQlgsT0FBcEIsQ0FBckI7QUFDQSxRQUFNTSxJQUFVLEdBQUdPLE1BQU0sQ0FBQ1AsSUFBMUI7QUFDQSxRQUFNUyxLQUFZLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBNUI7O0FBRUEsTUFBSUEsS0FBSixFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUMsT0FBZDtBQUFBLHFDQUF1Q0EsS0FBSyxDQUFDQyxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNWLElBQUwsRUFBVztBQUNULHdCQUFPLDhEQUFDLG1EQUFEO0FBQU8sWUFBTSxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFDRCxzQkFBTyw4REFBQyxJQUFEO0FBQU0sU0FBSyxFQUFFQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBZkQ7O0FBaUJBLE1BQU1XLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLHNCQUFPLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJQSwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BvZW0vW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgQ2FyZCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KGAuLi8uLi9jb21wb25lbnRzL0NhcmRgKSk7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHBvZW0gZnJvbSBcIi4uL2FwaS9wb2VtL1tpZF1cIjtcbnR5cGUgRGF0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcG9lbTogc3RyaW5nO1xufTtcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIllvIHRoYXQncyBOb3QgT0shISFcIik7XG4gIH1cbiAgY29uc3QgZGF0YTogRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgUG9lbURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHJlc3VsdCA9IHVzZVNXUihgL2FwaS9wb2VtLyR7aWR9YCwgZmV0Y2hlcik7XG4gIGNvbnN0IGRhdGE6IERhdGEgPSByZXN1bHQuZGF0YTtcbiAgY29uc3QgZXJyb3I6IEVycm9yID0gcmVzdWx0LmVycm9yO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8QWxlcnQgc3RhdHVzPVwiZXJyb3JcIj5Mb2FkaW5nIGZhaWxlZDoge2Vycm9yLm1lc3NhZ2V9PC9BbGVydD47XG4gIH1cblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHN0YXR1cz1cImluZm9cIj5Mb2FkaW5nLi4uPC9BbGVydD47XG4gIH1cbiAgcmV0dXJuIDxDYXJkIHByb3BzPXtkYXRhfSAvPjtcbn07XG5cbmNvbnN0IFBvZW1QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPFBvZW1EYXRhIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9lbVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/poem/[id].tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/poem/[id].tsx"));
module.exports = __webpack_exports__;

})();