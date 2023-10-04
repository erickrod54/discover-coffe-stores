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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findRecordByFilter\": () => (/* binding */ findRecordByFilter),\n/* harmony export */   \"getMinifiedRecords\": () => (/* binding */ getMinifiedRecords),\n/* harmony export */   \"table\": () => (/* binding */ table)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 4.01 -  airtable js\r\n * - Fetaures:\r\n * \r\n *    --> Loging the 'record' to get 'recordId'\r\n * \r\n * Note: once sent on 'postman', the 'record' in order \r\n * to set the 'recordId' \r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconst getMinifiedRecord = (record)=>{\n    console.log({\n        record\n    });\n    return {\n        recordId: record.id,\n        ...record.fields\n    };\n};\nconst getMinifiedRecords = (records)=>{\n    return records.map((record)=>getMinifiedRecord(record));\n};\nconst findRecordByFilter = async (id)=>{\n    const findingCoffeeStoreRecords = await table.select({\n        filterByFormula: `id=\"${id}\"`\n    }).firstPage();\n    return getMinifiedRecords(findingCoffeeStoreRecords);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWlydGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFXQSxJQUFJRSxJQUFJLEdBQUcsSUFBSUYsUUFBUSxDQUFDO0lBQUNHLE1BQU0sRUFBRUM7Q0FBOEIsQ0FBQyxDQUFDRjtBQUVqRSxNQUFNTSxLQUFLLEdBQUdOLElBQUksQ0FBQyxlQUFlLENBQUM7QUFFbkM7SUFDSVMsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFBRUYsTUFBTTtLQUFFLENBQUM7SUFDdkIsT0FBTTtRQUNGRyxRQUFRLEVBQUVILE1BQU0sQ0FBQ0ksRUFBRTtRQUNuQixHQUFHSixNQUFNLENBQUNLLE1BQU07S0FDbkI7QUFDTCxDQUFDO0FBRUQsTUFBTUM7SUFDRixPQUFPQztBQUNYLENBQUM7QUFFRCxNQUFNRTtJQUVGLE1BQU1DO1FBQ0ZFLGVBQWU7S0FDbEIsQ0FBQzs7QUFJTixDQUFDO0FBRUQsU0FBUWQsS0FBSyxFQUFFUSxrQkFBa0IsRUFBRUcsa0JBQWtCLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vbGliL2FpcnRhYmxlLmpzP2NkOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDQuMDEgLSAgYWlydGFibGUganNcclxuICogLSBGZXRhdXJlczpcclxuICogXHJcbiAqICAgIC0tPiBMb2dpbmcgdGhlICdyZWNvcmQnIHRvIGdldCAncmVjb3JkSWQnXHJcbiAqIFxyXG4gKiBOb3RlOiBvbmNlIHNlbnQgb24gJ3Bvc3RtYW4nLCB0aGUgJ3JlY29yZCcgaW4gb3JkZXIgXHJcbiAqIHRvIHNldCB0aGUgJ3JlY29yZElkJyBcclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc3QgZ2V0TWluaWZpZWRSZWNvcmQgPSAocmVjb3JkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh7IHJlY29yZCB9KVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHJlY29yZElkOiByZWNvcmQuaWQsXHJcbiAgICAgICAgLi4ucmVjb3JkLmZpZWxkc1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRNaW5pZmllZFJlY29yZHMgPSAocmVjb3JkcykgPT4ge1xyXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGdldE1pbmlmaWVkUmVjb3JkKHJlY29yZCkpO1xyXG59XHJcblxyXG5jb25zdCBmaW5kUmVjb3JkQnlGaWx0ZXIgPSBhc3luYyAoaWQgKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyA9IGF3YWl0IHRhYmxlLnNlbGVjdCh7XHJcbiAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgaWQ9XCIke2lkfVwiYFxyXG4gICAgfSkuZmlyc3RQYWdlKCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGdldE1pbmlmaWVkUmVjb3JkcyhmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzKVxyXG59XHJcblxyXG5leHBvcnQge3RhYmxlLCBnZXRNaW5pZmllZFJlY29yZHMsIGZpbmRSZWNvcmRCeUZpbHRlciB9Il0sIm5hbWVzIjpbIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQUlSVEFCTEVfQVBJX0tFWSIsIkFJUlRBQkxFX0JBU0VfS0VZIiwidGFibGUiLCJnZXRNaW5pZmllZFJlY29yZCIsInJlY29yZCIsImNvbnNvbGUiLCJsb2ciLCJyZWNvcmRJZCIsImlkIiwiZmllbGRzIiwiZ2V0TWluaWZpZWRSZWNvcmRzIiwicmVjb3JkcyIsIm1hcCIsImZpbmRSZWNvcmRCeUZpbHRlciIsImZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJmaXJzdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/airtable.js\n");

