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
exports.id = "pages/api/createCoffeeStore";
exports.ids = ["pages/api/createCoffeeStore"];
exports.modules = {

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ "(api)/./pages/api/createCoffeeStore.js":
/*!****************************************!*\
  !*** ./pages/api/createCoffeeStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconsole.log({\n    table\n});\nconst createCoffeeStore = (req, res)=>{\n    res.json({\n        message: \"Hi there\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ2xDLElBQUlDLElBQUksR0FBRyxJQUFJRixRQUFRLENBQUM7SUFBQ0csTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0NBQUUsQ0FBQyxDQUFDSixJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxpQkFBaUIsQ0FBRTtBQUVyRyxNQUFNQyxLQUFLLEdBQUdOLElBQUksQ0FBQyxlQUFlLENBQUM7QUFFbkNPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUVGLEtBQUs7Q0FBRSxDQUFDO0FBRXRCLE1BQU1HLGlCQUFpQixHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ3BDQSxHQUFHLENBQUNDLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUsVUFBVTtLQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELGlFQUFlSixpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanM/YjM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc29sZS5sb2coeyB0YWJsZSB9KVxyXG5cclxuY29uc3QgY3JlYXRlQ29mZmVlU3RvcmUgPSAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJIaSB0aGVyZVwifSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvZmZlZVN0b3JlOyJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvZmZlZVN0b3JlIiwicmVxIiwicmVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCoffeeStore.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/createCoffeeStore.js"));
module.exports = __webpack_exports__;

})();