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
exports.id = "pages/api/poem/[id]";
exports.ids = ["pages/api/poem/[id]"];
exports.modules = {

/***/ "./lib/poems.json":
/*!************************!*\
  !*** ./lib/poems.json ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"id":1,"poem":"summer rain, the last of the fireflies, go out.","address":"0xd6fcb38fd962d10903c2044c896613c44db501f6d81f3131754e972e9c85e780"},{"id":2,"poem":"summer twilight, a red maple leaf, on the windshield.","address":"0x1a4e7800dda5394b33505f486069145aa09296b4035fabf23975f4a707e980e9"},{"id":3,"poem":"Heavenly Father, in your grace I trust, keep my heart and soul.","address":"0x7f76073615f08812d4e221d86d5d4927d23ea06b01f817ce9097f5eb7a9c6dce"},{"id":4,"poem":"The little girl, was silent, still.","address":"0x6b7148f4703120668bf4cde07061a5936beadc728399124306aecfac7d8e6dab"}]');

/***/ }),

/***/ "./pages/api/poem/[id].ts":
/*!********************************!*\
  !*** ./pages/api/poem/[id].ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_poems_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/poems.json */ \"./lib/poems.json\");\n\n\nconst poem = (req, res) => {\n  const {\n    id\n  } = req.query;\n  const poemData = _lib_poems_json__WEBPACK_IMPORTED_MODULE_0__.find(x => String(x.id) === String(id));\n\n  if (poemData) {\n    res.status(200).json(poemData);\n  } else {\n    res.status(404).end();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (poem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HZW4yLVVJLy4vcGFnZXMvYXBpL3BvZW0vW2lkXS50cz83YTJjIl0sIm5hbWVzIjpbInBvZW0iLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwicG9lbURhdGEiLCJkYXRhIiwieCIsIlN0cmluZyIsInN0YXR1cyIsImpzb24iLCJlbmQiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBRUEsTUFBTUEsSUFBb0IsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QyxRQUFNO0FBQUVDO0FBQUYsTUFBU0YsR0FBRyxDQUFDRyxLQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsaURBQUEsQ0FBV0MsQ0FBRCxJQUFPQyxNQUFNLENBQUNELENBQUMsQ0FBQ0osRUFBSCxDQUFOLEtBQWlCSyxNQUFNLENBQUNMLEVBQUQsQ0FBeEMsQ0FBakI7O0FBRUEsTUFBSUUsUUFBSixFQUFjO0FBQ1pILE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTCxRQUFyQjtBQUNELEdBRkQsTUFFTztBQUNMSCxPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRSxHQUFoQjtBQUNEO0FBQ0YsQ0FURDs7QUFXQSwrREFBZVgsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb2VtL1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vLi4vbGliL3BvZW1zLmpzb25cIjtcblxuY29uc3QgcG9lbTogTmV4dEFwaUhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCBwb2VtRGF0YSA9IGRhdGEuZmluZCgoeCkgPT4gU3RyaW5nKHguaWQpID09PSBTdHJpbmcoaWQpKTtcblxuICBpZiAocG9lbURhdGEpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb2VtRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb2VtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/poem/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/poem/[id].ts"));
module.exports = __webpack_exports__;

})();