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
exports.id = "app/api/groq/route";
exports.ids = ["app/api/groq/route"];
exports.modules = {

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgroq%2Froute&page=%2Fapi%2Fgroq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgroq%2Froute.ts&appDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgroq%2Froute&page=%2Fapi%2Fgroq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgroq%2Froute.ts&appDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_91814_Desktop_Groq_app_api_groq_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/groq/route.ts */ \"(rsc)/./app/api/groq/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/groq/route\",\n        pathname: \"/api/groq\",\n        filename: \"route\",\n        bundlePath: \"app/api/groq/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\91814\\\\Desktop\\\\Groq\\\\app\\\\api\\\\groq\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_91814_Desktop_Groq_app_api_groq_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/groq/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZncm9xJTJGcm91dGUmcGFnZT0lMkZhcGklMkZncm9xJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ3JvcSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUM5MTgxNCU1Q0Rlc2t0b3AlNUNHcm9xJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUM5MTgxNCU1Q0Rlc2t0b3AlNUNHcm9xJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1M7QUFDdEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVob21lLz84M2FmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXDkxODE0XFxcXERlc2t0b3BcXFxcR3JvcVxcXFxhcHBcXFxcYXBpXFxcXGdyb3FcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dyb3Evcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9ncm9xXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ncm9xL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcOTE4MTRcXFxcRGVza3RvcFxcXFxHcm9xXFxcXGFwcFxcXFxhcGlcXFxcZ3JvcVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ncm9xL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgroq%2Froute&page=%2Fapi%2Fgroq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgroq%2Froute.ts&appDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/groq/route.ts":
/*!*******************************!*\
  !*** ./app/api/groq/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\n\n// Hard-coded API key for this example\nconst GROQ_API_KEY = \"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\";\n// Validate the request body\nfunction isValidRequest(body) {\n    return body && Array.isArray(body.messages) && body.messages.every((msg)=>typeof msg === \"object\" && [\n            \"system\",\n            \"user\",\n            \"assistant\"\n        ].includes(msg.role) && typeof msg.content === \"string\");\n}\nasync function POST(request) {\n    try {\n        // Parse the request body\n        const body = await request.json();\n        // Validate the request\n        if (!isValidRequest(body)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid request body\"\n            }, {\n                status: 400\n            });\n        }\n        const { messages, language = \"en\", model = \"llama-3.3-70b-versatile\" } = body;\n        // Use our hard-coded API key\n        const apiKey = GROQ_API_KEY;\n        // Check if there are image-related messages\n        const hasImageContent = messages.some((msg)=>msg.role === \"user\" && msg.content.includes(\"I've attached an image of my homework assignment\"));\n        // Prepare system message with language preference and image handling abilities if needed\n        if (!messages.some((msg)=>msg.role === \"system\")) {\n            let systemContent = `You are a helpful, educational AI assistant. Please respond in ${language}.`;\n            if (hasImageContent) {\n                systemContent += `\r\nYou have been given a description of an image containing a homework assignment or problem. \r\nEven though you can't see the actual image, please:\r\n1. Acknowledge that you understand an image was shared\r\n2. Respond as if you can understand the type of homework problem based on the description\r\n3. Provide general guidance for solving this type of problem\r\n4. Ask clarifying questions if more information is needed about the image content\r\n5. Offer step-by-step assistance to help the student learn how to approach similar problems`;\n            }\n            messages.unshift({\n                role: \"system\",\n                content: systemContent\n            });\n        } else if (hasImageContent) {\n            // If there's already a system message but now we're getting image content,\n            // enhance the existing system message\n            const systemIndex = messages.findIndex((msg)=>msg.role === \"system\");\n            if (systemIndex !== -1) {\n                messages[systemIndex].content += `\r\nAdditionally, the user has shared an image of a homework problem. \r\nPlease provide helpful guidance based on the description they provide about the image.`;\n            }\n        }\n        // Call the Groq API\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"https://api.groq.com/openai/v1/chat/completions\", {\n            model,\n            messages,\n            temperature: 0.7,\n            max_tokens: 2048\n        }, {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": `Bearer ${apiKey}`\n            }\n        });\n        // Return the response from Groq\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(response.data);\n    } catch (error) {\n        console.error(\"Error calling Groq API:\", error.response?.data || error.message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to get response from Groq\",\n            details: error.response?.data?.error?.message || error.message\n        }, {\n            status: error.response?.status || 500\n        });\n    }\n}\n// Handle OPTIONS requests for CORS\nasync function OPTIONS() {\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({}, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dyb3Evcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUM5QjtBQVkxQixzQ0FBc0M7QUFDdEMsTUFBTUUsZUFBZTtBQUVyQiw0QkFBNEI7QUFDNUIsU0FBU0MsZUFBZUMsSUFBUztJQUMvQixPQUNFQSxRQUNBQyxNQUFNQyxPQUFPLENBQUNGLEtBQUtHLFFBQVEsS0FDM0JILEtBQUtHLFFBQVEsQ0FBQ0MsS0FBSyxDQUNqQixDQUFDQyxNQUNDLE9BQU9BLFFBQVEsWUFDZjtZQUFDO1lBQVU7WUFBUTtTQUFZLENBQUNDLFFBQVEsQ0FBQ0QsSUFBSUUsSUFBSSxLQUNqRCxPQUFPRixJQUFJRyxPQUFPLEtBQUs7QUFHL0I7QUFFTyxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YseUJBQXlCO1FBQ3pCLE1BQU1WLE9BQU8sTUFBTVUsUUFBUUMsSUFBSTtRQUUvQix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDWixlQUFlQyxPQUFPO1lBQ3pCLE9BQU9KLGtGQUFZQSxDQUFDZSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXVCLEdBQ2hDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNLEVBQUVWLFFBQVEsRUFBRVcsV0FBVyxJQUFJLEVBQUVDLFFBQVEseUJBQXlCLEVBQUUsR0FBR2Y7UUFFekUsNkJBQTZCO1FBQzdCLE1BQU1nQixTQUFTbEI7UUFFZiw0Q0FBNEM7UUFDNUMsTUFBTW1CLGtCQUFrQmQsU0FBU2UsSUFBSSxDQUFDYixDQUFBQSxNQUNwQ0EsSUFBSUUsSUFBSSxLQUFLLFVBQ2JGLElBQUlHLE9BQU8sQ0FBQ0YsUUFBUSxDQUFDO1FBR3ZCLHlGQUF5RjtRQUN6RixJQUFJLENBQUNILFNBQVNlLElBQUksQ0FBQ2IsQ0FBQUEsTUFBT0EsSUFBSUUsSUFBSSxLQUFLLFdBQVc7WUFDaEQsSUFBSVksZ0JBQWdCLENBQUMsK0RBQStELEVBQUVMLFNBQVMsQ0FBQyxDQUFDO1lBRWpHLElBQUlHLGlCQUFpQjtnQkFDbkJFLGlCQUFpQixDQUFDOzs7Ozs7OzJGQU9pRSxDQUFDO1lBQ3RGO1lBRUFoQixTQUFTaUIsT0FBTyxDQUFDO2dCQUNmYixNQUFNO2dCQUNOQyxTQUFTVztZQUNYO1FBQ0YsT0FBTyxJQUFJRixpQkFBaUI7WUFDMUIsMkVBQTJFO1lBQzNFLHNDQUFzQztZQUN0QyxNQUFNSSxjQUFjbEIsU0FBU21CLFNBQVMsQ0FBQ2pCLENBQUFBLE1BQU9BLElBQUlFLElBQUksS0FBSztZQUMzRCxJQUFJYyxnQkFBZ0IsQ0FBQyxHQUFHO2dCQUN0QmxCLFFBQVEsQ0FBQ2tCLFlBQVksQ0FBQ2IsT0FBTyxJQUFJLENBQUM7O3NGQUU0QyxDQUFDO1lBQ2pGO1FBQ0Y7UUFFQSxvQkFBb0I7UUFDcEIsTUFBTWUsV0FBVyxNQUFNMUIsNkNBQUtBLENBQUMyQixJQUFJLENBQy9CLG1EQUNBO1lBQ0VUO1lBQ0FaO1lBQ0FzQixhQUFhO1lBQ2JDLFlBQVk7UUFDZCxHQUNBO1lBQ0VDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUVYLE9BQU8sQ0FBQztZQUNyQztRQUNGO1FBR0YsZ0NBQWdDO1FBQ2hDLE9BQU9wQixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDWSxTQUFTSyxJQUFJO0lBQ3hDLEVBQUUsT0FBT2hCLE9BQVk7UUFDbkJpQixRQUFRakIsS0FBSyxDQUFDLDJCQUEyQkEsTUFBTVcsUUFBUSxFQUFFSyxRQUFRaEIsTUFBTWtCLE9BQU87UUFFOUUsT0FBT2xDLGtGQUFZQSxDQUFDZSxJQUFJLENBQ3RCO1lBQ0VDLE9BQU87WUFDUG1CLFNBQVNuQixNQUFNVyxRQUFRLEVBQUVLLE1BQU1oQixPQUFPa0IsV0FBV2xCLE1BQU1rQixPQUFPO1FBQ2hFLEdBQ0E7WUFBRWpCLFFBQVFELE1BQU1XLFFBQVEsRUFBRVYsVUFBVTtRQUFJO0lBRTVDO0FBQ0Y7QUFFQSxtQ0FBbUM7QUFDNUIsZUFBZW1CO0lBQ3BCLE9BQU9wQyxrRkFBWUEsQ0FBQ2UsSUFBSSxDQUFDLENBQUMsR0FBRztRQUFFRSxRQUFRO0lBQUk7QUFDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVob21lLy4vYXBwL2FwaS9ncm9xL3JvdXRlLnRzPzAxOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIERlZmluZSB0aGUgZXhwZWN0ZWQgcmVxdWVzdCBib2R5IHN0cnVjdHVyZVxyXG5pbnRlcmZhY2UgQ2hhdFJlcXVlc3Qge1xyXG4gIG1lc3NhZ2VzOiB7XHJcbiAgICByb2xlOiAnc3lzdGVtJyB8ICd1c2VyJyB8ICdhc3Npc3RhbnQnO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG4gIH1bXTtcclxuICBsYW5ndWFnZT86IHN0cmluZztcclxuICBtb2RlbD86IHN0cmluZztcclxufVxyXG5cclxuLy8gSGFyZC1jb2RlZCBBUEkga2V5IGZvciB0aGlzIGV4YW1wbGVcclxuY29uc3QgR1JPUV9BUElfS0VZID0gJ2dza19ZNVZPejNJVExibnFIZkxDUTNWaFdHZHliM0ZZbWppQm5lYU1OdmxXTW04QTVkbkN1UGNOJztcclxuXHJcbi8vIFZhbGlkYXRlIHRoZSByZXF1ZXN0IGJvZHlcclxuZnVuY3Rpb24gaXNWYWxpZFJlcXVlc3QoYm9keTogYW55KTogYm9keSBpcyBDaGF0UmVxdWVzdCB7XHJcbiAgcmV0dXJuIChcclxuICAgIGJvZHkgJiZcclxuICAgIEFycmF5LmlzQXJyYXkoYm9keS5tZXNzYWdlcykgJiZcclxuICAgIGJvZHkubWVzc2FnZXMuZXZlcnkoXHJcbiAgICAgIChtc2c6IGFueSkgPT5cclxuICAgICAgICB0eXBlb2YgbXNnID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgIFsnc3lzdGVtJywgJ3VzZXInLCAnYXNzaXN0YW50J10uaW5jbHVkZXMobXNnLnJvbGUpICYmXHJcbiAgICAgICAgdHlwZW9mIG1zZy5jb250ZW50ID09PSAnc3RyaW5nJ1xyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFBhcnNlIHRoZSByZXF1ZXN0IGJvZHlcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICAvLyBWYWxpZGF0ZSB0aGUgcmVxdWVzdFxyXG4gICAgaWYgKCFpc1ZhbGlkUmVxdWVzdChib2R5KSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ0ludmFsaWQgcmVxdWVzdCBib2R5JyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGxhbmd1YWdlID0gJ2VuJywgbW9kZWwgPSAnbGxhbWEtMy4zLTcwYi12ZXJzYXRpbGUnIH0gPSBib2R5O1xyXG5cclxuICAgIC8vIFVzZSBvdXIgaGFyZC1jb2RlZCBBUEkga2V5XHJcbiAgICBjb25zdCBhcGlLZXkgPSBHUk9RX0FQSV9LRVk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGltYWdlLXJlbGF0ZWQgbWVzc2FnZXNcclxuICAgIGNvbnN0IGhhc0ltYWdlQ29udGVudCA9IG1lc3NhZ2VzLnNvbWUobXNnID0+IFxyXG4gICAgICBtc2cucm9sZSA9PT0gJ3VzZXInICYmIFxyXG4gICAgICBtc2cuY29udGVudC5pbmNsdWRlcyhcIkkndmUgYXR0YWNoZWQgYW4gaW1hZ2Ugb2YgbXkgaG9tZXdvcmsgYXNzaWdubWVudFwiKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBQcmVwYXJlIHN5c3RlbSBtZXNzYWdlIHdpdGggbGFuZ3VhZ2UgcHJlZmVyZW5jZSBhbmQgaW1hZ2UgaGFuZGxpbmcgYWJpbGl0aWVzIGlmIG5lZWRlZFxyXG4gICAgaWYgKCFtZXNzYWdlcy5zb21lKG1zZyA9PiBtc2cucm9sZSA9PT0gJ3N5c3RlbScpKSB7XHJcbiAgICAgIGxldCBzeXN0ZW1Db250ZW50ID0gYFlvdSBhcmUgYSBoZWxwZnVsLCBlZHVjYXRpb25hbCBBSSBhc3Npc3RhbnQuIFBsZWFzZSByZXNwb25kIGluICR7bGFuZ3VhZ2V9LmA7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoaGFzSW1hZ2VDb250ZW50KSB7XHJcbiAgICAgICAgc3lzdGVtQ29udGVudCArPSBgXHJcbllvdSBoYXZlIGJlZW4gZ2l2ZW4gYSBkZXNjcmlwdGlvbiBvZiBhbiBpbWFnZSBjb250YWluaW5nIGEgaG9tZXdvcmsgYXNzaWdubWVudCBvciBwcm9ibGVtLiBcclxuRXZlbiB0aG91Z2ggeW91IGNhbid0IHNlZSB0aGUgYWN0dWFsIGltYWdlLCBwbGVhc2U6XHJcbjEuIEFja25vd2xlZGdlIHRoYXQgeW91IHVuZGVyc3RhbmQgYW4gaW1hZ2Ugd2FzIHNoYXJlZFxyXG4yLiBSZXNwb25kIGFzIGlmIHlvdSBjYW4gdW5kZXJzdGFuZCB0aGUgdHlwZSBvZiBob21ld29yayBwcm9ibGVtIGJhc2VkIG9uIHRoZSBkZXNjcmlwdGlvblxyXG4zLiBQcm92aWRlIGdlbmVyYWwgZ3VpZGFuY2UgZm9yIHNvbHZpbmcgdGhpcyB0eXBlIG9mIHByb2JsZW1cclxuNC4gQXNrIGNsYXJpZnlpbmcgcXVlc3Rpb25zIGlmIG1vcmUgaW5mb3JtYXRpb24gaXMgbmVlZGVkIGFib3V0IHRoZSBpbWFnZSBjb250ZW50XHJcbjUuIE9mZmVyIHN0ZXAtYnktc3RlcCBhc3Npc3RhbmNlIHRvIGhlbHAgdGhlIHN0dWRlbnQgbGVhcm4gaG93IHRvIGFwcHJvYWNoIHNpbWlsYXIgcHJvYmxlbXNgO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBtZXNzYWdlcy51bnNoaWZ0KHtcclxuICAgICAgICByb2xlOiAnc3lzdGVtJyxcclxuICAgICAgICBjb250ZW50OiBzeXN0ZW1Db250ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoaGFzSW1hZ2VDb250ZW50KSB7XHJcbiAgICAgIC8vIElmIHRoZXJlJ3MgYWxyZWFkeSBhIHN5c3RlbSBtZXNzYWdlIGJ1dCBub3cgd2UncmUgZ2V0dGluZyBpbWFnZSBjb250ZW50LFxyXG4gICAgICAvLyBlbmhhbmNlIHRoZSBleGlzdGluZyBzeXN0ZW0gbWVzc2FnZVxyXG4gICAgICBjb25zdCBzeXN0ZW1JbmRleCA9IG1lc3NhZ2VzLmZpbmRJbmRleChtc2cgPT4gbXNnLnJvbGUgPT09ICdzeXN0ZW0nKTtcclxuICAgICAgaWYgKHN5c3RlbUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIG1lc3NhZ2VzW3N5c3RlbUluZGV4XS5jb250ZW50ICs9IGBcclxuQWRkaXRpb25hbGx5LCB0aGUgdXNlciBoYXMgc2hhcmVkIGFuIGltYWdlIG9mIGEgaG9tZXdvcmsgcHJvYmxlbS4gXHJcblBsZWFzZSBwcm92aWRlIGhlbHBmdWwgZ3VpZGFuY2UgYmFzZWQgb24gdGhlIGRlc2NyaXB0aW9uIHRoZXkgcHJvdmlkZSBhYm91dCB0aGUgaW1hZ2UuYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGwgdGhlIEdyb3EgQVBJXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICdodHRwczovL2FwaS5ncm9xLmNvbS9vcGVuYWkvdjEvY2hhdC9jb21wbGV0aW9ucycsXHJcbiAgICAgIHtcclxuICAgICAgICBtb2RlbCxcclxuICAgICAgICBtZXNzYWdlcyxcclxuICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxyXG4gICAgICAgIG1heF90b2tlbnM6IDIwNDgsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXBpS2V5fWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIGZyb20gR3JvcVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGxpbmcgR3JvcSBBUEk6JywgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAge1xyXG4gICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIGdldCByZXNwb25zZSBmcm9tIEdyb3EnLFxyXG4gICAgICAgIGRldGFpbHM6IGVycm9yLnJlc3BvbnNlPy5kYXRhPy5lcnJvcj8ubWVzc2FnZSB8fCBlcnJvci5tZXNzYWdlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHN0YXR1czogZXJyb3IucmVzcG9uc2U/LnN0YXR1cyB8fCA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEhhbmRsZSBPUFRJT05TIHJlcXVlc3RzIGZvciBDT1JTXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBPUFRJT05TKCkge1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7fSwgeyBzdGF0dXM6IDIwMCB9KTtcclxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXhpb3MiLCJHUk9RX0FQSV9LRVkiLCJpc1ZhbGlkUmVxdWVzdCIsImJvZHkiLCJBcnJheSIsImlzQXJyYXkiLCJtZXNzYWdlcyIsImV2ZXJ5IiwibXNnIiwiaW5jbHVkZXMiLCJyb2xlIiwiY29udGVudCIsIlBPU1QiLCJyZXF1ZXN0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibGFuZ3VhZ2UiLCJtb2RlbCIsImFwaUtleSIsImhhc0ltYWdlQ29udGVudCIsInNvbWUiLCJzeXN0ZW1Db250ZW50IiwidW5zaGlmdCIsInN5c3RlbUluZGV4IiwiZmluZEluZGV4IiwicmVzcG9uc2UiLCJwb3N0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiaGVhZGVycyIsImRhdGEiLCJjb25zb2xlIiwibWVzc2FnZSIsImRldGFpbHMiLCJPUFRJT05TIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/groq/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/get-intrinsic","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-symbols","vendor-chunks/delayed-stream","vendor-chunks/function-bind","vendor-chunks/es-set-tostringtag","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/dunder-proto","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/has-flag","vendor-chunks/es-define-property","vendor-chunks/gopd","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/es-object-atoms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgroq%2Froute&page=%2Fapi%2Fgroq%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgroq%2Froute.ts&appDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91814%5CDesktop%5CGroq&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();