"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/favouriteCoffeStoresById";
exports.ids = ["pages/api/favouriteCoffeStoresById"];
exports.modules = {

/***/ "(api)/./pages/api/favouriteCoffeStoresById.js":
/*!***********************************************!*\
  !*** ./pages/api/favouriteCoffeStoresById.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.16 -  favouriteCoffeStoresById\r\n * - Fetaures:\r\n * \r\n *    --> Building 'favouriteCoffeStoresById' serveless function\r\n * \r\n *    --> Building the flow to only response when the method is\r\n *        \"PUT\"\r\n * \r\n * Note: This fix will verify the id before creating or finding\r\n * a coffee store\r\n */ const favouriteCoffeStoresById = (req, res)=>{\n    if (req.method === \"PUT\") {\n        const { id  } = req.body;\n        res.json({\n            message: \"this works\",\n            id\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favouriteCoffeStoresById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQWVJLElBQUlDLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN0QixNQUFNOztZQUNLSSxPQUFPLEVBQUUsWUFBWTs7U0FBSyxDQUFDO0lBQzFDLENBQUM7QUFDTCxDQUFDO0FBRUQsZUFBZVAsd0JBQXdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vcGFnZXMvYXBpL2Zhdm91cml0ZUNvZmZlU3RvcmVzQnlJZC5qcz9mNTViIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjE2IC0gIGZhdm91cml0ZUNvZmZlU3RvcmVzQnlJZFxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nICdmYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQnIHNlcnZlbGVzcyBmdW5jdGlvblxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nIHRoZSBmbG93IHRvIG9ubHkgcmVzcG9uc2Ugd2hlbiB0aGUgbWV0aG9kIGlzXHJcbiAqICAgICAgICBcIlBVVFwiXHJcbiAqIFxyXG4gKiBOb3RlOiBUaGlzIGZpeCB3aWxsIHZlcmlmeSB0aGUgaWQgYmVmb3JlIGNyZWF0aW5nIG9yIGZpbmRpbmdcclxuICogYSBjb2ZmZWUgc3RvcmVcclxuICovXHJcblxyXG5jb25zdCBmYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQgPSAocmVxLCByZXMpID0+IHtcclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJ0aGlzIHdvcmtzXCIsIGlkfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkOyJdLCJuYW1lcyI6WyJmYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZCIsImJvZHkiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/favouriteCoffeStoresById.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/favouriteCoffeStoresById.js"));
module.exports = __webpack_exports__;

})();