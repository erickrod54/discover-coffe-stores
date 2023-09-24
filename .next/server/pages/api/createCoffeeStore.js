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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 2.14 -  coffee-store-page\r\n * - Fetaures:\r\n * \r\n *    --> Authenticanting with the airtable API\r\n * \r\n *    --> Building table and Testing in it.\r\n * \r\n *    --> Building 'createCoffeeStore' and testing the API\r\n * \r\n * Note: table will be apppear in the console as it is back end \r\n * code, \r\n *      and \r\n * \"Hi there\" message will appear as result of the \r\n * api url tested in \"http://localhost:3000/api/createCoffeeStore\"\r\n * in the browser\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconsole.log({\n    table\n});\nconst createCoffeeStore = (req, res)=>{\n    console.log({\n        req\n    });\n    if (req.method === \"POST\") {\n        res.json({\n            message: \"Hi there\"\n        });\n    } else {\n        res.json({\n            message: \"method is GET\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBbUJBLElBQUlFLElBQUksR0FBRyxJQUFJRixRQUFRLENBQUM7SUFBQ0csTUFBTSxFQUFFQztDQUE4QixDQUFDLENBQUNGO0FBRWpFLE1BQU1NLEtBQUssR0FBR04sSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUVuQ087SUFBY0QsS0FBSztDQUFFLENBQUM7QUFFdEIsTUFBTUcsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDcENKO1FBQWNHLEdBQUc7S0FBRSxDQUFDO0lBQ3BCLElBQUlBLEdBQUcsQ0FBQ0U7UUFDSkQsR0FBRyxDQUFDRSxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLFVBQVU7U0FBQyxDQUFDLENBQUM7SUFDckMsT0FBTztRQUNISCxHQUFHLENBQUNFLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsZUFBZTtTQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0FBQ0wsQ0FBQztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL3BhZ2VzL2FwaS9jcmVhdGVDb2ZmZWVTdG9yZS5qcz9iMzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAyLjE0IC0gIGNvZmZlZS1zdG9yZS1wYWdlXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gQXV0aGVudGljYW50aW5nIHdpdGggdGhlIGFpcnRhYmxlIEFQSVxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nIHRhYmxlIGFuZCBUZXN0aW5nIGluIGl0LlxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nICdjcmVhdGVDb2ZmZWVTdG9yZScgYW5kIHRlc3RpbmcgdGhlIEFQSVxyXG4gKiBcclxuICogTm90ZTogdGFibGUgd2lsbCBiZSBhcHBwZWFyIGluIHRoZSBjb25zb2xlIGFzIGl0IGlzIGJhY2sgZW5kIFxyXG4gKiBjb2RlLCBcclxuICogICAgICBhbmQgXHJcbiAqIFwiSGkgdGhlcmVcIiBtZXNzYWdlIHdpbGwgYXBwZWFyIGFzIHJlc3VsdCBvZiB0aGUgXHJcbiAqIGFwaSB1cmwgdGVzdGVkIGluIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jcmVhdGVDb2ZmZWVTdG9yZVwiXHJcbiAqIGluIHRoZSBicm93c2VyXHJcbiAqL1xyXG5cclxudmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxudmFyIGJhc2UgPSBuZXcgQWlydGFibGUoe2FwaUtleTogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWSB9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfS0VZICk7XHJcblxyXG5jb25zdCB0YWJsZSA9IGJhc2UoJ2NvZmZlZS1zdG9yZXMnKTtcclxuXHJcbmNvbnNvbGUubG9nKHsgdGFibGUgfSlcclxuXHJcbmNvbnN0IGNyZWF0ZUNvZmZlZVN0b3JlID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh7IHJlcSB9KVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJIaSB0aGVyZVwifSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ21ldGhvZCBpcyBHRVQnfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb2ZmZWVTdG9yZTsiXSwibmFtZXMiOlsiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElfS0VZIiwiQUlSVEFCTEVfQkFTRV9LRVkiLCJ0YWJsZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDb2ZmZWVTdG9yZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCoffeeStore.js\n");

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