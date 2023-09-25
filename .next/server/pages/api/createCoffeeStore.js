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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Discover-coffee-stores - version 2.19 -  coffee-store-page\r\n * - Fetaures:\r\n * \r\n *    --> Handeling errors\r\n * \r\n * Note: To handle errors i have to wrap the shaped object in a\r\n * 'try-catch' flow so i can catch-handle the error.\r\n */ var Airtable = __webpack_require__(/*! airtable */ \"airtable\");\nvar base = new Airtable({\n    apiKey: process.env.AIRTABLE_API_KEY\n}).base(process.env.AIRTABLE_BASE_KEY);\nconst table = base(\"coffee-stores\");\nconsole.log({\n    table\n});\nconst createCoffeeStore = async (req, res)=>{\n    console.log({\n        table\n    });\n    //find a record\n    const findingCoffeeStoreRecords = await table.select({\n        filterByFormula: `id=\"1\"`\n    }).firstPage();\n    console.log({\n        findingCoffeeStoreRecords\n    });\n    try {\n        if (findingCoffeeStoreRecords.length !== 0) {\n            const records = findingCoffeeStoreRecords.map((records)=>{\n                return {\n                    ...records.fields\n                };\n            });\n            res.json(records);\n        } else {\n            //create a record\n            const createRecords = await table.create([\n                {\n                    fields: {\n                        id: \"1\",\n                        name: \"Favorite Coffee Store Erick\",\n                        address: \"patua vida\",\n                        dma: \"patua blv\",\n                        vote: 200,\n                        imgUrl: \"http://myimg.com\"\n                    }\n                }\n            ]);\n            res.json({\n                message: \"create a record\",\n                records: createRecords\n            });\n        }\n    } catch (err) {\n        console.log(\"Error finding store\", err);\n        res.status(500);\n        res.json({\n            message: \"Error finding store\",\n            err\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoffeeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlQ29mZmVlU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBV0EsSUFBSUUsSUFBSSxHQUFHLElBQUlGLFFBQVEsQ0FBQztJQUFDRyxNQUFNLEVBQUVDO0NBQThCLENBQUMsQ0FBQ0Y7QUFFakUsTUFBTU0sS0FBSyxHQUFHTixJQUFJLENBQUM7QUFFbkJPO0lBQWNELEtBQUs7Q0FBRSxDQUFDO0FBRXRCLE1BQU1HLGFBQUFBLG1CQUFvQiwyQkFBVSxDQUFFRTtJQUNsQ0osT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFBRUYsS0FBSztLQUFFLENBQUM7SUFDdEIsZUFBZTtJQUVmLE1BQU1NO1FBQ0ZFOztJQUdKUCxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFFSTtLQUEyQixDQUFDO0lBRTFDO1FBQ0ksSUFBSUE7WUFDQSxNQUFNSyxPQUFPLEdBQUdMLHlCQUF5QixDQUFDTSxHQUFHLENBQUM7Z0JBQzFDLE9BQU07O2lCQUVMO1lBQ0wsQ0FBQyxDQUFDOztRQUVOO1lBQ0EsaUJBQWlCO1lBQ2IsTUFBTUcsYUFBYSxHQUFHLE1BQU1mLEtBQUssQ0FBQ2dCLE1BQU0sQ0FBQztnQkFDckM7b0JBQ0lILE1BQU0sRUFBRTs7O3dCQUdKTTs7d0JBRUFFLElBQUk7d0JBQ0pDLE1BQU0sRUFBRSxrQkFBa0I7O2lCQUVqQzthQUNKLENBQUM7WUFDRmpCLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFUyxPQUFPLEVBQUUsaUJBQWlCO2dCQUFFWixPQUFPLEVBQUVJLGFBQWE7YUFBQyxDQUFDO1FBQ25FLENBQUM7SUFDTCxFQUFFLE9BQU9TLEdBQUcsRUFBQztRQUNUdkIsT0FBTyxDQUFDQztRQUNSRyxHQUFHLENBQUNvQjtRQUNKcEIsR0FBRyxDQUFDUyxJQUFJLENBQUM7WUFBRVMsT0FBTyxFQUFFLHFCQUFxQjtZQUFFQyxHQUFHO1NBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDTCxDQUFDO0FBRUQsZUFBZXJCLGlCQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLXN0b3JlLWFwcC8uL3BhZ2VzL2FwaS9jcmVhdGVDb2ZmZWVTdG9yZS5qcz9iMzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAyLjE5IC0gIGNvZmZlZS1zdG9yZS1wYWdlXHJcbiAqIC0gRmV0YXVyZXM6XHJcbiAqIFxyXG4gKiAgICAtLT4gSGFuZGVsaW5nIGVycm9yc1xyXG4gKiBcclxuICogTm90ZTogVG8gaGFuZGxlIGVycm9ycyBpIGhhdmUgdG8gd3JhcCB0aGUgc2hhcGVkIG9iamVjdCBpbiBhXHJcbiAqICd0cnktY2F0Y2gnIGZsb3cgc28gaSBjYW4gY2F0Y2gtaGFuZGxlIHRoZSBlcnJvci5cclxuICovXHJcblxyXG52YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xyXG52YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7YXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZIH0pLmJhc2UocHJvY2Vzcy5lbnYuQUlSVEFCTEVfQkFTRV9LRVkgKTtcclxuXHJcbmNvbnN0IHRhYmxlID0gYmFzZSgnY29mZmVlLXN0b3JlcycpO1xyXG5cclxuY29uc29sZS5sb2coeyB0YWJsZSB9KVxyXG5cclxuY29uc3QgY3JlYXRlQ29mZmVlU3RvcmUgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHsgdGFibGUgfSlcclxuICAgIC8vZmluZCBhIHJlY29yZFxyXG5cclxuICAgIGNvbnN0IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5zZWxlY3Qoe1xyXG4gICAgICAgIGZpbHRlckJ5Rm9ybXVsYTpgaWQ9XCIxXCJgXHJcbiAgICB9KS5maXJzdFBhZ2UoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IGZpbmRpbmdDb2ZmZWVTdG9yZVJlY29yZHMgfSlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChmaW5kaW5nQ29mZmVlU3RvcmVSZWNvcmRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWNvcmRzID0gZmluZGluZ0NvZmZlZVN0b3JlUmVjb3Jkcy5tYXAoKHJlY29yZHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5yZWNvcmRzLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXMuanNvbihyZWNvcmRzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vY3JlYXRlIGEgcmVjb3JkXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlY29yZHMgPSBhd2FpdCB0YWJsZS5jcmVhdGUoW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmF2b3JpdGUgQ29mZmVlIFN0b3JlIEVyaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwicGF0dWEgdmlkYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbWE6IFwicGF0dWEgYmx2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvdGU6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsOiBcImh0dHA6Ly9teWltZy5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pIFxyXG4gICAgICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiY3JlYXRlIGEgcmVjb3JkXCIsIHJlY29yZHM6IGNyZWF0ZVJlY29yZHN9KVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZpbmRpbmcgc3RvcmUnLCBlcnIgKTtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCk7XHJcbiAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmluZGluZyBzdG9yZScsIGVycn0pO1xyXG4gICAgfSBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvZmZlZVN0b3JlOyJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFJUlRBQkxFX0FQSV9LRVkiLCJBSVJUQUJMRV9CQVNFX0tFWSIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvZmZlZVN0b3JlIiwicmVxIiwicmVzIiwiZmluZGluZ0NvZmZlZVN0b3JlUmVjb3JkcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsImZpcnN0UGFnZSIsImxlbmd0aCIsInJlY29yZHMiLCJtYXAiLCJmaWVsZHMiLCJqc29uIiwiY3JlYXRlUmVjb3JkcyIsImNyZWF0ZSIsImlkIiwibmFtZSIsImFkZHJlc3MiLCJkbWEiLCJ2b3RlIiwiaW1nVXJsIiwibWVzc2FnZSIsImVyciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/createCoffeeStore.js\n");

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