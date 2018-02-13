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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CurrencyRow = __webpack_require__(6);

var _CurrencyRow2 = _interopRequireDefault(_CurrencyRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyBoard = function (_React$Component) {
  _inherits(CurrencyBoard, _React$Component);

  function CurrencyBoard(props) {
    _classCallCheck(this, CurrencyBoard);

    var _this = _possibleConstructorReturn(this, (CurrencyBoard.__proto__ || Object.getPrototypeOf(CurrencyBoard)).call(this, props));

    _this.state = props.store.state;
    _this.strengthen = props.store.strengthenCurrency.bind(_this);
    _this.weaken = props.store.weakenCurrency.bind(_this);
    return _this;
  }

  _createClass(CurrencyBoard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currencies = this.state.currencies;


      return _react2.default.createElement(
        'div',
        { id: 'currency-board' },
        _react2.default.createElement(
          'h3',
          null,
          'CurrencyBoard'
        ),
        _react2.default.createElement(
          'ul',
          null,
          currencies.map(function (c) {
            return _react2.default.createElement(_CurrencyRow2.default, {
              key: c.name,
              currency: c,
              strengthen: _this2.strengthen,
              weaken: _this2.weaken
            });
          })
        )
      );
    }
  }]);

  return CurrencyBoard;
}(_react2.default.Component);

exports.default = CurrencyBoard;

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var shiftDown = function shiftDown(p) {
  return p + (p < 10);
};

var sort = function sort(arr) {
  return arr.sort(function (a, b) {
    return a.order - b.order;
  });
};

var storeFactory = function storeFactory(initialState) {
  var state = _extends({}, initialState);

  function strengthenCurrency(id) {
    this.setState(function (prevState) {
      var currencies = prevState.currencies;


      var current = currencies.find(function (_ref) {
        var name = _ref.name;
        return name === id;
      });
      var others = currencies.filter(function (c) {
        return c !== current;
      });

      var flipped = others.filter(function (c) {
        var weakeningCurrent = c.weakerCurrencies.find(function (w) {
          return w.id === current.name;
        });
        return weakeningCurrent && weakeningCurrent.position === 0;
      }).map(function (c) {
        return {
          id: c.name,
          position: 0
        };
      });

      var adjustedOthers = others.map(function (c) {
        var weakerCurrencies = c.weakerCurrencies.map(function (w) {
          return {
            id: w.id,
            position: w.position - (w.id === current.name)
          };
        }).filter(function (w) {
          return w.position >= 0;
        });

        return Object.assign({}, c, { weakerCurrencies: weakerCurrencies });
      });

      var adjustedCurrent = Object.assign({}, current, {
        weakerCurrencies: [].concat(_toConsumableArray(flipped), _toConsumableArray(current.weakerCurrencies.map(function (c) {
          return { id: c.id, position: shiftDown(c.position) };
        })))
      });

      return {
        currencies: sort([adjustedCurrent].concat(_toConsumableArray(adjustedOthers)))
      };
    });
  }

  function weakenCurrency(id) {
    this.setState(function (prevState) {
      var currencies = prevState.currencies;

      var current = currencies.find(function (_ref2) {
        var name = _ref2.name;
        return name === id;
      });
      var others = currencies.filter(function (c) {
        return c !== current;
      });
      var flipped = current.weakerCurrencies.filter(function (w) {
        return w.position === 0;
      });
      var adjustedCurrent = Object.assign({}, current, {
        weakerCurrencies: current.weakerCurrencies.filter(function (w) {
          return w.position > 0;
        }).map(function (w) {
          return {
            id: w.id,
            position: w.position - 1
          };
        })
      });

      var adjustedOthers = others.map(function (c) {
        var weakerFlipped = flipped.filter(function (w) {
          return w.id === c.name;
        }).map(function (w) {
          return {
            id: current.name,
            position: 0
          };
        });

        return {
          name: c.name,
          order: c.order,
          weakerCurrencies: [].concat(_toConsumableArray(weakerFlipped), _toConsumableArray(c.weakerCurrencies.map(function (w) {
            return Object.assign({}, w, {
              position: w.position + (w.id === current.name && w.position < 10)
            });
          })))
        };
      });

      return {
        currencies: sort([adjustedCurrent].concat(_toConsumableArray(adjustedOthers)))
      };
    });
  }

  return {
    state: state,
    strengthenCurrency: strengthenCurrency,
    weakenCurrency: weakenCurrency
  };
};

