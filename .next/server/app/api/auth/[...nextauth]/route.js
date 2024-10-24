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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_acer_Desktop_collage_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\acer\\\\Desktop\\\\collage\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_acer_Desktop_collage_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNhY2VyJTVDRGVza3RvcCU1Q2NvbGxhZ2UlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2FjZXIlNUNEZXNrdG9wJTVDY29sbGFnZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWdlLz80ZDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGFjZXJcXFxcRGVza3RvcFxcXFxjb2xsYWdlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxhY2VyXFxcXERlc2t0b3BcXFxcY29sbGFnZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                try {\n                    const user = await _model_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"No user found with this email\");\n                    }\n                    if (!user.isVerified) {\n                        throw new Error(\"Please verify your account before logging in\");\n                    }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect password\");\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString(); // Convert ObjectId to string\n                token.isVerified = user.isVerified;\n                // token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id;\n                session.user.isVerified = token.isVerified;\n                // session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/sign-in\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFDcEM7QUFDVTtBQUNIO0FBRTlCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZ0I7Z0JBQzlCLE1BQU1OLDBEQUFTQTtnQkFDZixJQUFJO29CQUNGLE1BQU1ZLE9BQU8sTUFBTVgsbURBQVNBLENBQUNZLE9BQU8sQ0FBQzt3QkFDbkNDLEtBQUs7NEJBQ0g7Z0NBQUVQLE9BQU9ELFlBQVlTLFVBQVU7NEJBQUM7NEJBQ2hDO2dDQUFFQyxVQUFVVixZQUFZUyxVQUFVOzRCQUFDO3lCQUNwQztvQkFDSDtvQkFDQSxJQUFJLENBQUNILE1BQU07d0JBQ1QsTUFBTSxJQUFJSyxNQUFNO29CQUNsQjtvQkFDQSxJQUFJLENBQUNMLEtBQUtNLFVBQVUsRUFBRTt3QkFDcEIsTUFBTSxJQUFJRCxNQUFNO29CQUNsQjtvQkFDQSxNQUFNRSxvQkFBb0IsTUFBTXBCLHVEQUFjLENBQzVDTyxZQUFZSSxRQUFRLEVBQ3BCRSxLQUFLRixRQUFRO29CQUVmLElBQUlTLG1CQUFtQjt3QkFDckIsT0FBT1A7b0JBQ1QsT0FBTzt3QkFDTCxNQUFNLElBQUlLLE1BQU07b0JBQ2xCO2dCQUNGLEVBQUUsT0FBT0ksS0FBVTtvQkFDakIsTUFBTSxJQUFJSixNQUFNSTtnQkFDbEI7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlksTUFBTUMsR0FBRyxHQUFHYixLQUFLYSxHQUFHLEVBQUVDLFlBQVksNkJBQTZCO2dCQUMvREYsTUFBTU4sVUFBVSxHQUFHTixLQUFLTSxVQUFVO2dCQUNsQyx3REFBd0Q7Z0JBQ3hETSxNQUFNUixRQUFRLEdBQUdKLEtBQUtJLFFBQVE7WUFDaEM7WUFDQSxPQUFPUTtRQUNUO1FBQ0EsTUFBTUcsU0FBUSxFQUFFQSxPQUFPLEVBQUVILEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNURyxRQUFRZixJQUFJLENBQUNhLEdBQUcsR0FBR0QsTUFBTUMsR0FBRztnQkFDNUJFLFFBQVFmLElBQUksQ0FBQ00sVUFBVSxHQUFHTSxNQUFNTixVQUFVO2dCQUMxQyxnRUFBZ0U7Z0JBQ2hFUyxRQUFRZixJQUFJLENBQUNJLFFBQVEsR0FBR1EsTUFBTVIsUUFBUTtZQUN4QztZQUNBLE9BQU9XO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhZ2UvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cz9hMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2xpYi9kYkNvbm5lY3QnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICdAL21vZGVsL1VzZXInO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ3RleHQnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgICAgICAgJG9yOiBbXG4gICAgICAgICAgICAgIHsgZW1haWw6IGNyZWRlbnRpYWxzLmlkZW50aWZpZXIgfSxcbiAgICAgICAgICAgICAgeyB1c2VybmFtZTogY3JlZGVudGlhbHMuaWRlbnRpZmllciB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBmb3VuZCB3aXRoIHRoaXMgZW1haWwnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF1c2VyLmlzVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHZlcmlmeSB5b3VyIGFjY291bnQgYmVmb3JlIGxvZ2dpbmcgaW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmNvcnJlY3QgcGFzc3dvcmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLl9pZCA9IHVzZXIuX2lkPy50b1N0cmluZygpOyAvLyBDb252ZXJ0IE9iamVjdElkIHRvIHN0cmluZ1xuICAgICAgICB0b2tlbi5pc1ZlcmlmaWVkID0gdXNlci5pc1ZlcmlmaWVkO1xuICAgICAgICAvLyB0b2tlbi5pc0FjY2VwdGluZ01lc3NhZ2VzID0gdXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzO1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5faWQgPSB0b2tlbi5faWQ7XG4gICAgICAgIHNlc3Npb24udXNlci5pc1ZlcmlmaWVkID0gdG9rZW4uaXNWZXJpZmllZDtcbiAgICAgICAgLy8gc2Vzc2lvbi51c2VyLmlzQWNjZXB0aW5nTWVzc2FnZXMgPSB0b2tlbi5pc0FjY2VwdGluZ01lc3NhZ2VzO1xuICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB0b2tlbi51c2VybmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9zaWduLWluJyxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiQ29ubmVjdCIsIlVzZXJNb2RlbCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCIkb3IiLCJpZGVudGlmaWVyIiwidXNlcm5hbWUiLCJFcnJvciIsImlzVmVyaWZpZWQiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJlcnIiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsIl9pZCIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_options__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNFO0FBRXhDLE1BQU1FLFVBQVVGLDBEQUFRQSxDQUFDQyxpREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhZ2UvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        console.log(\"Already connected to the database\");\n        return;\n    }\n    try {\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Database connected successfully\");\n    } catch (error) {\n        console.error(\"Database connection failed:\", error);\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUViLElBQUlELFdBQVdFLFdBQVcsRUFBRTtRQUMxQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNQyxLQUFLLE1BQU1OLHVEQUFnQixDQUFDUSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFFbEVULFdBQVdFLFdBQVcsR0FBR0csR0FBR0ssV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVTtRQUVyRFIsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPUSxPQUFPO1FBQ2RULFFBQVFTLEtBQUssQ0FBQywrQkFBK0JBO1FBRzdDTCxRQUFRTSxJQUFJLENBQUM7SUFDZjtBQUNGO0FBRUEsaUVBQWVaLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWdlLy4vc3JjL2xpYi9kYkNvbm5lY3QudHM/NjBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG50eXBlIENvbm5lY3Rpb25PYmplY3QgPSB7XG4gIGlzQ29ubmVjdGVkPzogbnVtYmVyO1xufTtcblxuY29uc3QgY29ubmVjdGlvbjogQ29ubmVjdGlvbk9iamVjdCA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XG4gICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICcnLCB7fSk7XG5cbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxuICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQ6JywgZXJyb3IpO1xuXG4gICAgXG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Updated User schema\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify Code is required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"Verify Code Expiry is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    }\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFrQ3RELHNCQUFzQjtBQUN0QixNQUFNQyxhQUEyQixJQUFJRCx3REFBZSxDQUFDO0lBQ25ERyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDQyxNQUFNO1FBQ05DLFFBQVE7SUFDVjtJQUNBQyxPQUFPO1FBQ0xMLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQW9CO1FBQ3JDRSxRQUFRO1FBQ1JFLE9BQU87WUFBQztZQUFjO1NBQW1DO0lBQzNEO0lBQ0FDLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7SUFDMUM7SUFDQU0sWUFBWTtRQUNWUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtJQUM3QztJQUNBTyxrQkFBa0I7UUFDaEJULE1BQU1VO1FBQ05SLFVBQVU7WUFBQztZQUFNO1NBQWlDO0lBQ3BEO0lBQ0FTLFlBQVk7UUFDVlgsTUFBTVk7UUFDTkMsU0FBUztJQUNYO0FBTUY7QUFFQSxNQUFNQyxZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCcEIscURBQWMsQ0FBTyxRQUFRQztBQUUvQixpRUFBZWlCLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWdlLy4vc3JjL21vZGVsL1VzZXIudHM/YTZjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIGV4dGVuZHMgRG9jdW1lbnQge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogRGF0ZTtcbn1cbi8vIGV4cG9ydCBpbnRlcmZhY2UgZGF0YSBleHRlbmRzIERvY3VtZW50IHtcbi8vICAgY29udGVudDogc3RyaW5nO1xuIFxuLy8gfVxuXG4vLyBjb25zdCBNZXNzYWdlU2NoZW1hOiBTY2hlbWE8TWVzc2FnZT4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbi8vICAgY29udGVudDoge1xuLy8gICAgIHR5cGU6IFN0cmluZyxcbi8vICAgICByZXF1aXJlZDogdHJ1ZSxcbi8vICAgfSxcbi8vICAgY3JlYXRlZEF0OiB7XG4vLyAgICAgdHlwZTogRGF0ZSxcbi8vICAgICByZXF1aXJlZDogdHJ1ZSxcbi8vICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbi8vICAgfSxcbi8vIH0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHZlcmlmeUNvZGU6IHN0cmluZztcbiAgdmVyaWZ5Q29kZUV4cGlyeTogRGF0ZTsgXG4gIGlzVmVyaWZpZWQ6IGJvb2xlYW47XG4vLyAgIGlzQWNjZXB0aW5nTWVzc2FnZXM6IGJvb2xlYW47XG4vLyAgIG1lc3NhZ2VzOiBNZXNzYWdlW107XG4gfVxuXG4vLyBVcGRhdGVkIFVzZXIgc2NoZW1hXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8VXNlcj4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXSxcbiAgICB0cmltOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW1haWwgaXMgcmVxdWlyZWQnXSxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgbWF0Y2g6IFsvLitcXEAuK1xcLi4rLywgJ1BsZWFzZSB1c2UgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ10sXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJ10sXG4gIH0sXG4gIHZlcmlmeUNvZGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVmVyaWZ5IENvZGUgaXMgcmVxdWlyZWQnXSxcbiAgfSxcbiAgdmVyaWZ5Q29kZUV4cGlyeToge1xuICAgIHR5cGU6IERhdGUsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVmVyaWZ5IENvZGUgRXhwaXJ5IGlzIHJlcXVpcmVkJ10sXG4gIH0sXG4gIGlzVmVyaWZpZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICAvLyBpc0FjY2VwdGluZ01lc3NhZ2VzOiB7XG4gIC8vICAgdHlwZTogQm9vbGVhbixcbiAgLy8gICBkZWZhdWx0OiB0cnVlLFxuICAvLyB9LFxuICAvLyBtZXNzYWdlczogW01lc3NhZ2VTY2hlbWFdLFxufSk7XG5cbmNvbnN0IFVzZXJNb2RlbCA9XG4gIChtb25nb29zZS5tb2RlbHMuVXNlciBhcyBtb25nb29zZS5Nb2RlbDxVc2VyPikgfHxcbiAgbW9uZ29vc2UubW9kZWw8VXNlcj4oJ1VzZXInLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlck1vZGVsO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInVuaXF1ZSIsImVtYWlsIiwibWF0Y2giLCJwYXNzd29yZCIsInZlcmlmeUNvZGUiLCJ2ZXJpZnlDb2RlRXhwaXJ5IiwiRGF0ZSIsImlzVmVyaWZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cacer%5CDesktop%5Ccollage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();