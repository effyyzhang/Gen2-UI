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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/effy.zhang/Documents/Gen2-UI/pages/poem/[id].tsx\";\n\n\nconst Card = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-icons_fi_index_esm_js\"), __webpack_require__.e(\"components_Card_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Card */ \"./components/Card.tsx\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../../components/Card */ \"./components/Card.tsx\")],\n    modules: [\"poem/[id].tsx -> \" + `../../components/Card`]\n  }\n});\n\n\n\nconst fetcher = async url => {\n  const res = await fetch(url);\n\n  if (!res.ok) {\n    throw Error(\"Yo that's Not OK!!!\");\n  }\n\n  const data = await res.json();\n  return data;\n};\n\nconst PoemComponent = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    id\n  } = router.query;\n  const result = swr__WEBPACK_IMPORTED_MODULE_3___default()(`/api/poem/${id}`, fetcher);\n  const data = result.data;\n  const error = result.error;\n\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {\n      status: \"error\",\n      children: [\"Loading failed: \", error.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {\n      status: \"info\",\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n    data: data\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst PoemPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PoemComponent, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HZW4yLVVJLy4vcGFnZXMvcG9lbS9baWRdLnRzeD80OTIwIl0sIm5hbWVzIjpbIkNhcmQiLCJkeW5hbWljIiwiZmV0Y2hlciIsInVybCIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiUG9lbUNvbXBvbmVudCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJyZXN1bHQiLCJ1c2VTV1IiLCJlcnJvciIsIm1lc3NhZ2UiLCJQb2VtUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxNQUFNQSxJQUFJLEdBQUdDLG1EQUFPLENBQUMsTUFBTSwrUEFBUDtBQUFBO0FBQUEsd0NBQWUsb0RBQWY7QUFBQSxvQ0FBZSx1QkFBZjtBQUFBO0FBQUEsRUFBcEI7QUFDQTtBQUNBOztBQUlBLE1BQU1DLE9BQU8sR0FBRyxNQUFPQyxHQUFQLElBQXVCO0FBQ3JDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBdkI7O0FBQ0EsTUFBSSxDQUFDQyxHQUFHLENBQUNFLEVBQVQsRUFBYTtBQUNYLFVBQU1DLEtBQUssQ0FBQyxxQkFBRCxDQUFYO0FBQ0Q7O0FBQ0QsUUFBTUMsSUFBYyxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssSUFBSixFQUE3QjtBQUNBLFNBQU9ELElBQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1FLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUF0QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsMENBQU0sQ0FBRSxhQUFZSCxFQUFHLEVBQWpCLEVBQW9CWCxPQUFwQixDQUFyQjtBQUNBLFFBQU1NLElBQWMsR0FBR08sTUFBTSxDQUFDUCxJQUE5QjtBQUNBLFFBQU1TLEtBQVksR0FBR0YsTUFBTSxDQUFDRSxLQUE1Qjs7QUFFQSxNQUFJQSxLQUFKLEVBQVc7QUFDVCx3QkFBTyw4REFBQyxtREFBRDtBQUFPLFlBQU0sRUFBQyxPQUFkO0FBQUEscUNBQXVDQSxLQUFLLENBQUNDLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ1YsSUFBTCxFQUFXO0FBQ1Qsd0JBQU8sOERBQUMsbURBQUQ7QUFBTyxZQUFNLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUNELHNCQUFPLDhEQUFDLElBQUQ7QUFBTSxRQUFJLEVBQUVBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsTUFBTVcsUUFBUSxHQUFHLE1BQU07QUFDckIsc0JBQU8sOERBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9lbS9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5jb25zdCBDYXJkID0gZHluYW1pYygoKSA9PiBpbXBvcnQoYC4uLy4uL2NvbXBvbmVudHMvQ2FyZGApKTtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgcG9lbSBmcm9tIFwiLi4vYXBpL3BvZW0vW2lkXVwiO1xuaW1wb3J0IHsgUG9lbURhdGEgfSBmcm9tIFwiLi4vLi4vbGliL3R5cGVzXCI7XG5cbmNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBFcnJvcihcIllvIHRoYXQncyBOb3QgT0shISFcIik7XG4gIH1cbiAgY29uc3QgZGF0YTogUG9lbURhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IFBvZW1Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHJlc3VsdCA9IHVzZVNXUihgL2FwaS9wb2VtLyR7aWR9YCwgZmV0Y2hlcik7XG4gIGNvbnN0IGRhdGE6IFBvZW1EYXRhID0gcmVzdWx0LmRhdGE7XG4gIGNvbnN0IGVycm9yOiBFcnJvciA9IHJlc3VsdC5lcnJvcjtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHN0YXR1cz1cImVycm9yXCI+TG9hZGluZyBmYWlsZWQ6IHtlcnJvci5tZXNzYWdlfTwvQWxlcnQ+O1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxBbGVydCBzdGF0dXM9XCJpbmZvXCI+TG9hZGluZy4uLjwvQWxlcnQ+O1xuICB9XG4gIHJldHVybiA8Q2FyZCBkYXRhPXtkYXRhfSAvPjtcbn07XG5cbmNvbnN0IFBvZW1QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPFBvZW1Db21wb25lbnQgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2VtUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/poem/[id].tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

/***/ }),

/***/ "gsap/MotionPathPlugin":
/*!****************************************!*\
  !*** external "gsap/MotionPathPlugin" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap/MotionPathPlugin");;

/***/ }),

/***/ "gsap/SplitText":
/*!*********************************!*\
  !*** external "gsap/SplitText" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap/SplitText");;

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