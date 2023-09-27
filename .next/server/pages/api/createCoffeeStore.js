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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 3.00 -  coffee-store-page\r\n * - Fetaures:\r\n * \r\n *    --> Validating 'id' and 'name' to 'createCoffee' Store\r\n * \r\n * Note: this will prevent to create a new coffee store without\r\n * 'name' and 'id' that is essential in order to identify them\r\n * as a coffee store\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconsole.log({\n    table\n});\nconst createCoffeeStore = async (req, res)=>{\n    console.log({\n        table\n    });\n    if (req.method === \"POST\") {\n        //find a record\n        const { id , name , address , dma , vote , imgUrl  } = req.body;\n        if (id) {\n            const findingCoffeeStoreRecords = await table.select({\n                filterByFormula: `id=${id}`\n            }).firstPage();\n            console.log({\n                findingCoffeeStoreRecords\n            });\n            try {\n                if (findingCoffeeStoreRecords.length !== 0) {\n                    const records = findingCoffeeStoreRecords.map((records)=>{\n                        return {\n                            ...records.fields\n                        };\n                    });\n                    res.json(records);\n                } else {\n                    if (name) {\n                        //create a record\n                        const createRecords = await table.create([\n                            {\n                                fields: {\n                                    id,\n                                    name,\n                                    address,\n                                    dma,\n                                    vote,\n                                    imgUrl\n                                }\n                            }\n                        ]);\n                        const records1 = createRecords.map((records)=>{\n                            return {\n                                ...records.fields\n                            };\n                        });\n                        res.json({\n                            records: records1\n                        });\n                    } else {\n                        res.status(400);\n                        res.json({\n                            message: \"Id or name is missing\"\n                        });\n                    }\n                }\n            } catch (err) {\n                console.log(\"Error finding store\", err);\n                res.status(500);\n                res.json({\n                    message: \"Error finding store\",\n                    err\n                });\n            }\n        }\n        ;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBWUEsSUFBSUUsSUFBSSxHQUFHLElBQUlGLFFBQVEsQ0FBQztJQUFDRyxNQUFNLEVBQUVDO0NBQThCLENBQUMsQ0FBQ0Y7QUFFakUsTUFBTU0sS0FBSyxHQUFHTixJQUFJLENBQUMsZUFBZSxDQUFDO0FBRW5DTztJQUFjRCxLQUFLO0NBQUUsQ0FBQztBQUV0QixNQUFNRztJQUNGRixPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFFRixLQUFLO0tBQUUsQ0FBQztJQUV0QixJQUFJSSxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFFdkIsZUFBZTtRQUVmO1FBRUE7O2dCQUdRVSxlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUVULEVBQUUsQ0FBQyxDQUFDO2FBQzlCLENBQUMsQ0FBQ1U7WUFFSGhCOzthQUF5QyxDQUFDO1lBRTFDLElBQUk7Z0JBQ0EsSUFBSWEseUJBQXlCLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUU7O3dCQUVwQyxPQUFNOzRCQUNGLEdBQUdDLE9BQU8sQ0FBQ0U7eUJBQ2Q7b0JBQ0wsQ0FBQyxDQUFDO29CQUNGaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDSCxPQUFPLENBQUM7Ozt3QkFHYixpQkFBaUI7d0JBQ2IsTUFBTUksYUFBYSxHQUFHLE1BQU12QixLQUFLLENBQUN3QixNQUFNLENBQUM7NEJBQ3JDO2dDQUNJSCxNQUFNLEVBQUU7OztvQ0FHSlo7OztvQ0FHQUc7aUNBQ0g7NkJBQ0o7eUJBQ0osQ0FBQzt3QkFDRixNQUFNTyxRQUFPOzRCQUNULE9BQU07Z0NBQ0YsR0FBR0EsT0FBTyxDQUFDRTs2QkFDZDt3QkFDTCxDQUFDLENBQUM7d0JBQ0ZoQixHQUFHLENBQUNpQixJQUFJLENBQUM7NEJBQUNIO3lCQUFRLENBQUM7b0JBQ3ZCLE9BQUs7d0JBQ0RkLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ2ZwQixHQUFHLENBQUNpQixJQUFJLENBQUM7NEJBQUVJLE9BQU8sRUFBRTt5QkFBd0IsQ0FBQztvQkFDakQsQ0FBQztnQkFDTCxDQUFDO1lBQ1QsRUFBRSxPQUFPQyxHQUFHLEVBQUM7Z0JBQ1QxQixPQUFPLENBQUNDLEdBQUc7Z0JBQ1hHLEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQztnQkFDWHBCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQztvQkFBRUksT0FBTyxFQUFFO29CQUF1QkMsR0FBRztpQkFBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7O0lBQ0QsQ0FBQztBQUNELENBQUM7QUFHVCxlQUFleEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vcGFnZXMvYXBpL2NyZWF0ZUNvZmZlZVN0b3JlLmpzP2IzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDMuMDAgLSAgY29mZmVlLXN0b3JlLXBhZ2VcclxuICogLSBGZXRhdXJlczpcclxuICogXHJcbiAqICAgIC0tPiBWYWxpZGF0aW5nICdpZCcgYW5kICduYW1lJyB0byAnY3JlYXRlQ29mZmVlJyBTdG9yZVxyXG4gKiBcclxuICogTm90ZTogdGhpcyB3aWxsIHByZXZlbnQgdG8gY3JlYXRlIGEgbmV3IGNvZmZlZSBzdG9yZSB3aXRob3V0XHJcbiAqICduYW1lJyBhbmQgJ2lkJyB0aGF0IGlzIGVzc2VudGlhbCBpbiBvcmRlciB0byBpZGVudGlmeSB0aGVtXHJcbiAqIGFzIGEgY29mZmVlIHN0b3JlXHJcbiAqL1xyXG5cclxudmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcclxudmFyIGJhc2UgPSBuZXcgQWlydGFibGUoe2FwaUtleTogcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWSB9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfS0VZICk7XHJcblxyXG5jb25zdCB0YWJsZSA9IGJhc2UoJ2NvZmZlZS1zdG9yZXMnKTtcclxuXHJcbmNvbnNvbGUubG9nKHsgdGFibGUgfSlcclxuXHJcbmNvbnN0IGNyZWF0ZUNvZmZlZVN0b3JlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh7IHRhYmxlIH0pXHJcblxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcblxyXG4gICAgICAgIC8vZmluZCBhIHJlY29yZFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgYWRkcmVzcywgZG1hLCB2b3RlLCBpbWdVcmwgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5zZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgaWQ9JHtpZH1gXHJcbiAgICAgICAgICAgIH0pLmZpcnN0UGFnZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgfSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSBmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzLm1hcCgocmVjb3JkcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yZWNvcmRzLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbihyZWNvcmRzKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jcmVhdGUgYSByZWNvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5jcmVhdGUoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG1hLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRzID0gY3JlYXRlUmVjb3Jkcy5tYXAoKHJlY29yZHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlY29yZHMuZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHtyZWNvcmRzfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ0lkIG9yIG5hbWUgaXMgbWlzc2luZyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZpbmRpbmcgc3RvcmUnLCBlcnIgKTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGZpbmRpbmcgc3RvcmUnLCBlcnJ9KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvZmZlZVN0b3JlOyJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvZmZlZVN0b3JlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJuYW1lIiwiYWRkcmVzcyIsImRtYSIsInZvdGUiLCJpbWdVcmwiLCJib2R5IiwiZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSIsImxlbmd0aCIsInJlY29yZHMiLCJtYXAiLCJmaWVsZHMiLCJqc29uIiwiY3JlYXRlUmVjb3JkcyIsImNyZWF0ZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCoffeeStore.js\n");

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