/***/ }),

/***/ "(api)/./pages/api/favouriteCoffeStoresById.js":
/*!***********************************************!*\
  !*** ./pages/api/favouriteCoffeStoresById.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/airtable */ \"(api)/./lib/airtable.js\");\n\n/**\r\n * Discover-coffee-stores - version 4.02 -  favouriteCoffeStoresById\r\n * - Fetaures:\r\n * \r\n *    --> Retreiving the whole record with airtable record ID\r\n *       ( PUT method )   \r\n * \r\n *    --> Incrementing the 'vote' each time API get send ( PUT method ) . \r\n * \r\n * Note: This is been tested on 'postman' by hitting send with the API:\r\n * \r\n *  http://localhost:3000/api/favouriteCoffeStoresById?id\r\n * \r\n * and visualizing 'calculateVoting' in the terminal being incremented each time\r\n */ const favouriteCoffeStoresById = async (req, res)=>{\n    if (req.method === \"PUT\") {\n        try {\n            const { id  } = req.body;\n            if (id) {\n                const records = await (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.findRecordByFilter)(id);\n                if (records.length !== 0) {\n                    const record = records[0];\n                    const calculateVoting = parseInt(record.vote) + 1;\n                    console.log({\n                        calculateVoting\n                    });\n                    //update a Record\n                    const updateRecord = await _lib_airtable__WEBPACK_IMPORTED_MODULE_0__.table.update([\n                        {\n                            id: record.recordId,\n                            fields: {\n                                vote: calculateVoting\n                            }\n                        }\n                    ]);\n                    if (updateRecord) {\n                        const minifiedRecords = (0,_lib_airtable__WEBPACK_IMPORTED_MODULE_0__.getMinifiedRecords)(updateRecord);\n                        res.json(minifiedRecords);\n                    }\n                } else {\n                    res.json({\n                        message: \"Coffee Store Id doesn't exist\",\n                        id\n                    });\n                }\n            } else {\n                res.status(400);\n                res.json({\n                    message: \"Id is missing\"\n                });\n            }\n        } catch (error) {\n            res.status(500);\n            res.json({\n                message: \"Error upvoting coffee store\",\n                error\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favouriteCoffeStoresById);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1GO0FBRW5GO0lBa0JJLElBQUlJLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUV0QixJQUFJOztZQUdBLElBQUlDLEVBQUUsRUFBRTtnQkFDSixNQUFNRTs7b0JBSUYsTUFBTUUsTUFBTSxHQUFHRixPQUFPLENBQUMsQ0FBQyxDQUFDOztvQkFJekJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOztxQkFBbUIsQ0FBQzs7b0JBSWhDLE1BQU1DLFlBQVksR0FBRyxNQUFNZixLQUFLLENBQUNnQixNQUFNLENBQUM7d0JBQ3BDOzRCQUNJWCxFQUFFOztnQ0FFRU8sSUFBSTs7eUJBRVg7cUJBQ0osQ0FBQztvQkFFRixJQUFJRyxZQUFZLEVBQUU7d0JBQ2QsTUFBTUksZUFBZSxHQUFHcEIsa0JBQWtCLENBQUNnQjt3QkFDM0NaLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ0Q7b0JBQ2IsQ0FBQztnQkFFTCxPQUFLO29CQUNEaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDO3dCQUFFQyxPQUFPLEVBQUU7d0JBQWlDaEI7cUJBQUcsQ0FBQztnQkFDN0QsQ0FBQztZQUVMLE9BQUs7Z0JBQ0RGLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQztnQkFDWG5CLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztvQkFBRUM7aUJBQXlCLENBQUM7WUFDekMsQ0FBQztRQUdMLEVBQUUsT0FBT0UsS0FBSyxFQUFFO1lBQ1pwQixHQUFHLENBQUNtQjtZQUNKbkIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUU7Z0JBQStCRSxLQUFLO2FBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFRCxlQUFldEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vcGFnZXMvYXBpL2Zhdm91cml0ZUNvZmZlU3RvcmVzQnlJZC5qcz9mNTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbmRSZWNvcmRCeUZpbHRlciwgZ2V0TWluaWZpZWRSZWNvcmRzLCB0YWJsZSB9IGZyb20gXCIuLi8uLi9saWIvYWlydGFibGVcIjtcclxuXHJcbi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiA0LjAyIC0gIGZhdm91cml0ZUNvZmZlU3RvcmVzQnlJZFxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IFJldHJlaXZpbmcgdGhlIHdob2xlIHJlY29yZCB3aXRoIGFpcnRhYmxlIHJlY29yZCBJRFxyXG4gKiAgICAgICAoIFBVVCBtZXRob2QgKSAgIFxyXG4gKiBcclxuICogICAgLS0+IEluY3JlbWVudGluZyB0aGUgJ3ZvdGUnIGVhY2ggdGltZSBBUEkgZ2V0IHNlbmQgKCBQVVQgbWV0aG9kICkgLiBcclxuICogXHJcbiAqIE5vdGU6IFRoaXMgaXMgYmVlbiB0ZXN0ZWQgb24gJ3Bvc3RtYW4nIGJ5IGhpdHRpbmcgc2VuZCB3aXRoIHRoZSBBUEk6XHJcbiAqIFxyXG4gKiAgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9mYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQ/aWRcclxuICogXHJcbiAqIGFuZCB2aXN1YWxpemluZyAnY2FsY3VsYXRlVm90aW5nJyBpbiB0aGUgdGVybWluYWwgYmVpbmcgaW5jcmVtZW50ZWQgZWFjaCB0aW1lXHJcbiAqL1xyXG5cclxuY29uc3QgZmF2b3VyaXRlQ29mZmVTdG9yZXNCeUlkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmaW5kUmVjb3JkQnlGaWx0ZXIoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocmVjb3Jkcy5sZW5ndGggIT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gcmVjb3Jkc1swXVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVWb3RpbmcgPSBwYXJzZUludChyZWNvcmQudm90ZSkgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGNhbGN1bGF0ZVZvdGluZyB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3VwZGF0ZSBhIFJlY29yZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVSZWNvcmQgPSBhd2FpdCB0YWJsZS51cGRhdGUoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLnJlY29yZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90ZTogY2FsY3VsYXRlVm90aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbmlmaWVkUmVjb3JkcyA9IGdldE1pbmlmaWVkUmVjb3Jkcyh1cGRhdGVSZWNvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKG1pbmlmaWVkUmVjb3JkcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiQ29mZmVlIFN0b3JlIElkIGRvZXNuJ3QgZXhpc3RcIiwgaWR9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiSWQgaXMgbWlzc2luZ1wifSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiRXJyb3IgdXB2b3RpbmcgY29mZmVlIHN0b3JlXCIsIGVycm9yfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhdm91cml0ZUNvZmZlU3RvcmVzQnlJZDsiXSwibmFtZXMiOlsiZmluZFJlY29yZEJ5RmlsdGVyIiwiZ2V0TWluaWZpZWRSZWNvcmRzIiwidGFibGUiLCJmYXZvdXJpdGVDb2ZmZVN0b3Jlc0J5SWQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZCIsImJvZHkiLCJyZWNvcmRzIiwibGVuZ3RoIiwicmVjb3JkIiwiY2FsY3VsYXRlVm90aW5nIiwicGFyc2VJbnQiLCJ2b3RlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVJlY29yZCIsInVwZGF0ZSIsInJlY29yZElkIiwiZmllbGRzIiwibWluaWZpZWRSZWNvcmRzIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/favouriteCoffeStoresById.js\n");

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