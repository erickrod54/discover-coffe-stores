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
exports.id = "pages/api/getCoffeStoresByLocation";
exports.ids = ["pages/api/getCoffeStoresByLocation"];
exports.modules = {

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("unsplash-js");

/***/ }),

/***/ "(api)/./lib/coffee.stores.js":
/*!******************************!*\
  !*** ./lib/coffee.stores.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCoffeeStores\": () => (/* binding */ fetchCoffeeStores)\n/* harmony export */ });\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unsplash-js */ \"unsplash-js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);\n/**\r\n * Discover-coffee-stores - version 2.11 -  lib > coffee.stores\r\n * - Fetaures:\r\n * \r\n *    --> Changing base file for the backup file.\r\n * \r\n *    --> Fetching coffee stores by user LatLong.\r\n * \r\n *    --> Adding public .env\r\n * \r\n * Note: Switching from '...results' to aliases in order to bring\r\n * just the information that i need to the single coffe store\r\n*/ //initialize unsplash\n\n// on your node server\nconst unsplashApi = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    accessKey: \"Tm70uT66l2CdyXfzoFQCRXrdc6FG2cLY9CdDJK5aY9w\"\n});\nconst getUrlForCoffeeStores = (latLong, query, limit)=>{\n    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;\n};\nconst getListOfCoffeeStorePhotos = async ()=>{\n    const photos = await unsplashApi.search.getPhotos({\n        query: \"coffee shop\",\n        perPage: 40\n    });\n    const unsplashResults = photos.response?.results || [];\n    return unsplashResults.map((result)=>result.urls[\"small\"]);\n};\nconst fetchCoffeeStores = async (latLong = \"43.653833032607096%2C-79.37896808855945\", limit = 6)=>{\n    const photos = await getListOfCoffeeStorePhotos();\n    const options = {\n        method: \"GET\",\n        headers: {\n            Accept: \"application/json\",\n            Authorization: \"fsq3CxRZ6E6GtdV7fh3TJs5vsMcMT/YhpBfvTvQGvZzHEKg=\"\n        }\n    };\n    const response = await fetch(getUrlForCoffeeStores(latLong, \"coffee\", limit), options);\n    const data = await response.json();\n    return data.results.map((result, idx)=>{\n        const neighborhood = result.location.neighborhood;\n        return {\n            id: result.fsq_id,\n            address: result.location.address,\n            name: result.name,\n            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : \"\",\n            imgUrl: photos.length > 0 ? photos[idx] : null\n        };\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29mZmVlLnN0b3Jlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQWdCQSxTQUFTQSxTQUFTLFFBQVEsYUFBYSxDQUFDO0FBRXhDO0FBQ0E7SUFDRUUsU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0M7Q0FFeEIsQ0FBQztBQUVGLE1BQU1DLHFCQUFxQixHQUFHLENBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQztJQUM3QztBQUNGLENBQUM7QUFFRDtJQUNFLE1BQU1FLE1BQU0sR0FBRyxNQUFNVixXQUFXLENBQUNXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1FBQ2hETCxLQUFLLEVBQUUsYUFBYTtRQUNwQk0sT0FBTyxFQUFFLEVBQUU7QUFDWDtJQUNGLE1BQU1DO0lBQ04sT0FBT0EsU0FBQUEsc0RBQWdCRyxDQUFHLENBQUM7QUFDN0IsQ0FBQztBQUVEO0lBSUUsTUFBTVAsTUFBTSxHQUFHLE1BQU1ELDBCQUEwQixFQUFFO0lBQ2pELE1BQU1ZLE9BQU8sR0FBRzs7UUFFZEUsT0FBTyxFQUFFO1lBQ1BDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUJDLGFBQWEsRUFBRXZCO1NBQ2hCO0tBQ0Y7SUFFRCxNQUFNYSxRQUFRLEdBQUcsTUFBTVksS0FBSyxDQUMxQnRCLHFCQUFxQixDQUFDQztJQUd4QixNQUFNc0IsSUFBSSxHQUFHLE1BQU1iLFFBQVEsQ0FBQ2MsSUFBSSxFQUFFOztDQUVoQyxNQUFNRSxZQUFZLEdBQUdiLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDRCxZQUFZO1FBQ2pELE9BQU87WUFDTEUsRUFBRSxFQUFFZjtZQUNKaUIsT0FBTyxFQUFFakI7WUFDVGtCLElBQUksRUFBRWxCO1lBQ05tQixhQUFhLEVBQUVOLFlBQVk7WUFDM0JRLE1BQU0sRUFBRTdCLE1BQU0sQ0FBQzRCLGtEQUErQjtTQUMvQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9saWIvY29mZmVlLnN0b3Jlcy5qcz81NWU4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBEaXNjb3Zlci1jb2ZmZWUtc3RvcmVzIC0gdmVyc2lvbiAyLjExIC0gIGxpYiA+IGNvZmZlZS5zdG9yZXNcclxuICogLSBGZXRhdXJlczpcclxuICogXHJcbiAqICAgIC0tPiBDaGFuZ2luZyBiYXNlIGZpbGUgZm9yIHRoZSBiYWNrdXAgZmlsZS5cclxuICogXHJcbiAqICAgIC0tPiBGZXRjaGluZyBjb2ZmZWUgc3RvcmVzIGJ5IHVzZXIgTGF0TG9uZy5cclxuICogXHJcbiAqICAgIC0tPiBBZGRpbmcgcHVibGljIC5lbnZcclxuICogXHJcbiAqIE5vdGU6IFN3aXRjaGluZyBmcm9tICcuLi5yZXN1bHRzJyB0byBhbGlhc2VzIGluIG9yZGVyIHRvIGJyaW5nXHJcbiAqIGp1c3QgdGhlIGluZm9ybWF0aW9uIHRoYXQgaSBuZWVkIHRvIHRoZSBzaW5nbGUgY29mZmUgc3RvcmVcclxuKi9cclxuXHJcbi8vaW5pdGlhbGl6ZSB1bnNwbGFzaFxyXG5cclxuaW1wb3J0IHsgY3JlYXRlQXBpIH0gZnJvbSBcInVuc3BsYXNoLWpzXCI7XHJcblxyXG4vLyBvbiB5b3VyIG5vZGUgc2VydmVyXHJcbmNvbnN0IHVuc3BsYXNoQXBpID0gY3JlYXRlQXBpKHtcclxuICBhY2Nlc3NLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VOU1BMQVNIX0FDQ0VTU19LRVksXHJcbiAgLy8uLi5vdGhlciBmZXRjaCBvcHRpb25zXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0VXJsRm9yQ29mZmVlU3RvcmVzID0gKGxhdExvbmcsIHF1ZXJ5LCBsaW1pdCkgPT4ge1xyXG4gIHJldHVybiBgaHR0cHM6Ly9hcGkuZm91cnNxdWFyZS5jb20vdjMvcGxhY2VzL3NlYXJjaD9xdWVyeT0ke3F1ZXJ5fSZsbD0ke2xhdExvbmd9JmxpbWl0PSR7bGltaXR9YDtcclxufTtcclxuXHJcbmNvbnN0IGdldExpc3RPZkNvZmZlZVN0b3JlUGhvdG9zID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBob3RvcyA9IGF3YWl0IHVuc3BsYXNoQXBpLnNlYXJjaC5nZXRQaG90b3Moe1xyXG4gICAgcXVlcnk6IFwiY29mZmVlIHNob3BcIixcclxuICAgIHBlclBhZ2U6IDQwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHVuc3BsYXNoUmVzdWx0cyA9IHBob3Rvcy5yZXNwb25zZT8ucmVzdWx0cyB8fCBbXTtcclxuICByZXR1cm4gdW5zcGxhc2hSZXN1bHRzLm1hcCgocmVzdWx0KSA9PiByZXN1bHQudXJsc1tcInNtYWxsXCJdKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENvZmZlZVN0b3JlcyA9IGFzeW5jIChcclxuICBsYXRMb25nID0gXCI0My42NTM4MzMwMzI2MDcwOTYlMkMtNzkuMzc4OTY4MDg4NTU5NDVcIixcclxuICBsaW1pdCA9IDZcclxuKSA9PiB7XHJcbiAgY29uc3QgcGhvdG9zID0gYXdhaXQgZ2V0TGlzdE9mQ29mZmVlU3RvcmVQaG90b3MoKTtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GT1VSU1FVQVJFX0FQSV9LRVksXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBnZXRVcmxGb3JDb2ZmZWVTdG9yZXMobGF0TG9uZywgXCJjb2ZmZWVcIiwgbGltaXQpLFxyXG4gICAgb3B0aW9uc1xyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YS5yZXN1bHRzLm1hcCgocmVzdWx0LCBpZHgpID0+IHtcclxuICAgIGNvbnN0IG5laWdoYm9yaG9vZCA9IHJlc3VsdC5sb2NhdGlvbi5uZWlnaGJvcmhvb2Q7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmZzcV9pZCxcclxuICAgICAgYWRkcmVzczogcmVzdWx0LmxvY2F0aW9uLmFkZHJlc3MsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBuZWlnaGJvdXJob29kOiBuZWlnaGJvcmhvb2Q/Lmxlbmd0aCA+IDAgPyBuZWlnaGJvcmhvb2RbMF0gOiBcIlwiLFxyXG4gICAgICBpbWdVcmw6IHBob3Rvcy5sZW5ndGggPiAwID8gcGhvdG9zW2lkeF0gOiBudWxsLFxyXG4gICAgfTtcclxuICB9KTtcclxufTsiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwidW5zcGxhc2hBcGkiLCJhY2Nlc3NLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVU5TUExBU0hfQUNDRVNTX0tFWSIsImdldFVybEZvckNvZmZlZVN0b3JlcyIsImxhdExvbmciLCJxdWVyeSIsImxpbWl0IiwiZ2V0TGlzdE9mQ29mZmVlU3RvcmVQaG90b3MiLCJwaG90b3MiLCJzZWFyY2giLCJnZXRQaG90b3MiLCJwZXJQYWdlIiwidW5zcGxhc2hSZXN1bHRzIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwidXJscyIsImZldGNoQ29mZmVlU3RvcmVzIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiTkVYVF9QVUJMSUNfRk9VUlNRVUFSRV9BUElfS0VZIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImlkeCIsIm5laWdoYm9yaG9vZCIsImxvY2F0aW9uIiwiaWQiLCJmc3FfaWQiLCJhZGRyZXNzIiwibmFtZSIsIm5laWdoYm91cmhvb2QiLCJsZW5ndGgiLCJpbWdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/coffee.stores.js\n");

