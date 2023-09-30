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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.03 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Refactoring 'airtable' code in a reusable recurrent function\r\n * \r\n * Note: this code will invoke to 'find' and to 'create' a coffee \r\n * store\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    return {\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQVdBLElBQUlFLElBQUksR0FBRyxJQUFJRixRQUFRLENBQUM7SUFBQ0csTUFBTSxFQUFFQztDQUE4QixDQUFDLENBQUNGO0FBRWpFLE1BQU1NLEtBQUssR0FBR04sSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUVuQztJQUNJLE9BQU07UUFDRjtLQUNIO0FBQ0wsQ0FBQztBQUVELE1BQU1VLGtCQUFrQixHQUFHLENBQUNDLE9BQU8sR0FBSztJQUNwQyxPQUFPQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDSixNQUFNLEdBQUtEO0FBQ25DLENBQUM7QUFFRCxTQUFRRCxLQUFLLEVBQUVJLGtCQUFrQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjAzIC0gIGFpcnRhYmxlIGpzXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gUmVmYWN0b3JpbmcgJ2FpcnRhYmxlJyBjb2RlIGluIGEgcmV1c2FibGUgcmVjdXJyZW50IGZ1bmN0aW9uXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGlzIGNvZGUgd2lsbCBpbnZva2UgdG8gJ2ZpbmQnIGFuZCB0byAnY3JlYXRlJyBhIGNvZmZlZSBcclxuICogc3RvcmVcclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5leHBvcnQge3RhYmxlLCBnZXRNaW5pZmllZFJlY29yZHMgfSJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiZ2V0TWluaWZpZWRSZWNvcmQiLCJyZWNvcmQiLCJmaWVsZHMiLCJnZXRNaW5pZmllZFJlY29yZHMiLCJyZWNvcmRzIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/getCoffeStoresById.js":
/*!*****************************************!*\
  !*** ./pages/api/getCoffeStoresById.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n/**\r\n * Discover-coffee-stores - version 3.12 -  getCoffeeStoreById\r\n * - Fetaures:\r\n * \r\n *    --> Testing API without the 'id'\r\n * \r\n * Note: the test is for 'res.status(400)' that \r\n * is part od the 'id' flow\r\n */ const getCoffeeStoreById = async (req, res)=>{\n    const { id  } = req.query;\n    try {\n        if (id) {\n            const findingCoffeeStoreRecords = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table.select({\n                filterByFormula: `id=\"${id}\"`\n            }).firstPage();\n            console.log({\n                findingCoffeeStoreRecords\n            });\n            if (findingCoffeeStoreRecords.length !== 0) {\n                const records = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getMinifiedRecords)(findingCoffeeStoreRecords);\n                res.json(records);\n            } else {\n                res.json({\n                    message: `id could not be found`\n                });\n            }\n        } else {\n            res.status(400);\n            res.json({\n                message: \"Id is missing\"\n            });\n        }\n    } catch (error) {\n        res.status(500);\n        res.json({\n            message: \"Something went wrong\",\n            error\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoreById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStEO0FBRS9EO0lBV0ksTUFBTSxFQUFFSyxFQUFFLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRXhCLElBQUk7O1lBR0ksTUFBTUM7O2FBRUwsQ0FBQyxDQUFDRyxTQUFTLEVBQUU7WUFFZEMsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0JBQUVMLHlCQUF5QjthQUFFLENBQUM7O2dCQUd0QztnQkFDQUgsR0FBRyxDQUFDVyxJQUFJLENBQUNELE9BQU8sQ0FBQztZQUNyQixPQUFLO2dCQUNEVixHQUFHLENBQUNXLElBQUksQ0FBQztvQkFBRUM7aUJBQWlDLENBQUM7WUFDakQsQ0FBQztRQUVMLE9BQUs7WUFDRFosR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEJiLEdBQUcsQ0FBQ1csSUFBSSxDQUFDO2dCQUFFQzthQUF5QixDQUFDO1FBQ3pDLENBQUM7SUFFTCxFQUFFLE9BQU9FLEtBQUs7UUFDVmQsR0FBRyxDQUFDYTtRQUNKYixHQUFHLENBQUNXLElBQUk7WUFBR0MsT0FBTyxFQUFFO1lBQXdCRSxLQUFLO1NBQUUsQ0FBQztJQUN4RCxDQUFDO0FBQ0wsQ0FBQztBQUVELGVBQWVoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUlkLmpzPzAwZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TWluaWZpZWRSZWNvcmRzLCB0YWJsZSB9IGZyb20gXCIuLi8uLi9saWIvYWlydGFibGVcIjtcclxuXHJcbi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjEyIC0gIGdldENvZmZlZVN0b3JlQnlJZFxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IFRlc3RpbmcgQVBJIHdpdGhvdXQgdGhlICdpZCdcclxuICogXHJcbiAqIE5vdGU6IHRoZSB0ZXN0IGlzIGZvciAncmVzLnN0YXR1cyg0MDApJyB0aGF0IFxyXG4gKiBpcyBwYXJ0IG9kIHRoZSAnaWQnIGZsb3dcclxuICovXHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZUJ5SWQgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyA9IGF3YWl0IHRhYmxlLnNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGBpZD1cIiR7aWR9XCJgXHJcbiAgICAgICAgICAgIH0pLmZpcnN0UGFnZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgfSlcclxuXHJcbiAgICAgICAgICAgIGlmIChmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IGdldE1pbmlmaWVkUmVjb3JkcyhmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24ocmVjb3JkcylcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IGBpZCBjb3VsZCBub3QgYmUgZm91bmRgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiSWQgaXMgbWlzc2luZ1wifSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKVxyXG4gICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyb3IgfSlcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvZmZlZVN0b3JlQnlJZDsiXSwibmFtZXMiOlsiZ2V0TWluaWZpZWRSZWNvcmRzIiwidGFibGUiLCJnZXRDb2ZmZWVTdG9yZUJ5SWQiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJyZWNvcmRzIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeStoresById.js\n");

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