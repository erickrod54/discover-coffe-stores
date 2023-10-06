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
exports.id = "pages/api/getCoffeeStoreById";
exports.ids = ["pages/api/getCoffeeStoreById"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findRecordByFilter\": () => (/* binding */ findRecordByFilter),\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 4.06 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Clearing logs\r\n * \r\n * Note: once sent on 'postman', the 'record' in order \r\n * to set the 'recordId' \r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    //console.log({ record })\n    return {\n        recordId: record.id,\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\nconst findRecordByFilter = async (id)=>{\n    const findingCoffeeStoreRecords = await table.select({\n        filterByFormula: `id=\"${id}\"`\n    }).firstPage();\n    return getMinifiedRecords(findingCoffeeStoreRecords);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFXQSxJQUFJRSxJQUFJLEdBQUcsSUFBSUYsUUFBUSxDQUFDO0lBQUNHLE1BQU0sRUFBRUM7Q0FBOEIsQ0FBQyxDQUFDRjtBQUVqRSxNQUFNTSxLQUFLLEdBQUdOLElBQUksQ0FBQztBQUVuQjtJQUNJLHlCQUF5QjtJQUN6QixPQUFNO1FBQ0ZTLFFBQVEsRUFBRUQsQ0FBQUEsbUJBQU9FLENBQUU7UUFDbkIsR0FBR0YsTUFBTSxDQUFDRyxNQUFNO0tBQ25CO0FBQ0wsQ0FBQztBQUVELE1BQU1DLGtCQUFrQixHQUFHLENBQUNDLE9BQU87SUFDL0IsT0FBT0EsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ04sTUFBTSxHQUFLRDtBQUNuQyxDQUFDO0FBRUQsTUFBTVE7SUFFRixNQUFNQztRQUNGRSxlQUFlO0tBQ2xCLENBQUM7O0FBSU4sQ0FBQztBQUVELFNBQVFaLEtBQUssRUFBRU0sa0JBQWtCLEVBQUVHLGtCQUFrQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiA0LjA2IC0gIGFpcnRhYmxlIGpzXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gQ2xlYXJpbmcgbG9nc1xyXG4gKiBcclxuICogTm90ZTogb25jZSBzZW50IG9uICdwb3N0bWFuJywgdGhlICdyZWNvcmQnIGluIG9yZGVyIFxyXG4gKiB0byBzZXQgdGhlICdyZWNvcmRJZCcgXHJcbiAqL1xyXG5cclxudmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxudmFyIGJhc2UgPSBuZXcgQWlydGFibGUoe2FwaUtleTogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWSB9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfS0VZICk7XHJcblxyXG5jb25zdCB0YWJsZSA9IGJhc2UoJ2NvZmZlZS1zdG9yZXMnKTtcclxuXHJcbmNvbnN0IGdldE1pbmlmaWVkUmVjb3JkID0gKHJlY29yZCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyh7IHJlY29yZCB9KVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHJlY29yZElkOiByZWNvcmQuaWQsXHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5jb25zdCBmaW5kUmVjb3JkQnlGaWx0ZXIgPSBhc3luYyAoaWQgKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyA9IGF3YWl0IHRhYmxlLnNlbGVjdCh7XHJcbiAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgaWQ9XCIke2lkfVwiYFxyXG4gICAgfSkuZmlyc3RQYWdlKCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGdldE1pbmlmaWVkUmVjb3JkcyhmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzKVxyXG59XHJcblxyXG5leHBvcnQge3RhYmxlLCBnZXRNaW5pZmllZFJlY29yZHMsIGZpbmRSZWNvcmRCeUZpbHRlciB9Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfS0VZIiwidGFibGUiLCJnZXRNaW5pZmllZFJlY29yZCIsInJlY29yZCIsInJlY29yZElkIiwiaWQiLCJmaWVsZHMiLCJnZXRNaW5pZmllZFJlY29yZHMiLCJyZWNvcmRzIiwibWFwIiwiZmluZFJlY29yZEJ5RmlsdGVyIiwiZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/getCoffeeStoreById.js":
/*!*****************************************!*\
  !*** ./pages/api/getCoffeeStoreById.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n/**\r\n * Discover-coffee-stores - version 4.03 -  getCoffeeStoreById\r\n * - Fetaures:\r\n * \r\n *    --> Fixing '404' error\r\n * \r\n * Note: to solve this issue i had to test the serveless function\r\n * without any content as initially was tested\r\n * \r\n *      res/json({ message: 'hello there'})\r\n * \r\n * by doing this and getting back the original code the API \r\n * response change and retrieve the coffeeStore\r\n */ const getCoffeeStoreById = async (req, res)=>{\n    const { id  } = req.query;\n    //console.log('the id is  ===>', id)\n    try {\n        if (id) {\n            const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.findRecordByFilter)(id);\n            if (records.length !== 0) {\n                res.json(records);\n            } else {\n                res.json({\n                    message: `id could not be found`\n                });\n            }\n        } else {\n            res.status(400);\n            res.json({\n                message: \"Id is missing\"\n            });\n        }\n    } catch (error) {\n        res.status(500);\n        res.json({\n            message: \"Something went wrong\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVlU3RvcmVCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBR3hEO0lBZ0JJLE1BQU0sRUFBRUksRUFBRSxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUN4QjtJQUVBO1FBQ0ksSUFBSUQsRUFBRSxFQUFFOztZQUlKLElBQUlFLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRztnQkFDdkJKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDRixPQUFPLENBQUM7O2dCQUdqQkgsR0FBRyxDQUFDSyxJQUFJLENBQUM7O2lCQUFtQyxDQUFDO1lBQ2pELENBQUM7UUFFTCxPQUFLO1lBQ0RMLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCUCxHQUFHLENBQUNLLElBQUksQ0FBQzs7YUFBMkIsQ0FBQztRQUN6QyxDQUFDO0lBRUwsRUFBRSxPQUFPRyxLQUFLLEVBQUU7UUFDWlIsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2ZQLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRTtZQUF3QkUsS0FBSztTQUFFLENBQUM7SUFDeEQsQ0FBQztBQUNMLENBQUM7QUFFRCxlQUFlViIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvZ2V0Q29mZmVlU3RvcmVCeUlkLmpzP2UyNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZFJlY29yZEJ5RmlsdGVyIH0gZnJvbSBcIi4uLy4uL2xpYi9haXJ0YWJsZVwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiA0LjAzIC0gIGdldENvZmZlZVN0b3JlQnlJZFxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IEZpeGluZyAnNDA0JyBlcnJvclxyXG4gKiBcclxuICogTm90ZTogdG8gc29sdmUgdGhpcyBpc3N1ZSBpIGhhZCB0byB0ZXN0IHRoZSBzZXJ2ZWxlc3MgZnVuY3Rpb25cclxuICogd2l0aG91dCBhbnkgY29udGVudCBhcyBpbml0aWFsbHkgd2FzIHRlc3RlZFxyXG4gKiBcclxuICogICAgICByZXMvanNvbih7IG1lc3NhZ2U6ICdoZWxsbyB0aGVyZSd9KVxyXG4gKiBcclxuICogYnkgZG9pbmcgdGhpcyBhbmQgZ2V0dGluZyBiYWNrIHRoZSBvcmlnaW5hbCBjb2RlIHRoZSBBUEkgXHJcbiAqIHJlc3BvbnNlIGNoYW5nZSBhbmQgcmV0cmlldmUgdGhlIGNvZmZlZVN0b3JlXHJcbiAqL1xyXG5cclxuY29uc3QgZ2V0Q29mZmVlU3RvcmVCeUlkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCd0aGUgaWQgaXMgID09PT4nLCBpZClcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZpbmRSZWNvcmRCeUZpbHRlcihpZClcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCAhPT0gMCApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHJlY29yZHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogYGlkIGNvdWxkIG5vdCBiZSBmb3VuZGB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJJZCBpcyBtaXNzaW5nXCJ9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApXHJcbiAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnJvciB9KVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29mZmVlU3RvcmVCeUlkOyJdLCJuYW1lcyI6WyJmaW5kUmVjb3JkQnlGaWx0ZXIiLCJnZXRDb2ZmZWVTdG9yZUJ5SWQiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwicmVjb3JkcyIsImxlbmd0aCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeeStoreById.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCoffeeStoreById.js"));
module.exports = __webpack_exports__;

})();