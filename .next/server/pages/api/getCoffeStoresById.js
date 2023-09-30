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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.11 -  getCoffeeStoreById\r\n * - Fetaures:\r\n * \r\n *    --> Building 'getCoffeeStoreById'.\r\n * \r\n *    --> Testing 'id' using 'postman'  \r\n * \r\n * Note: the test consists in a sample id from the 'airtable'\r\n * store data as:\r\n * \r\n *      '543e744b498e88f9b19fccfc'\r\n * \r\n * then i build this 'file' and the 'api name' as:\r\n * \r\n *  http://localhost:3000/api/getCoffeStoresById?id=543e744b498e88f9b19fccfc\r\n * \r\n * then i send it and i should visualize in 'postman' the message:\r\n * \r\n *  {\r\n * \r\n *  \"message\": \"id is created 543e744b498e88f9b19fccfc\"\r\n *   \r\n *  }\r\n */ const getCoffeeStoreById = (req, res)=>{\n    const { id  } = req.query;\n    try {\n        if (id) {\n            res.json({\n                message: `id is created ${id}`\n            });\n        } else {\n            res.status(400);\n            res.json({\n                message: \"Id is missing\"\n            });\n        }\n    } catch (error) {\n        res.status(500);\n        res.json({\n            message: \"Something went wrong\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQTJCSSxNQUFNLEVBQUVHLEVBQUUsR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFeEIsSUFBSTs7WUFFSUYsR0FBRyxDQUFDRyxJQUFJLENBQUM7O2FBQWlDLENBQUM7O1lBRTNDSCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQkwsR0FBRyxDQUFDRzs7YUFBZ0MsQ0FBQzs7SUFHN0MsRUFBRSxPQUFPRyxLQUFLLEVBQUU7O1FBRVpOLEdBQUcsQ0FBQ0csSUFBSSxDQUFDOztZQUFtQ0csS0FBSzs7SUFDckQsQ0FBQztBQUNMLENBQUM7QUFFRCxlQUFlUixrQkFBa0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzPzAwZjYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDMuMTEgLSAgZ2V0Q29mZmVlU3RvcmVCeUlkXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gQnVpbGRpbmcgJ2dldENvZmZlZVN0b3JlQnlJZCcuXHJcbiAqIFxyXG4gKiAgICAtLT4gVGVzdGluZyAnaWQnIHVzaW5nICdwb3N0bWFuJyAgXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGUgdGVzdCBjb25zaXN0cyBpbiBhIHNhbXBsZSBpZCBmcm9tIHRoZSAnYWlydGFibGUnXHJcbiAqIHN0b3JlIGRhdGEgYXM6XHJcbiAqIFxyXG4gKiAgICAgICc1NDNlNzQ0YjQ5OGU4OGY5YjE5ZmNjZmMnXHJcbiAqIFxyXG4gKiB0aGVuIGkgYnVpbGQgdGhpcyAnZmlsZScgYW5kIHRoZSAnYXBpIG5hbWUnIGFzOlxyXG4gKiBcclxuICogIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkP2lkPTU0M2U3NDRiNDk4ZTg4ZjliMTlmY2NmY1xyXG4gKiBcclxuICogdGhlbiBpIHNlbmQgaXQgYW5kIGkgc2hvdWxkIHZpc3VhbGl6ZSBpbiAncG9zdG1hbicgdGhlIG1lc3NhZ2U6XHJcbiAqIFxyXG4gKiAge1xyXG4gKiBcclxuICogIFwibWVzc2FnZVwiOiBcImlkIGlzIGNyZWF0ZWQgNTQzZTc0NGI0OThlODhmOWIxOWZjY2ZjXCJcclxuICogICBcclxuICogIH1cclxuICovXHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZUJ5SWQgPSAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IGBpZCBpcyBjcmVhdGVkICR7aWR9YH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKTtcclxuICAgICAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiBcIklkIGlzIG1pc3NpbmdcIn0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMClcclxuICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZycsIGVycm9yIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb2ZmZWVTdG9yZUJ5SWQ7Il0sIm5hbWVzIjpbImdldENvZmZlZVN0b3JlQnlJZCIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeStoresById.js\n");

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