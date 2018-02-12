module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _initialState = __webpack_require__(2);

var _initialState2 = _interopRequireDefault(_initialState);

var _storeFactory = __webpack_require__(3);

var _storeFactory2 = _interopRequireDefault(_storeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _storeFactory2.default)(_initialState2.default);

var ForEx = function ForEx() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'For-Ex'
    ),
    _react2.default.createElement(
      'pre',
      null,
      JSON.stringify(store.state)
    )
  );
};

exports.default = ForEx;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var currencyNames = ['GPB', 'EUR', 'USD', 'CHF', 'JPY', 'CAD', 'CNY'];

var GPB = currencyNames[0],
    EUR = currencyNames[1],
    USD = currencyNames[2],
    CHF = currencyNames[3],
    JPY = currencyNames[4],
    CAD = currencyNames[5],
    CNY = currencyNames[6];


var currencies = [{
  name: GPB,
  order: 1,
  weakerCurrencies: [{ id: USD, position: 0 }, { id: EUR, position: 1 }, { id: CHF, position: 1 }, { id: JPY, position: 1 }, { id: CAD, position: 2 }, { id: CNY, position: 6 }]
}, {
  name: EUR,
  order: 2,
  weakerCurrencies: [{ id: USD, position: 0 }, { id: CHF, position: 0 }, { id: JPY, position: 1 }, { id: CAD, position: 1 }, { id: CNY, position: 5 }]
}, {
  name: USD,
  order: 3,
  weakerCurrencies: [{ id: CHF, position: 0 }, { id: JPY, position: 1 }, { id: CAD, position: 1 }, { id: CNY, position: 5 }]
}, {
  name: CHF,
  order: 4,
  weakerCurrencies: [{ id: JPY, position: 1 }, { id: CAD, position: 1 }, { id: CNY, position: 5 }]
}, {
  name: JPY,
  order: 5,
  weakerCurrencies: [{ id: CAD, position: 1 }, { id: CNY, position: 4 }]
}, {
  name: CAD,
  order: 6,
  weakerCurrencies: [{ id: CNY, position: 3 }]
}, {
  name: CNY,
  order: 7,
  weakerCurrencies: []
}];

var certificates = currencyNames.map(function (x) {
  return { name: x, count: 8 };
});

var initialState = {
  currencies: currencies,
  certificates: certificates
};

exports.default = initialState;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var storeFactory = function storeFactory(initialState) {
  return {
    state: _extends({}, initialState)
  };
};

exports.default = storeFactory;

/***/ })
/******/ ]);