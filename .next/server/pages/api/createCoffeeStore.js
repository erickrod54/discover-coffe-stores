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

/***/ "(api)/./lib/airtable.js":
/*!*************************!*\
  !*** ./lib/airtable.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.03 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Refactoring 'airtable' code in a reusable recurrent function\r\n * \r\n * Note: this code will invoke to 'find' and to 'create' a coffee \r\n * store\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    return {\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQVdBLElBQUlFLElBQUksR0FBRyxJQUFJRixRQUFRLENBQUM7SUFBQ0csTUFBTSxFQUFFQztDQUE4QixDQUFDLENBQUNGO0FBRWpFLE1BQU1NLEtBQUssR0FBR04sSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUVuQztJQUNJLE9BQU07UUFDRjtLQUNIO0FBQ0wsQ0FBQztBQUVELE1BQU1VLGtCQUFrQixHQUFHLENBQUNDLE9BQU8sR0FBSztJQUNwQyxPQUFPQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDSixNQUFNLEdBQUtEO0FBQ25DLENBQUM7QUFFRCxTQUFRRCxLQUFLLEVBQUVJLGtCQUFrQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL2xpYi9haXJ0YWJsZS5qcz9jZDllIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAzLjAzIC0gIGFpcnRhYmxlIGpzXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gUmVmYWN0b3JpbmcgJ2FpcnRhYmxlJyBjb2RlIGluIGEgcmV1c2FibGUgcmVjdXJyZW50IGZ1bmN0aW9uXHJcbiAqIFxyXG4gKiBOb3RlOiB0aGlzIGNvZGUgd2lsbCBpbnZva2UgdG8gJ2ZpbmQnIGFuZCB0byAnY3JlYXRlJyBhIGNvZmZlZSBcclxuICogc3RvcmVcclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5leHBvcnQge3RhYmxlLCBnZXRNaW5pZmllZFJlY29yZHMgfSJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiZ2V0TWluaWZpZWRSZWNvcmQiLCJyZWNvcmQiLCJmaWVsZHMiLCJnZXRNaW5pZmllZFJlY29yZHMiLCJyZWNvcmRzIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/createCoffeeStore.js":
/*!****************************************!*\
  !*** ./pages/api/createCoffeeStore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n/**\r\n * Discover-coffee-stores - version 3.05 -  coffee-store-page\r\n * - Fetaures:\r\n * \r\n *    --> Adding double quote to \"${id}\" so can be taken in\r\n *         the JSON object in single store. \r\n * \r\n * Note: This fix will verify the id before creating or finding\r\n * a coffee store\r\n */ \nconsole.log({\n    table: _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table\n});\nconst createCoffeeStore = async (req, res)=>{\n    console.log({\n        table: _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table\n    });\n    if (req.method === \"POST\") {\n        //find a record\n        const { id , name , address , dma , vote , imgUrl  } = req.body;\n        try {\n            if (id) {\n                const findingCoffeeStoreRecords = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table.select({\n                    filterByFormula: `id=\"${id}\"`\n                }).firstPage();\n                console.log({\n                    findingCoffeeStoreRecords\n                });\n                if (findingCoffeeStoreRecords.length !== 0) {\n                    const records = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getMinifiedRecords)(findingCoffeeStoreRecords);\n                    res.json(records);\n                } else {\n                    if (name) {\n                        //create a record\n                        const createRecords = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table.create([\n                            {\n                                fields: {\n                                    id,\n                                    name,\n                                    address,\n                                    dma,\n                                    vote,\n                                    imgUrl\n                                }\n                            }\n                        ]);\n                        const records1 = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getMinifiedRecords)(createRecords);\n                        res.json({\n                            records: records1\n                        });\n                    } else {\n                        res.status(400);\n                        res.json({\n                            message: \"Id or name is missing\"\n                        });\n                    }\n                }\n            } else {\n                res.status(400);\n                res.json({\n                    message: \"Id is missing\"\n                });\n            }\n        } catch (err) {\n            console.log(\"Error creating or finding store\", err);\n            res.status(500);\n            res.json({\n                message: \"Error creating or finding store\",\n                err\n            });\n        }\n    }\n    ;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQWFBRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUFFRixLQUFLO0NBQUUsQ0FBQztBQUV0QixNQUFNRyxpQkFBaUIsR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMxQ0osT0FBTyxDQUFDQyxHQUFHLENBQUM7O0tBQVMsQ0FBQztJQUV0QixJQUFJRSxHQUFHLENBQUNFLE1BQU07SUFFSztRQUVmO1FBR0E7O2dCQUlRLE1BQU1ROzs7O29CQUlRQTtpQkFBMkIsQ0FBQztnQkFFMUMsSUFBSUEseUJBQXlCLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUU7O29CQUV4Q2I7Z0JBQ0osT0FBSztvQkFDRCxJQUFJRyxJQUFJLEVBQUU7d0JBQ047d0JBQ0k7NEJBQ0k7O29DQUVRRCxFQUFFO29DQUNGQyxpRUFBSTtvQ0FDSkM7OztvQ0FHQUc7aUNBQ0g7NkJBQ0o7eUJBQ0osQ0FBQzt3QkFDRixNQUFNTyxRQUFPO3dCQUNiZCxHQUFHLENBQUNlLElBQUksQ0FBQzs0QkFBQ0QsT0FBTyxFQUFQQTt5QkFBUSxDQUFDO29CQUN2QixPQUFLO3dCQUNEZCxHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDO3dCQUNmbkIsR0FBRyxDQUFDZSxJQUFJLENBQUM7NEJBQUVLO3lCQUFpQyxDQUFDO29CQUNqRCxDQUFDO2dCQUNMLENBQUM7WUFDVCxPQUFLO2dCQUNEcEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDO2dCQUNYbkIsR0FBRyxDQUFDZSxJQUFJLENBQUM7b0JBQUVLLE9BQU8sRUFBRTtpQkFBaUIsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDRCxFQUFFLE9BQU9DLEdBQUcsRUFBQztZQUNUekIsT0FBTyxDQUFDQztZQUNSRyxHQUFHLENBQUNtQjtZQUNKbkIsR0FBRyxDQUFDZSxJQUFJO2dCQUFHSyxPQUFPLEVBQUU7Z0JBQW1DQyxHQUFHO2FBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDTCxDQUFDOztBQUNELENBQUM7QUFHVCxlQUFldkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vcGFnZXMvYXBpL2NyZWF0ZUNvZmZlZVN0b3JlLmpzP2IzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDMuMDUgLSAgY29mZmVlLXN0b3JlLXBhZ2VcclxuICogLSBGZXRhdXJlczpcclxuICogXHJcbiAqICAgIC0tPiBBZGRpbmcgZG91YmxlIHF1b3RlIHRvIFwiJHtpZH1cIiBzbyBjYW4gYmUgdGFrZW4gaW5cclxuICogICAgICAgICB0aGUgSlNPTiBvYmplY3QgaW4gc2luZ2xlIHN0b3JlLiBcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgZml4IHdpbGwgdmVyaWZ5IHRoZSBpZCBiZWZvcmUgY3JlYXRpbmcgb3IgZmluZGluZ1xyXG4gKiBhIGNvZmZlZSBzdG9yZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGdldE1pbmlmaWVkUmVjb3JkcywgdGFibGUgfSBmcm9tIFwiLi4vLi4vbGliL2FpcnRhYmxlXCI7XHJcblxyXG5jb25zb2xlLmxvZyh7IHRhYmxlIH0pXHJcblxyXG5jb25zdCBjcmVhdGVDb2ZmZWVTdG9yZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coeyB0YWJsZSB9KVxyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG5cclxuICAgICAgICAvL2ZpbmQgYSByZWNvcmRcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGFkZHJlc3MsIGRtYSwgdm90ZSwgaW1nVXJsIH0gPSByZXEuYm9keTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzID0gYXdhaXQgdGFibGUuc2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGBpZD1cIiR7aWR9XCJgXHJcbiAgICAgICAgICAgICAgICB9KS5maXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmluZGluZ0NvZmZlZVN0b3JlUmVjb3Jkcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRzID0gZ2V0TWluaWZpZWRSZWNvcmRzKGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24ocmVjb3JkcylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY3JlYXRlIGEgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVSZWNvcmRzID0gYXdhaXQgdGFibGUuY3JlYXRlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRtYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkcyA9IGdldE1pbmlmaWVkUmVjb3JkcyhjcmVhdGVSZWNvcmRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oe3JlY29yZHN9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiAnSWQgb3IgbmFtZSBpcyBtaXNzaW5nJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApO1xyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiBcIklkIGlzIG1pc3NpbmdcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGNyZWF0aW5nIG9yIGZpbmRpbmcgc3RvcmUnLCBlcnIgKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGNyZWF0aW5nIG9yIGZpbmRpbmcgc3RvcmUnLCBlcnJ9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29mZmVlU3RvcmU7Il0sIm5hbWVzIjpbImdldE1pbmlmaWVkUmVjb3JkcyIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvZmZlZVN0b3JlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJuYW1lIiwiYWRkcmVzcyIsImRtYSIsInZvdGUiLCJpbWdVcmwiLCJib2R5IiwiZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSIsImxlbmd0aCIsInJlY29yZHMiLCJqc29uIiwiY3JlYXRlUmVjb3JkcyIsImNyZWF0ZSIsImZpZWxkcyIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCoffeeStore.js\n");

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