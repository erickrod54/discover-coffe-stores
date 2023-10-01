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

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ "(api)/./lib/airtable.js":
/*!*************************!*\
  !*** ./lib/airtable.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findRecordByFilter\": () => (/* binding */ findRecordByFilter),\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.03 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Refactoring 'airtable' code in a reusable recurrent function\r\n * \r\n * Note: this code will invoke to 'find' and to 'create' a coffee \r\n * store\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    return {\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\nconst findRecordByFilter = async (id)=>{\n    const findingCoffeeStoreRecords = await table.select({\n        filterByFormula: `id=\"${id}\"`\n    }).firstPage();\n    return getMinifiedRecords(findingCoffeeStoreRecords);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFXQSxJQUFJRSxJQUFJLEdBQUcsSUFBSUYsUUFBUSxDQUFDO0lBQUNHLE1BQU0sRUFBRUM7Q0FBOEIsQ0FBQyxDQUFDRjtBQUVqRSxNQUFNTSxLQUFLLEdBQUdOLElBQUksQ0FBQyxlQUFlLENBQUM7QUFFbkM7SUFDSSxPQUFNO1FBQ0Y7S0FDSDtBQUNMLENBQUM7QUFFRCxNQUFNVSxrQkFBa0IsR0FBRyxDQUFDQyxPQUFPLEdBQUs7SUFDcEMsT0FBT0EsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0osTUFBTSxHQUFLRDtBQUNuQyxDQUFDO0FBRUQsTUFBTU0sa0JBQWtCLEdBQUcsT0FBT0MsRUFBRTtJQUVoQyxNQUFNQztRQUNGRSxlQUFlO0tBQ2xCLENBQUM7O0FBSU4sQ0FBQztBQUVELFNBQVFYLEtBQUssRUFBRUksa0JBQWtCLEVBQUVHLGtCQUFrQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjAzIC0gIGFpcnRhYmxlIGpzXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gUmVmYWN0b3JpbmcgJ2FpcnRhYmxlJyBjb2RlIGluIGEgcmV1c2FibGUgcmVjdXJyZW50IGZ1bmN0aW9uXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGlzIGNvZGUgd2lsbCBpbnZva2UgdG8gJ2ZpbmQnIGFuZCB0byAnY3JlYXRlJyBhIGNvZmZlZSBcclxuICogc3RvcmVcclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5jb25zdCBmaW5kUmVjb3JkQnlGaWx0ZXIgPSBhc3luYyAoaWQsICkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5zZWxlY3Qoe1xyXG4gICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYGlkPVwiJHtpZH1cImBcclxuICAgIH0pLmZpcnN0UGFnZSgpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBnZXRNaW5pZmllZFJlY29yZHMoZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcylcclxufVxyXG5cclxuZXhwb3J0IHt0YWJsZSwgZ2V0TWluaWZpZWRSZWNvcmRzLCBmaW5kUmVjb3JkQnlGaWx0ZXIgfSJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiZ2V0TWluaWZpZWRSZWNvcmQiLCJyZWNvcmQiLCJmaWVsZHMiLCJnZXRNaW5pZmllZFJlY29yZHMiLCJyZWNvcmRzIiwibWFwIiwiZmluZFJlY29yZEJ5RmlsdGVyIiwiaWQiLCJmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzIiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwiZmlyc3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/getCoffeStoresById.js":
/*!*****************************************!*\
  !*** ./pages/api/getCoffeStoresById.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n/**\r\n * Discover-coffee-stores - version 3.13 -  getCoffeeStoreById\r\n * - Fetaures:\r\n * \r\n *    --> Implementing 'findingCoffeeStoreRecords' code \r\n *        previously made in 'createCoffeeStore'\r\n * \r\n *    --> Testing API retrieving the whole record by 'id'\r\n * \r\n *    --> As 'findingCoffeeStoreRecords' is 'await' the serveless \r\n *        function becomes in 'async'\r\n * \r\n * Note: An 'Id' from the airtable is taken to test it in postman\r\n */ const getCoffeeStoreById = async (req, res)=>{\n    const { id  } = req.query;\n    try {\n        if (id) {\n            const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.findRecordByFilter)(id);\n            if (records.length !== 0) {\n                res.json(records);\n            } else {\n                res.json({\n                    message: `id could not be found`\n                });\n            }\n        } else {\n            res.status(400);\n            res.json({\n                message: \"Id is missing\"\n            });\n        }\n    } catch (error) {\n        res.status(500);\n        res.json({\n            message: \"Something went wrong\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1GO0FBR25GO0lBZ0JJLE1BQU0sRUFBRU0sRUFBRSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUV4QixJQUFJOztZQUdJLE1BQU1DLE9BQU8sR0FBRyxNQUFNUixrQkFBa0IsQ0FBQ00sRUFBRSxDQUFDO1lBRTVDLElBQUlFLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRzs7WUFFM0IsT0FDSTs7b0JBQ1dFLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUFDLENBQUM7O1FBR3JELE9BQUs7WUFDRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEJQLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDOzthQUEyQixDQUFDO1FBQ3pDLENBQUM7SUFFTCxFQUFFLE9BQU9HLEtBQUssRUFBRTtRQUNaUixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZlAsR0FBRyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFO1lBQXdCRSxLQUFLO1NBQUUsQ0FBQztJQUN4RCxDQUFDO0FBQ0wsQ0FBQztBQUVELGVBQWVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL3BhZ2VzL2FwaS9nZXRDb2ZmZVN0b3Jlc0J5SWQuanM/MDBmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kUmVjb3JkQnlGaWx0ZXIsIGdldE1pbmlmaWVkUmVjb3JkcywgdGFibGUgfSBmcm9tIFwiLi4vLi4vbGliL2FpcnRhYmxlXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDMuMTMgLSAgZ2V0Q29mZmVlU3RvcmVCeUlkXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gSW1wbGVtZW50aW5nICdmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzJyBjb2RlIFxyXG4gKiAgICAgICAgcHJldmlvdXNseSBtYWRlIGluICdjcmVhdGVDb2ZmZWVTdG9yZSdcclxuICogXHJcbiAqICAgIC0tPiBUZXN0aW5nIEFQSSByZXRyaWV2aW5nIHRoZSB3aG9sZSByZWNvcmQgYnkgJ2lkJ1xyXG4gKiBcclxuICogICAgLS0+IEFzICdmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzJyBpcyAnYXdhaXQnIHRoZSBzZXJ2ZWxlc3MgXHJcbiAqICAgICAgICBmdW5jdGlvbiBiZWNvbWVzIGluICdhc3luYydcclxuICogXHJcbiAqIE5vdGU6IEFuICdJZCcgZnJvbSB0aGUgYWlydGFibGUgaXMgdGFrZW4gdG8gdGVzdCBpdCBpbiBwb3N0bWFuXHJcbiAqL1xyXG5cclxuY29uc3QgZ2V0Q29mZmVlU3RvcmVCeUlkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmaW5kUmVjb3JkQnlGaWx0ZXIoaWQpXHJcblxyXG4gICAgICAgICAgICBpZiAocmVjb3Jkcy5sZW5ndGggIT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZWNvcmRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IGBpZCBjb3VsZCBub3QgYmUgZm91bmRgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiSWQgaXMgbWlzc2luZ1wifSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyb3IgfSlcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvZmZlZVN0b3JlQnlJZDsiXSwibmFtZXMiOlsiZmluZFJlY29yZEJ5RmlsdGVyIiwiZ2V0TWluaWZpZWRSZWNvcmRzIiwidGFibGUiLCJnZXRDb2ZmZWVTdG9yZUJ5SWQiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwicmVjb3JkcyIsImxlbmd0aCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeStoresById.js\n");

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