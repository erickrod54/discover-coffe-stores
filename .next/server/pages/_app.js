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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTION_TYPES\": () => (/* binding */ ACTION_TYPES),\n/* harmony export */   \"CoffeeStoresProvider\": () => (/* binding */ CoffeeStoresProvider),\n/* harmony export */   \"useCoffeeStoresContext\": () => (/* binding */ useCoffeeStoresContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_coffee_stores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/coffee-stores.json */ \"./data/coffee-stores.json\");\n\n\n\n/**\r\n * Discover-coffee-stores - version 2.12 -  context js\r\n * - Fetaures:\r\n * \r\n *    --> Building 'ACTION_TYPES' - for action names.\r\n * \r\n *    --> Building 'storeReducer' - to define action flow and set a payload\r\n * \r\n *    --> Building 'initialState' - to manage multiple states and 'disptatch' mutator \r\n *        and providing them ( as LatLong, and coffeeStores )\r\n * \r\n *    --> Implementing 'useReducer'\r\n * \r\n *    --> Providing  'coffeeStores', 'state', 'dispatch'\r\n *  \r\n * Note: At this version the reducer and values can be checkcked by the browser\r\n * in Components section\r\n */ const CoffeeStoresContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst ACTION_TYPES = {\n    SET_LANG_LONG: \"SET_LANG_LONG\",\n    SET_COFFEE_STORES: \"SET_COFFEE_STORES\"\n};\nconst storeReducer = (state, action)=>{\n    switch(action.type){\n        case ACTION_TYPES.SET_LANG_LONG:\n            {\n                return {\n                    ...state,\n                    latLong: action.payload.latLong\n                };\n            }\n        case ACTION_TYPES.SET_COFFEE_STORES:\n            {\n                return {\n                    ...state,\n                    coffeeStores: action.payload.coffeeStores\n                };\n            }\n        default:\n            throw new Error(`Unhandled action type: ${action.type}`);\n    }\n};\nconst CoffeeStoresProvider = ({ children  })=>{\n    const initialState = {\n        latLong: \"\",\n        coffeeStores: []\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(storeReducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CoffeeStoresContext.Provider, {\n        value: {\n            coffeeStores: _data_coffee_stores_json__WEBPACK_IMPORTED_MODULE_2__,\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-coffe-stores\\\\context.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\nconst useCoffeeStoresContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CoffeeStoresContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDRDtBQUdyRDtBQXNCQSxPQUFPLE1BQU1NLFlBQVksR0FBRztJQUN4QkM7SUFDQUM7Q0FDSDtBQUVEO0lBQ0ksT0FBUUcsTUFBTSxDQUFDQyxJQUFJOztZQUNpQjtnQkFDNUIsT0FBTzs7b0JBQVdDLE9BQU8sRUFBRUYsTUFBTSxDQUFDRzs7WUFDdEMsQ0FBQzs7WUFFbUM7Z0JBQ2hDLE9BQU87b0JBQUMsR0FBR0osS0FBSzthQUFFUDtpQkFBMkM7WUFDakUsQ0FBQzs7WUFHRyxNQUFNLElBQUlZLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0FBQ0wsQ0FBQztBQUVELE9BQU8sTUFBTUM7SUFFVCxNQUFNRSxZQUFZO1FBQ2RMLE9BQU8sRUFBQyxFQUFFO1FBQ1ZWLFlBQVksRUFBQyxFQUFFO0tBQ2xCO0lBRUQsTUFBTTtJQUVOLHFCQUNJLFFBQUNDO1FBQ0dpQixLQUFLO1lBQ0RsQixZQUFZO1lBQ1pPLEtBQUs7WUFDTFMsUUFBUTtTQUNYOzs7Ozs7S0FHMEIsQ0FDbEM7QUFDTCxDQUFDO0FBRUQsT0FBTyxNQUFNRztJQUVULE9BQU9yQixVQUFVLENBQUNHO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vY29udGV4dC5qcz8wMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb2ZmZWVTdG9yZXMgZnJvbSAnLi9kYXRhL2NvZmZlZS1zdG9yZXMuanNvbic7XHJcblxyXG5cclxuLyoqXHJcbiAqIERpc2NvdmVyLWNvZmZlZS1zdG9yZXMgLSB2ZXJzaW9uIDIuMTIgLSAgY29udGV4dCBqc1xyXG4gKiAtIEZldGF1cmVzOlxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nICdBQ1RJT05fVFlQRVMnIC0gZm9yIGFjdGlvbiBuYW1lcy5cclxuICogXHJcbiAqICAgIC0tPiBCdWlsZGluZyAnc3RvcmVSZWR1Y2VyJyAtIHRvIGRlZmluZSBhY3Rpb24gZmxvdyBhbmQgc2V0IGEgcGF5bG9hZFxyXG4gKiBcclxuICogICAgLS0+IEJ1aWxkaW5nICdpbml0aWFsU3RhdGUnIC0gdG8gbWFuYWdlIG11bHRpcGxlIHN0YXRlcyBhbmQgJ2Rpc3B0YXRjaCcgbXV0YXRvciBcclxuICogICAgICAgIGFuZCBwcm92aWRpbmcgdGhlbSAoIGFzIExhdExvbmcsIGFuZCBjb2ZmZWVTdG9yZXMgKVxyXG4gKiBcclxuICogICAgLS0+IEltcGxlbWVudGluZyAndXNlUmVkdWNlcidcclxuICogXHJcbiAqICAgIC0tPiBQcm92aWRpbmcgICdjb2ZmZWVTdG9yZXMnLCAnc3RhdGUnLCAnZGlzcGF0Y2gnXHJcbiAqICBcclxuICogTm90ZTogQXQgdGhpcyB2ZXJzaW9uIHRoZSByZWR1Y2VyIGFuZCB2YWx1ZXMgY2FuIGJlIGNoZWNrY2tlZCBieSB0aGUgYnJvd3NlclxyXG4gKiBpbiBDb21wb25lbnRzIHNlY3Rpb25cclxuICovXHJcblxyXG5cclxuY29uc3QgQ29mZmVlU3RvcmVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RJT05fVFlQRVMgPSB7XHJcbiAgICBTRVRfTEFOR19MT05HOiAnU0VUX0xBTkdfTE9ORycsXHJcbiAgICBTRVRfQ09GRkVFX1NUT1JFUzogJ1NFVF9DT0ZGRUVfU1RPUkVTJ1xyXG59XHJcblxyXG5jb25zdCBzdG9yZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFDVElPTl9UWVBFUy5TRVRfTEFOR19MT05HOntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGF0TG9uZzogYWN0aW9uLnBheWxvYWQubGF0TG9uZyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgQUNUSU9OX1RZUEVTLlNFVF9DT0ZGRUVfU1RPUkVTOntcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY29mZmVlU3RvcmVzOiBhY3Rpb24ucGF5bG9hZC5jb2ZmZWVTdG9yZXMgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb2ZmZWVTdG9yZXNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgbGF0TG9uZzpcIlwiLFxyXG4gICAgICAgIGNvZmZlZVN0b3JlczpbXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFsgc3RhdGUsIGRpc3BhdGNoIF0gPSB1c2VSZWR1Y2VyKHN0b3JlUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29mZmVlU3RvcmVzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY29mZmVlU3RvcmVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29mZmVlU3RvcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNvZmZlZVN0b3Jlc0NvbnRleHQgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQ29mZmVlU3RvcmVzQ29udGV4dClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiY29mZmVlU3RvcmVzIiwiQ29mZmVlU3RvcmVzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBQ1RJT05fVFlQRVMiLCJTRVRfTEFOR19MT05HIiwiU0VUX0NPRkZFRV9TVE9SRVMiLCJzdG9yZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsYXRMb25nIiwicGF5bG9hZCIsIkVycm9yIiwiQ29mZmVlU3RvcmVzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImluaXRpYWxTdGF0ZSIsImRpc3BhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvZmZlZVN0b3Jlc0NvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context.js\");\n\n\n\n/**\n * Discover-coffee-stores - version 3.07 -  MyApp\n * - Fetaures:\n * \n *    --> Clearing 'StrictMode' import \n * \n * Note: By building this page Document allows to change global\n * setting as the font and other properties applied to all the pages \n * \n */ function MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_2__.CoffeeStoresProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-coffe-stores\\\\pages\\\\_app.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\erick\\\\Desktop\\\\next-apps\\\\discover-coffe-stores\\\\pages\\\\_app.js\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ21CO0FBRWxEOzs7Ozs7Ozs7Q0FTQyxHQUVELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNJLDhEQUFDSCwwREFBb0I7a0JBQ25CLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1AsQ0FDMUI7QUFDSCxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtc3RvcmUtYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IENvZmZlZVN0b3Jlc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbi8qKlxuICogRGlzY292ZXItY29mZmVlLXN0b3JlcyAtIHZlcnNpb24gMy4wNyAtICBNeUFwcFxuICogLSBGZXRhdXJlczpcbiAqIFxuICogICAgLS0+IENsZWFyaW5nICdTdHJpY3RNb2RlJyBpbXBvcnQgXG4gKiBcbiAqIE5vdGU6IEJ5IGJ1aWxkaW5nIHRoaXMgcGFnZSBEb2N1bWVudCBhbGxvd3MgdG8gY2hhbmdlIGdsb2JhbFxuICogc2V0dGluZyBhcyB0aGUgZm9udCBhbmQgb3RoZXIgcHJvcGVydGllcyBhcHBsaWVkIHRvIGFsbCB0aGUgcGFnZXMgXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuKFxuICAgICAgPENvZmZlZVN0b3Jlc1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0NvZmZlZVN0b3Jlc1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQ29mZmVlU3RvcmVzUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./data/coffee-stores.json":
/*!*********************************!*\
  !*** ./data/coffee-stores.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":0,"name":"StrangeLove Coffee","imgUrl":"https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80","websiteUrl":"https://www.strangelovecoffee.ca/","address":"983 Queen St E, Toronto, ON M4M 1K2","neighbourhood":"at King and Spadina"},{"id":1,"name":"Dark Horse Coffee","imgUrl":"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80","websiteUrl":"https://www.darkhorseespresso.com/","address":"401 Richmond St W","neighbourhood":"Richmond and Spadina"},{"id":300,"name":"Route 300","imgUrl":"https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80","websiteUrl":"https://www.darkhorseespresso.com/","address":"401 Richmond St W","neighbourhood":"Route 300 Neighbourhood"}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();