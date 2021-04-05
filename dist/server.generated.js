/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./config/config.js?");

/***/ }),

/***/ "./server/controllers/company.controller.js":
/*!**************************************************!*\
  !*** ./server/controllers/company.controller.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_companies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/companies.json */ \"./server/helpers/companies.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst list = async (req, res) => {\n  try {\n    let companies = await _helpers_companies_json__WEBPACK_IMPORTED_MODULE_0__;\n    res.json(companies);\n  } catch (err) {\n    return res.status(400).json({\n      error: err\n    });\n  }\n};\n\nconst _default = {\n  list\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, \"list\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\company.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\company.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/controllers/company.controller.js?");

/***/ }),

/***/ "./server/controllers/course.controller.js":
/*!*************************************************!*\
  !*** ./server/controllers/course.controller.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_courses_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/courses.json */ \"./server/helpers/courses.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst list = async (req, res) => {\n  try {\n    let courses = await _helpers_courses_json__WEBPACK_IMPORTED_MODULE_0__;\n    res.json(courses);\n  } catch (err) {\n    return res.status(400).json({\n      error: err\n    });\n  }\n};\n\nconst _default = {\n  list\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, \"list\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\course.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\course.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/controllers/course.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_users_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/users.json */ \"./server/helpers/users.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst list = async (req, res) => {\n  try {\n    let users = await _helpers_users_json__WEBPACK_IMPORTED_MODULE_0__;\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: err\n    });\n  }\n};\n\nconst _default = {\n  list\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, \"list\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_api_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/api.routes */ \"./server/routes/api.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()()); // mount routes\n\napp.use('/', _routes_api_routes__WEBPACK_IMPORTED_MODULE_6__.default); //bundle client\n\n_devBundle__WEBPACK_IMPORTED_MODULE_7__.default.compile(app);\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/express.js?");

/***/ }),

/***/ "./server/routes/api.routes.js":
/*!*************************************!*\
  !*** ./server/routes/api.routes.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_company_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/company.controller */ \"./server/controllers/company.controller.js\");\n/* harmony import */ var _controllers_course_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/course.controller */ \"./server/controllers/course.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/users\").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.list);\nrouter.route(\"/api/companies\").get(_controllers_company_controller__WEBPACK_IMPORTED_MODULE_2__.default.list);\nrouter.route(\"/api/courses\").get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_3__.default.list);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\routes\\\\api.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\routes\\\\api.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./server/routes/api.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n_express__WEBPACK_IMPORTED_MODULE_1__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.port);\n});\n\n//# sourceURL=webpack://react-app/./server/server.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'src/index.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.m?js$/,\n      exclude: /node_modules/,\n      use: 'babel-loader'\n    }, {\n      test: /\\.css$/i,\n      exclude: /node_modules/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://react-app/./webpack.config.client.js?");

/***/ }),

/***/ "./server/helpers/companies.json":
/*!***************************************!*\
  !*** ./server/helpers/companies.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"username\":\"Bret\",\"email\":\"Sincere@april.biz\",\"phone\":\"1-770-736-8031 x56442\",\"website\":\"hildegard.org\",\"company\":\"Magazine Luiza\"},{\"id\":2,\"username\":\"Antonette\",\"email\":\"Shanna@melissa.tv\",\"phone\":\"010-692-6593 x09125\",\"website\":\"anastasia.net\",\"company\":\"Carrefour\"},{\"id\":3,\"username\":\"Samantha\",\"email\":\"Nathan@yesenia.net\",\"phone\":\"1-463-123-4447\",\"website\":\"ramiro.info\",\"company\":\"Uber\"},{\"id\":4,\"name\":\"Lojas Americanas\",\"username\":\"Karianne\",\"email\":\"Julianne.OConner@kory.org\",\"phone\":\"493-170-9623 x156\",\"website\":\"kale.biz\",\"company\":\"Lojas Americanas\"}]');\n\n//# sourceURL=webpack://react-app/./server/helpers/companies.json?");

/***/ }),

