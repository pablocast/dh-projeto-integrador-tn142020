module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/dist/"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./config/config.js":
      /*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar config = {\n  env: "development" || false,\n  port: process.env.PORT || 3003\n};\nvar _default = config;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, "config", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\config\\\\config.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\config\\\\config.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./config/config.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        eval(
          "\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?"
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        eval(
          "\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?"
        );

        /***/
      },

    /***/ "./node_modules/webpack/buildin/harmony-module.js":
      /*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, "loaded", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "id", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "exports", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?'
        );

        /***/
      },

    /***/ "./node_modules/webpack/buildin/module.js":
      /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, "loaded", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "id", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?'
        );

        /***/
      },

    /***/ "./server/controllers/company.controller.js":
      /*!**************************************************!*\
  !*** ./server/controllers/company.controller.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_companies_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/companies.json */ "./server/helpers/companies.json");\nvar _helpers_companies_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../helpers/companies.json */ "./server/helpers/companies.json", 1);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar list = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {\n    var companies;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _helpers_companies_json__WEBPACK_IMPORTED_MODULE_2__;\n\n          case 3:\n            companies = _context.sent;\n            res.json(companies);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context["catch"](0);\n            return _context.abrupt("return", res.status(400).json({\n              error: _context.t0\n            }));\n\n          case 10:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function list(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = {\n  list: list\n};\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, "list", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\company.controller.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\company.controller.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/controllers/company.controller.js?'
        );

        /***/
      },

    /***/ "./server/controllers/course.controller.js":
      /*!*************************************************!*\
  !*** ./server/controllers/course.controller.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_courses_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/courses.json */ "./server/helpers/courses.json");\nvar _helpers_courses_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../helpers/courses.json */ "./server/helpers/courses.json", 1);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar list = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {\n    var courses;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _helpers_courses_json__WEBPACK_IMPORTED_MODULE_2__;\n\n          case 3:\n            courses = _context.sent;\n            res.json(courses);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context["catch"](0);\n            return _context.abrupt("return", res.status(400).json({\n              error: _context.t0\n            }));\n\n          case 10:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function list(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = {\n  list: list\n};\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, "list", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\course.controller.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\course.controller.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/controllers/course.controller.js?'
        );

        /***/
      },

    /***/ "./server/controllers/user.controller.js":
      /*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_users_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/users.json */ "./server/helpers/users.json");\nvar _helpers_users_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../helpers/users.json */ "./server/helpers/users.json", 1);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\n\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar list = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {\n    var users;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _helpers_users_json__WEBPACK_IMPORTED_MODULE_2__;\n\n          case 3:\n            users = _context.sent;\n            res.json(users);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context["catch"](0);\n            return _context.abrupt("return", res.status(400).json({\n              error: _context.t0\n            }));\n\n          case 10:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function list(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar _default = {\n  list: list\n};\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(list, "list", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\user.controller.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\controllers\\\\user.controller.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?'
        );

        /***/
      },

    /***/ "./server/devBundle.js":
      /*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ "./config/config.js");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ "webpack");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ "./webpack.config.client.js");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].env === "development") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, "compile", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\devBundle.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\devBundle.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?'
        );

        /***/
      },

    /***/ "./server/express.js":
      /*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ "helmet");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_api_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/api.routes */ "./server/routes/api.routes.js");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devBundle */ "./server/devBundle.js");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../template */ "./template.js");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _src_router___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../src/router/ */ "./src/router/index.js");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "react-router");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // modules for server side rendering\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()()); //bundle client\n\n_devBundle__WEBPACK_IMPORTED_MODULE_7__["default"].compile(app); // mount routes\n\napp.use("/", _routes_api_routes__WEBPACK_IMPORTED_MODULE_6__["default"]);\napp.use(\'/dist\', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_8___default.a.join(CURRENT_WORKING_DIR, \'dist\')));\napp.get("*", function (req, res) {\n  var context = {};\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_13__["ServerStyleSheet"]();\n  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_10__["renderToString"])(sheet.collectStyles( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_12__["StaticRouter"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_13__["StyleSheetManager"], {\n    sheet: sheet.instance\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_src_router___WEBPACK_IMPORTED_MODULE_11__["default"], null)))));\n  var css = sheet.sheet.getStyleTags();\n  console.log(\'Static stylesheet:\\n\', styleTags);\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_9__["default"])({\n    html: html,\n    css: css\n  }));\n});\nvar _default = app;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, "CURRENT_WORKING_DIR", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\express.js");\n  reactHotLoader.register(app, "app", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\express.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\express.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/express.js?'
        );

        /***/
      },

    /***/ "./server/helpers/companies.json":
      /*!***************************************!*\
  !*** ./server/helpers/companies.json ***!
  \***************************************/
      /*! exports provided: 0, 1, 2, 3, default */
      /***/ function (module) {
        eval(
          'module.exports = JSON.parse("[{\\"id\\":1,\\"username\\":\\"Bret\\",\\"email\\":\\"Sincere@april.biz\\",\\"phone\\":\\"1-770-736-8031 x56442\\",\\"website\\":\\"hildegard.org\\",\\"company\\":\\"Magazine Luiza\\"},{\\"id\\":2,\\"username\\":\\"Antonette\\",\\"email\\":\\"Shanna@melissa.tv\\",\\"phone\\":\\"010-692-6593 x09125\\",\\"website\\":\\"anastasia.net\\",\\"company\\":\\"Carrefour\\"},{\\"id\\":3,\\"username\\":\\"Samantha\\",\\"email\\":\\"Nathan@yesenia.net\\",\\"phone\\":\\"1-463-123-4447\\",\\"website\\":\\"ramiro.info\\",\\"company\\":\\"Uber\\"},{\\"id\\":4,\\"name\\":\\"Lojas Americanas\\",\\"username\\":\\"Karianne\\",\\"email\\":\\"Julianne.OConner@kory.org\\",\\"phone\\":\\"493-170-9623 x156\\",\\"website\\":\\"kale.biz\\",\\"company\\":\\"Lojas Americanas\\"}]");\n\n//# sourceURL=webpack:///./server/helpers/companies.json?'
        );

        /***/
      },

    /***/ "./server/helpers/courses.json":
      /*!*************************************!*\
  !*** ./server/helpers/courses.json ***!
  \*************************************/
      /*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
      /***/ function (module) {
        eval(
          'module.exports = JSON.parse("[{\\"id\\":1,\\"course\\":\\"Ciência da Computação\\",\\"duration\\":\\"1 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":2,\\"course\\":\\"Sistemas de Informação\\",\\"duration\\":\\"2 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":3,\\"course\\":\\"Análise e Desenvolvimento de Sistemas\\",\\"duration\\":\\"3 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":4,\\"course\\":\\"Gestão da Tecnologia da Informação\\",\\"duration\\":\\"4 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":5,\\"course\\":\\"Engenharia da Computação\\",\\"duration\\":\\"5 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":6,\\"course\\":\\"Rede de Computadores\\",\\"duration\\":\\"6 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"},{\\"id\\":7,\\"course\\":\\"Banco de Dados\\",\\"duration\\":\\"7 mês\\",\\"languaje\\":\\"pt\\",\\"skills\\":[\\"Linux\\",\\"React\\",\\"Node\\"],\\"description\\":\\"Aprenda Python 3.8.5 com Expressões Lambdas, Iteradores, Geradores, Orientação a Objetos e muito mais!\\",\\"created\\":\\"Geek University\\"}]");\n\n//# sourceURL=webpack:///./server/helpers/courses.json?'
        );

        /***/
      },

    /***/ "./server/helpers/users.json":
      /*!***********************************!*\
  !*** ./server/helpers/users.json ***!
  \***********************************/
      /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
      /***/ function (module) {
        eval(
          'module.exports = JSON.parse("[{\\"id\\":1,\\"name\\":\\"Leanne Graham\\",\\"username\\":\\"Bret\\",\\"email\\":\\"Sincere@april.biz\\",\\"address\\":{\\"street\\":\\"Kulas Light\\",\\"suite\\":\\"Apt. 556\\",\\"city\\":\\"Gwenborough\\",\\"zipcode\\":\\"92998-3874\\",\\"geo\\":{\\"lat\\":\\"-37.3159\\",\\"lng\\":\\"81.1496\\"}},\\"phone\\":\\"1-770-736-8031 x56442\\",\\"website\\":\\"hildegard.org\\",\\"company\\":{\\"name\\":\\"Romaguera-Crona\\",\\"catchPhrase\\":\\"Multi-layered client-server neural-net\\",\\"bs\\":\\"harness real-time e-markets\\"}},{\\"id\\":2,\\"name\\":\\"Ervin Howell\\",\\"username\\":\\"Antonette\\",\\"email\\":\\"Shanna@melissa.tv\\",\\"address\\":{\\"street\\":\\"Victor Plains\\",\\"suite\\":\\"Suite 879\\",\\"city\\":\\"Wisokyburgh\\",\\"zipcode\\":\\"90566-7771\\",\\"geo\\":{\\"lat\\":\\"-43.9509\\",\\"lng\\":\\"-34.4618\\"}},\\"phone\\":\\"010-692-6593 x09125\\",\\"website\\":\\"anastasia.net\\",\\"company\\":{\\"name\\":\\"Deckow-Crist\\",\\"catchPhrase\\":\\"Proactive didactic contingency\\",\\"bs\\":\\"synergize scalable supply-chains\\"}},{\\"id\\":3,\\"name\\":\\"Clementine Bauch\\",\\"username\\":\\"Samantha\\",\\"email\\":\\"Nathan@yesenia.net\\",\\"address\\":{\\"street\\":\\"Douglas Extension\\",\\"suite\\":\\"Suite 847\\",\\"city\\":\\"McKenziehaven\\",\\"zipcode\\":\\"59590-4157\\",\\"geo\\":{\\"lat\\":\\"-68.6102\\",\\"lng\\":\\"-47.0653\\"}},\\"phone\\":\\"1-463-123-4447\\",\\"website\\":\\"ramiro.info\\",\\"company\\":{\\"name\\":\\"Romaguera-Jacobson\\",\\"catchPhrase\\":\\"Face to face bifurcated interface\\",\\"bs\\":\\"e-enable strategic applications\\"}},{\\"id\\":4,\\"name\\":\\"Patricia Lebsack\\",\\"username\\":\\"Karianne\\",\\"email\\":\\"Julianne.OConner@kory.org\\",\\"address\\":{\\"street\\":\\"Hoeger Mall\\",\\"suite\\":\\"Apt. 692\\",\\"city\\":\\"South Elvis\\",\\"zipcode\\":\\"53919-4257\\",\\"geo\\":{\\"lat\\":\\"29.4572\\",\\"lng\\":\\"-164.2990\\"}},\\"phone\\":\\"493-170-9623 x156\\",\\"website\\":\\"kale.biz\\",\\"company\\":{\\"name\\":\\"Robel-Corkery\\",\\"catchPhrase\\":\\"Multi-tiered zero tolerance productivity\\",\\"bs\\":\\"transition cutting-edge web services\\"}},{\\"id\\":5,\\"name\\":\\"Chelsey Dietrich\\",\\"username\\":\\"Kamren\\",\\"email\\":\\"Lucio_Hettinger@annie.ca\\",\\"address\\":{\\"street\\":\\"Skiles Walks\\",\\"suite\\":\\"Suite 351\\",\\"city\\":\\"Roscoeview\\",\\"zipcode\\":\\"33263\\",\\"geo\\":{\\"lat\\":\\"-31.8129\\",\\"lng\\":\\"62.5342\\"}},\\"phone\\":\\"(254)954-1289\\",\\"website\\":\\"demarco.info\\",\\"company\\":{\\"name\\":\\"Keebler LLC\\",\\"catchPhrase\\":\\"User-centric fault-tolerant solution\\",\\"bs\\":\\"revolutionize end-to-end systems\\"}},{\\"id\\":6,\\"name\\":\\"Mrs. Dennis Schulist\\",\\"username\\":\\"Leopoldo_Corkery\\",\\"email\\":\\"Karley_Dach@jasper.info\\",\\"address\\":{\\"street\\":\\"Norberto Crossing\\",\\"suite\\":\\"Apt. 950\\",\\"city\\":\\"South Christy\\",\\"zipcode\\":\\"23505-1337\\",\\"geo\\":{\\"lat\\":\\"-71.4197\\",\\"lng\\":\\"71.7478\\"}},\\"phone\\":\\"1-477-935-8478 x6430\\",\\"website\\":\\"ola.org\\",\\"company\\":{\\"name\\":\\"Considine-Lockman\\",\\"catchPhrase\\":\\"Synchronised bottom-line interface\\",\\"bs\\":\\"e-enable innovative applications\\"}},{\\"id\\":7,\\"name\\":\\"Kurtis Weissnat\\",\\"username\\":\\"Elwyn.Skiles\\",\\"email\\":\\"Telly.Hoeger@billy.biz\\",\\"address\\":{\\"street\\":\\"Rex Trail\\",\\"suite\\":\\"Suite 280\\",\\"city\\":\\"Howemouth\\",\\"zipcode\\":\\"58804-1099\\",\\"geo\\":{\\"lat\\":\\"24.8918\\",\\"lng\\":\\"21.8984\\"}},\\"phone\\":\\"210.067.6132\\",\\"website\\":\\"elvis.io\\",\\"company\\":{\\"name\\":\\"Johns Group\\",\\"catchPhrase\\":\\"Configurable multimedia task-force\\",\\"bs\\":\\"generate enterprise e-tailers\\"}},{\\"id\\":8,\\"name\\":\\"Nicholas Runolfsdottir V\\",\\"username\\":\\"Maxime_Nienow\\",\\"email\\":\\"Sherwood@rosamond.me\\",\\"address\\":{\\"street\\":\\"Ellsworth Summit\\",\\"suite\\":\\"Suite 729\\",\\"city\\":\\"Aliyaview\\",\\"zipcode\\":\\"45169\\",\\"geo\\":{\\"lat\\":\\"-14.3990\\",\\"lng\\":\\"-120.7677\\"}},\\"phone\\":\\"586.493.6943 x140\\",\\"website\\":\\"jacynthe.com\\",\\"company\\":{\\"name\\":\\"Abernathy Group\\",\\"catchPhrase\\":\\"Implemented secondary concept\\",\\"bs\\":\\"e-enable extensible e-tailers\\"}},{\\"id\\":9,\\"name\\":\\"Glenna Reichert\\",\\"username\\":\\"Delphine\\",\\"email\\":\\"Chaim_McDermott@dana.io\\",\\"address\\":{\\"street\\":\\"Dayna Park\\",\\"suite\\":\\"Suite 449\\",\\"city\\":\\"Bartholomebury\\",\\"zipcode\\":\\"76495-3109\\",\\"geo\\":{\\"lat\\":\\"24.6463\\",\\"lng\\":\\"-168.8889\\"}},\\"phone\\":\\"(775)976-6794 x41206\\",\\"website\\":\\"conrad.com\\",\\"company\\":{\\"name\\":\\"Yost and Sons\\",\\"catchPhrase\\":\\"Switchable contextually-based project\\",\\"bs\\":\\"aggregate real-time technologies\\"}},{\\"id\\":10,\\"name\\":\\"Clementina DuBuque\\",\\"username\\":\\"Moriah.Stanton\\",\\"email\\":\\"Rey.Padberg@karina.biz\\",\\"address\\":{\\"street\\":\\"Kattie Turnpike\\",\\"suite\\":\\"Suite 198\\",\\"city\\":\\"Lebsackbury\\",\\"zipcode\\":\\"31428-2261\\",\\"geo\\":{\\"lat\\":\\"-38.2386\\",\\"lng\\":\\"57.2232\\"}},\\"phone\\":\\"024-648-3804\\",\\"website\\":\\"ambrose.net\\",\\"company\\":{\\"name\\":\\"Hoeger LLC\\",\\"catchPhrase\\":\\"Centralized empowering task-force\\",\\"bs\\":\\"target end-to-end models\\"}}]");\n\n//# sourceURL=webpack:///./server/helpers/users.json?'
        );

        /***/
      },

    /***/ "./server/routes/api.routes.js":
      /*!*************************************!*\
  !*** ./server/routes/api.routes.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ "./server/controllers/user.controller.js");\n/* harmony import */ var _controllers_company_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/company.controller */ "./server/controllers/company.controller.js");\n/* harmony import */ var _controllers_course_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/course.controller */ "./server/controllers/course.controller.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route("/api/users").get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__["default"].list);\nrouter.route("/api/companies").get(_controllers_company_controller__WEBPACK_IMPORTED_MODULE_2__["default"].list);\nrouter.route("/api/courses").get(_controllers_course_controller__WEBPACK_IMPORTED_MODULE_3__["default"].list);\nvar _default = router;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, "router", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\routes\\\\api.routes.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\server\\\\routes\\\\api.routes.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./server/routes/api.routes.js?'
        );

        /***/
      },

    /***/ "./server/server.js":
      /*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ "./config/config.js");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ "./server/express.js");\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n_express__WEBPACK_IMPORTED_MODULE_1__["default"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__["default"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info("Server started on port %s.", _config_config__WEBPACK_IMPORTED_MODULE_0__["default"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?'
        );

        /***/
      },

    /***/ "./src/assets/img sync recursive ^\\.\\/.*$":
      /*!**************************************!*\
  !*** ./src/assets/img sync ^\.\/.*$ ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'var map = {\n\t"./JavaScript-logo.png": "./src/assets/img/JavaScript-logo.png",\n\t"./amazon-white.png": "./src/assets/img/amazon-white.png",\n\t"./b2w.png": "./src/assets/img/b2w.png",\n\t"./banner.png": "./src/assets/img/banner.png",\n\t"./css-logo.png": "./src/assets/img/css-logo.png",\n\t"./empresa.png": "./src/assets/img/empresa.png",\n\t"./facebook-white.png": "./src/assets/img/facebook-white.png",\n\t"./git-logo.jpg": "./src/assets/img/git-logo.jpg",\n\t"./google-white.png": "./src/assets/img/google-white.png",\n\t"./html-logo.png": "./src/assets/img/html-logo.png",\n\t"./instagram-white.png": "./src/assets/img/instagram-white.png",\n\t"./logo.jpg": "./src/assets/img/logo.jpg",\n\t"./logo_transp.png": "./src/assets/img/logo_transp.png",\n\t"./logo_white.png": "./src/assets/img/logo_white.png",\n\t"./magazineluiza.png": "./src/assets/img/magazineluiza.png",\n\t"./mercadolivre.jpg": "./src/assets/img/mercadolivre.jpg",\n\t"./microsoft.png": "./src/assets/img/microsoft.png",\n\t"./olx.png": "./src/assets/img/olx.png",\n\t"./person-1.jpg": "./src/assets/img/person-1.jpg",\n\t"./person-2.jpg": "./src/assets/img/person-2.jpg",\n\t"./person-3.png": "./src/assets/img/person-3.png",\n\t"./person-4.jpg": "./src/assets/img/person-4.jpg",\n\t"./plataforma.jpg": "./src/assets/img/plataforma.jpg",\n\t"./reactjs-logo.jpg": "./src/assets/img/reactjs-logo.jpg",\n\t"./skills.png": "./src/assets/img/skills.png",\n\t"./spotify.png": "./src/assets/img/spotify.png",\n\t"./uber-white.png": "./src/assets/img/uber-white.png",\n\t"./uber.png": "./src/assets/img/uber.png",\n\t"./xd-logo.png": "./src/assets/img/xd-logo.png",\n\t"./young-woman-zerocost.png": "./src/assets/img/young-woman-zerocost.png"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./src/assets/img sync recursive ^\\\\.\\\\/.*$";\n\n//# sourceURL=webpack:///./src/assets/img_sync_^\\.\\/.*$?'
        );

        /***/
      },

    /***/ "./src/assets/img/JavaScript-logo.png":
      /*!********************************************!*\
  !*** ./src/assets/img/JavaScript-logo.png ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2523abba03d40078695a5ccf7934dda.png");\n\n//# sourceURL=webpack:///./src/assets/img/JavaScript-logo.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/amazon-white.png":
      /*!*****************************************!*\
  !*** ./src/assets/img/amazon-white.png ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "42df4a84ee2e506b631b2f366feee0ef.png");\n\n//# sourceURL=webpack:///./src/assets/img/amazon-white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/b2w.png":
      /*!********************************!*\
  !*** ./src/assets/img/b2w.png ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fed31f5d6a611bc012c32ebf6850246.png");\n\n//# sourceURL=webpack:///./src/assets/img/b2w.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/banner.png":
      /*!***********************************!*\
  !*** ./src/assets/img/banner.png ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "225d6bc4277f9851d234a4f7e361b761.png");\n\n//# sourceURL=webpack:///./src/assets/img/banner.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/css-logo.png":
      /*!*************************************!*\
  !*** ./src/assets/img/css-logo.png ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "02d225c7df0b28341d8d5dff5fbda2a6.png");\n\n//# sourceURL=webpack:///./src/assets/img/css-logo.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/empresa.png":
      /*!************************************!*\
  !*** ./src/assets/img/empresa.png ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a082232cfdda80a0780da5bcac2c3de5.png");\n\n//# sourceURL=webpack:///./src/assets/img/empresa.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/facebook-white.png":
      /*!*******************************************!*\
  !*** ./src/assets/img/facebook-white.png ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e11ca581ea47b2de16251d2a11a36de4.png");\n\n//# sourceURL=webpack:///./src/assets/img/facebook-white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/git-logo.jpg":
      /*!*************************************!*\
  !*** ./src/assets/img/git-logo.jpg ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "66d3de12887c9919eb7325e9dee64133.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/git-logo.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/google-white.png":
      /*!*****************************************!*\
  !*** ./src/assets/img/google-white.png ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "020ffcea59e92048e739911ddde6ba39.png");\n\n//# sourceURL=webpack:///./src/assets/img/google-white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/html-logo.png":
      /*!**************************************!*\
  !*** ./src/assets/img/html-logo.png ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffe228fde38b5ea3b4e2cedd241f98ab.png");\n\n//# sourceURL=webpack:///./src/assets/img/html-logo.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/instagram-white.png":
      /*!********************************************!*\
  !*** ./src/assets/img/instagram-white.png ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "417fefc60405c1d6aab47523b44ceb11.png");\n\n//# sourceURL=webpack:///./src/assets/img/instagram-white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/logo.jpg":
      /*!*********************************!*\
  !*** ./src/assets/img/logo.jpg ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f74af4fd0221994b381543b11a03368a.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/logo.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/logo_transp.png":
      /*!****************************************!*\
  !*** ./src/assets/img/logo_transp.png ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "753724e350384eaeb82ff43ea3f0bae8.png");\n\n//# sourceURL=webpack:///./src/assets/img/logo_transp.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/logo_white.png":
      /*!***************************************!*\
  !*** ./src/assets/img/logo_white.png ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d5518d5c76866284fec0ea78a2c75bd.png");\n\n//# sourceURL=webpack:///./src/assets/img/logo_white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/magazineluiza.png":
      /*!******************************************!*\
  !*** ./src/assets/img/magazineluiza.png ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "73e260c64c0b01426bc7163f96e9d5d9.png");\n\n//# sourceURL=webpack:///./src/assets/img/magazineluiza.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/mercadolivre.jpg":
      /*!*****************************************!*\
  !*** ./src/assets/img/mercadolivre.jpg ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a63340f0c2f9339cc970b587c3399801.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/mercadolivre.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/microsoft.png":
      /*!**************************************!*\
  !*** ./src/assets/img/microsoft.png ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5533b54ae81a38fdb1b8e69347bc8a92.png");\n\n//# sourceURL=webpack:///./src/assets/img/microsoft.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/olx.png":
      /*!********************************!*\
  !*** ./src/assets/img/olx.png ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82f34c94b6a2fcddae6295205469e8ec.png");\n\n//# sourceURL=webpack:///./src/assets/img/olx.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/person-1.jpg":
      /*!*************************************!*\
  !*** ./src/assets/img/person-1.jpg ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2c5bfa685f123d0248d06d8648607ac1.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/person-1.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/person-2.jpg":
      /*!*************************************!*\
  !*** ./src/assets/img/person-2.jpg ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dcccdf3f5cc1d965ce81eee32a9370f3.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/person-2.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/person-3.png":
      /*!*************************************!*\
  !*** ./src/assets/img/person-3.png ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c71b345677553dc48d8f30732e9d8f15.png");\n\n//# sourceURL=webpack:///./src/assets/img/person-3.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/person-4.jpg":
      /*!*************************************!*\
  !*** ./src/assets/img/person-4.jpg ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "25628c32054c251cbedc26cb8e791889.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/person-4.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/plataforma.jpg":
      /*!***************************************!*\
  !*** ./src/assets/img/plataforma.jpg ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "38963afaf81accf6aa67cfaa9bce7c6b.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/plataforma.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/reactjs-logo.jpg":
      /*!*****************************************!*\
  !*** ./src/assets/img/reactjs-logo.jpg ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7927890cd8fdc8a6f5273bf2655dccd0.jpg");\n\n//# sourceURL=webpack:///./src/assets/img/reactjs-logo.jpg?'
        );

        /***/
      },

    /***/ "./src/assets/img/skills.png":
      /*!***********************************!*\
  !*** ./src/assets/img/skills.png ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a142e2baecd7407d7e870d4d89e6b6d1.png");\n\n//# sourceURL=webpack:///./src/assets/img/skills.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/spotify.png":
      /*!************************************!*\
  !*** ./src/assets/img/spotify.png ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b54fe3fdc1eff3d288c6c7087718cfdc.png");\n\n//# sourceURL=webpack:///./src/assets/img/spotify.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/uber-white.png":
      /*!***************************************!*\
  !*** ./src/assets/img/uber-white.png ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d0077a466e7918c0c0801fba06767d1.png");\n\n//# sourceURL=webpack:///./src/assets/img/uber-white.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/uber.png":
      /*!*********************************!*\
  !*** ./src/assets/img/uber.png ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a161521375fa5f50c43c6fcb1c357ce5.png");\n\n//# sourceURL=webpack:///./src/assets/img/uber.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/xd-logo.png":
      /*!************************************!*\
  !*** ./src/assets/img/xd-logo.png ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3dbe8888676cbb7d256309a2ff1ada89.png");\n\n//# sourceURL=webpack:///./src/assets/img/xd-logo.png?'
        );

        /***/
      },

    /***/ "./src/assets/img/young-woman-zerocost.png":
      /*!*************************************************!*\
  !*** ./src/assets/img/young-woman-zerocost.png ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55eb457cc2988ba3fddd69f693b00953.png");\n\n//# sourceURL=webpack:///./src/assets/img/young-woman-zerocost.png?'
        );

        /***/
      },

    /***/ "./src/components/admin/AdminFormCadastro.js":
      /*!***************************************************!*\
  !*** ./src/components/admin/AdminFormCadastro.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/admin/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _auth_ApiAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/ApiAuth */ "./src/components/auth/ApiAuth.js");\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nvar AdminFormCadastro = function AdminFormCadastro(props) {\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({\n    user: "",\n    password: "",\n    error: "",\n    directToAccess: false\n  }),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var handleChange = function handleChange(name) {\n    return function (event) {\n      setValues(_objectSpread(_objectSpread({}, values), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, event.target.value)));\n    };\n  };\n\n  var clickSubmit = function clickSubmit(event) {\n    event.preventDefault();\n    var user = {\n      user: values.user || undefined,\n      password: values.password || undefined\n    };\n    Object(_auth_ApiAuth__WEBPACK_IMPORTED_MODULE_8__["signin"])(user) ? setValues(_objectSpread(_objectSpread({}, values), {}, {\n      directToAccess: true\n    })) : setValues(_objectSpread(_objectSpread({}, values), {}, {\n      error: "Usuario ou Senha errados",\n      directToAccess: false\n    }));\n    sessionStorage.setItem("isAuthenticated", Object(_auth_ApiAuth__WEBPACK_IMPORTED_MODULE_8__["signin"])(user) ? true : false);\n  };\n\n  var directToAccess = values.directToAccess;\n\n  if (directToAccess) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {\n      to: {\n        pathname: "/admin/painel"\n      }\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "admin-main-section-content"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {\n    className: "Container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "Container__title"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 8,\n      offset: 2\n    },\n    className: "Container__title__text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {\n    className: "Container_tittle__text__inverse"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillLock"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    md: {\n      span: 6,\n      offset: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {\n    className: "Panel"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "Panel__heading"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {\n    className: "Panel__heading__text"\n  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "Panel__body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {\n    className: "simple-form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {\n    name: "utf8",\n    type: "hidden",\n    value: "\\u2713"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "Form-group email optional candidate_email"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {\n    className: "control-label usuario optional",\n    for: "candidate_usuario"\n  }, "Usuario"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {\n    className: "form-control string email optional",\n    autoFocus: "autofocus",\n    placeHolder: "Digite o seu usuario",\n    type: "usuario",\n    value: values.user,\n    onChange: handleChange("user"),\n    name: "candidate[usuario]",\n    id: "candidate_usuario"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "Form-group password optional candidate_password"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {\n    className: "control-label password optional",\n    for: "candidate_password"\n  }, "Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {\n    className: "form-control string password optional",\n    autoFocus: "autofocus",\n    placeHolder: "Digite a sua senha",\n    type: "password",\n    value: values.password,\n    onChange: handleChange("password"),\n    name: "candidate[password]",\n    id: "candidate_password"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row small-info-form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    className: "remember-me",\n    sm: {\n      span: 6\n    },\n    xs: {\n      span: 6\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    className: "Login-problems",\n    sm: {\n      span: 6\n    },\n    xs: {\n      span: 6\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {\n    class: "Text-right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {\n    href: "/password/new"\n  }, "Problemas com o Log in?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {\n    style: {\n      color: "red",\n      textAlign: "center"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiErrorWarningFill"], {\n    color: "red"\n  }), values.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {\n    type: "submit",\n    name: "commit",\n    value: "Entrar",\n    onClick: clickSubmit,\n    className: "btn btn btn-primary btn-lg btn-block"\n  }))))))));\n};\n\n__signature__(AdminFormCadastro, "useHistory{history}\\nuseState{[values, setValues]({\\n    user: \\"\\",\\n    password: \\"\\",\\n    error: \\"\\",\\n    directToAccess: false,\\n  })}", function () {\n  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];\n});\n\nvar _default = AdminFormCadastro;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AdminFormCadastro, "AdminFormCadastro", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\admin\\\\AdminFormCadastro.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\admin\\\\AdminFormCadastro.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/admin/AdminFormCadastro.js?'
        );

        /***/
      },

    /***/ "./src/components/admin/style.css":
      /*!****************************************!*\
  !*** ./src/components/admin/style.css ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".admin-main-section-content {\\r\\n    background-color:#ffffff !important ;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/admin/style.css?'
        );

        /***/
      },

    /***/ "./src/components/auth/ApiAuth.js":
      /*!****************************************!*\
  !*** ./src/components/auth/ApiAuth.js ***!
  \****************************************/
      /*! exports provided: signin */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar signin = function signin(user) {\n  var userAdmin = "admin",\n      passwordAdmin = "admin";\n\n  if (user.user == userAdmin && user.password == passwordAdmin) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, "signin", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\auth\\\\ApiAuth.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/auth/ApiAuth.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerBemVindo/index.js":
      /*!*****************************************************!*\
  !*** ./src/components/core/BannerBemVindo/index.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerBemVindo/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar BannerBemVindo = function BannerBemVindo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "This__main-section"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    className: "Container",\n    style: {\n      position: "relative"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 12\n    },\n    className: "This__Container__text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Bem-vindo!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Voc\\xEA \\xE9 empresa ou estudante?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    style: {\n      paddingTop: "16px",\n      zIndex: "999 !important"\n    },\n    className: "Row__botoes"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 2,\n      offset: 4\n    },\n    style: {\n      textAlign: "center",\n      left: "-36px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {\n    to: "/estudantes/sign_in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "button"\n  }, "Sou estudante"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 2\n    },\n    style: {\n      textAlign: "center",\n      paddingLeft: "12px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {\n    to: "/empresa/sign_in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "button"\n  }, "Sou empresa")))))));\n};\n\nvar _default = BannerBemVindo;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BannerBemVindo, "BannerBemVindo", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerBemVindo\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerBemVindo\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerBemVindo/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerBemVindo/style.css":
      /*!******************************************************!*\
  !*** ./src/components/core/BannerBemVindo/style.css ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../assets/img/plataforma.jpg */ "./src/assets/img/plataforma.jpg"));\n\n// Module\nexports.push([module.i, ".This__main-section {\\r\\n    background: linear-gradient(rgba(17, 39, 58, 0.8),\\r\\n            rgba(17, 39, 58, 0.8)),\\r\\n        url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\r\\n    height: 864px;\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    position: relative;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.This__main-section .This__Container__text {\\r\\n    padding-top: 80px;\\r\\n}\\r\\n\\r\\n.This__Container__text p {\\r\\n    color: white;\\r\\n    font-weight: 300;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.This__Container__text h1 {\\r\\n    color: white;\\r\\n    font-weight: 300;\\r\\n    text-align: center;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerBemVindo/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerCursos/index.js":
      /*!***************************************************!*\
  !*** ./src/components/core/BannerCursos/index.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerCursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_skills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/skills.png */ "./src/assets/img/skills.png");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Component2 = function Component2() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "skill-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "skill-container-img"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_skills_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "Quer desenvolver suas skills"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "skill-container-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "titulo"\n  }, "Quer desenvolver skills mais requisitadas do mercado ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    className: "material-icons font-blue"\n  }, "check_circle_outline"), "Desenvolvedor Full-Stack - MERN"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    className: "material-icons font-blue"\n  }, "check_circle_outline"), "Desenvolvedor Front-End-ReactJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    className: "material-icons font-blue"\n  }, "check_circle_outline"), "Desenvolvedor Back-End - NodeJS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    className: "material-icons font-blue"\n  }, "check_circle_outline"), "Desenvolvedor Mobile- React-Native"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    className: "material-icons font-blue"\n  }, "check_circle_outline"), "Desenvolvedor Mobile-Flutter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {\n    to: "/bemvindo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "button"\n  }, "Cadastra-se")))));\n};\n\nvar _default = Component2;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Component2, "Component2", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerCursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerCursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerCursos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerCursos/style.css":
      /*!****************************************************!*\
  !*** ./src/components/core/BannerCursos/style.css ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);\n\n// Module\nexports.push([module.i, ".skill-container {\\r\\n    background-color: #fff;\\r\\n    display: flex;\\r\\n    height: 83vh;\\r\\n    width: 100%;\\r\\n    margin-bottom: -60px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.skill-container-img {\\r\\n    width: 50%;\\r\\n}\\r\\n\\r\\n.skill-container-img img {\\r\\n    max-width: 75%;\\r\\n    float: right;\\r\\n}\\r\\n\\r\\n.skill-container-text {\\r\\n    width: 30%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin-top: -30px;\\r\\n    margin-left: 40px;\\r\\n}\\r\\n\\r\\nli {\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n[class^=\\"material-icons\\"] {\\r\\n    width: 30px;\\r\\n    position: relative;\\r\\n    top: 5px;\\r\\n    margin-right: 25px;\\r\\n    fill: #fff;\\r\\n}\\r\\n\\r\\n/* responsividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n\\r\\n.skill-container-img {\\r\\n    width: 50%;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.skill-container-img img{\\r\\n    width: 50%;\\r\\n    margin: auto;\\r\\n    float: none;\\r\\n}\\r\\n\\r\\n.skill-container-text {\\r\\n    width: 100%;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.skill-container {\\r\\n    height: 100vh;\\r\\n    width: 100%;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.titulo {\\r\\n    font-size: 26px;\\r\\n}\\r\\n\\r\\n.material-icons {\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerCursos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentoEmpresas/index.js":
      /*!***************************************************************!*\
  !*** ./src/components/core/BannerDepoimentoEmpresas/index.js ***!
  \***************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FormRegistroEmpresa_FormFinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormRegistroEmpresa/FormFinal */ "./src/components/core/FormRegistroEmpresa/FormFinal/index.js");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerDepoimentoEmpresas/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar DepoimentoEmpresas = function DepoimentoEmpresas() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is depoimento"));\n};\n\nvar _default = DepoimentoEmpresas;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DepoimentoEmpresas, "DepoimentoEmpresas", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentoEmpresas\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentoEmpresas\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentoEmpresas/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentoEmpresas/style.css":
      /*!****************************************************************!*\
  !*** ./src/components/core/BannerDepoimentoEmpresas/style.css ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentoEmpresas/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/Item/index.js":
      /*!*************************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/Item/index.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerDepoimentos/Item/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Item = function Item(props) {\n  var cargo = props.cargo,\n      testimonio = props.testimonio,\n      nome = props.nome,\n      avatar = props.avatar;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "Cards"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n    testimonial: true,\n    className: "Testimonial"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial__top"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "Testimonial__top__testimonio"\n  }, testimonio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial__bottom"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 8\n    },\n    className: "Testimonial__bottom__title"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, cargo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 4\n    },\n    className: "Testimonial__bottom__avatar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {\n    src: __webpack_require__("./src/assets/img sync recursive ^\\\\.\\\\/.*$")("./".concat(avatar)).default,\n    alt: "",\n    className: "rounded-circle img-fluid"\n  })))));\n};\n\nvar _default = Item;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Item, "Item", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\Item\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\Item\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/Item/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/Item/style.css":
      /*!**************************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/Item/style.css ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);", ""]);\n\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.Cards {\\r\\n    width: 90%;\\r\\n    background-color: #fff;\\r\\n    flex-wrap: wrap;\\r\\n    height: 190px;\\r\\n}\\r\\n\\r\\n.Testimonial {\\r\\n    padding: 20px;\\r\\n    height: 100%;\\r\\n    box-shadow: 0 9px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n    transition: 0.3s;\\r\\n}\\r\\n\\r\\n.Testimonial__top {\\r\\n    display: flex;\\r\\n    margin-bottom: 16px;\\r\\n    height: 50%;\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n.Testimonial__top p {\\r\\n    margin-top: -20px;\\r\\n    font-size: 0.6rem;\\r\\n    color: #020113;\\r\\n    line-height: 1.5;\\r\\n}\\r\\n\\r\\n.Testimonial__bottom {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    align-self: flex-end;\\r\\n    position: relative;\\r\\n\\r\\n}\\r\\n\\r\\n.Testimonial__bottom__title {\\r\\n    padding-left: 0 !important;\\r\\n}\\r\\n\\r\\n.Testimonial__bottom__title h5 {\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 0.1em;\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.Testimonial__bottom__title h1 {\\r\\n    font-size: 0.6rem;\\r\\n    color: #020113;\\r\\n}\\r\\n\\r\\n.Testimonial__bottom__avatar {\\r\\n    padding-left: 0 !important;\\r\\n}\\r\\n\\r\\n.Testimonial__bottom__avatar img {\\r\\n    min-width: 60px;\\r\\n    max-width: 60px;\\r\\n    min-height: 60px;\\r\\n    max-height: 60px;\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/Item/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/ItemEmpresa/index.js":
      /*!********************************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/ItemEmpresa/index.js ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerDepoimentos/ItemEmpresa/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar ItemEmpresa = function ItemEmpresa(props) {\n  var cargo = props.cargo,\n      testimonio = props.testimonio,\n      nome = props.nome,\n      avatar = props.avatar,\n      empresa_logo = props.empresa_logo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "Cards-Empresa"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n    testimonial: true,\n    className: "Testimonial-Empresa"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial-Empresa__bottom"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    },\n    className: "Testimonial-Empresa__bottom__avatar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {\n    src: __webpack_require__("./src/assets/img sync recursive ^\\\\.\\\\/.*$")("./".concat(avatar)).default,\n    alt: "",\n    className: "rounded-circle img-fluid"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 8\n    },\n    className: "Testimonial-Empresa__bottom__title"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, cargo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    },\n    className: "Testimonial-Empresa__bottom__company"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {\n    src: __webpack_require__("./src/assets/img sync recursive ^\\\\.\\\\/.*$")("./".concat(empresa_logo)).default,\n    alt: "",\n    className: "rounded-circle img-fluid"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial-Empresa__top"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "Testimonial-Empresa__top__testimonio"\n  }, testimonio))));\n};\n\nvar _default = ItemEmpresa;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ItemEmpresa, "ItemEmpresa", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\ItemEmpresa\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\ItemEmpresa\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/ItemEmpresa/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/ItemEmpresa/style.css":
      /*!*********************************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/ItemEmpresa/style.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);", ""]);\n\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.Cards-Empresa {\\r\\n    width: 100%;\\r\\n    flex-wrap: wrap;\\r\\n    height: 300px;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa {\\r\\n    padding: 20px;\\r\\n    height: 100%;\\r\\n    box-shadow: 0 9px 8px 0 rgba(0, 0, 0, 0.2);\\r\\n    transition: 0.3s;\\r\\n    border-radius: 20px !important;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__top {\\r\\n    display: flex;\\r\\n    height: 50%;\\r\\n    padding: 16px 32px;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__top p {\\r\\n    font: 14px !important;\\r\\n    font-weight: 300;\\r\\n    line-height: 1.5;\\r\\n    color: #6B757D;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    align-self: flex-end;\\r\\n    position: relative;\\r\\n\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__title {\\r\\n    padding-left: 32px !important;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__title h5 {\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 0.1em;\\r\\n    margin-bottom: 5px;\\r\\n    color:#0052FB;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__title h1 {\\r\\n    font-size: 14px;\\r\\n    color: #020113;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__avatar {\\r\\n    padding-left: 0 !important;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__avatar img {\\r\\n    min-width: 60px;\\r\\n    max-width: 60px;\\r\\n    min-height: 60px;\\r\\n    max-height: 60px;\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.Testimonial-Empresa__bottom__company {\\r\\n    top: -15px;\\r\\n    overflow: visible;\\r\\n}\\r\\n\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/ItemEmpresa/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/index.js":
      /*!********************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/index.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerDepoimentos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./src/components/core/BannerDepoimentos/Item/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 4\n}];\nvar depoimentos = [{\n  nome: "Augusto Antunes",\n  cargo: "Desenvolvedor Full-Stack",\n  testimonio: "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.",\n  avatar: "person-1.jpg"\n}, {\n  nome: "Elder Novaes",\n  cargo: "Desenvolvedor Mobile - flutter",\n  testimonio: "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!",\n  avatar: "person-2.jpg"\n}, {\n  nome: "Mayara Nunes",\n  cargo: "Desenvolvedora Front-End",\n  testimonio: "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados",\n  avatar: "person-3.png"\n}, {\n  nome: "José Cruz",\n  cargo: "Desenvolvedor Back-end",\n  testimonio: "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.",\n  avatar: "person-4.jpg"\n}, {\n  nome: "Sergio Alves",\n  cargo: "Desenvolvedor Front-End",\n  testimonio: "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos",\n  avatar: "person-1.jpg"\n}];\n\nvar Component3 = function Component3() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {\n    className: "Componente-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    className: "h2-responsive font-weight-bold my-5"\n  }, "Veja o depoimento de alguns dos nossos alunos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    breakPoints: breakPoints,\n    pagination: false,\n    className: "Carousel-holder"\n  }, depoimentos.map(function (value, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {\n      cargo: value.cargo,\n      testimonio: value.testimonio,\n      nome: value.nome,\n      avatar: value.avatar\n    });\n  })));\n};\n\nvar _default = Component3;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(breakPoints, "breakPoints", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\index.js");\n  reactHotLoader.register(depoimentos, "depoimentos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\index.js");\n  reactHotLoader.register(Component3, "Component3", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerDepoimentos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerDepoimentos/style.css":
      /*!*********************************************************!*\
  !*** ./src/components/core/BannerDepoimentos/style.css ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Componente-3 {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n    padding-bottom: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.Componente-3 h2 {\\r\\n    font-size: 2rem;\\r\\n    font-weight: 500;\\r\\n    font-size: 36px;\\r\\n    line-height: 44px;\\r\\n    color: #020113;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.Carousel-holder {\\r\\n    margin: 20px 0px 0px 0px;\\r\\n}\\r\\n\\r\\n.Carousel-holder button {\\r\\n    background-color: white;\\r\\n\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n    background: #0052FB !important;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n    background: #0052FB !important;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n    background: #0052FB !important;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerDepoimentos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerEmpresa/index.js":
      /*!****************************************************!*\
  !*** ./src/components/core/BannerEmpresa/index.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerEmpresa/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/empresa.png */ "./src/assets/img/empresa.png");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Component4 = function Component4() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "Information"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Information-container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Information-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "Titulo"\n  }, "A entrada no mercado de trabalho, come\\xE7a por aqui!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "Paragrafo"\n  }, "Oferecemos uma trilha de cursos focado em vagas reais de grandes empresas. J\\xE1 formamos mais de 2000 alunos, nos mais diversos cursos em que oferecemos."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Iremos te preparar com todo conhecimento t\\xE9cnico e comportamental, visuando n\\xE3o s\\xF3 as empresas parceiras, que fornecem conteudo para prepara-los para uma grande oportunidade,mas tambem para as mais diversas vagas desse mercado que cresce cada vez mais."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {\n    to: "/bemvindo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "Button"\n  }, "Cadastra-se"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Information-img"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "empresa"\n  }))));\n};\n\nvar _default = Component4;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Component4, "Component4", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerEmpresa\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerEmpresa\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerEmpresa/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerEmpresa/style.css":
      /*!*****************************************************!*\
  !*** ./src/components/core/BannerEmpresa/style.css ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Information {\\r\\n    background-color: #EAEFF5;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    height: auto;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n.Information .Titulo {\\r\\n    font-size: 36px;\\r\\n    line-height: 44px;\\r\\n    color: #020113;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    margin-bottom: 30px;\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n.Information .Button {\\r\\n    background-color: #FFCF26;\\r\\n    width: 200px;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n    color: #000;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 1em;\\r\\n    margin: 32px 2px;\\r\\n    cursor: pointer;\\r\\n\\r\\n}\\r\\n\\r\\n.Information .Button:hover {\\r\\n    background-color: #B58E02;\\r\\n\\r\\n}\\r\\n\\r\\n.Information .paragrafo {\\r\\n    font-weight: initial;\\r\\n    font-size: 16px;\\r\\n    line-height: 24px !important;\\r\\n    color: #020113;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.Information-container {\\r\\n    max-width: 80%;\\r\\n    display: flex;\\r\\n\\r\\n}\\r\\n\\r\\n.Information-text {\\r\\n    max-width: 50%;\\r\\n    padding: 40px;\\r\\n    line-height: 24px;\\r\\n\\r\\n}\\r\\n\\r\\n.Information-img {\\r\\n    width: 30%;\\r\\n    padding: 20px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n\\r\\n/* responsividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n    .Information-container {\\r\\n        display: block;\\r\\n    }\\r\\n    .Information {\\r\\n        display: block;\\r\\n    }\\r\\n    .Information-img{\\r\\n        width: 100%;\\r\\n    }\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerEmpresa/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerOfertaCursos/index.js":
      /*!*********************************************************!*\
  !*** ./src/components/core/BannerOfertaCursos/index.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerOfertaCursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/banner.png */ "./src/assets/img/banner.png");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar BannerOfertaCursos = function BannerOfertaCursos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "banner"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "banner_container rounded"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "banner_direita"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "banner_titulo text-dark"\n  }, "Sempre em busca dos seus objetivos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "banner_titulo_menor lead"\n  }, "Guiamos seus estudos no rumo de uma grande oportunidade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "banner_esquerda"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: ""\n  }))));\n};\n\nvar _default = BannerOfertaCursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BannerOfertaCursos, "BannerOfertaCursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerOfertaCursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerOfertaCursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerOfertaCursos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerOfertaCursos/style.css":
      /*!**********************************************************!*\
  !*** ./src/components/core/BannerOfertaCursos/style.css ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, " \\r\\n .banner {\\r\\n    background-color: lightgray;\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    height: 80vh;\\r\\n}\\r\\n\\r\\n.banner_container {\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    width: 100%;\\r\\n    padding-right: 200px;\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n\\r\\n}\\r\\n\\r\\n.banner_titulo {\\r\\n    font-size: 62px;\\r\\n    line-height: 73px;\\r\\n    color: #000;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    text-align: left;\\r\\n    margin-bottom: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.banner_esquerda {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    align-items: flex-end;\\r\\n    padding-left: 50px;\\r\\n}\\r\\n\\r\\n\\r\\n.banner_esquerda img {\\r\\n    width: 150%;\\r\\n}\\r\\n\\r\\n\\r\\n.banner_direita {\\r\\n    align-items: left;\\r\\n    padding: 30px;\\r\\n    max-width: 50%;\\r\\n    height: 55vh;\\r\\n    margin: auto;\\r\\n    align-items: flex-end;\\r\\n    justify-content: inherit;\\r\\n    color: #000;\\r\\n    background: #fff;\\r\\n    box-shadow: 0 0 1em black;\\r\\n    margin-left: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.banner_titulo_menor {\\r\\n    font-size: 20px;\\r\\n    color: #000;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    margin-left: 15px;\\r\\n    margin-bottom: 30px;\\r\\n\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerOfertaCursos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPasosEstudante/index.js":
      /*!***********************************************************!*\
  !*** ./src/components/core/BannerPasosEstudante/index.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerPasosEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar BannerPasosEstudante = function BannerPasosEstudante() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "pasos"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    style: {\n      width: "100%"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "platform-numbers"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 12\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cadastrar na BrainXpert \\xE9 simples \\uD83D\\uDC49")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle"\n  }, "01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Crie o seu perfil e come\\xE7e seu desenvolvimento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "sub-description"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillLinkedin"], {\n    color: "#FFCF26"\n  }), " Importe seu perfil do LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "description"\n  }, "Conte-nos sobre voc\\xEA e o que voc\\xEA procura")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle"\n  }, "02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Demostre seu potencial para a comunidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "sub-description"\n  }, "Esteja entre os melhores profissionais"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    class: "description"\n  }, "Demonstre as suas habilidades atrav\\xE9s dos nossos testes t\\xE9cnicos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle"\n  }, "03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Receba convites e escolha a melhor proposta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "sub-description"\n  }, "90% dos candidatos recebem convites"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "description"\n  }, "Conforme evoluir na sua pr\\xF3pria trilha de carreira, voc\\xEA j\\xE1 come\\xE7a a receber convites de entrevista")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  }))));\n};\n\nvar _default = BannerPasosEstudante;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BannerPasosEstudante, "BannerPasosEstudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPasosEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPasosEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerPasosEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPasosEstudante/style.css":
      /*!************************************************************!*\
  !*** ./src/components/core/BannerPasosEstudante/style.css ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".pasos {\\r\\n    background-color: #666;\\r\\n    padding-top: 50px;\\r\\n    padding-bottom: 50px;\\r\\n    margin-top: 30px;\\r\\n}\\r\\n\\r\\n.pasos .platform-numbers h2 {\\r\\n    color: #F0F0FF;\\r\\n    font-size: 28px;\\r\\n    line-height: 145%;\\r\\n    margin-top: 0px;\\r\\n    text-align: left;\\r\\n\\r\\n}\\r\\n\\r\\n.pasos .platform-numbers .subtitle {\\r\\n    color: #FFCF26;\\r\\n}\\r\\n\\r\\n.pasos .platform-numbers h3 {\\r\\n    font-size: 18px;\\r\\n    font: 500;\\r\\n    letter-spacing: -2%;\\r\\n    color: #F0F0FF;\\r\\n    text-align: left;\\r\\n}\\r\\n\\r\\n.pasos .platform-numbers .sub-description {\\r\\n    color: #FFCF26;\\r\\n    font-size: 13px;\\r\\n}\\r\\n\\r\\n.pasos .platform-numbers .description {\\r\\n    color: #ACACAD;\\r\\n    font-size: 16px;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerPasosEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPrecosEmpresa/index.js":
      /*!**********************************************************!*\
  !*** ./src/components/core/BannerPrecosEmpresa/index.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerPrecosEmpresa/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar planos = {\n  one: {\n    title: "Basic",\n    price: "0.99",\n    billingCode: "basic-regular",\n    priceDescription: "This is the most basic package but it\'s also the cheapest. Great for ordinary use.",\n    priceOverview: "Standard Version",\n    assignText: "Try Now for 30 Days",\n    featured: false\n  },\n  two: {\n    title: "Advanced",\n    price: "1.99",\n    billingCode: "advanced-regular",\n    priceDescription: "Best selling option. This is well suited for all around general everything.",\n    priceOverview: "Standard Version",\n    assignText: "Try Now for 30 Days",\n    featured: true\n  },\n  three: {\n    title: "Enterprise",\n    price: "2.99",\n    billingCode: "enterprise-regular",\n    priceDescription: "Enterprise edition. Heavy duty awesomeness that\'ll handle just about anything you can throw at it, including the kitchen sink.",\n    priceOverview: "Standard Version",\n    assignText: "Try Now for 30 Days",\n    featured: false\n  }\n};\n\nvar PricingCard = function PricingCard(props) {\n  console.log(props);\n  var _props$pricingData = props.pricingData,\n      title = _props$pricingData.title,\n      price = _props$pricingData.price,\n      assignText = _props$pricingData.assignText,\n      priceDescription = _props$pricingData.priceDescription,\n      priceOverview = _props$pricingData.priceOverview,\n      featured = _props$pricingData.featured;\n  var dollar = price.toString().split(".")[0];\n  var cent = price.toString().split(".")[1] || "00";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "PricingCard " + (featured ? "featured" : "")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "title"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Card"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    className: "price"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "price__currency"\n  }, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "price__dollar"\n  }, dollar), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "price__cent"\n  }, cent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "price-overview"\n  }, priceOverview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "description"\n  }, priceDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "price-bttn"\n  }, assignText));\n};\n\nvar PricingCardContainer = function PricingCardContainer(props) {\n  var planos = props.pricingDataAll;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "PricingCardContainer"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PricingCard, {\n    pricingData: planos.one\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PricingCard, {\n    pricingData: planos.two\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PricingCard, {\n    pricingData: planos.three\n  })));\n};\n\nvar BannerPrecosEmpresa = function BannerPrecosEmpresa() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PricingCardContainer, {\n    pricingDataAll: planos\n  });\n};\n\nvar _default = BannerPrecosEmpresa;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(planos, "planos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEmpresa\\\\index.js");\n  reactHotLoader.register(PricingCard, "PricingCard", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEmpresa\\\\index.js");\n  reactHotLoader.register(PricingCardContainer, "PricingCardContainer", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEmpresa\\\\index.js");\n  reactHotLoader.register(BannerPrecosEmpresa, "BannerPrecosEmpresa", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEmpresa\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEmpresa\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerPrecosEmpresa/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPrecosEmpresa/style.css":
      /*!***********************************************************!*\
  !*** ./src/components/core/BannerPrecosEmpresa/style.css ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".PricingCardContainer {\\r\\n    display: flex;\\r\\n    margin: 20px auto;\\r\\n}\\r\\n\\r\\n.PricingCard {\\r\\n    border: 1px solid #8D9096;\\r\\n    border-radius: 3px;\\r\\n    flex: 1;\\r\\n    margin: 10px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding-bottom: 25px;\\r\\n    text-align: center;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n.PricingCard p {\\r\\n    display: block;\\r\\n    margin-block-start: 1em;\\r\\n    margin-block-end: 1em;\\r\\n    margin-inline-start: 0px;\\r\\n    margin-inline-end: 0px;\\r\\n    font-size: 14px;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n\\r\\n.PricingCard h2 {\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.PricingCard .title {\\r\\n\\tbackground: #EAEFF5;\\r\\n\\tpadding: 20px ;\\r\\n\\tborder-top-left-radius: 3px;\\r\\n\\tborder-top-right-radius: 3px;\\r\\n\\tfont-size: 1.7em;\\r\\n}\\r\\n\\r\\n.PricingCard.featured {\\r\\n    border-color: rgb(0, 82, 251);\\r\\n    background-color: white;\\r\\n}\\r\\n    \\r\\n.PricingCard.featured .title { \\r\\n    background: rgb(0, 82, 251);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.PricingCard.featured .price-bttn {\\r\\n\\tbackground: rgb(0, 82, 251);\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.PricingCard .price-overview {\\r\\n\\tmargin-top: 20px;\\r\\n\\tfont-weight: bold;\\r\\n}\\r\\n\\r\\n.price .price__currency { font-size: 1.7em; padding-right: 3px; }\\r\\n.price .price__dollar { font-size: 1.7em; }\\r\\n.price .price__cent { font-size: 1em; }\\r\\n\\r\\n.Card {\\r\\n\\tpadding: 30px;\\r\\n}\\r\\n\\r\\n.price-desc { \\r\\n\\tfont-size: 0.7em;\\r\\n\\tmargin-top: 0;\\r\\n}\\r\\n\\r\\n.price-bttn { \\r\\n    display: block;\\r\\n    text-align: center;\\r\\n    position: relative;\\r\\n    margin: 0 25px;\\r\\n    margin-top: auto;\\r\\n    background: none;\\r\\n    border: 1px solid rgb(0, 82, 251);\\r\\n    color: rgb(0, 82, 251);\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerPrecosEmpresa/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPrecosEstudante/index.js":
      /*!************************************************************!*\
  !*** ./src/components/core/BannerPrecosEstudante/index.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerPrecosEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_young_woman_zerocost_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/young-woman-zerocost.png */ "./src/assets/img/young-woman-zerocost.png");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar BannerPrecosEstudante = function BannerPrecosEstudante() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "BannerPrecosEstudante"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 5\n    },\n    className: "BannerPrecosEstudante-img"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_young_woman_zerocost_png__WEBPACK_IMPORTED_MODULE_2__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 6\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "BannerPrecosEstudante-badge-sm"\n  }, "Custa R$0 \\uD83D\\uDE31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sim, uma plataforma", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), "100% gratuita para", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), "estudantes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    onClick: function onClick() {\n      return window.scrollTo(0, 0);\n    },\n    className: "btn-arrow"\n  }, "CRIAR MEU PERFIL AGORA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineArrowRight"], {\n    color: "white",\n    style: {\n      marginLeft: "5px",\n      height: "20px",\n      width: "20px"\n    }\n  })))));\n};\n\nvar _default = BannerPrecosEstudante;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BannerPrecosEstudante, "BannerPrecosEstudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPrecosEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerPrecosEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPrecosEstudante/style.css":
      /*!*************************************************************!*\
  !*** ./src/components/core/BannerPrecosEstudante/style.css ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".BannerPrecosEstudante {\\r\\n    background-color: #666;\\r\\n    margin-top: 60px;\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.BannerPrecosEstudante-img img {\\r\\n    max-width: 100%;\\r\\n}\\r\\n\\r\\n.BannerPrecosEstudante-badge-sm {\\r\\n    text-align: center;\\r\\n    font-size: 16px;\\r\\n    color: #F0F0FF;\\r\\n    background: #040C10;\\r\\n    padding: 10px;\\r\\n    border-radius: 50% / 80px;\\r\\n    max-width: 150px;\\r\\n    margin-top: 80px;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.BannerPrecosEstudante h2 {\\r\\n    font-size: 44px;\\r\\n    text-align: left;\\r\\n    line-height: 124%;\\r\\n    color: white;\\r\\n    margin-bottom: 28px;\\r\\n}\\r\\n\\r\\n.BannerPrecosEstudante a {\\r\\n    margin-top: 20px;\\r\\n    display: table-cell;\\r\\n    vertical-align: middle;\\r\\n    height: 20px;\\r\\n    color: white;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerPrecosEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPropostaEstudante/index.js":
      /*!**************************************************************!*\
  !*** ./src/components/core/BannerPropostaEstudante/index.js ***!
  \**************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerPropostaEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/banner.png */ "./src/assets/img/banner.png");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/olx.png */ "./src/assets/img/olx.png");\n/* harmony import */ var _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/img/magazineluiza.png */ "./src/assets/img/magazineluiza.png");\n/* harmony import */ var _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/img/mercadolivre.jpg */ "./src/assets/img/mercadolivre.jpg");\n/* harmony import */ var _assets_img_b2w_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/img/b2w.png */ "./src/assets/img/b2w.png");\n/* harmony import */ var _assets_img_microsoft_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/img/microsoft.png */ "./src/assets/img/microsoft.png");\n/* harmony import */ var _assets_img_spotify_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/img/spotify.png */ "./src/assets/img/spotify.png");\n/* harmony import */ var _assets_img_uber_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/img/uber.png */ "./src/assets/img/uber.png");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar empresas = [_assets_img_olx_png__WEBPACK_IMPORTED_MODULE_8__["default"], _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_9__["default"], _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_img_b2w_png__WEBPACK_IMPORTED_MODULE_11__["default"], _assets_img_microsoft_png__WEBPACK_IMPORTED_MODULE_12__["default"], _assets_img_uber_png__WEBPACK_IMPORTED_MODULE_14__["default"], _assets_img_spotify_png__WEBPACK_IMPORTED_MODULE_13__["default"]];\n\nvar Item = function Item(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var avatar = props.avatar;\n  var style = {\n    minWidth: "80px",\n    maxWidth: "80px",\n    minHeight: "80px",\n    maxHeight: "80px",\n    borderRadius: "50%",\n    overflow: "hidden",\n    marginLeft: "15px"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {\n    src: avatar,\n    style: style\n  });\n};\n\nvar MakeCarousel = function MakeCarousel() {\n  var breakPoints = [{\n    width: 1,\n    itemsToShow: 3\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    breakPoints: breakPoints,\n    pagination: false,\n    className: "CarouselCompanies"\n  }, empresas.map(function (img, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {\n      avatar: img\n    });\n  }));\n};\n\nvar BannerPropostaEstudante = function BannerPropostaEstudante() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {\n    className: "proposta"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {\n    style: {\n      marginLeft: 96.58\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 6\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Dev, prepare-se para o ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " emprego dos seus sonhos!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiSkills"], {\n    color: "#FFCF26"\n  }), " Aprenda as skills mais requisitadas do mercado"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineClockCircle"], {\n    color: "#FFCF26"\n  }), " 90% dos candidatos(as) recebem convites para entrevistas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillStar"], {\n    color: "#FFCF26"\n  }), " Sinalize seu valor para as empresas parceiras")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "proposta__registrar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    style: {\n      display: "flex",\n      flexDirection: "column"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    placeholder: "Digite o seu email",\n    type: "email"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "button"\n  }, "CRIAR MEU PERFIL AGORA", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineArrowRight"], {\n    color: "white",\n    style: {\n      marginLeft: "5px",\n      height: "20px",\n      width: "20px"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {\n    style: {\n      color: "white"\n    }\n  }, "Ao se cadastrar voc\\xEA aceita os nossos", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    href: "/termos-de-uso"\n  }, " Termos de uso")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    className: "Carousel__title"\n  }, "Onde as melhores empresas contrataram desenvolvedores"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MakeCarousel, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {\n    src: _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_6__["default"],\n    className: "ImgHomen"\n  })))));\n};\n\nvar _default = BannerPropostaEstudante;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(empresas, "empresas", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPropostaEstudante\\\\index.js");\n  reactHotLoader.register(Item, "Item", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPropostaEstudante\\\\index.js");\n  reactHotLoader.register(MakeCarousel, "MakeCarousel", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPropostaEstudante\\\\index.js");\n  reactHotLoader.register(BannerPropostaEstudante, "BannerPropostaEstudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPropostaEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerPropostaEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerPropostaEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerPropostaEstudante/style.css":
      /*!***************************************************************!*\
  !*** ./src/components/core/BannerPropostaEstudante/style.css ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".proposta h1 {\\r\\n    font: 600 36px;\\r\\n    text-transform: initial;\\r\\n    letter-spacing: 2px;\\r\\n    text-align: left;\\r\\n    color: white;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.proposta ul {\\r\\n    list-style-type: none;\\r\\n    font-size: 16px;\\r\\n    color: #FFF;\\r\\n    padding: 0;\\r\\n    margin: 0px 0 35px;\\r\\n}\\r\\n\\r\\n.proposta ul li {\\r\\n    margin: 10px 0;\\r\\n    line-height: 1.5em;\\r\\n}\\r\\n\\r\\n.proposta__registrar label {\\r\\n        color: #ffffff;\\r\\n        font-weight: 400;\\r\\n        margin-bottom: 8px;\\r\\n}\\r\\n\\r\\n.proposta__registrar input {\\r\\n    width: 100%;\\r\\n    height: 50px;\\r\\n    background-color: #202024\\r\\n}\\r\\n\\r\\n.proposta__registrar button {\\r\\n    width: 110%;\\r\\n    margin-left: -10px;\\r\\n    margin-top: 33px;\\r\\n    height: 50px;\\r\\n    color: #ffffff;\\r\\n    background-color:  #FFCF26;\\r\\n    letter-spacing: 1.5px;\\r\\n    font-weight: bold;\\r\\n    line-height: 24px;\\r\\n    display: flex;\\r\\n    font-size: 12px;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    padding: 8px 16px;\\r\\n}\\r\\n\\r\\n.proposta .Carousel__title\\r\\n{\\r\\nwidth:100%;\\r\\ntext-align: center;\\r\\nfont-size: 16px;\\r\\ncolor: white;\\r\\nmargin-bottom: 12px;\\r\\nmargin-top: 36px;\\r\\n}\\r\\n\\r\\n.CarouselCompanies button {\\r\\n    background-color: transparent;\\r\\n    box-shadow: none;\\r\\n    color:white;\\r\\n}\\r\\n\\r\\n.CarouselCompanies button:hover {\\r\\n    background-color: transparent !important;\\r\\n    box-shadow: none !important;\\r\\n    color:white;\\r\\n}\\r\\n\\r\\n.CarouselCompanies button:focus {\\r\\n    background-color: transparent !important;\\r\\n    box-shadow: none !important;\\r\\n    color:white;\\r\\n}\\r\\n\\r\\n.ImgHomen {\\r\\n    height: 500px;\\r\\n    width: 500px;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerPropostaEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerQuemSomos/index.js":
      /*!******************************************************!*\
  !*** ./src/components/core/BannerQuemSomos/index.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerQuemSomos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/banner.png */ "./src/assets/img/banner.png");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Component1 = function Component1() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "comp-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "direita"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "titulo-banner"\n  }, "Evolua r\\xE1pido em busca dos seus objetivos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "comp1-button"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {\n    to: "/bemvindo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "button"\n  }, "Torne-se um Expert")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "titulo_menor"\n  }, "Guiamos seus estudos no rumo de uma grande oportunidade"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "esquerda"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_banner_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: ""\n  }))));\n};\n\nvar _default = Component1;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Component1, "Component1", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerQuemSomos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerQuemSomos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerQuemSomos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerQuemSomos/style.css":
      /*!*******************************************************!*\
  !*** ./src/components/core/BannerQuemSomos/style.css ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "/* componente 1 */\\r\\n\\r\\n.titulo-banner {\\r\\n    font-size: 62px;\\r\\n    line-height: 83px;\\r\\n    color: #fff;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    text-align: left;\\r\\n    margin-bottom: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.titulo_menor {\\r\\n    font-size: 14px;\\r\\n    line-height: 21px;\\r\\n    color: #fff;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    margin-left: 15px;\\r\\n    margin-bottom: 30px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.comp-1 {\\r\\n    background-color: #0052FB;\\r\\n    display: flex;\\r\\n    height: 83vh;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n.comp1-button {\\r\\n    display: flex;\\r\\n\\r\\n}\\r\\n\\r\\n.esquerda {\\r\\n    width: 50%;\\r\\n    display: flex;\\r\\n    align-items: flex-end;\\r\\n    margin-left: 120px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\nimg {\\r\\n    width: 110%;\\r\\n}\\r\\n\\r\\n.direita {\\r\\n    align-items: left;\\r\\n    padding: 60px 0 0 0;\\r\\n    max-width: 50%;\\r\\n    align-items: flex-start;\\r\\n    justify-content: inherit;\\r\\n    color: #fff;\\r\\n\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: flex;\\r\\n    flex-wrap: nowrap;\\r\\n    width: 100%;\\r\\n    padding-right: 200px;\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0px;\\r\\n}\\r\\n\\r\\n/* resposividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n    .comp-1 {\\r\\n        width: 100%;\\r\\n        height: 50vh;\\r\\n    }\\r\\n\\r\\n    .titulo-banner {\\r\\n        font-size: 30px;\\r\\n        padding-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .button {\\r\\n        font-size: 0.8em;\\r\\n    }\\r\\n\\r\\n    .esquerda {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .direita {\\r\\n        max-width: 100%;\\r\\n    }\\r\\n\\r\\n    .comp1-button {\\r\\n        display: block;\\r\\n        text-align: center;\\r\\n    }\\r\\n}\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerQuemSomos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerTestimonioEstudante/index.js":
      /*!****************************************************************!*\
  !*** ./src/components/core/BannerTestimonioEstudante/index.js ***!
  \****************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/BannerTestimonioEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img_instagram_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/instagram-white.png */ "./src/assets/img/instagram-white.png");\n/* harmony import */ var _assets_img_facebook_white_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/img/facebook-white.png */ "./src/assets/img/facebook-white.png");\n/* harmony import */ var _assets_img_google_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/google-white.png */ "./src/assets/img/google-white.png");\n/* harmony import */ var _assets_img_amazon_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/amazon-white.png */ "./src/assets/img/amazon-white.png");\n/* harmony import */ var _assets_img_uber_white_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/img/uber-white.png */ "./src/assets/img/uber-white.png");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar breakPoints = [{\n  width: 1,\n  itemsToShow: 1\n}, {\n  width: 550,\n  itemsToShow: 2\n}, {\n  width: 768,\n  itemsToShow: 3\n}, {\n  width: 1200,\n  itemsToShow: 4\n}];\nvar depoimentos = [{\n  nome: "Augusto Antunes",\n  cargo: "Desenvolvedor Full-Stack",\n  testimonio: "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.",\n  avatar: "person-1.jpg"\n}, {\n  nome: "Elder Novaes",\n  cargo: "Desenvolvedor Mobile - flutter",\n  testimonio: "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!",\n  avatar: "person-2.jpg"\n}, {\n  nome: "Mayara Nunes",\n  cargo: "Desenvolvedora Front-End",\n  testimonio: "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados",\n  avatar: "person-3.png"\n}, {\n  nome: "José Cruz",\n  cargo: "Desenvolvedor Back-end",\n  testimonio: "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.",\n  avatar: "person-4.jpg"\n}, {\n  nome: "Sergio Alves",\n  cargo: "Desenvolvedor Front-End",\n  testimonio: "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos",\n  avatar: "person-1.jpg"\n}];\n\nvar ItemEmpresa = function ItemEmpresa(props) {\n  var cargo = props.cargo,\n      testimonio = props.testimonio,\n      nome = props.nome,\n      avatar = props.avatar;\n  var style = {\n    "Testimonial-Empresa__top__testimonio": {\n      fontSize: "12px"\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "Cards-Empresa"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {\n    testimonial: true,\n    className: "Testimonial-Empresa"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial-Empresa__bottom"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    },\n    className: "Testimonial-Empresa__bottom__avatar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: __webpack_require__("./src/assets/img sync recursive ^\\\\.\\\\/.*$")("./".concat(avatar)).default,\n    alt: "",\n    className: "rounded-circle img-fluid"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 8\n    },\n    className: "Testimonial-Empresa__bottom__title"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, cargo))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "Testimonial-Empresa__top"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "Testimonial-Empresa__top__testimonio",\n    style: style["Testimonial-Empresa__top__testimonio"]\n  }, testimonio))));\n};\n\nvar MakeCarousel = function MakeCarousel() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    breakPoints: breakPoints,\n    pagination: false,\n    className: "CarouselCompanies"\n  }, depoimentos.map(function (value, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemEmpresa, {\n      cargo: value.cargo,\n      testimonio: value.testimonio,\n      nome: value.nome,\n      avatar: value.avatar,\n      empresa_logo: value.empresalogo\n    });\n  }));\n};\n\nvar BannerTestimonioEstudante = function BannerTestimonioEstudante() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    className: "testimonials"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 12\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "companies-text"\n  }, "Onde as melhores empresas contrataram desenvolvedores"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 12\n    },\n    className: "companies-logo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_instagram_white_png__WEBPACK_IMPORTED_MODULE_4__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_facebook_white_png__WEBPACK_IMPORTED_MODULE_5__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_google_white_png__WEBPACK_IMPORTED_MODULE_6__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_amazon_white_png__WEBPACK_IMPORTED_MODULE_7__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "logo-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_uber_white_png__WEBPACK_IMPORTED_MODULE_8__["default"]\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 12\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MakeCarousel, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null)));\n};\n\nvar _default = BannerTestimonioEstudante;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(breakPoints, "breakPoints", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n  reactHotLoader.register(depoimentos, "depoimentos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n  reactHotLoader.register(ItemEmpresa, "ItemEmpresa", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n  reactHotLoader.register(MakeCarousel, "MakeCarousel", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n  reactHotLoader.register(BannerTestimonioEstudante, "BannerTestimonioEstudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\BannerTestimonioEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/BannerTestimonioEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/BannerTestimonioEstudante/style.css":
      /*!*****************************************************************!*\
  !*** ./src/components/core/BannerTestimonioEstudante/style.css ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".testimonials {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin-top: 30px;\\r\\n}\\r\\n\\r\\n.testimonials .companies-text {\\r\\n    color: white;\\r\\n    font-size: 14px;\\r\\n    text-align: center;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.testimonials .companies-logo {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: space-evenly;\\r\\n    line-height: 80px;\\r\\n    margin-bottom: 60px;\\r\\n}\\r\\n\\r\\n.testimonials .logo-wrapper {\\r\\n    width: 10%;\\r\\n    padding-left: 10px;\\r\\n    padding-right: 10px;\\r\\n    margin-top: auto;\\r\\n    margin-bottom: auto;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/BannerTestimonioEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/Card/index.js":
      /*!*******************************************!*\
  !*** ./src/components/core/Card/index.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/Card/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar Card = function Card(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card text-dark border-light mb-3 bg-light"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    className: "card-img-top rounded pt-2",\n    style: {\n      width: "50%",\n      margin: "auto"\n    },\n    src: props.img,\n    alt: props.alt\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {\n    className: "card-title"\n  }, " ", props.title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "card-text lead"\n  }, " ", props.description, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#",\n    className: "btn btn-primary"\n  }, "Ver mais"))));\n};\n\nvar _default = Card;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Card, "Card", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Card\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Card\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/Card/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/Card/style.css":
      /*!********************************************!*\
  !*** ./src/components/core/Card/style.css ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/Card/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerApoiadores/index.js":
      /*!**********************************************************!*\
  !*** ./src/components/core/ContainerApoiadores/index.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerApoiadores/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/empresa.png */ "./src/assets/img/empresa.png");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar ContainerApoiadores = function ContainerApoiadores() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    id: "apoiadores",\n    className: "apoiadores"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Nossos apoiadores"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "paragrafo"\n  }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam eos reprehenderit placeat minus, velit voluptatum! Sunt, quia magni, maxime odio perspiciatis incidunt assumenda numquam facere repellat possimus, saepe perferendis omnis culpa vero recusandae nihil temporibus animi minus doloribus distinctio! Voluptatum consequatur commodi vel repellendus excepturi eaque qui atque beatae explicabo!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "empresas parceiras"\n  }));\n};\n\nvar _default = ContainerApoiadores;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ContainerApoiadores, "ContainerApoiadores", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerApoiadores\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerApoiadores\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerApoiadores/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerApoiadores/style.css":
      /*!***********************************************************!*\
  !*** ./src/components/core/ContainerApoiadores/style.css ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "/* apoiadores */\\r\\n\\r\\n.apoiadores {\\r\\n    display: flex;\\r\\n    padding: 1.5rem;\\r\\n}\\r\\n\\r\\n.apoiadores img {\\r\\n    width: 50%;\\r\\n}\\r\\n\\r\\n/* responsividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n    .apoiadores {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .apoiadores img {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerApoiadores/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursos/index.js":
      /*!******************************************************!*\
  !*** ./src/components/core/ContainerCursos/index.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerCursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_JavaScript_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/JavaScript-logo.png */ "./src/assets/img/JavaScript-logo.png");\n/* harmony import */ var _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/html-logo.png */ "./src/assets/img/html-logo.png");\n/* harmony import */ var _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/css-logo.png */ "./src/assets/img/css-logo.png");\n/* harmony import */ var _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/img/git-logo.jpg */ "./src/assets/img/git-logo.jpg");\n/* harmony import */ var _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/img/xd-logo.png */ "./src/assets/img/xd-logo.png");\n/* harmony import */ var _assets_img_reactjs_logo_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/img/reactjs-logo.jpg */ "./src/assets/img/reactjs-logo.jpg");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar Curso = function Curso(props) {\n  var img = props.img,\n      titulo = props.titulo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "cardCursos"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: img,\n    alt: "curso html"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerText"\n  }, titulo));\n};\n\nvar ContainerCursos = function ContainerCursos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerCursos"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cursos em andamento"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "cursosAndamento"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerDestaque"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerSuperior"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_JavaScript_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "curso javascript"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerText"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Javascript conhecendo o browser"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerInferior"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    class: "buttonGrey"\n  }, "ver conteudo do curso"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    class: "buttonYellow"\n  }, "continuar o curso"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerSecundario"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    titulo: "HTML 5 - COMPLETO semantica e SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    titulo: "CSS 3 - grid e flexbox"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],\n    titulo: "GIT & GITHUB - reposit\\xF3rio remoto"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],\n    titulo: "XD - design grafico, prot\\xF3tipos"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver todos os cursos em andamento")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cursos recomendados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "cursosRecomendados"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "containerInferior"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_reactjs_logo_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],\n    titulo: "REACTJS - desenvolvimento FRONT-END"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    titulo: "NODEJS - desenvolvimento BACK-END"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],\n    titulo: "EXPRESS - banco de dados"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Curso, {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    titulo: "ANGULARJS - desenvolvimento FRONT-END"\n  })))));\n};\n\nvar _default = ContainerCursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Curso, "Curso", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursos\\\\index.js");\n  reactHotLoader.register(ContainerCursos, "ContainerCursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursos/style.css":
      /*!*******************************************************!*\
  !*** ./src/components/core/ContainerCursos/style.css ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "container cursos em andamento\\r\\n.section {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.containerCursos {\\r\\n    background: #DFDEDE;\\r\\n    justify-content: center;\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\n.cursosAndamento {\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n    margin: 1rem 2rem;\\r\\n}\\r\\n\\r\\n.containerCursos h2 {\\r\\n    margin-left: 2rem;\\r\\n    padding: 1.5rem 0px;\\r\\n}\\r\\n\\r\\n.containerDestaque {\\r\\n    width: 100%;\\r\\n    justify-content: space-evenly;\\r\\n    background: #fff;\\r\\n}\\r\\n\\r\\n.containerSecundario {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.cardCursos {\\r\\n    width: 44%;\\r\\n    display: flex;\\r\\n    background: #fff;\\r\\n    margin: 5px;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.cardCursos img {\\r\\n    width: 80px;\\r\\n}\\r\\n\\r\\n.containerSuperior {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    padding-top: 15px;\\r\\n}\\r\\n\\r\\n.containerInferior {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n\\r\\n.containerText {\\r\\n    display: flex;\\r\\n    margin-left: 1.5rem;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 50%;\\r\\n    text-align: left;\\r\\n}\\r\\n\\r\\n.containerSuperior img {\\r\\n    width: 200px;\\r\\n}\\r\\n\\r\\n.containerCursos h4 {\\r\\n    margin-left: 2rem;\\r\\n    padding: 1.5rem 0px;\\r\\n}\\r\\n\\r\\n/* container cursos recomendados */\\r\\n\\r\\n.cursosRecomendados {\\r\\n    margin: 1rem 2rem;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosEmAlta/index.js":
      /*!************************************************************!*\
  !*** ./src/components/core/ContainerCursosEmAlta/index.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerCursosEmAlta/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/img/html-logo.png */ "./src/assets/img/html-logo.png");\n/* harmony import */ var _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/xd-logo.png */ "./src/assets/img/xd-logo.png");\n/* harmony import */ var _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/css-logo.png */ "./src/assets/img/css-logo.png");\n/* harmony import */ var _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/git-logo.jpg */ "./src/assets/img/git-logo.jpg");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Card */ "./src/components/core/Card/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar CursosEmAlta = function CursosEmAlta(props) {\n  var breakPoints = [{\n    width: 500,\n    itemsToShow: 1\n  }, {\n    width: 768,\n    itemsToShow: 5\n  }, {\n    width: 1200,\n    itemsToShow: 6\n  }, {\n    width: 1500,\n    itemsToShow: 7\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {\n    className: "container-fluid bg-dark"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {\n    className: "h2 text-white pt-3",\n    id: "cursosEmAlta"\n  }, "Cursos em alta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: "card-group",\n    itemPadding: [10],\n    breakPoints: breakPoints,\n    pagination: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],\n    title: "Curso de GIT & GITHUB",\n    description: "Trabalho remoto, versionamento de c\\xF3digo"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  })));\n};\n\nvar _default = CursosEmAlta;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CursosEmAlta, "CursosEmAlta", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosEmAlta\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosEmAlta\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosEmAlta/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosEmAlta/style.css":
      /*!*************************************************************!*\
  !*** ./src/components/core/ContainerCursosEmAlta/style.css ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosEmAlta/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosRecomendados/index.js":
      /*!******************************************************************!*\
  !*** ./src/components/core/ContainerCursosRecomendados/index.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerCursosRecomendados/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/html-logo.png */ "./src/assets/img/html-logo.png");\n/* harmony import */ var _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/xd-logo.png */ "./src/assets/img/xd-logo.png");\n/* harmony import */ var _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/css-logo.png */ "./src/assets/img/css-logo.png");\n/* harmony import */ var _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/img/git-logo.jpg */ "./src/assets/img/git-logo.jpg");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Card */ "./src/components/core/Card/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar CursosRecomendados = function CursosRecomendados(props) {\n  var breakPoints = [{\n    width: 500,\n    itemsToShow: 1\n  }, {\n    width: 768,\n    itemsToShow: 5\n  }, {\n    width: 1200,\n    itemsToShow: 6\n  }, {\n    width: 1500,\n    itemsToShow: 7\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container-fluid"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    className: "h2 text-dark pt-3",\n    id: "cursosRecomendados"\n  }, "Cursos Recomendados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: "card-group",\n    breakPoints: breakPoints,\n    pagination: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],\n    title: "Curso de GIT & GITHUB",\n    description: "Trabalho remoto, versionamento de c\\xF3digo"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  })));\n};\n\nvar _default = CursosRecomendados;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CursosRecomendados, "CursosRecomendados", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosRecomendados\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosRecomendados\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosRecomendados/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosRecomendados/style.css":
      /*!*******************************************************************!*\
  !*** ./src/components/core/ContainerCursosRecomendados/style.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosRecomendados/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosRelacionados/index.js":
      /*!******************************************************************!*\
  !*** ./src/components/core/ContainerCursosRelacionados/index.js ***!
  \******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerCursosRelacionados/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/html-logo.png */ "./src/assets/img/html-logo.png");\n/* harmony import */ var _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/xd-logo.png */ "./src/assets/img/xd-logo.png");\n/* harmony import */ var _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/css-logo.png */ "./src/assets/img/css-logo.png");\n/* harmony import */ var _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/img/git-logo.jpg */ "./src/assets/img/git-logo.jpg");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-elastic-carousel */ "react-elastic-carousel");\n/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Card */ "./src/components/core/Card/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar CursosRelacionados = function CursosRelacionados(props) {\n  var breakPoints = [{\n    width: 500,\n    itemsToShow: 1\n  }, {\n    width: 768,\n    itemsToShow: 5\n  }, {\n    width: 1200,\n    itemsToShow: 6\n  }, {\n    width: 1500,\n    itemsToShow: 7\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container-fluid"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    className: "h2 text-dark pt-3",\n    id: "cursosRelacionados"\n  }, "Cursos Relacionados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: "card-group",\n    breakPoints: breakPoints,\n    pagination: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_git_logo_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],\n    title: "Curso de GIT & GITHUB",\n    description: "Trabalho remoto, versionamento de c\\xF3digo"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_html_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    title: "Curso de HTML",\n    description: "Tags semanticas, foco em SEO"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_css_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    title: "Curso de CSS",\n    description: "Display GRID, FLEXBOX"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    img: _assets_img_xd_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"],\n    title: "Curso de XD",\n    description: "Cria\\xE7\\xE3o de prot\\xF3tipos, design grafico"\n  })));\n};\n\nvar _default = CursosRelacionados;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CursosRelacionados, "CursosRelacionados", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosRelacionados\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerCursosRelacionados\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosRelacionados/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerCursosRelacionados/style.css":
      /*!*******************************************************************!*\
  !*** ./src/components/core/ContainerCursosRelacionados/style.css ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerCursosRelacionados/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerEstudantesDestaques/index.js":
      /*!*******************************************************************!*\
  !*** ./src/components/core/ContainerEstudantesDestaques/index.js ***!
  \*******************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerEstudantesDestaques/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar Estudante = function Estudante(props) {\n  var number = props.number,\n      img = props.img,\n      nome = props.nome,\n      skill = props.skill;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: img,\n    alt: nome\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, nome))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, " ", skill), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, nome));\n};\n\nvar estudantes = [{\n  nome: "Fulano",\n  number: "01",\n  img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",\n  skill: "Node React css"\n}, {\n  nome: "Fulano",\n  number: "02",\n  img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",\n  skill: "Node React css"\n}, {\n  nome: "Fulano",\n  number: "03",\n  img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",\n  skill: "Node React css"\n}, {\n  nome: "Fulano",\n  number: "04",\n  img: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",\n  skill: "Node React css"\n}];\n\nvar EstudantesDestaques = function EstudantesDestaques() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "estudant-section"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "table"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Alunos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ispsum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    id: "filmesTable"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Ranking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Aluno"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Skils"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Potfolio"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, estudantes.map(function (estudante, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Estudante, {\n      number: estudante.number,\n      img: estudante.img,\n      nome: estudante.nome,\n      skill: estudante.skill\n    });\n  }))))));\n};\n\nvar _default = EstudantesDestaques;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Estudante, "Estudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerEstudantesDestaques\\\\index.js");\n  reactHotLoader.register(estudantes, "estudantes", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerEstudantesDestaques\\\\index.js");\n  reactHotLoader.register(EstudantesDestaques, "EstudantesDestaques", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerEstudantesDestaques\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerEstudantesDestaques\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerEstudantesDestaques/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerEstudantesDestaques/style.css":
      /*!********************************************************************!*\
  !*** ./src/components/core/ContainerEstudantesDestaques/style.css ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".estudant-section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  max-width: 960px;\\r\\n  \\r\\n}\\r\\n\\r\\n.estudant-section img {\\r\\n  border-radius: 4px;\\r\\n  width: 32px;\\r\\n  height: 32px;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n\\r\\n.estudant-section .table {\\r\\n  width: 642px;\\r\\n  height: 450px;\\r\\n  padding: 30px;\\r\\n  margin: 60px;\\r\\n  background: #fff;\\r\\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, .25);\\r\\n  border-radius: 18px;\\r\\n\\r\\n  text-align: left; \\r\\n}\\r\\n\\r\\n.table h5 {\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n.table  table{\\r\\n  margin-top: 30px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n.table table th {\\r\\n  border-bottom: 1px solid #5e5e5e;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n.table table td {\\r\\n  border-bottom: 1px solid #9e9e9e;\\r\\n  padding: 10px 0;\\r\\n}\\r\\n\\r\\n\\r\\n.table table tr td div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n.table table tr td div h4 {\\r\\n  margin-left: 15px;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerEstudantesDestaques/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerFiltroCursos/index.js":
      /*!************************************************************!*\
  !*** ./src/components/core/ContainerFiltroCursos/index.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerFiltroCursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar ContainerFiltroCursos = function ContainerFiltroCursos(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "fact-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    className: "header-facet"\n  }, "Cursos Recomendados")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "fact-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    className: "header-facet"\n  }, "Cursos em Alta")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "fact-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    className: "header-facet"\n  }, "Cursos Relacionados")));\n};\n\nvar _default = ContainerFiltroCursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ContainerFiltroCursos, "ContainerFiltroCursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerFiltroCursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerFiltroCursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerFiltroCursos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerFiltroCursos/style.css":
      /*!*************************************************************!*\
  !*** ./src/components/core/ContainerFiltroCursos/style.css ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".fact-wrapper {\\r\\n    margin-top: 10px;\\r\\n    position: relative;\\r\\n    display: block;\\r\\n    text-align: center;\\r\\n    border-bottom: 1px solid #b8b8b8;\\r\\n    padding: 5px 0;\\r\\n    transition: max-height 1s;\\r\\n}\\r\\n\\r\\n.fact-wrapper h3 {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    cursor: pointer;\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    font-size: 15px;\\r\\n    height: 30px;\\r\\n    font-weight: 600;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    padding-bottom: 5px;\\r\\n    color: #727272;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerFiltroCursos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerQuemSomos/index.js":
      /*!*********************************************************!*\
  !*** ./src/components/core/ContainerQuemSomos/index.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerQuemSomos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_plataforma_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/plataforma.jpg */ "./src/assets/img/plataforma.jpg");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar ContainerQuemSomos = function ContainerQuemSomos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    id: "quem-somos",\n    className: "quem-somos"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_plataforma_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "A plataforma"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "quem somos ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "paragrafo"\n  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis error reprehenderit illum, vel laborum repellendus doloribus quidem deserunt fugiat delectus consectetur iste commodi sunt ratione neque nisi! Ullam inventore ut dolorum? Quas illum quibusdam optio doloremque. Nam nostrum fugiat maiores facilis mollitia, in quisquam. Commodi corporis excepturi ipsum obcaecati iste!")));\n};\n\nvar _default = ContainerQuemSomos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ContainerQuemSomos, "ContainerQuemSomos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerQuemSomos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerQuemSomos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerQuemSomos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerQuemSomos/style.css":
      /*!**********************************************************!*\
  !*** ./src/components/core/ContainerQuemSomos/style.css ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "/* quem somos */\\r\\n\\r\\n.quem-somos {\\r\\n    padding: 2rem 2rem;\\r\\n    background: #0052FB;\\r\\n    color: #fff;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.quem-somos img {\\r\\n    width: 50%;\\r\\n}\\r\\n\\r\\n.container-text {\\r\\n    padding: 1.5rem;\\r\\n    text-align: left;\\r\\n}\\r\\n\\r\\n/* responsividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n    .quem-somos {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .quem-somos img {\\r\\n        width: 100%\\r\\n    }\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerQuemSomos/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerVagas/index.js":
      /*!*****************************************************!*\
  !*** ./src/components/core/ContainerVagas/index.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/ContainerVagas/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/magazineluiza.png */ "./src/assets/img/magazineluiza.png");\n/* harmony import */ var _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/mercadolivre.jpg */ "./src/assets/img/mercadolivre.jpg");\n/* harmony import */ var _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/olx.png */ "./src/assets/img/olx.png");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar ContainerVagas = function ContainerVagas() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    id: "vagas",\n    className: "vagas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "container-cards"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "vagas html"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa Magazine Luiza"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],\n    alt: "vagas css"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa Mercado Livre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    alt: "vagas xd"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa OLX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_4__["default"],\n    alt: "vagas git"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa OLX"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "vagas html"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa Magazine Luiza"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-empresas"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],\n    alt: "vagas css"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "card-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Empresa Mercado Livre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "x vagas disponiveis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "ver mais")))));\n};\n\nvar _default = ContainerVagas;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ContainerVagas, "ContainerVagas", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerVagas\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\ContainerVagas\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/ContainerVagas/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/ContainerVagas/style.css":
      /*!******************************************************!*\
  !*** ./src/components/core/ContainerVagas/style.css ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "/* vagas */\\r\\n\\r\\n.vagas {\\r\\n    background: #dfdede;\\r\\n    padding: 1.5rem 2rem;\\r\\n}\\r\\n\\r\\n.container-cards {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.card-empresas img {\\r\\n    width: 30%;\\r\\n}\\r\\n\\r\\n.card-text {\\r\\n    text-align: left;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 0px 1.5rem;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.card-empresas {\\r\\n    width: 32%;\\r\\n    display: flex;\\r\\n    text-align: left;\\r\\n    background: #fff;\\r\\n    padding: 1rem;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\n.vagas h2 {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\np {\\r\\n    font-size: 20px;\\r\\n    line-height: 28px;\\r\\n}\\r\\n\\r\\n/* responsividade */\\r\\n\\r\\n@media (max-width: 768px){\\r\\n    .card-empresas {\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .card-empresas img {\\r\\n        width: 150px;\\r\\n        margin: auto;\\r\\n    }\\r\\n\\r\\n    .vagas h4, p {\\r\\n        font-size: 1rem;\\r\\n        margin: 1rem;\\r\\n    }\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/ContainerVagas/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/Contato/index.js":
      /*!**********************************************!*\
  !*** ./src/components/core/Contato/index.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/Contato/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar containerContato = function containerContato() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "contato"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "contato-box"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "contato-left"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "local"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Endere\\xE7o"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Beco diagonal - centro 157")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "fone"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telefone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "+55 11 4002-8922")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "email"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "exemple@mail.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "form-height"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Envia uma mensagem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {\n    className: "form",\n    method: "POST"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n    className: "field",\n    name: "name",\n    placeholder: "digite seu nome completo"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n    className: "field",\n    name: "email",\n    placeholder: "E-mail"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {\n    className: "field",\n    name: "mesage",\n    placeholder: "Digite sua mensagem"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n    type: "submit",\n    value: "Enviar"\n  })))));\n};\n\nvar _default = containerContato;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(containerContato, "containerContato", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Contato\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Contato\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/Contato/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/Contato/style.css":
      /*!***********************************************!*\
  !*** ./src/components/core/Contato/style.css ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../../assets/img/skills.png */ "./src/assets/img/skills.png"));\n\n// Module\nexports.push([module.i, "* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    font-family: \'Poppins\', sans-serif;\\r\\n}\\r\\n.contato {\\r\\n    display: flex;\\r\\n    justify-content:center;\\r\\n    height: 63.5vh;\\r\\n}\\r\\n.contato-box{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-around;\\r\\n    /* background: rgba(42, 97, 216, 0.2); */\\r\\n    box-shadow: 4px 4px 15px rgba(0, 0, 0, .25);\\r\\n    border-radius: 4px;\\r\\n    width: 100%;\\r\\n    max-width: 860px;\\r\\n}\\r\\n.form {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.field {\\r\\n    padding: 10px;\\r\\n    margin-bottom: 15px;\\r\\n    border: 1px solid #ddd;\\r\\n    border-radius: 4px;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\ntextarea{\\r\\n    height:150px;\\r\\n}\\r\\n\\r\\n.contato-left {\\r\\n    display: flex;\\r\\n    justify-content:center;\\r\\n    flex-direction: column;\\r\\n    color: #fff;\\r\\n    text-align: left;\\r\\n    width: 100%;\\r\\n    max-width: 460px;\\r\\n    height: 100%;\\r\\n    padding: 30px;\\r\\n    background: linear-gradient(rgba(17, 39, 58, 0.8),\\r\\n            rgba(17, 39, 58, 0.8)),\\r\\n        url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center center;\\r\\n}\\r\\n\\r\\n.contato-left h3 {\\r\\n    color: #d1d1d1;\\r\\n}\\r\\n\\r\\n\\r\\n.contato-left p {\\r\\n    color: #d3d3d3\\r\\n}\\r\\n.form-height {\\r\\n\\r\\n    text-align: center;\\r\\n    width:80%;\\r\\n    padding: 30px;\\r\\n    height: 100%;\\r\\n    background: #ddd;\\r\\n}\\r\\n\\r\\n.form-height h2 {\\r\\n    font-weight: bold;\\r\\n    color: rgb(37, 37, 37);\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/Contato/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/Footer/index.js":
      /*!*********************************************!*\
  !*** ./src/components/core/Footer/index.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/Footer/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar Footer = function Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {\n    class: "footer"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "footer-copy"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Todos os direitos reservados BrainXpert \\xA9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "footer-container-links"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "titulo_rodape"\n  }, "Cursos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Front-end"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Back-End"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Mobile-Futter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Full-Stack"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "footer-container-links"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "titulo_rodape"\n  }, "Empresas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Banco Itai"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Magazine Luci"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Nicolas e Cia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "font-light"\n  }, "Summer-down"))));\n};\n\nvar _default = Footer;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Footer, "Footer", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Footer\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Footer\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/Footer/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/Footer/style.css":
      /*!**********************************************!*\
  !*** ./src/components/core/Footer/style.css ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".footer {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    flex-wrap: nowrap;\\r\\n    width: 100%;\\r\\n    height: 200px;\\r\\n    font-size: 12px;\\r\\n    line-height: 18px;\\r\\n    background-color: #4a4a4a;\\r\\n    color: #fff;\\r\\n\\r\\n\\r\\n}\\r\\n\\r\\n.footer-copy {\\r\\n    padding: 50px 20px;\\r\\n    width: 50%;\\r\\n\\r\\n}\\r\\n\\r\\n.footer-container-links {\\r\\n    padding: 50px 10px 20px 20px;\\r\\n    width: 10%;\\r\\n    display: flex;\\r\\n\\r\\n}\\r\\n\\r\\n.titulo_rodape {\\r\\n    font-size: 12px;\\r\\n    line-height: 18px;\\r\\n    color: #fff;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/Footer/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/FormCadastro/index.js":
      /*!***************************************************!*\
  !*** ./src/components/core/FormCadastro/index.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/FormCadastro/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar FormCadastro = function FormCadastro(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var isStudent = props.isStudent;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "candidates sign-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {\n    className: "main-section-content"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {\n    className: "Container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "Container__title"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    lg: {\n      span: 8,\n      offset: 2\n    },\n    className: "Container__title__text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {\n    className: "Container_tittle__text__inverse"\n  }, "Bem-vindo!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    md: {\n      span: 6,\n      offset: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {\n    className: "Panel"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__heading"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {\n    className: "Panel__heading__text"\n  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {\n    className: "simple-form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    name: "utf8",\n    type: "hidden",\n    value: "\\u2713"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group email optional candidate_email"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label email optional",\n    for: "candidate_email"\n  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string email optional",\n    autofocus: "autofocus",\n    placeholder: "Digite o seu email",\n    type: "email",\n    name: "candidate[email]",\n    id: "candidate_email"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group password optional candidate_password"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label password optional",\n    for: "candidate_password"\n  }, "Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control password optional",\n    placeholder: "Digite a sua senha",\n    type: "password",\n    name: "candidate[password]",\n    id: "candidate_password"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row small-info-form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    className: "remember-me",\n    sm: {\n      span: 6\n    },\n    xs: {\n      span: 6\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group boolean optional candidate_remember_me"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormCheck"], {\n    className: "Checkbox"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "boolean optional label-checkbox",\n    for: "candidate_remember_me"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    onClick: "checkForCheckbox()",\n    className: "boolean optional",\n    type: "checkbox",\n    value: "1",\n    name: "candidate[remember_me]",\n    id: "candidate_remember_me"\n  }), "Mantenha-me conectado")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    className: "Login-problems",\n    sm: {\n      span: 6\n    },\n    xs: {\n      span: 6\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    class: "Text-right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    href: "/password/new"\n  }, "Problemas com o Log in?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {\n    to: "/profile-".concat(isStudent ? "estudante" : "empresa")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    type: "submit",\n    name: "commit",\n    value: "Entrar",\n    className: "btn btn btn-primary btn-lg btn-block"\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {\n    class: "text-inverse"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "Ainda n\\xE3o tem uma conta?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    href: "/criar-perfil-".concat(isStudent ? "estudante" : "empresa")\n  }, "Cadastrar gr\\xE1tis"))))))));\n};\n\nvar _default = FormCadastro;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormCadastro, "FormCadastro", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormCadastro\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormCadastro\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/FormCadastro/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/FormCadastro/style.css":
      /*!****************************************************!*\
  !*** ./src/components/core/FormCadastro/style.css ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\ndiv {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.Container {\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 55px;\\r\\n    display: table;\\r\\n    align-items: center;\\r\\n    padding-top: 60px;\\r\\n    padding-bottom: 40px;\\r\\n}\\r\\n\\r\\n.Container__title {\\r\\n    margin-left: -15px;\\r\\n    margin-right: -15px;\\r\\n    display: table;\\r\\n    box-sizing: border-box;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.Container_tittle__text__inverse {\\r\\n    padding-top: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.Container__title__text {\\r\\n    float: left;\\r\\n    margin-left: 16.6666666667%;\\r\\n    width: 66.6666666667%;\\r\\n    position: relative;\\r\\n    min-height: 1px;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n.Container__title__text>h1 {\\r\\n    font-size: 40px;\\r\\n    line-height: 52px;\\r\\n    font-weight: 300;\\r\\n    margin-top: 0;\\r\\n    padding-bottom: 36px;\\r\\n}\\r\\n\\r\\n.Panel {\\r\\n    margin-bottom: 32px;\\r\\n}\\r\\n\\r\\n.Panel__heading {\\r\\n    background-color: #0052FB;\\r\\n    border: none;\\r\\n    text-align: center;\\r\\n    padding: 24px;\\r\\n    border-top-right-radius: 3px;\\r\\n    border-top-left-radius: 3px;\\r\\n\\r\\n}\\r\\n\\r\\n.Panel__heading__text {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    font-size: 16px;\\r\\n    color: white;\\r\\n    line-height: 24px;\\r\\n    letter-spacing: 1px;\\r\\n    text-transform: uppercase;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.Panel__body {\\r\\n    color: #939DA5;\\r\\n    padding: 40px;\\r\\n}\\r\\n\\r\\n.Form-group {\\r\\n    margin-bottom: 24px;\\r\\n}\\r\\n\\r\\n.Checkbox {\\r\\n    position: relative;\\r\\n    display: block;\\r\\n    margin-top: 10px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.Checkbox label {\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n    line-height: 24px;\\r\\n    font-weight: 300;\\r\\n    margin-left: -18px;\\r\\n    font-size: 14px;\\r\\n\\r\\n}\\r\\n\\r\\n.Checkbox input[type=\\"checkbox\\"] {\\r\\n    position: relative;\\r\\n    top:0;\\r\\n    z-index: 0;\\r\\n    margin-top: 0;\\r\\n    margin-right: 8px;\\r\\n    height: 14;\\r\\n    width: 14;\\r\\n}\\r\\n\\r\\n.Login-problems a {\\r\\n    font-size: 12px;\\r\\n    float: right;\\r\\n}\\r\\n\\r\\n.Container input[type=\\"submit\\"] {\\r\\n    font-size: 12px;\\r\\n    letter-spacing: 1.2px;\\r\\n    padding: 12px 16px;\\r\\n    text-transform: uppercase;\\r\\n    background-color: #B58E02;\\r\\n    border-color: #B58E02 !important;\\r\\n}\\r\\n\\r\\n.sign-in .main-section-content {\\r\\n    background-color: #EAEFF5;\\r\\n    background: #EAEFF5;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/FormCadastro/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/FormFinal/index.js":
      /*!********************************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/FormFinal/index.js ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/FormRegistroEmpresa/FormFinal/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar FormFinal = function FormFinal(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var handleVoltar = props.handleVoltar;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {\n    className: "Panel"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__heading"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {\n    className: "Panel__heading__text"\n  }, "Cadastre-se "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Comece a contratar ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " desenvolvedores! \\u2728"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {\n    className: "Panel__heading__back",\n    onClick: function onClick() {\n      return handleVoltar(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {\n    className: "material-icons next-icon"\n  }, "arrow_back"), "Voltar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {\n    className: "Form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    name: "utf8",\n    type: "hidden",\n    value: "\\u2713"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group senha"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label senha required",\n    for: "candidate_senha"\n  }, "Senha (m\\xEDn. 8 caracteres)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string senha required",\n    autofocus: "autofocus",\n    placeholder: "Crie uma senha com pelo menos 8 carateres",\n    type: "senha",\n    value: "",\n    name: "candidate[senha]",\n    id: "candidate_senha"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group telefone required candidate_telefone"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label telefone required",\n    for: "candidate_telefone"\n  }, "Telefone para contato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string telefone required",\n    autofocus: "autofocus",\n    placeholder: "Digite n\\xFAmero de telefone com DD",\n    type: "email",\n    value: "",\n    name: "candidate[telefone]",\n    id: "candidate_telefone"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group numero_devs required candidate_numero"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label numero_devs required",\n    for: "candidate_empresa"\n  }, "N\\xFAmero de desenvolvedores"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {\n    class: "form-control select required ng-pristine ng-invalid ng-invalid-required ng-touched",\n    "ng-model": "company.number_of_programmers",\n    "ng-change": "resetValidation()",\n    required: "required",\n    "aria-required": "true",\n    name: "company[number_of_programmers]",\n    id: "company_number_of_programmers"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "_1_3"\n  }, "1-3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "_4_10"\n  }, "4-10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "_11_25"\n  }, "11-25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "_26_50"\n  }, "26-50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {\n    value: "_50"\n  }, "+50"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "button"\n  }, "Cadastrar"))));\n};\n\nvar _default = FormFinal;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormFinal, "FormFinal", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\FormFinal\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\FormFinal\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/FormFinal/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/FormFinal/style.css":
      /*!*********************************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/FormFinal/style.css ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "\\r\\n.Panel {\\r\\n    margin-bottom: 1rem;\\r\\n    background-color: white;\\r\\n    border-radius: 20px !important;\\r\\n    padding: 19px;\\r\\n    padding-bottom: 12px;\\r\\n    box-shadow: 0px 1px 1px #00000029;\\r\\n    border: 1px solid #f9f9f9;\\r\\n    max-width: 95%;\\r\\n}\\r\\n\\r\\n.Panel__heading {\\r\\n    border: none;\\r\\n    text-align: Left;\\r\\n    background-color: white;\\r\\n    padding: 24px 24px 16px 24px;\\r\\n}\\r\\n\\r\\n.Panel__heading__text {\\r\\n    padding-left: 14px;\\r\\n    line-height: 24px;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: left;\\r\\n    font-size: 12px;\\r\\n    letter-spacing: 1.5px;\\r\\n    color: #0052FB;\\r\\n    text-transform: uppercase;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.Panel__heading>h1 {\\r\\n    padding-top: 14px;\\r\\n    padding-left: 14px;\\r\\n    font-size: 24px;\\r\\n    color: #040C10;\\r\\n    text-align: left;\\r\\n    line-height: 124%;\\r\\n}\\r\\n\\r\\n.Panel__body {\\r\\n    color: #939DA5;\\r\\n    padding-top: 12px;\\r\\n}\\r\\n\\r\\n.Termos p {\\r\\n    font-size: 10px;\\r\\n}\\r\\n\\r\\n.Form .button {\\r\\n    font-size: 12px;\\r\\n    color: white;\\r\\n    letter-spacing: 1.2px;\\r\\n    padding: 12px 16px;\\r\\n    text-transform: uppercase;\\r\\n    background-color: #B58E02;\\r\\n    border-color: #B58E02 !important;\\r\\n    width:100%;\\r\\n}\\r\\n\\r\\n.Form .button > img {\\r\\n    margin-left: 6px;\\r\\n}\\r\\n\\r\\n.sign-in .main-section-content {\\r\\n    background-color: #EAEFF5;\\r\\n    background: #EAEFF5;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/FormFinal/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/FormInicial/index.js":
      /*!**********************************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/FormInicial/index.js ***!
  \**********************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/FormRegistroEmpresa/FormInicial/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar FormInicial = function FormInicial(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var handleSubmit = props.handleSubmit;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {\n    className: "Panel"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__heading"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {\n    className: "Panel__heading__text"\n  }, "Cadastre-se"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Comece a contratar ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " desenvolvedores! \\u2728")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Panel__body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {\n    className: "Form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    name: "utf8",\n    type: "hidden",\n    value: "\\u2713"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group nome"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label nome required",\n    for: "candidate_nome"\n  }, "Nome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string nome required",\n    autofocus: "autofocus",\n    placeholder: "ex Bruno Castano",\n    type: "nome",\n    value: "",\n    name: "candidate[nome]",\n    id: "candidate_nome"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group email required candidate_email"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label email required",\n    for: "candidate_email"\n  }, "Email corporativo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string email required",\n    autofocus: "autofocus",\n    placeholder: "ex bcastano@dh.org.br",\n    type: "email",\n    value: "",\n    name: "candidate[email]",\n    id: "candidate_email"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group empresa required candidate_empresa"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label empresa required",\n    for: "candidate_empresa"\n  }, "Nome da empresa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control string empresa required",\n    autofocus: "autofocus",\n    placeholder: "ex Digital House",\n    type: "nome",\n    value: "",\n    name: "candidate[empresa]",\n    id: "candidate_empresa"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "Form-group cidade required candidate_cidade"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {\n    className: "control-label password required",\n    for: "candidate_cidade"\n  }, "Cidade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {\n    className: "form-control password required",\n    placeholder: "ex S\\xE3o Paulo, SP",\n    type: "password",\n    name: "candidate[cidade]",\n    id: "candidate_cidade"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row small-info-form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    className: "Termos",\n    sm: {\n      span: 12\n    },\n    xs: {\n      span: 12\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", "Ao se cadastrar voc\\xEA aceita os nossos", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    href: ""\n  }, "Termos de uso")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "button",\n    onClick: function onClick() {\n      return handleSubmit(true);\n    }\n  }, "Quero contratar programadores", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineArrowRight"], {\n    color: "white",\n    style: {\n      marginLeft: "5px",\n      height: "20px",\n      width: "20px"\n    }\n  })))));\n};\n\nvar _default = FormInicial;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormInicial, "FormInicial", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\FormInicial\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\FormInicial\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/FormInicial/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/FormInicial/style.css":
      /*!***********************************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/FormInicial/style.css ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "\\r\\n.Panel {\\r\\n    margin-bottom: 1rem;\\r\\n    background-color: white;\\r\\n    border-radius: 20px !important;\\r\\n    padding: 19px;\\r\\n    padding-bottom: 12px;\\r\\n    box-shadow: 0px 1px 1px #00000029;\\r\\n    border: 1px solid #f9f9f9;\\r\\n    max-width: 95%;\\r\\n}\\r\\n\\r\\n.Panel__heading {\\r\\n    border: none;\\r\\n    text-align: Left;\\r\\n    background-color: white;\\r\\n    padding: 24px 24px 16px 24px;\\r\\n}\\r\\n\\r\\n.Panel__heading__text {\\r\\n    padding-left: 14px;\\r\\n    line-height: 24px;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: left;\\r\\n    font-size: 12px;\\r\\n    letter-spacing: 1.5px;\\r\\n    color: #0052FB;\\r\\n    text-transform: uppercase;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.Panel__heading__back {\\r\\n    padding-left: 14px;\\r\\n    color:#939DA5;\\r\\n    font-size: 14px;\\r\\n    line-height: 1.428571429;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.Panel__heading>h1 {\\r\\n    padding-top: 14px;\\r\\n    padding-left: 14px;\\r\\n    font-size: 24px;\\r\\n    color: #040C10;\\r\\n    text-align: left;\\r\\n    line-height: 124%;\\r\\n}\\r\\n\\r\\n.Panel__body {\\r\\n    color: #939DA5;\\r\\n    padding-top: 0;\\r\\n}\\r\\n\\r\\n.Termos p {\\r\\n    font-size: 10px;\\r\\n}\\r\\n\\r\\n.Form .button {\\r\\n    font-size: 12px;\\r\\n    color: white;\\r\\n    letter-spacing: 1.2px;\\r\\n    padding: 12px 16px;\\r\\n    text-transform: uppercase;\\r\\n    background-color: #B58E02;\\r\\n    border-color: #B58E02 !important;\\r\\n    width:100%;\\r\\n}\\r\\n\\r\\n.Form .button > img {\\r\\n    margin-left: 6px !important;\\r\\n    width: auto !important;\\r\\n}\\r\\n\\r\\n.sign-in .main-section-content {\\r\\n    background-color: #EAEFF5;\\r\\n    background: #EAEFF5;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/FormInicial/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/index.js":
      /*!**********************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/index.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/FormRegistroEmpresa/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _FormInicial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInicial */ "./src/components/core/FormRegistroEmpresa/FormInicial/index.js");\n/* harmony import */ var _FormFinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormFinal */ "./src/components/core/FormRegistroEmpresa/FormFinal/index.js");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar FormRegistroEmpresa = function FormRegistroEmpresa() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      toSecondStep = _useState2[0],\n      settoSecondStep = _useState2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "candidates sign-in"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {\n    className: "main-section-content"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {\n    className: "Container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {\n    md: {\n      span: 12\n    }\n  }, !toSecondStep ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormInicial__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    handleSubmit: function handleSubmit(props) {\n      return settoSecondStep(props);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormFinal__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    handleVoltar: function handleVoltar(props) {\n      return settoSecondStep(props);\n    }\n  }))))));\n};\n\n__signature__(FormRegistroEmpresa, "useState{[toSecondStep, settoSecondStep](false)}");\n\nvar _default = FormRegistroEmpresa;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormRegistroEmpresa, "FormRegistroEmpresa", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\FormRegistroEmpresa\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/FormRegistroEmpresa/style.css":
      /*!***********************************************************!*\
  !*** ./src/components/core/FormRegistroEmpresa/style.css ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\ndiv {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.Container {\\r\\n    display: table;\\r\\n    padding-top: 0;\\r\\n\\r\\n}\\r\\n\\r\\n.Container__title {\\r\\n    margin-left: -15px;\\r\\n    margin-right: -15px;\\r\\n    display: table;\\r\\n    box-sizing: border-box;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.Container_tittle__text__inverse {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.Container__title__text {\\r\\n    float: left;\\r\\n    margin-left: 16.6666666667%;\\r\\n    width: 66.6666666667%;\\r\\n    position: relative;\\r\\n    min-height: 1px;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n.Container__title__text>h1 {\\r\\n    font-size: 40px;\\r\\n    line-height: 52px;\\r\\n    font-weight: 300;\\r\\n    margin-top: 0;\\r\\n    padding-bottom: 36px;\\r\\n}\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/FormRegistroEmpresa/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/Header/index.js":
      /*!*********************************************!*\
  !*** ./src/components/core/Header/index.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/Header/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/logo.jpg */ "./src/assets/img/logo.jpg");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      Cadastro = _useState2[0],\n      setCadastro = _useState2[1];\n\n  var isLogin = props.isLogin;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {\n    className: "Header"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {\n    to: "/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {\n    src: _assets_img_logo_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],\n    className: "logo",\n    alt: "logo"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {\n    className: "Nav"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/plataforma"\n  }, "A plataforma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/cursos"\n  }, "Cursos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/empresas"\n  }, "Empresas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/contato"\n  }, "Contato"), !isLogin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    className: "Cadastro",\n    onMouseOver: function onMouseOver() {\n      return setCadastro(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "",\n    className: "Cadastro_button"\n  }, "Cadastre-se")) : null), Cadastro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    className: "Cadastro__menu",\n    onMouseLeave: function onMouseLeave() {\n      return setCadastro(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/estudantes/sign_in"\n  }, " Sou estudante "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/empresa/sign_in"\n  }, " Sou empresa ")) : null);\n};\n\n__signature__(Header, "useState{[Cadastro, setCadastro](false)}");\n\nvar _default = Header;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Header, "Header", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Header\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\Header\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/Header/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/Header/style.css":
      /*!**********************************************!*\
  !*** ./src/components/core/Header/style.css ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);", ""]);\n\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.Header {\\r\\n    display: grid;\\r\\n    grid-template-areas: \'logo nav\';\\r\\n    background-color: #0052FB;\\r\\n    padding: 0.5rem 1rem;\\r\\n    border-bottom-style: solid;\\r\\n    border-bottom-color: #f5f7fa;\\r\\n    border-bottom-width: thin;\\r\\n}\\r\\n\\r\\n.Nav {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-left: 200px;\\r\\n}\\r\\n\\r\\n.Nav>a {\\r\\n    color: #fff !important;\\r\\n    text-decoration: none !important;\\r\\n    margin: 0;\\r\\n    padding: 1.4rem 1rem 1.6rem;\\r\\n    color: #555;\\r\\n    letter-spacing: 0.1em;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: normal;\\r\\n    text-decoration: none;\\r\\n    border-top: .3rem solid transparent;\\r\\n}\\r\\n\\r\\n.Header img {\\r\\n    margin-left: 100px;\\r\\n    object-fit: cover;\\r\\n    width: 200px;\\r\\n    height: 80px;\\r\\n}\\r\\n\\r\\n.Header .Cadastro a {\\r\\n    border: 1px solid white;\\r\\n    border-radius: 5px;\\r\\n    color: #fff !important;\\r\\n    text-decoration: none !important;\\r\\n    margin: 0;\\r\\n    padding: 1rem 1rem 1rem;\\r\\n    color: #555;\\r\\n    letter-spacing: 0.1em;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: normal;\\r\\n    text-decoration: none;\\r\\n    display: table-cell;\\r\\n\\r\\n}\\r\\n\\r\\n.Cadastro {\\r\\n    height: 100%;\\r\\n    margin-top: 30px;\\r\\n}\\r\\n\\r\\n\\r\\n.Cadastro__menu {\\r\\n    width: 160px;\\r\\n    padding: 16px 0;\\r\\n    list-style: none;\\r\\n    font-size: 14px;\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #ccc !important;\\r\\n    border-radius: 4px;\\r\\n    -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\\r\\n    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\\r\\n    background-clip: padding-box;\\r\\n    right: 202px;\\r\\n    top: 84px;\\r\\n    line-height: 24px;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.Cadastro__menu>a {\\r\\n    width: 90%;\\r\\n    color: #000;\\r\\n    font-size: 12px;\\r\\n    line-height: 36px;\\r\\n    text-transform: none;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: center;\\r\\n    margin-left: 8px;\\r\\n}\\r\\n\\r\\n.Cadastro__menu>a:hover {\\r\\n    color: #000 !important;\\r\\n    background-color: #F0F0FF;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: none;\\r\\n    box-sizing: content-box;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/Header/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/HeaderCadastro/index.js":
      /*!*****************************************************!*\
  !*** ./src/components/core/HeaderCadastro/index.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/core/HeaderCadastro/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img_logo_transp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/img/logo_transp.png */ "./src/assets/img/logo_transp.png");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar HeaderCadastro = function HeaderCadastro(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _ref);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      Cadastro = _useState2[0],\n      setCadastro = _useState2[1];\n\n  var myLogo = props.myLogo,\n      zIndex = props.zIndex;\n  var styleBemvindo = {\n    backgroundColor: "transparent",\n    zIndex: "1030",\n    borderColor: "transparent",\n    position: "fixed",\n    right: "0",\n    left: "0"\n  };\n  var useLogo = myLogo ? myLogo : _assets_img_logo_transp_png__WEBPACK_IMPORTED_MODULE_4__["default"];\n  var useColor = myLogo ? "white" : "#000";\n  var useStyle = myLogo ? styleBemvindo : null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {\n    className: "HeaderCadastro",\n    style: useStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {\n    to: "/"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {\n    src: useLogo,\n    className: "logo",\n    alt: "logo"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {\n    className: "NavCadastro"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/estudantes-destaques",\n    style: {\n      color: "".concat(useColor)\n    }\n  }, "Estudantes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/criar-perfil-estudante",\n    style: {\n      color: "".concat(useColor)\n    }\n  }, "Cadastrar como estudante"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    className: "Cadastro",\n    onMouseOver: function onMouseOver() {\n      return setCadastro(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "",\n    className: "Cadastro_button",\n    style: {\n      color: "".concat(useColor)\n    }\n  }, "J\\xE1 tenho conta, entrar"))), Cadastro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {\n    className: "Cadastro__menu",\n    onMouseLeave: function onMouseLeave() {\n      return setCadastro(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/estudantes/sign_in"\n  }, " Sou estudante "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {\n    href: "/empresa/sign_in"\n  }, " Sou empresa ")) : null);\n};\n\n__signature__(HeaderCadastro, "useState{[Cadastro, setCadastro](false)}");\n\nvar _default = HeaderCadastro;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(HeaderCadastro, "HeaderCadastro", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\HeaderCadastro\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\HeaderCadastro\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/HeaderCadastro/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/HeaderCadastro/style.css":
      /*!******************************************************!*\
  !*** ./src/components/core/HeaderCadastro/style.css ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);", ""]);\n\n// Module\nexports.push([module.i, "* {\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n}\\r\\n\\r\\n.HeaderCadastro {\\r\\n    display: grid;\\r\\n    grid-template-areas: \'logo nav\';\\r\\n    background-color: #EAEFF5;\\r\\n    padding: 0.5rem 1rem;\\r\\n    border-bottom-style: solid;\\r\\n    border-bottom-color: #f5f7fa;\\r\\n    border-bottom-width: thin;\\r\\n}\\r\\n\\r\\n.NavCadastro {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-left: 200px;\\r\\n}\\r\\n\\r\\n.NavCadastro>a {\\r\\n    text-decoration: none !important;\\r\\n    margin: 0;\\r\\n    padding: 1.4rem 1rem 1.6rem;\\r\\n    color: #000;\\r\\n    text-transform: capitalize;\\r\\n    letter-spacing: 0.1em;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: normal;\\r\\n    text-decoration: none;\\r\\n    border-top: .3rem solid transparent;\\r\\n}\\r\\n\\r\\n.HeaderCadastro img {\\r\\n    margin-left: 100px;\\r\\n    object-fit: cover;\\r\\n    width: 200px;\\r\\n    height: 80px;\\r\\n}\\r\\n\\r\\n.HeaderCadastro .Cadastro>a {\\r\\n    border: 1px solid  #EAEFF5 ;\\r\\n    border-radius: 5px;\\r\\n    color: #000;\\r\\n    text-transform: capitalize;\\r\\n    text-decoration: none !important;\\r\\n    margin: 0;\\r\\n    padding: 1rem 1rem 1rem;\\r\\n    letter-spacing: 0.1em;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: normal;\\r\\n    text-decoration: none;\\r\\n    display: table-cell;\\r\\n\\r\\n}\\r\\n\\r\\n.Cadastro {\\r\\n    height: 100%;\\r\\n    margin-top: 30px;\\r\\n}\\r\\n\\r\\n\\r\\n.Cadastro__menu {\\r\\n    width: 160px;\\r\\n    padding: 16px 0;\\r\\n    list-style: none;\\r\\n    font-size: 14px;\\r\\n    background-color: #fff;\\r\\n    border: 1px solid #ccc !important;\\r\\n    border-radius: 4px;\\r\\n    -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\\r\\n    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);\\r\\n    background-clip: padding-box;\\r\\n    right: 202px;\\r\\n    top: 84px;\\r\\n    line-height: 24px;\\r\\n    position: absolute;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.Cadastro__menu>a {\\r\\n    width: 90%;\\r\\n    color: #000;\\r\\n    font-size: 12px;\\r\\n    line-height: 36px;\\r\\n    text-transform: none;\\r\\n    letter-spacing: 1px;\\r\\n    text-align: center;\\r\\n    margin-left: 8px;\\r\\n}\\r\\n\\r\\n.Cadastro__menu>a:hover {\\r\\n    color: #000 !important;\\r\\n    background-color: #F0F0FF;\\r\\n    border-radius: 10px;\\r\\n    box-shadow: none;\\r\\n    box-sizing: content-box;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/HeaderCadastro/style.css?'
        );

        /***/
      },

    /***/ "./src/components/core/HeaderPageCursos/index.js":
      /*!*******************************************************!*\
  !*** ./src/components/core/HeaderPageCursos/index.js ***!
  \*******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/components/core/HeaderPageCursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_logo_transp_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/logo_transp.png */ "./src/assets/img/logo_transp.png");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar HeaderPagesCursos = function HeaderPagesCursos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "menu"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "index.html",\n    class: "menu-logo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_logo_transp_png__WEBPACK_IMPORTED_MODULE_2__["default"],\n    alt: "BrainXpert logo"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n    class: "nav"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n    class: "menu-navbar"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "menu-navbar-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "Aprenda")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "menu-navbar-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "Comunidade")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n    class: "large material-icons"\n  }, "circle_notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    class: "menu-navbar-item"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "#"\n  }, "Bruno"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    class: "subMenu"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Dashboard")));\n};\n\nvar _default = HeaderPagesCursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(HeaderPagesCursos, "HeaderPagesCursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\HeaderPageCursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\components\\\\core\\\\HeaderPageCursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/components/core/HeaderPageCursos/index.js?'
        );

        /***/
      },

    /***/ "./src/components/core/HeaderPageCursos/style.css":
      /*!********************************************************!*\
  !*** ./src/components/core/HeaderPageCursos/style.css ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "/* menu */\\r\\n\\r\\n.menu {\\r\\n\\r\\n    background-color: #0052FB;\\r\\n    padding: 0.5rem 1rem;\\r\\n    display: flex;\\r\\n\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    height: 100px;\\r\\n}\\r\\n\\r\\n.menu-logo img {\\r\\n    width: 200px;\\r\\n    height: 200px;\\r\\n}\\r\\n\\r\\n.menu-navbar {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-right: 20px;\\r\\n\\r\\n}\\r\\n\\r\\n.menu-navbar-item a {\\r\\n    color: #fff;\\r\\n    text-decoration: none;\\r\\n    margin: 0;\\r\\n    padding: 1.4rem 1rem 1.6rem;\\r\\n    letter-spacing: 0.1em;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    font-size: 0.9rem;\\r\\n    font-weight: normal;\\r\\n    text-decoration: none;\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.subMenu {\\r\\n    background: #404040;\\r\\n    display: flex;\\r\\n    justify-content: flex-start;\\r\\n    padding: 0.5rem 2rem;\\r\\n    color: #fff;\\r\\n}\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/components/core/HeaderPageCursos/style.css?'
        );

        /***/
      },

    /***/ "./src/helpers/users.json":
      /*!********************************!*\
  !*** ./src/helpers/users.json ***!
  \********************************/
      /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
      /***/ function (module) {
        eval(
          'module.exports = JSON.parse("[{\\"id\\":1,\\"name\\":\\"Leanne Graham\\",\\"username\\":\\"Bret\\",\\"email\\":\\"Sincere@april.biz\\",\\"address\\":{\\"street\\":\\"Kulas Light\\",\\"suite\\":\\"Apt. 556\\",\\"city\\":\\"Gwenborough\\",\\"zipcode\\":\\"92998-3874\\",\\"geo\\":{\\"lat\\":\\"-37.3159\\",\\"lng\\":\\"81.1496\\"}},\\"phone\\":\\"1-770-736-8031 x56442\\",\\"website\\":\\"hildegard.org\\",\\"company\\":{\\"name\\":\\"Romaguera-Crona\\",\\"catchPhrase\\":\\"Multi-layered client-server neural-net\\",\\"bs\\":\\"harness real-time e-markets\\"}},{\\"id\\":2,\\"name\\":\\"Ervin Howell\\",\\"username\\":\\"Antonette\\",\\"email\\":\\"Shanna@melissa.tv\\",\\"address\\":{\\"street\\":\\"Victor Plains\\",\\"suite\\":\\"Suite 879\\",\\"city\\":\\"Wisokyburgh\\",\\"zipcode\\":\\"90566-7771\\",\\"geo\\":{\\"lat\\":\\"-43.9509\\",\\"lng\\":\\"-34.4618\\"}},\\"phone\\":\\"010-692-6593 x09125\\",\\"website\\":\\"anastasia.net\\",\\"company\\":{\\"name\\":\\"Deckow-Crist\\",\\"catchPhrase\\":\\"Proactive didactic contingency\\",\\"bs\\":\\"synergize scalable supply-chains\\"}},{\\"id\\":3,\\"name\\":\\"Clementine Bauch\\",\\"username\\":\\"Samantha\\",\\"email\\":\\"Nathan@yesenia.net\\",\\"address\\":{\\"street\\":\\"Douglas Extension\\",\\"suite\\":\\"Suite 847\\",\\"city\\":\\"McKenziehaven\\",\\"zipcode\\":\\"59590-4157\\",\\"geo\\":{\\"lat\\":\\"-68.6102\\",\\"lng\\":\\"-47.0653\\"}},\\"phone\\":\\"1-463-123-4447\\",\\"website\\":\\"ramiro.info\\",\\"company\\":{\\"name\\":\\"Romaguera-Jacobson\\",\\"catchPhrase\\":\\"Face to face bifurcated interface\\",\\"bs\\":\\"e-enable strategic applications\\"}},{\\"id\\":4,\\"name\\":\\"Patricia Lebsack\\",\\"username\\":\\"Karianne\\",\\"email\\":\\"Julianne.OConner@kory.org\\",\\"address\\":{\\"street\\":\\"Hoeger Mall\\",\\"suite\\":\\"Apt. 692\\",\\"city\\":\\"South Elvis\\",\\"zipcode\\":\\"53919-4257\\",\\"geo\\":{\\"lat\\":\\"29.4572\\",\\"lng\\":\\"-164.2990\\"}},\\"phone\\":\\"493-170-9623 x156\\",\\"website\\":\\"kale.biz\\",\\"company\\":{\\"name\\":\\"Robel-Corkery\\",\\"catchPhrase\\":\\"Multi-tiered zero tolerance productivity\\",\\"bs\\":\\"transition cutting-edge web services\\"}},{\\"id\\":5,\\"name\\":\\"Chelsey Dietrich\\",\\"username\\":\\"Kamren\\",\\"email\\":\\"Lucio_Hettinger@annie.ca\\",\\"address\\":{\\"street\\":\\"Skiles Walks\\",\\"suite\\":\\"Suite 351\\",\\"city\\":\\"Roscoeview\\",\\"zipcode\\":\\"33263\\",\\"geo\\":{\\"lat\\":\\"-31.8129\\",\\"lng\\":\\"62.5342\\"}},\\"phone\\":\\"(254)954-1289\\",\\"website\\":\\"demarco.info\\",\\"company\\":{\\"name\\":\\"Keebler LLC\\",\\"catchPhrase\\":\\"User-centric fault-tolerant solution\\",\\"bs\\":\\"revolutionize end-to-end systems\\"}},{\\"id\\":6,\\"name\\":\\"Mrs. Dennis Schulist\\",\\"username\\":\\"Leopoldo_Corkery\\",\\"email\\":\\"Karley_Dach@jasper.info\\",\\"address\\":{\\"street\\":\\"Norberto Crossing\\",\\"suite\\":\\"Apt. 950\\",\\"city\\":\\"South Christy\\",\\"zipcode\\":\\"23505-1337\\",\\"geo\\":{\\"lat\\":\\"-71.4197\\",\\"lng\\":\\"71.7478\\"}},\\"phone\\":\\"1-477-935-8478 x6430\\",\\"website\\":\\"ola.org\\",\\"company\\":{\\"name\\":\\"Considine-Lockman\\",\\"catchPhrase\\":\\"Synchronised bottom-line interface\\",\\"bs\\":\\"e-enable innovative applications\\"}},{\\"id\\":7,\\"name\\":\\"Kurtis Weissnat\\",\\"username\\":\\"Elwyn.Skiles\\",\\"email\\":\\"Telly.Hoeger@billy.biz\\",\\"address\\":{\\"street\\":\\"Rex Trail\\",\\"suite\\":\\"Suite 280\\",\\"city\\":\\"Howemouth\\",\\"zipcode\\":\\"58804-1099\\",\\"geo\\":{\\"lat\\":\\"24.8918\\",\\"lng\\":\\"21.8984\\"}},\\"phone\\":\\"210.067.6132\\",\\"website\\":\\"elvis.io\\",\\"company\\":{\\"name\\":\\"Johns Group\\",\\"catchPhrase\\":\\"Configurable multimedia task-force\\",\\"bs\\":\\"generate enterprise e-tailers\\"}},{\\"id\\":8,\\"name\\":\\"Nicholas Runolfsdottir V\\",\\"username\\":\\"Maxime_Nienow\\",\\"email\\":\\"Sherwood@rosamond.me\\",\\"address\\":{\\"street\\":\\"Ellsworth Summit\\",\\"suite\\":\\"Suite 729\\",\\"city\\":\\"Aliyaview\\",\\"zipcode\\":\\"45169\\",\\"geo\\":{\\"lat\\":\\"-14.3990\\",\\"lng\\":\\"-120.7677\\"}},\\"phone\\":\\"586.493.6943 x140\\",\\"website\\":\\"jacynthe.com\\",\\"company\\":{\\"name\\":\\"Abernathy Group\\",\\"catchPhrase\\":\\"Implemented secondary concept\\",\\"bs\\":\\"e-enable extensible e-tailers\\"}},{\\"id\\":9,\\"name\\":\\"Glenna Reichert\\",\\"username\\":\\"Delphine\\",\\"email\\":\\"Chaim_McDermott@dana.io\\",\\"address\\":{\\"street\\":\\"Dayna Park\\",\\"suite\\":\\"Suite 449\\",\\"city\\":\\"Bartholomebury\\",\\"zipcode\\":\\"76495-3109\\",\\"geo\\":{\\"lat\\":\\"24.6463\\",\\"lng\\":\\"-168.8889\\"}},\\"phone\\":\\"(775)976-6794 x41206\\",\\"website\\":\\"conrad.com\\",\\"company\\":{\\"name\\":\\"Yost and Sons\\",\\"catchPhrase\\":\\"Switchable contextually-based project\\",\\"bs\\":\\"aggregate real-time technologies\\"}},{\\"id\\":10,\\"name\\":\\"Clementina DuBuque\\",\\"username\\":\\"Moriah.Stanton\\",\\"email\\":\\"Rey.Padberg@karina.biz\\",\\"address\\":{\\"street\\":\\"Kattie Turnpike\\",\\"suite\\":\\"Suite 198\\",\\"city\\":\\"Lebsackbury\\",\\"zipcode\\":\\"31428-2261\\",\\"geo\\":{\\"lat\\":\\"-38.2386\\",\\"lng\\":\\"57.2232\\"}},\\"phone\\":\\"024-648-3804\\",\\"website\\":\\"ambrose.net\\",\\"company\\":{\\"name\\":\\"Hoeger LLC\\",\\"catchPhrase\\":\\"Centralized empowering task-force\\",\\"bs\\":\\"target end-to-end models\\"}}]");\n\n//# sourceURL=webpack:///./src/helpers/users.json?'
        );

        /***/
      },

    /***/ "./src/pages/AdminDash/index.js":
      /*!**************************************!*\
  !*** ./src/pages/AdminDash/index.js ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "react-admin");\n/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_admin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/pages/AdminDash/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_users_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/users.json */ "./src/helpers/users.json");\nvar _helpers_users_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../helpers/users.json */ "./src/helpers/users.json", 1);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar dataProvider = _helpers_users_json__WEBPACK_IMPORTED_MODULE_3__;\n\nvar AdminDash = function AdminDash() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Admin"], {\n    dataProvider: dataProvider\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {\n    name: "users",\n    list: react_admin__WEBPACK_IMPORTED_MODULE_1__["ListGuesser"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {\n    name: "companies",\n    list: react_admin__WEBPACK_IMPORTED_MODULE_1__["ListGuesser"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {\n    name: "courses",\n    list: react_admin__WEBPACK_IMPORTED_MODULE_1__["ListGuesser"]\n  }));\n};\n\nvar _default = AdminDash;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(dataProvider, "dataProvider", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\AdminDash\\\\index.js");\n  reactHotLoader.register(AdminDash, "AdminDash", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\AdminDash\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\AdminDash\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/AdminDash/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/AdminDash/style.css":
      /*!***************************************!*\
  !*** ./src/pages/AdminDash/style.css ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/AdminDash/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/AdminLogin/index.js":
      /*!***************************************!*\
  !*** ./src/pages/AdminLogin/index.js ***!
  \***************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/AdminLogin/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_admin_AdminFormCadastro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/AdminFormCadastro.js */ "./src/components/admin/AdminFormCadastro.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar AdminCadastro = function AdminCadastro() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin_AdminFormCadastro_js__WEBPACK_IMPORTED_MODULE_2__["default"], null);\n};\n\nvar _default = AdminCadastro;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AdminCadastro, "AdminCadastro", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\AdminLogin\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\AdminLogin\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/AdminLogin/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/AdminLogin/style.css":
      /*!****************************************!*\
  !*** ./src/pages/AdminLogin/style.css ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/AdminLogin/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/BemVindo/index.js":
      /*!*************************************!*\
  !*** ./src/pages/BemVindo/index.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/pages/BemVindo/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_core_BannerBemVindo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/BannerBemVindo */ "./src/components/core/BannerBemVindo/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/HeaderCadastro */ "./src/components/core/HeaderCadastro/index.js");\n/* harmony import */ var _assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/logo_white.png */ "./src/assets/img/logo_white.png");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar BemVindo = function BemVindo(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var isStudent = props.isStudent;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: "Header",\n    myLogo: _assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_6__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_BannerBemVindo__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "Footer"\n  }));\n};\n\nvar _default = BemVindo;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BemVindo, "BemVindo", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\BemVindo\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\BemVindo\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/BemVindo/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/BemVindo/style.css":
      /*!**************************************!*\
  !*** ./src/pages/BemVindo/style.css ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/BemVindo/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/Cadastro/index.js":
      /*!*************************************!*\
  !*** ./src/pages/Cadastro/index.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/pages/Cadastro/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_core_FormCadastro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/FormCadastro */ "./src/components/core/FormCadastro/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar Cadastro = function Cadastro(_ref) {\n  var props = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);\n\n  var isStudent = props.isStudent;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    isLogin: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_FormCadastro__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    isStudent: isStudent\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));\n};\n\nvar _default = Cadastro;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Cadastro, "Cadastro", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Cadastro\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Cadastro\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/Cadastro/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/Cadastro/style.css":
      /*!**************************************!*\
  !*** ./src/pages/Cadastro/style.css ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/Cadastro/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/Contato/index.js":
      /*!************************************!*\
  !*** ./src/pages/Contato/index.js ***!
  \************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/Contato/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_Contato__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/Contato */ "./src/components/core/Contato/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar contato = function contato() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {\n    className: "main"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Contato__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    className: "contato"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));\n};\n\nvar _default = contato;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(contato, "contato", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Contato\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Contato\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/Contato/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/Contato/style.css":
      /*!*************************************!*\
  !*** ./src/pages/Contato/style.css ***!
  \*************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/Contato/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/Cursos/index.js":
      /*!***********************************!*\
  !*** ./src/pages/Cursos/index.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/Cursos/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_BannerOfertaCursos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/BannerOfertaCursos */ "./src/components/core/BannerOfertaCursos/index.js");\n/* harmony import */ var _components_core_ContainerCursosRecomendados__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/ContainerCursosRecomendados */ "./src/components/core/ContainerCursosRecomendados/index.js");\n/* harmony import */ var _components_core_ContainerCursosRelacionados__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/core/ContainerCursosRelacionados */ "./src/components/core/ContainerCursosRelacionados/index.js");\n/* harmony import */ var _components_core_ContainerCursosEmAlta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/core/ContainerCursosEmAlta */ "./src/components/core/ContainerCursosEmAlta/index.js");\n/* harmony import */ var _components_core_ContainerFiltroCursos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/core/ContainerFiltroCursos */ "./src/components/core/ContainerFiltroCursos/index.js");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nvar Cursos = function Cursos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {\n    className: "CursosContainer"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {\n    className: "CursosContainer-Row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {\n    lg: {\n      span: 2\n    },\n    className: "CursosContainer-Form"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerFiltroCursos__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {\n    lg: {\n      span: 10\n    },\n    className: "CursosContainer-Courses"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerOfertaCursos__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerCursosRecomendados__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerCursosEmAlta__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerCursosRelacionados__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));\n};\n\nvar _default = Cursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Cursos, "Cursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Cursos\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Cursos\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/Cursos/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/Cursos/style.css":
      /*!************************************!*\
  !*** ./src/pages/Cursos/style.css ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".CursosContainer {\\r\\n    margin:0 !important;\\r\\n    padding:0 !important;\\r\\n    max-width: 100% !important;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.CursosContainer-Row{\\r\\n    margin:0 !important;\\r\\n}\\r\\n\\r\\n.CursosContainer-Courses{\\r\\n    padding:0 !important;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/Cursos/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/Empresas/index.js":
      /*!*************************************!*\
  !*** ./src/pages/Empresas/index.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/Empresas/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_core_FormRegistroEmpresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/FormRegistroEmpresa */ "./src/components/core/FormRegistroEmpresa/index.js");\n/* harmony import */ var _components_core_BannerDepoimentoEmpresas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/BannerDepoimentoEmpresas */ "./src/components/core/BannerDepoimentoEmpresas/index.js");\n/* harmony import */ var _components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/HeaderCadastro */ "./src/components/core/HeaderCadastro/index.js");\n/* harmony import */ var _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/img/olx.png */ "./src/assets/img/olx.png");\n/* harmony import */ var _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/magazineluiza.png */ "./src/assets/img/magazineluiza.png");\n/* harmony import */ var _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/img/mercadolivre.jpg */ "./src/assets/img/mercadolivre.jpg");\n/* harmony import */ var _assets_img_person_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/person-3.png */ "./src/assets/img/person-3.png");\n/* harmony import */ var _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/empresa.png */ "./src/assets/img/empresa.png");\n/* harmony import */ var _assets_img_skills_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/skills.png */ "./src/assets/img/skills.png");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_core_BannerDepoimentos_ItemEmpresa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/core/BannerDepoimentos/ItemEmpresa */ "./src/components/core/BannerDepoimentos/ItemEmpresa/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_BannerPrecosEmpresa__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/core/BannerPrecosEmpresa */ "./src/components/core/BannerPrecosEmpresa/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar depoimentos = [{\n  nome: "Augusto Antunes",\n  cargo: "CTO Magazine Luiza",\n  testimonio: "A plataforma tem uma proposta muito nobre de empresa: democratizar o ensino de tecnologia pra todo mundo e com isso ajudar muitos jovens a realizar seus sonhos, aquecer o mercado de TI.",\n  avatar: "person-1.jpg",\n  empresalogo: "magazineluiza.png"\n}, {\n  nome: "Elder Novaes",\n  cargo: "CTO Mercado Livre",\n  testimonio: "A plataforma me ajudou bastante em um dos meus objetivos: uma primeira oportunidade na área.Consegui uma oportunidade como Desenvolvedor Mobile Jr em uma grande empresa!",\n  avatar: "person-2.jpg",\n  empresalogo: "mercadolivre.png"\n}, {\n  nome: "Mayara Nunes",\n  cargo: "CTO Olx",\n  testimonio: "A plataforma oferece muitas oportunidades através dos cursos criados por excelentes profissionais de algumas das maiores empresas do mercado. Hoje participo de um grande projeto, que tenho certeza que dará ótimos resultados",\n  avatar: "person-3.png",\n  empresalogo: "olx.png"\n}, {\n  nome: "José Cruz",\n  cargo: "CEO Olx",\n  testimonio: "A plataforma é incrível. Além das metodologias do curso serem de alcançarem quem está começando e tambem quem já possui um conhecimento na àrea, no forúm de dúvidas, sempre tem muitas pessoas dispostas a ajudar.",\n  avatar: "person-4.jpg",\n  empresalogo: "olx.png"\n}, {\n  nome: "Sergio Alves",\n  cargo: "CSO Olx",\n  testimonio: "Os professores, por serem profissionais da área, explicam de forma muito didática. Vêm sempre com técnicas muito práticas que podemos aplicar no dia a dia. E também com uma mecânica muito legal de acompanhamento dos exercícios feitos pelos alunos",\n  avatar: "person-1.jpg",\n  empresalogo: "olx.png"\n}];\n\nvar Empresas = function Empresas() {\n  var value = depoimentos[0];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "registrations"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "companies-registration"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    },\n    className: "col-1"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 5\n    },\n    className: "col-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Contratar programador ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \\xE9 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "mais eficaz "), "com ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "a BrainExpert \\uD83D\\uDE80"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Se voc\\xEA quiser contratar programadores com conhecimento ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " ", "t\\xE9cnico, comportamental e pr\\xE9-validados ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " sem perder tempo est\\xE1 no lugar certo!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_15__["BiTime"], {\n    color: "#0052FB"\n  }), " Leve em m\\xE9dia", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "7 dias para contratar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__["AiOutlineStar"], {\n    color: "#0052FB"\n  }), " Acesse candidatos", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "pr\\xE9-validados e engajados")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_14__["RiSendPlaneLine"], {\n    color: "#0052FB"\n  }), " Receba", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "recomenda\\xE7\\xF5es"), " para as suas vagas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "text-small"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Onde as melhores empresas contrataram desenvolvedores")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "companies-logo"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "img-wrapper",\n    lg: {\n      span: 2,\n      offset: 3\n    }\n  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_olx_png__WEBPACK_IMPORTED_MODULE_6__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "img-wrapper",\n    lg: {\n      span: 2\n    }\n  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_magazineluiza_png__WEBPACK_IMPORTED_MODULE_7__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    className: "img-wrapper",\n    lg: {\n      span: 2\n    }\n  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_mercadolivre_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 5\n    },\n    className: "col-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_FormRegistroEmpresa__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    },\n    className: "col-1"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "companies-descricao"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 5\n    },\n    className: "col-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "img-cascade"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "img img-first"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_person_3_png__WEBPACK_IMPORTED_MODULE_9__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "img img-scnd"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_empresa_png__WEBPACK_IMPORTED_MODULE_10__["default"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "img img-trd"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: _assets_img_skills_png__WEBPACK_IMPORTED_MODULE_11__["default"]\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 7\n    },\n    className: "col-5-texto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Somos especialistas em educar programadores"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle"\n  }, "Falamos a mesma l\\xEDngua dos devs e vamos te ajudar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Por meio de nossa plataforma, atra\\xEDmos, treinamos, pr\\xE9-validamos e selecionamos os desenvolvedores mais engajados, e com maior connhecimento t\\xE9cnico."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsBell"], {\n    color: "#0052FB"\n  }), " Candidatos muito mais engajados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsStar"], {\n    color: "#0052FB"\n  }), " Os melhores candidatos pr\\xE9-validados")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    href: "/criar-perfil-estudante"\n  }, "Como \\xE9 para os candidatos? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__["AiOutlineArrowRight"], null), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 2\n    },\n    className: "col-2"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n    className: "companies-depoimento"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {\n    className: "container-depoimento"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Receba recomenda\\xE7\\xF5es de acordo com as suas ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " vagas \\uD83C\\uDFC6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Conte com a plataforma para fazer buscas, e para ajud\\xE1-lo(a) a fechar a sua vaga de desenvolvedor!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsStar"], {\n    color: "#0052FB"\n  }), " Conte com o suporte do nosso time de Customer Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_12__["BsChatSquareDots"], {\n    color: "#0052FB"\n  }), " Receba recomenda\\xE7\\xF5es autom\\xE1ticas da plataforma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__["AiOutlineAreaChart"], {\n    color: "#0052FB"\n  }), " Encontre profissionais com match para as suas vagas"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerDepoimentos_ItemEmpresa__WEBPACK_IMPORTED_MODULE_16__["default"], {\n    cargo: value.cargo,\n    testimonio: value.testimonio,\n    nome: value.nome,\n    avatar: value.avatar,\n    empresa_logo: value.empresalogo\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 4,\n      offset: 4\n    },\n    style: {\n      paddingTop: "30px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n    className: "button",\n    onClick: function onClick() {\n      return window.scrollTo(0, 0);\n    }\n  }, "Quero contratar programadores", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__["AiOutlineArrowRight"], {\n    color: "white",\n    style: {\n      marginLeft: "5px",\n      height: "20px",\n      width: "20px"\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    style: {\n      paddingTop: "48px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    },\n    style: {\n      paddingTop: "16px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Nossa plataforma em n\\xFAmeros \\uD83D\\uDC49")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    style: {\n      color: "#0052FB",\n      fontSize: "60px"\n    }\n  }, "80", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {\n    style: {\n      fontSize: "32px"\n    }\n  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle",\n    style: {\n      color: "#040C10B",\n      fontWeight: "500",\n      fontSize: "16px"\n    }\n  }, "dos candidatos com conhecimentos certificados"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    style: {\n      color: "#040C10B",\n      fontWeight: "200",\n      fontSize: "16px"\n    }\n  }, "Conhecimentos nas tecnolog\\xEDas mais relevantes do mercado")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    style: {\n      color: "#0052FB",\n      fontSize: "60px"\n    }\n  }, "97", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {\n    style: {\n      fontSize: "32px"\n    }\n  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle",\n    style: {\n      color: "#040C10",\n      fontWeight: "500",\n      fontSize: "16px"\n    }\n  }, "dos candidatos participando ativamente nas comunidades"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    style: {\n      color: "#040C10B",\n      fontWeight: "200",\n      fontSize: "16px"\n    }\n  }, "Intera\\xE7\\xF5es relevantes pra constru\\xE7\\xE3o do equipes", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    style: {\n      color: "#0052FB",\n      fontSize: "60px"\n    }\n  }, "10", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {\n    style: {\n      fontSize: "32px"\n    }\n  }, " dias")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "subtitle",\n    style: {\n      color: "#040C10",\n      fontWeight: "500",\n      fontSize: "16px"\n    }\n  }, "para contrata\\xE7\\xE3o desde a primeira abordagem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    style: {\n      color: "#040C10B",\n      fontWeight: "200",\n      fontSize: "16px"\n    }\n  }, "Leve em m\\xE9dia 10 dias entre a abordagem do desenvolvedor e o aceite da proposta")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {\n    className: "BannerPrecos"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 10\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " Nossos Planos e Pre\\xE7os"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerPrecosEmpresa__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {\n    lg: {\n      span: 1\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null)));\n};\n\nvar _default = Empresas;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(depoimentos, "depoimentos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Empresas\\\\index.js");\n  reactHotLoader.register(Empresas, "Empresas", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Empresas\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Empresas\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/Empresas/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/Empresas/style.css":
      /*!**************************************!*\
  !*** ./src/pages/Empresas/style.css ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);\n\n// Module\nexports.push([module.i, ".registrations {\\r\\n    display: block;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.col-5 h1 strong {\\r\\n    color: #0052FB;\\r\\n}\\r\\n\\r\\n.companies-registration {\\r\\n    padding-top: 93px;\\r\\n    background-color: #EAEFF5;\\r\\n    padding-bottom: 20px;\\r\\n}\\r\\n\\r\\n.companies-registration .container {\\r\\n    max-width: unset;\\r\\n}\\r\\n\\r\\n.row {\\r\\n    display: flex;\\r\\n    margin-left: -15px;\\r\\n    margin-right: -15px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.col-1 {\\r\\n    width: 8.3333333333%;\\r\\n    float: left;\\r\\n    position: relative;\\r\\n    min-height: 1px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n.col-5 {\\r\\n    flex: 0 0 41.666667%;\\r\\n    max-width: 41.666667%;\\r\\n    position: relative;\\r\\n    min-height: 1px;\\r\\n    padding-left: 15px;\\r\\n    padding-right: 15px;\\r\\n}\\r\\n\\r\\n.col-5>h1 {\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.col-5>p {\\r\\n    color: #6B757D;\\r\\n    line-height: 184%;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.col-5 ul img {\\r\\n    width: 16px;\\r\\n    height: 16px;\\r\\n\\r\\n}\\r\\n\\r\\n.col-5 .img-wrapper>img {\\r\\n    min-width: 80px;\\r\\n    max-width: 80px;\\r\\n    min-height: 80px;\\r\\n    max-height: 80px;\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    margin-left: 15px;\\r\\n}\\r\\n\\r\\n.text-small {\\r\\n    color: #ACACAD;\\r\\n    text-align: center;\\r\\n    margin: 30px 0;\\r\\n}\\r\\n\\r\\n.text-small>strong {\\r\\n    font: 14px;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.companies-logo {\\r\\n    text-align: center;\\r\\n    line-height: 80px;\\r\\n}\\r\\n\\r\\n.img-cascade {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 100%;\\r\\n    margin-top: -10px;\\r\\n}\\r\\n\\r\\n.col-5 .img-cascade img {\\r\\n    max-width: 275px;\\r\\n    object-fit: contain;\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    margin-left: 15px;\\r\\n\\r\\n}\\r\\n\\r\\n.col-5 .img-cascade .img-first {\\r\\n    padding-right: 35px;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.col-5 .img-cascade .img-scnd {\\r\\n    margin-left: -160px;\\r\\n    margin-top: -30px;\\r\\n}\\r\\n\\r\\n.col-5 .img-cascade .img-trd {\\r\\n    margin-left: 100px;\\r\\n    margin-top: -110px;\\r\\n}\\r\\n\\r\\n.companies-descricao .col-5-texto {\\r\\n    padding-left: 10%;\\r\\n    padding-top: 5%;\\r\\n}\\r\\n\\r\\n.companies-descricao {\\r\\n    margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.companies-descricao .col-5-texto h1,\\r\\np {\\r\\n    margin-bottom: 16px;\\r\\n}\\r\\n\\r\\n.companies-descricao .col-5-texto .subtitle {\\r\\n    color: #0052FB;\\r\\n    font: 600 18px;\\r\\n}\\r\\n\\r\\n\\r\\n.companies-descricao .col-5-texto li {\\r\\n    line-height: 1.84em;\\r\\n    font-weight: 600;\\r\\n}\\r\\n\\r\\n.companies-descricao .col-5-texto a {\\r\\n    position: relative;\\r\\n    top: 40px;\\r\\n}\\r\\n\\r\\n.companies-depoimento .container-depoimento {\\r\\n    max-width: unset;\\r\\n    display: table;\\r\\n    background-color: #EAEFF5;\\r\\n    padding-top: 80px;\\r\\n}\\r\\n\\r\\n.companies-depoimento .busca-dev {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.companies-depoimento  h1 {\\r\\n    width: 90%;\\r\\n    position: relative;\\r\\n    min-height: 1px;\\r\\n    padding-bottom: 16px;\\r\\n}\\r\\n\\r\\n.companies-depoimento li {\\r\\n    line-height: 1.84em;\\r\\n    font-weight: 600;\\r\\n}\\r\\n\\r\\n.companies-depoimento .button {\\r\\n    font-size: 12px;\\r\\n    color: white;\\r\\n    letter-spacing: 1.2px;\\r\\n    padding: 12px 16px;\\r\\n    text-transform: uppercase;\\r\\n    background-color: #B58E02;\\r\\n    border-color: #B58E02 !important;\\r\\n    width:100%;\\r\\n}\\r\\n\\r\\n.companies-depoimento .button > img {\\r\\n    margin-left: 6px !important;\\r\\n    width: auto !important;\\r\\n}\\r\\n\\r\\n.BannerPrecos {\\r\\n    padding-top: 60px;\\r\\n    background-color: white;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/Empresas/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/EstudantesDestaques/index.js":
      /*!************************************************!*\
  !*** ./src/pages/EstudantesDestaques/index.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/EstudantesDestaques/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_ContainerEstudantesDestaques__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/ContainerEstudantesDestaques */ "./src/components/core/ContainerEstudantesDestaques/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar EstudantesDestaques = function EstudantesDestaques() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerEstudantesDestaques__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));\n};\n\nvar _default = EstudantesDestaques;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(EstudantesDestaques, "EstudantesDestaques", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\EstudantesDestaques\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\EstudantesDestaques\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/EstudantesDestaques/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/EstudantesDestaques/style.css":
      /*!*************************************************!*\
  !*** ./src/pages/EstudantesDestaques/style.css ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/EstudantesDestaques/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/Home/index.js":
      /*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _components_core_BannerQuemSomos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/BannerQuemSomos */ "./src/components/core/BannerQuemSomos/index.js");\n/* harmony import */ var _components_core_BannerCursos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/BannerCursos */ "./src/components/core/BannerCursos/index.js");\n/* harmony import */ var _components_core_BannerDepoimentos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/BannerDepoimentos */ "./src/components/core/BannerDepoimentos/index.js");\n/* harmony import */ var _components_core_BannerEmpresa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/core/BannerEmpresa */ "./src/components/core/BannerEmpresa/index.js");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/pages/Home/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    isLogin: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerQuemSomos__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerCursos__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerDepoimentos__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerEmpresa__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));\n};\n\nvar _default = Home;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, "Home", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Home\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\Home\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/Home/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/Home/style.css":
      /*!**********************************!*\
  !*** ./src/pages/Home/style.css ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "html,\\r\\nbody {\\r\\n    overscroll-behavior: none;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/Home/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/NovoEstudante/index.js":
      /*!******************************************!*\
  !*** ./src/pages/NovoEstudante/index.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/NovoEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_BannerPropostaEstudante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/BannerPropostaEstudante */ "./src/components/core/BannerPropostaEstudante/index.js");\n/* harmony import */ var _components_core_BannerPasosEstudante__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/BannerPasosEstudante */ "./src/components/core/BannerPasosEstudante/index.js");\n/* harmony import */ var _components_core_BannerTestimonioEstudante__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/BannerTestimonioEstudante */ "./src/components/core/BannerTestimonioEstudante/index.js");\n/* harmony import */ var _components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/HeaderCadastro */ "./src/components/core/HeaderCadastro/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var _assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/img/logo_white.png */ "./src/assets/img/logo_white.png");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_core_BannerPrecosEstudante__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/core/BannerPrecosEstudante */ "./src/components/core/BannerPrecosEstudante/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nvar NovoEstudante = function NovoEstudante() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_HeaderCadastro__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    className: "Header",\n    myLogo: _assets_img_logo_white_png__WEBPACK_IMPORTED_MODULE_7__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "Registration"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerPropostaEstudante__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerPasosEstudante__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerTestimonioEstudante__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_BannerPrecosEstudante__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));\n};\n\nvar _default = NovoEstudante;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NovoEstudante, "NovoEstudante", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\NovoEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\NovoEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/NovoEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/NovoEstudante/style.css":
      /*!*******************************************!*\
  !*** ./src/pages/NovoEstudante/style.css ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, ".Registration {\\r\\n    background:#4a4a4a;\\r\\n    width: 100%;\\r\\n    padding-top: 130px;\\r\\n}", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/NovoEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/PagePlataforma/index.js":
      /*!*******************************************!*\
  !*** ./src/pages/PagePlataforma/index.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/PagePlataforma/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/Header */ "./src/components/core/Header/index.js");\n/* harmony import */ var _components_core_ContainerQuemSomos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/ContainerQuemSomos */ "./src/components/core/ContainerQuemSomos/index.js");\n/* harmony import */ var _components_core_ContainerApoiadores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/ContainerApoiadores */ "./src/components/core/ContainerApoiadores/index.js");\n/* harmony import */ var _components_core_ContainerVagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/core/ContainerVagas */ "./src/components/core/ContainerVagas/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar PagePlataforma = function PagePlataforma() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerQuemSomos__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerApoiadores__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerVagas__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));\n};\n\nvar _default = PagePlataforma;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PagePlataforma, "PagePlataforma", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\PagePlataforma\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\PagePlataforma\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/PagePlataforma/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/PagePlataforma/style.css":
      /*!********************************************!*\
  !*** ./src/pages/PagePlataforma/style.css ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/PagePlataforma/style.css?'
        );

        /***/
      },

    /***/ "./src/pages/ProfileEstudante/index.js":
      /*!*********************************************!*\
  !*** ./src/pages/ProfileEstudante/index.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/pages/ProfileEstudante/style.css");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_core_HeaderPageCursos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/core/HeaderPageCursos */ "./src/components/core/HeaderPageCursos/index.js");\n/* harmony import */ var _components_core_ContainerCursos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/core/ContainerCursos */ "./src/components/core/ContainerCursos/index.js");\n/* harmony import */ var _components_core_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/core/Footer */ "./src/components/core/Footer/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar ProfileCursos = function ProfileCursos() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_HeaderPageCursos__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_ContainerCursos__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_core_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));\n};\n\nvar _default = ProfileCursos;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(ProfileCursos, "ProfileCursos", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\ProfileEstudante\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\pages\\\\ProfileEstudante\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/pages/ProfileEstudante/index.js?'
        );

        /***/
      },

    /***/ "./src/pages/ProfileEstudante/style.css":
      /*!**********************************************!*\
  !*** ./src/pages/ProfileEstudante/style.css ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Imports\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap);", ""]);\nexports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap);", ""]);\n\n// Module\nexports.push([module.i, "/* reset e padrões */\\r\\n\\r\\n* {\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    font-family: \'Roboto\', sans-serif;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    color: #000;\\r\\n}\\r\\n\\r\\n.buttonYellow {\\r\\n    background-color: #FFCF26;\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n    color: #000;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 1em;\\r\\n    margin: 4px 2px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.buttonYellow:hover {\\r\\n    background-color: #B58E02;\\r\\n}\\r\\n\\r\\n.buttonGrey {\\r\\n    background-color: #4a4a4a;\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n    text-decoration: none;\\r\\n    display: inline-block;\\r\\n    font-size: 1em;\\r\\n    margin: 4px 2px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.buttonGrey:hover {\\r\\n    background-color: #EAEFF5;\\r\\n}\\r\\n\\r\\n.material-icons {\\r\\n    font-size: 1.5rem;\\r\\n}\\r\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/pages/ProfileEstudante/style.css?'
        );

        /***/
      },

    /***/ "./src/router/index.js":
      /*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home/index.js");\n/* harmony import */ var _pages_Cadastro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Cadastro */ "./src/pages/Cadastro/index.js");\n/* harmony import */ var _pages_Empresas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Empresas */ "./src/pages/Empresas/index.js");\n/* harmony import */ var _pages_NovoEstudante__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/NovoEstudante */ "./src/pages/NovoEstudante/index.js");\n/* harmony import */ var _pages_EstudantesDestaques__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/EstudantesDestaques */ "./src/pages/EstudantesDestaques/index.js");\n/* harmony import */ var _pages_Cursos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Cursos */ "./src/pages/Cursos/index.js");\n/* harmony import */ var _pages_ProfileEstudante__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/ProfileEstudante */ "./src/pages/ProfileEstudante/index.js");\n/* harmony import */ var _pages_PagePlataforma__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/PagePlataforma */ "./src/pages/PagePlataforma/index.js");\n/* harmony import */ var _pages_BemVindo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/BemVindo */ "./src/pages/BemVindo/index.js");\n/* harmony import */ var _pages_Contato__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Contato */ "./src/pages/Contato/index.js");\n/* harmony import */ var _pages_AdminDash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/AdminDash */ "./src/pages/AdminDash/index.js");\n/* harmony import */ var _pages_AdminLogin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/AdminLogin */ "./src/pages/AdminLogin/index.js");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar MainRouter = function MainRouter() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    exact: true,\n    path: "/",\n    component: _pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    exact: true,\n    path: "/plataforma",\n    component: _pages_PagePlataforma__WEBPACK_IMPORTED_MODULE_9__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    exact: true,\n    path: "/cursos",\n    component: _pages_Cursos__WEBPACK_IMPORTED_MODULE_7__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    exact: true,\n    path: "/empresas",\n    component: _pages_Empresas__WEBPACK_IMPORTED_MODULE_4__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/estudantes/sign_in",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Cadastro__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        isStudent: true\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/empresa/sign_in",\n    render: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Cadastro__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        isStudent: false\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/criar-perfil-empresa",\n    component: _pages_Empresas__WEBPACK_IMPORTED_MODULE_4__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/criar-perfil-estudante",\n    component: _pages_NovoEstudante__WEBPACK_IMPORTED_MODULE_5__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/estudantes-destaques",\n    component: _pages_EstudantesDestaques__WEBPACK_IMPORTED_MODULE_6__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/profile-estudante",\n    component: _pages_ProfileEstudante__WEBPACK_IMPORTED_MODULE_8__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/bemvindo",\n    component: _pages_BemVindo__WEBPACK_IMPORTED_MODULE_10__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/contato",\n    component: _pages_Contato__WEBPACK_IMPORTED_MODULE_11__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    exact: true,\n    path: "/admin",\n    component: _pages_AdminLogin__WEBPACK_IMPORTED_MODULE_13__["default"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {\n    path: "/admin/painel",\n    render: function render() {\n      return sessionStorage.getItem("isAuthenticated") ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_AdminDash__WEBPACK_IMPORTED_MODULE_12__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_AdminLogin__WEBPACK_IMPORTED_MODULE_13__["default"], null);\n    }\n  }));\n};\n\nvar _default = MainRouter;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, "MainRouter", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\router\\\\index.js");\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\src\\\\router\\\\index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./src/router/index.js?'
        );

        /***/
      },

    /***/ "./template.js":
      /*!*********************!*\
  !*** ./template.js ***!
  \*********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = function _default(_ref) {\n  var html = _ref.html,\n      css = _ref.css;\n  return "<!doctype html>\\n      <html lang=\\"en\\">\\n        <head>\\n          <meta charset=\\"utf-8\\">\\n          <meta\\n            name=\\"viewport\\"\\n            content=\\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\\"\\n          >\\n          <title>BrainXpert</title>\\n          <link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\">\\n          <link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/icon?family=Material+Icons\\">\\n        </head>\\n        <body style=\\"margin:0\\">\\n          <div id=\\"root\\">".concat(html, "</div>\\n          ").concat(css, "\\n          <script type=\\"text/javascript\\" src=\\"/dist/bundle.js\\"></script>\\n        </body>\\n      </html>");\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, "default", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\template.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack:///./template.js?'
        );

        /***/
      },

    /***/ "./webpack.config.client.js":
      /*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          '/* WEBPACK VAR INJECTION */(function(module, __dirname) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ "path");\n\nvar webpack = __webpack_require__(/*! webpack */ "webpack");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: "browser",\n  mode: "development",\n  devServer: {\n    contentBase: path.join(__dirname, "dist"),\n    compress: true,\n    port: 3000\n  },\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, "/dist"),\n    filename: "bundle.js",\n    publicPath: "/dist/"\n  },\n  module: {\n    rules: [{\n      test: /\\.js$|jsx/,\n      exclude: /node_modules/,\n      use: "babel-loader"\n    }, {\n      test: /\\.css$/i,\n      loader: ["css-loader", "sass-loader"]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: "file-loader"\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      "react-dom": "@hot-loader/react-dom",\n      "react-router-dom": path.resolve("./node_modules/react-router-dom")\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, "CURRENT_WORKING_DIR", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\webpack.config.client.js");\n  reactHotLoader.register(config, "config", "C:\\\\xampp\\\\htdocs\\\\dh-projeto-integrador-tn142020\\\\webpack.config.client.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), "/"))\n\n//# sourceURL=webpack:///./webpack.config.client.js?'
        );

        /***/
      },

    /***/ 0:
      /*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        eval(
          'module.exports = __webpack_require__(/*! C:\\xampp\\htdocs\\dh-projeto-integrador-tn142020\\server\\server.js */"./server/server.js");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?'
        );

        /***/
      },

    /***/ "@babel/runtime/helpers/asyncToGenerator":
      /*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/asyncToGenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?'
        );

        /***/
      },

    /***/ "@babel/runtime/helpers/defineProperty":
      /*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/defineProperty");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?'
        );

        /***/
      },

    /***/ "@babel/runtime/helpers/extends":
      /*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/extends");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?'
        );

        /***/
      },

    /***/ "@babel/runtime/helpers/slicedToArray":
      /*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/helpers/slicedToArray");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?'
        );

        /***/
      },

    /***/ "@babel/runtime/regenerator":
      /*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("@babel/runtime/regenerator");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?'
        );

        /***/
      },

    /***/ "body-parser":
      /*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("body-parser");\n\n//# sourceURL=webpack:///external_%22body-parser%22?'
        );

        /***/
      },

    /***/ compression:
      /*!******************************!*\
  !*** external "compression" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("compression");\n\n//# sourceURL=webpack:///external_%22compression%22?'
        );

        /***/
      },

    /***/ "cookie-parser":
      /*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("cookie-parser");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?'
        );

        /***/
      },

    /***/ cors:
      /*!***********************!*\
  !*** external "cors" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("cors");\n\n//# sourceURL=webpack:///external_%22cors%22?'
        );

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?'
        );

        /***/
      },

    /***/ helmet:
      /*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("helmet");\n\n//# sourceURL=webpack:///external_%22helmet%22?'
        );

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?'
        );

        /***/
      },

    /***/ "prop-types":
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("prop-types");\n\n//# sourceURL=webpack:///external_%22prop-types%22?'
        );

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react");\n\n//# sourceURL=webpack:///external_%22react%22?'
        );

        /***/
      },

    /***/ "react-admin":
      /*!******************************!*\
  !*** external "react-admin" ***!
  \******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-admin");\n\n//# sourceURL=webpack:///external_%22react-admin%22?'
        );

        /***/
      },

    /***/ "react-bootstrap":
      /*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-bootstrap");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?'
        );

        /***/
      },

    /***/ "react-dom/server":
      /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-dom/server");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?'
        );

        /***/
      },

    /***/ "react-elastic-carousel":
      /*!*****************************************!*\
  !*** external "react-elastic-carousel" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-elastic-carousel");\n\n//# sourceURL=webpack:///external_%22react-elastic-carousel%22?'
        );

        /***/
      },

    /***/ "react-icons/ai":
      /*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-icons/ai");\n\n//# sourceURL=webpack:///external_%22react-icons/ai%22?'
        );

        /***/
      },

    /***/ "react-icons/bi":
      /*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-icons/bi");\n\n//# sourceURL=webpack:///external_%22react-icons/bi%22?'
        );

        /***/
      },

    /***/ "react-icons/bs":
      /*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-icons/bs");\n\n//# sourceURL=webpack:///external_%22react-icons/bs%22?'
        );

        /***/
      },

    /***/ "react-icons/gi":
      /*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-icons/gi");\n\n//# sourceURL=webpack:///external_%22react-icons/gi%22?'
        );

        /***/
      },

    /***/ "react-icons/ri":
      /*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-icons/ri");\n\n//# sourceURL=webpack:///external_%22react-icons/ri%22?'
        );

        /***/
      },

    /***/ "react-router":
      /*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-router");\n\n//# sourceURL=webpack:///external_%22react-router%22?'
        );

        /***/
      },

    /***/ "react-router-dom":
      /*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("react-router-dom");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?'
        );

        /***/
      },

    /***/ "styled-components":
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("styled-components");\n\n//# sourceURL=webpack:///external_%22styled-components%22?'
        );

        /***/
      },

    /***/ webpack:
      /*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("webpack");\n\n//# sourceURL=webpack:///external_%22webpack%22?'
        );

        /***/
      },

    /***/ "webpack-dev-middleware":
      /*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("webpack-dev-middleware");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?'
        );

        /***/
      },

    /***/ "webpack-hot-middleware":
      /*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        eval(
          'module.exports = require("webpack-hot-middleware");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?'
        );

        /***/
      },

    /******/
  }
);
