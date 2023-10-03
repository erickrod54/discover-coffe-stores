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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findRecordByFilter\": () => (/* binding */ findRecordByFilter),\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.14 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Adding 'findRecordByFilter' that will be use \r\n *        to finf by 'id' in multiple places\r\n * \r\n * Note: this code will invoke to 'find' and to 'create' a coffee \r\n * store\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    return {\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\nconst findRecordByFilter = async (id)=>{\n    const findingCoffeeStoreRecords = await table.select({\n        filterByFormula: `id=\"${id}\"`\n    }).firstPage();\n    return getMinifiedRecords(findingCoffeeStoreRecords);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFZQSxJQUFJRSxJQUFJLEdBQUcsSUFBSUYsUUFBUSxDQUFDO0lBQUNHLE1BQU0sRUFBRUM7Q0FBOEIsQ0FBQyxDQUFDRjtBQUVqRSxNQUFNTSxLQUFLLEdBQUdOLElBQUksQ0FBQyxlQUFlLENBQUM7QUFFbkMsTUFBTU8saUJBQWlCLEdBQUcsQ0FBQ0MsTUFBTSxHQUFLO0lBQ2xDO1FBQ0ksR0FBR0EsTUFBTSxDQUFDQyxNQUFNO0tBQ25CO0FBQ0wsQ0FBQztBQUVELE1BQU1DLGtCQUFrQjtJQUNwQixPQUFPQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDSixNQUFNLEdBQUtEO0FBQ25DLENBQUM7QUFFRCxNQUFNTSxrQkFBa0IsR0FBRyxPQUFPQyxFQUFFO0lBRWhDLE1BQU1DLHlCQUF5QjtRQUMzQkU7S0FDSCxDQUFDLENBQUNDLFNBQVMsRUFBRTtJQUdWO0FBQ1IsQ0FBQztBQUVELFNBQVFaLEtBQUssRUFBRUksa0JBQWtCLEVBQUVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjE0IC0gIGFpcnRhYmxlIGpzXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gQWRkaW5nICdmaW5kUmVjb3JkQnlGaWx0ZXInIHRoYXQgd2lsbCBiZSB1c2UgXHJcbiAqICAgICAgICB0byBmaW5mIGJ5ICdpZCcgaW4gbXVsdGlwbGUgcGxhY2VzXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGlzIGNvZGUgd2lsbCBpbnZva2UgdG8gJ2ZpbmQnIGFuZCB0byAnY3JlYXRlJyBhIGNvZmZlZSBcclxuICogc3RvcmVcclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5jb25zdCBmaW5kUmVjb3JkQnlGaWx0ZXIgPSBhc3luYyAoaWQgKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyA9IGF3YWl0IHRhYmxlLnNlbGVjdCh7XHJcbiAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgaWQ9XCIke2lkfVwiYFxyXG4gICAgfSkuZmlyc3RQYWdlKCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGdldE1pbmlmaWVkUmVjb3JkcyhmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzKVxyXG59XHJcblxyXG5leHBvcnQge3RhYmxlLCBnZXRNaW5pZmllZFJlY29yZHMsIGZpbmRSZWNvcmRCeUZpbHRlciB9Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfS0VZIiwidGFibGUiLCJnZXRNaW5pZmllZFJlY29yZCIsInJlY29yZCIsImZpZWxkcyIsImdldE1pbmlmaWVkUmVjb3JkcyIsInJlY29yZHMiLCJtYXAiLCJmaW5kUmVjb3JkQnlGaWx0ZXIiLCJpZCIsImZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJmaXJzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/favouriteCoffeStoresById.js":
/*!***********************************************!*\
  !*** ./pages/api/favouriteCoffeStoresById.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n/**\r\n * Discover-coffee-stores - version 3.17 -  favouriteCoffeStoresById\r\n * - Fetaures:\r\n * \r\n *    --> Destructuring 'id' from the body\r\n * \r\n *    --> Put ( updating ) to get the 'id'\r\n * \r\n * Note: This fix will verify the id before creating or finding\r\n * a coffee store\r\n */ const favouriteCoffeStoresById = async (req, res)=>{\n    if (req.method === \"PUT\") {\n        try {\n            const { id  } = req.body;\n            if (id) {\n                const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.findRecordByFilter)(id);\n                if (records.length !== 0) {\n                    res.json(records);\n                } else {\n                    res.json({\n                        message: \"Coffee Store Id doesn't exist\",\n                        id\n                    });\n                }\n            } else {\n                res.status(400);\n                res.json({\n                    message: \"Id is missing\"\n                });\n            }\n        } catch (error) {\n            res.status(500);\n            res.json({\n                message: \"Error upvoting coffee store\",\n                error\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favouriteCoffeStoresById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBQ3hEO0lBY0ksSUFBSUUsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBRXRCLElBQUk7O1lBR0EsSUFBSUMsRUFBRSxFQUFFOztnQkFHSixJQUFJRSxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O2dCQUUxQixPQUFLOzt3QkFDVUUsT0FBTyxFQUFFO3dCQUFpQ0wsRUFBRTs7Z0JBQzNELENBQUM7WUFFTCxPQUFLO2dCQUNERixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2ZSLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUU7aUJBQWdCLENBQUM7WUFDekMsQ0FBQztRQUdMLEVBQUUsT0FBT0UsS0FBSyxFQUFFO1lBQ1pULEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUc7WUFDZFIsR0FBRyxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDO2dCQUF3Q0U7YUFBTSxDQUFDO1FBQzlELENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL3BhZ2VzL2FwaS9mYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQuanM/ZjU1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kUmVjb3JkQnlGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vbGliL2FpcnRhYmxlXCI7XHJcbi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjE3IC0gIGZhdm91cml0ZUNvZmZlU3RvcmVzQnlJZFxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IERlc3RydWN0dXJpbmcgJ2lkJyBmcm9tIHRoZSBib2R5XHJcbiAqIFxyXG4gKiAgICAtLT4gUHV0ICggdXBkYXRpbmcgKSB0byBnZXQgdGhlICdpZCdcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgZml4IHdpbGwgdmVyaWZ5IHRoZSBpZCBiZWZvcmUgY3JlYXRpbmcgb3IgZmluZGluZ1xyXG4gKiBhIGNvZmZlZSBzdG9yZVxyXG4gKi9cclxuXHJcbmNvbnN0IGZhdm91cml0ZUNvZmZlU3RvcmVzQnlJZCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZmluZFJlY29yZEJ5RmlsdGVyKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24ocmVjb3JkcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJDb2ZmZWUgU3RvcmUgSWQgZG9lc24ndCBleGlzdFwiLCBpZH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJJZCBpcyBtaXNzaW5nXCJ9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogXCJFcnJvciB1cHZvdGluZyBjb2ZmZWUgc3RvcmVcIiwgZXJyb3J9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkOyJdLCJuYW1lcyI6WyJmaW5kUmVjb3JkQnlGaWx0ZXIiLCJmYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZCIsImJvZHkiLCJyZWNvcmRzIiwibGVuZ3RoIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/favouriteCoffeStoresById.js\n");

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