/***/ "./server/helpers/courses.json":
/*!*************************************!*\
  !*** ./server/helpers/courses.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"course\":\"Ciência da Computação\",\"duration\":\"1 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":2,\"course\":\"Sistemas de Informação\",\"duration\":\"2 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":3,\"course\":\"Análise e Desenvolvimento de Sistemas\",\"duration\":\"3 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":4,\"course\":\"Gestão da Tecnologia da Informação\",\"duration\":\"4 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":5,\"course\":\"Engenharia da Computação\",\"duration\":\"5 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":6,\"course\":\"Rede de Computadores\",\"duration\":\"6 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"},{\"id\":7,\"course\":\"Banco de Dados\",\"duration\":\"7 mês\",\"languaje\":\"pt\",\"skills\":[\"Linux\",\"React\",\"Node\"],\"description\":\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\",\"created\":\"Geek University\"}]');\n\n//# sourceURL=webpack://react-app/./server/helpers/courses.json?");

/***/ }),

/***/ "./server/helpers/users.json":
/*!***********************************!*\
  !*** ./server/helpers/users.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"id\":1,\"name\":\"Leanne Graham\",\"username\":\"Bret\",\"email\":\"Sincere@april.biz\",\"address\":{\"street\":\"Kulas Light\",\"suite\":\"Apt. 556\",\"city\":\"Gwenborough\",\"zipcode\":\"92998-3874\",\"geo\":{\"lat\":\"-37.3159\",\"lng\":\"81.1496\"}},\"phone\":\"1-770-736-8031 x56442\",\"website\":\"hildegard.org\",\"company\":{\"name\":\"Romaguera-Crona\",\"catchPhrase\":\"Multi-layered client-server neural-net\",\"bs\":\"harness real-time e-markets\"}},{\"id\":2,\"name\":\"Ervin Howell\",\"username\":\"Antonette\",\"email\":\"Shanna@melissa.tv\",\"address\":{\"street\":\"Victor Plains\",\"suite\":\"Suite 879\",\"city\":\"Wisokyburgh\",\"zipcode\":\"90566-7771\",\"geo\":{\"lat\":\"-43.9509\",\"lng\":\"-34.4618\"}},\"phone\":\"010-692-6593 x09125\",\"website\":\"anastasia.net\",\"company\":{\"name\":\"Deckow-Crist\",\"catchPhrase\":\"Proactive didactic contingency\",\"bs\":\"synergize scalable supply-chains\"}},{\"id\":3,\"name\":\"Clementine Bauch\",\"username\":\"Samantha\",\"email\":\"Nathan@yesenia.net\",\"address\":{\"street\":\"Douglas Extension\",\"suite\":\"Suite 847\",\"city\":\"McKenziehaven\",\"zipcode\":\"59590-4157\",\"geo\":{\"lat\":\"-68.6102\",\"lng\":\"-47.0653\"}},\"phone\":\"1-463-123-4447\",\"website\":\"ramiro.info\",\"company\":{\"name\":\"Romaguera-Jacobson\",\"catchPhrase\":\"Face to face bifurcated interface\",\"bs\":\"e-enable strategic applications\"}},{\"id\":4,\"name\":\"Patricia Lebsack\",\"username\":\"Karianne\",\"email\":\"Julianne.OConner@kory.org\",\"address\":{\"street\":\"Hoeger Mall\",\"suite\":\"Apt. 692\",\"city\":\"South Elvis\",\"zipcode\":\"53919-4257\",\"geo\":{\"lat\":\"29.4572\",\"lng\":\"-164.2990\"}},\"phone\":\"493-170-9623 x156\",\"website\":\"kale.biz\",\"company\":{\"name\":\"Robel-Corkery\",\"catchPhrase\":\"Multi-tiered zero tolerance productivity\",\"bs\":\"transition cutting-edge web services\"}},{\"id\":5,\"name\":\"Chelsey Dietrich\",\"username\":\"Kamren\",\"email\":\"Lucio_Hettinger@annie.ca\",\"address\":{\"street\":\"Skiles Walks\",\"suite\":\"Suite 351\",\"city\":\"Roscoeview\",\"zipcode\":\"33263\",\"geo\":{\"lat\":\"-31.8129\",\"lng\":\"62.5342\"}},\"phone\":\"(254)954-1289\",\"website\":\"demarco.info\",\"company\":{\"name\":\"Keebler LLC\",\"catchPhrase\":\"User-centric fault-tolerant solution\",\"bs\":\"revolutionize end-to-end systems\"}},{\"id\":6,\"name\":\"Mrs. Dennis Schulist\",\"username\":\"Leopoldo_Corkery\",\"email\":\"Karley_Dach@jasper.info\",\"address\":{\"street\":\"Norberto Crossing\",\"suite\":\"Apt. 950\",\"city\":\"South Christy\",\"zipcode\":\"23505-1337\",\"geo\":{\"lat\":\"-71.4197\",\"lng\":\"71.7478\"}},\"phone\":\"1-477-935-8478 x6430\",\"website\":\"ola.org\",\"company\":{\"name\":\"Considine-Lockman\",\"catchPhrase\":\"Synchronised bottom-line interface\",\"bs\":\"e-enable innovative applications\"}},{\"id\":7,\"name\":\"Kurtis Weissnat\",\"username\":\"Elwyn.Skiles\",\"email\":\"Telly.Hoeger@billy.biz\",\"address\":{\"street\":\"Rex Trail\",\"suite\":\"Suite 280\",\"city\":\"Howemouth\",\"zipcode\":\"58804-1099\",\"geo\":{\"lat\":\"24.8918\",\"lng\":\"21.8984\"}},\"phone\":\"210.067.6132\",\"website\":\"elvis.io\",\"company\":{\"name\":\"Johns Group\",\"catchPhrase\":\"Configurable multimedia task-force\",\"bs\":\"generate enterprise e-tailers\"}},{\"id\":8,\"name\":\"Nicholas Runolfsdottir V\",\"username\":\"Maxime_Nienow\",\"email\":\"Sherwood@rosamond.me\",\"address\":{\"street\":\"Ellsworth Summit\",\"suite\":\"Suite 729\",\"city\":\"Aliyaview\",\"zipcode\":\"45169\",\"geo\":{\"lat\":\"-14.3990\",\"lng\":\"-120.7677\"}},\"phone\":\"586.493.6943 x140\",\"website\":\"jacynthe.com\",\"company\":{\"name\":\"Abernathy Group\",\"catchPhrase\":\"Implemented secondary concept\",\"bs\":\"e-enable extensible e-tailers\"}},{\"id\":9,\"name\":\"Glenna Reichert\",\"username\":\"Delphine\",\"email\":\"Chaim_McDermott@dana.io\",\"address\":{\"street\":\"Dayna Park\",\"suite\":\"Suite 449\",\"city\":\"Bartholomebury\",\"zipcode\":\"76495-3109\",\"geo\":{\"lat\":\"24.6463\",\"lng\":\"-168.8889\"}},\"phone\":\"(775)976-6794 x41206\",\"website\":\"conrad.com\",\"company\":{\"name\":\"Yost and Sons\",\"catchPhrase\":\"Switchable contextually-based project\",\"bs\":\"aggregate real-time technologies\"}},{\"id\":10,\"name\":\"Clementina DuBuque\",\"username\":\"Moriah.Stanton\",\"email\":\"Rey.Padberg@karina.biz\",\"address\":{\"street\":\"Kattie Turnpike\",\"suite\":\"Suite 198\",\"city\":\"Lebsackbury\",\"zipcode\":\"31428-2261\",\"geo\":{\"lat\":\"-38.2386\",\"lng\":\"57.2232\"}},\"phone\":\"024-648-3804\",\"website\":\"ambrose.net\",\"company\":{\"name\":\"Hoeger LLC\",\"catchPhrase\":\"Centralized empowering task-force\",\"bs\":\"target end-to-end models\"}}]');\n\n//# sourceURL=webpack://react-app/./server/helpers/users.json?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;