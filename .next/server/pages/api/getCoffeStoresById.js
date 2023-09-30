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
exports.id = "pages/api/getCoffeStoresById";
exports.ids = ["pages/api/getCoffeStoresById"];
exports.modules = {

/***/ "(api)/./pages/api/getCoffeStoresById.js":
/*!*****************************************!*\
  !*** ./pages/api/getCoffeStoresById.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCoffeeStoreById = (req, res)=>{\n    const { id  } = req.query;\n    try {\n        res.json({\n            message: `id is created ${id}`\n        });\n    } catch (error) {\n        res.status(500);\n        res.json({\n            message: \"Something went wrong\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNyQyxNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFeEIsSUFBSTtRQUNBRixHQUFHLENBQUNHLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUVILEVBQUUsQ0FBQyxDQUFDO1NBQUMsQ0FBQztJQUUvQyxFQUFFLE9BQU9JLEtBQUssRUFBRTtRQUNaTCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZk4sR0FBRyxDQUFDRyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLHNCQUFzQjtZQUFFQyxLQUFLO1NBQUUsQ0FBQztJQUN4RCxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlUCxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzPzAwZjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0Q29mZmVlU3RvcmVCeUlkID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IGBpZCBpcyBjcmVhdGVkICR7aWR9YH0pXHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyb3IgfSlcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvZmZlZVN0b3JlQnlJZDsiXSwibmFtZXMiOlsiZ2V0Q29mZmVlU3RvcmVCeUlkIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeStoresById.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCoffeStoresById.js"));
module.exports = __webpack_exports__;

})();