exports.default = storeFactory;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(11)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencyCell = function CurrencyCell(_ref) {
  var label = _ref.label,
      tokens = _ref.tokens;

  return _react2.default.createElement(
    "div",
    { className: "currency-cell" },
    _react2.default.createElement(
      "div",
      null,
      label
    ),
    tokens.map(function (t) {
      var key = label + "-" + t.id;
      var classes = "token token-" + t.id;

      return _react2.default.createElement(
        "div",
        { className: classes, key: key },
        t.id
      );
    })
  );
};

exports.default = CurrencyCell;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(7);

var _CurrencyCell = __webpack_require__(5);

var _CurrencyCell2 = _interopRequireDefault(_CurrencyCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencyRow = function CurrencyRow(_ref) {
  var currency = _ref.currency,
      strengthen = _ref.strengthen,
      weaken = _ref.weaken;

  var tokens = function tokens(position) {
    return currency.weakerCurrencies.filter(function (c) {
      return c.position === position;
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'currency-row' },
    _react2.default.createElement(
      'div',
      { className: 'currency-row-title-cell label-' + currency.name },
      _react2.default.createElement(
        'div',
        { className: 'currency-row-title' },
        currency.name
      ),
      _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'div',
          { className: 'btn btn-dec',
            onClick: function onClick() {
              return weaken(currency.name);
            } },
          '-'
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn btn-inc',
            onClick: function onClick() {
              return strengthen(currency.name);
            } },
          '+'
        )
      )
    ),
    _constants.boardPositions.map(function (p, i) {
      return _react2.default.createElement(_CurrencyCell2.default, { key: p.value, label: p.display, tokens: tokens(i) });
    })
  );
};

exports.default = CurrencyRow;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var currencyNames = exports.currencyNames = {
  GPB: 'GPB',
  EUR: 'EUR',
  USD: 'USD',
  CHF: 'CHF',
  JPY: 'JPY',
  CAD: 'CAD',
  CNY: 'CNY'
};

var boardPositions = exports.boardPositions = [{ value: 1, display: "1" }, { value: 1.5, display: String.fromCharCode(189) }, { value: 2, display: "2" }, { value: 2.5, display: String.fromCharCode(189) }, { value: 3, display: "3" }, { value: 3.5, display: String.fromCharCode(189) }, { value: 4, display: "4" }, { value: 5, display: "5" }, { value: 6, display: "6" }, { value: 7, display: "7" }, { value: 8, display: "8" }];

/***/ }),
/* 8 */
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

var _CurrencyBoard = __webpack_require__(1);

var _CurrencyBoard2 = _interopRequireDefault(_CurrencyBoard);

__webpack_require__(4);

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
    _react2.default.createElement(_CurrencyBoard2.default, { store: store })
  );
};

exports.default = ForEx;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "#currency-board {\n  background-color: #3b3c3b;\n  text-align: center;\n  color: #cccccc;\n  width: 900px;\n  margin: 10px;\n}\n\n\n.currency-row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.currency-row-title-cell {\n  float: left;\n  width: 85px;\n  height: 87px;\n  text-align: center;\n}\n\n.currency-row-title {\n  display: inline-block;\n  width: 100%;\n  line-height: 50px;\n}\n\n.currency-row-title-cell .btn-group {\n  display: inline-block;\n  width: 100%;\n  font-size: 1.2em;\n  font-weight: bolder;\n}\n\n.currency-row-title-cell .btn {\n  float: left;\n  display: inline-block;\n  width: 50%;\n  cursor: pointer;\n}\n\n.currency-row-title-cell .btn:hover {\n  background-color: rgba(255, 255, 128, .3);\n}\n\n.currency-cell {\n  float: left;\n  width: 8%;\n  height: 85px;\n  border: 1px solid #cccccc;\n}\n\n.token {\n  font-size: 0.7em;\n  line-height: 1.6em;\n  font-weight: bold;\n  border: 1px solid #fff;\n  width: 45%;\n  text-align: center;\n  margin: 0.1em auto;\n  padding: 0px;\n  color: #fff;\n  background-color: transparent;\n}\n\n.label-GPB,\n.token-GPB {\n  background-color: #bd2929;\n}\n\n.label-EUR,\n.token-EUR {\n  background-color: #482ac1;\n}\n\n.label-USD,\n.token-USD {\n  background-color: #4aad4e;\n}\n\n.label-CHF,\n.token-CHF {\n  background-color: #8b78dc;\n}\n\n.label-JPY,\n.token-JPY {\n  background-color: gray;\n}\n\n.label-CAD,\n.token-CAD {\n  background-color: #a25506f7;\n}\n\n.label-CNY,\n.token-CNY {\n  background-color: #ded027;\n  color: #bd2929\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);