/***/ }),

/***/ "(api)/./pages/api/getCoffeStoresByLocation.js":
/*!***********************************************!*\
  !*** ./pages/api/getCoffeStoresByLocation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_coffee_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/coffee.stores */ \"(api)/./lib/coffee.stores.js\");\n\n/**\r\n * Discover-coffee-stores - version 2.14 -  getCoffeeStoresByLocation\r\n * - Fetaures:\r\n * \r\n *    --> Building 'getCoffeeStoresByLocation' serveless function\r\n * \r\n * Note: By implementing the action by the useReducer it makes \r\n * the state of the view stores to maintain event when i go\r\n * to other page and come back\r\n * \r\n *   http://localhost:3000/api/getCoffeStoresByLocation?latLong=43.653833032607096%2C-79.37896808855945&limit=30\r\n * \r\n*/ const getCoffeeStoresByLocation = async (req, res)=>{\n    try {\n        //configure latLong and limit \n        const { latLong , limit  } = req.query;\n        const response = await (0,_lib_coffee_stores__WEBPACK_IMPORTED_MODULE_0__.fetchCoffeeStores)(latLong, limit);\n        res.status(200);\n        res.json(response);\n    } catch (err) {\n        console.log(\"there is an error\", err);\n        res.status(500);\n        res.json({\n            message: \"Oh no! Something went wrong\",\n            err\n        });\n    }\n//return\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCoffeeStoresByLocation);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUxvY2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTREO0FBQzVEO0lBZ0JJLElBQUk7UUFDQTs7UUFFQSxNQUFNTyxRQUFRLEdBQUcsTUFBTVAsaUJBQWlCLENBQUNJLE9BQU8sRUFBRUMsS0FBSyxDQUFDOztRQUd4REYsR0FBRyxDQUFDTSxJQUFJLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQUUsT0FBT0csR0FBRyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOztRQUVaVCxHQUFHLENBQUNNLElBQUksQ0FBQzs7WUFBMENDLEdBQUc7U0FBRTtJQUU1RCxDQUFDO0FBR0QsUUFBUTtBQUNaLENBQUM7QUFFRCxlQUFlVCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1zdG9yZS1hcHAvLi9wYWdlcy9hcGkvZ2V0Q29mZmVTdG9yZXNCeUxvY2F0aW9uLmpzPzBlNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hDb2ZmZWVTdG9yZXMgfSBmcm9tIFwiLi4vLi4vbGliL2NvZmZlZS5zdG9yZXNcIjtcclxuLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDIuMTQgLSAgZ2V0Q29mZmVlU3RvcmVzQnlMb2NhdGlvblxyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nICdnZXRDb2ZmZWVTdG9yZXNCeUxvY2F0aW9uJyBzZXJ2ZWxlc3MgZnVuY3Rpb25cclxuICogXHJcbiAqIE5vdGU6IEJ5IGltcGxlbWVudGluZyB0aGUgYWN0aW9uIGJ5IHRoZSB1c2VSZWR1Y2VyIGl0IG1ha2VzIFxyXG4gKiB0aGUgc3RhdGUgb2YgdGhlIHZpZXcgc3RvcmVzIHRvIG1haW50YWluIGV2ZW50IHdoZW4gaSBnb1xyXG4gKiB0byBvdGhlciBwYWdlIGFuZCBjb21lIGJhY2tcclxuICogXHJcbiAqICAgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRDb2ZmZVN0b3Jlc0J5TG9jYXRpb24/bGF0TG9uZz00My42NTM4MzMwMzI2MDcwOTYlMkMtNzkuMzc4OTY4MDg4NTU5NDUmbGltaXQ9MzBcclxuICogXHJcbiovXHJcblxyXG5jb25zdCBnZXRDb2ZmZWVTdG9yZXNCeUxvY2F0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NvbmZpZ3VyZSBsYXRMb25nIGFuZCBsaW1pdCBcclxuICAgICAgICBjb25zdCB7IGxhdExvbmcsIGxpbWl0IH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaENvZmZlZVN0b3JlcyhsYXRMb25nLCBsaW1pdCk7XHJcbiAgICAgICBcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCk7XHJcbiAgICAgICAgcmVzLmpzb24ocmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZXJlIGlzIGFuIGVycm9yJywgZXJyKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICByZXMuanNvbih7IG1lc3NhZ2U6IFwiT2ggbm8hIFNvbWV0aGluZyB3ZW50IHdyb25nXCIsIGVyciB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL3JldHVyblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb2ZmZWVTdG9yZXNCeUxvY2F0aW9uOyJdLCJuYW1lcyI6WyJmZXRjaENvZmZlZVN0b3JlcyIsImdldENvZmZlZVN0b3Jlc0J5TG9jYXRpb24iLCJyZXEiLCJyZXMiLCJsYXRMb25nIiwibGltaXQiLCJxdWVyeSIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCoffeStoresByLocation.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getCoffeStoresByLocation.js"));
module.exports = __webpack_exports__;

})();