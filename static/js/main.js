/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	    This file can be used as entry point for webpack!
	 */
	
	var _mountainBg = __webpack_require__(1);
	
	var _mountainBg2 = _interopRequireDefault(_mountainBg);
	
	var _portfolio = __webpack_require__(2);
	
	var _portfolio2 = _interopRequireDefault(_portfolio);
	
	var _aboutMe = __webpack_require__(6);
	
	var _aboutMe2 = _interopRequireDefault(_aboutMe);
	
	var _footer = __webpack_require__(8);
	
	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	(function () {
	    'use strict';
	
	    var bg = document.querySelector('.mountain-bg'),
	        parallax = document.querySelector('.mountain-bg__parallax'),
	        layers = parallax.children,
	        clientHeight = parallax.clientHeight,
	        clientWidth = parallax.clientWidth,
	        userMove = false;
	
	    function parallaxMove(x, y) {
	        Array.from(layers).forEach(function (item, i) {
	            var coe = i / 20;
	            var bias = function bias(axis) {
	                return axis * coe;
	            };
	            var translate3d = function translate3d(X) {
	                return function (Y) {
	                    return 'translate3d(' + bias(X) + 'px, ' + bias(Y) + 'px, 0)';
	                };
	            };
	
	            item.style.transform = translate3d(x)(y);
	        });
	    }
	
	    function awaitingUser() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	        if (userMove) {
	            return;
	        }
	        parallaxMove(x, y);
	        var s = 2 * Math.PI / 3600;
	        var move = function move() {
	            f += s;
	            awaitingUser(x + 360 * Math.sin(f) / 1000, y + 360 * Math.cos(f) / 1000, f);
	        };
	        requestAnimationFrame(move);
	    }
	
	    function trackMousePosition(e) {
	        e.preventDefault();
	        userMove = true;
	        /* setTimeout(function () {
	         userMove = false;
	         imitationUser(centerX - e.x, centerY - e.y);
	         }, 3000);*/
	        parallaxMove(clientWidth / 2 - e.x, clientHeight / 2 - e.y);
	    }
	
	    function scroll(e) {
	        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	        var heightBg = bg.clientHeight;
	
	        if (heightBg >= scrolled) parallaxMove(0, +scrolled * 1.5);
	    }
	
	    if (bg.className.includes('mouse')) {
	        bg.addEventListener('mousemove', trackMousePosition);
	    }
	
	    if (bg.className.includes('scroll')) {
	        document.addEventListener('scroll', scroll);
	    }
	
	    if (bg.className.includes('wait')) {
	        awaitingUser();
	    }
	})();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slider = __webpack_require__(3);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _data = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slider = new _slider2.default(_data.data.portfolio.slider);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Slider;
	
	var _tapjs = __webpack_require__(4);
	
	var _tapjs2 = _interopRequireDefault(_tapjs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Slider(data) {
	    'use strict';
	
	    var slider = document.querySelector('.slider'),
	        description = slider.querySelector('.slider__description'),
	        slides = Array.from(slider.children).filter(function (item) {
	        return item !== description;
	    }),
	        prevButton = slider.querySelector('.slider__previous'),
	        nextButton = slider.querySelector('.slider__next');
	
	    var leftShift = function leftShift(arr) {
	        return arr.push(arr.shift());
	    };
	    var rightShift = function rightShift(arr) {
	        return arr.unshift(arr.pop());
	    };
	    function checkImgNumber(src) {
	        var images = Array.from(data).map(function (item) {
	            return item.img;
	        });
	        var res = void 0;
	
	        images.forEach(function (item, i) {
	            if (src.includes(item)) {
	                res = i;
	
	                console.log(item, src);
	            }
	        });
	        return res;
	    }
	
	    var model = data;
	
	    function render(listSlide) {
	
	        (function updateSlider(elem) {
	            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
	
	            var arr = elem.children ? elem.children : elem;
	
	            Array.from(arr).forEach(function (item) {
	                if (item.parentElement.className === 'slider') ++i;
	                if (item.nodeName === 'IMG') item.src = data[i].img;
	                if (item.className === 'slider__number') {
	                    var img = item.parentElement.querySelector('img');
	                    var number = checkImgNumber(img.src);
	                    console.log(img);
	                    console.log(number);
	
	                    item.textContent = number;
	                }
	
	                updateSlider(item, i);
	            });
	        })(listSlide);
	
	        function updateDescription() {
	            var title = description.querySelector('.slider__title h2');
	            var technology = description.querySelector('.slider__technology');
	            var fragment = document.createDocumentFragment();
	            var view = 1;
	
	            Array.from(technology.children).map(function (item) {
	                return item.remove();
	            });
	
	            title.textContent = data[view].title;
	
	            Array.from(data[view].technology).forEach(function (item) {
	                var node = document.createElement('li');
	                node.textContent = item;
	                fragment.appendChild(node);
	            });
	
	            technology.appendChild(fragment);
	        }
	
	        updateDescription();
	    }
	
	    function slide(e) {
	        var button = this;
	        var side = button.getAttribute('data-slide');
	
	        if (side === 'next') leftShift(model);
	        if (side === 'previous') rightShift(model);
	
	        render(slides);
	    }
	
	    (function init() {
	
	        prevButton.addEventListener('tap', slide);
	        nextButton.addEventListener('tap', slide);
	    })();
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function( window ) {
	    var Tap = {};
	
	    var utils = {};
	
	    utils.attachEvent = function(element, eventName, callback) {
	        if ('addEventListener' in window) {
	            return element.addEventListener(eventName, callback, false);
	        }
	    };
	
	    utils.fireFakeEvent = function(e, eventName) {
	        if (document.createEvent) {
	            return e.target.dispatchEvent(utils.createEvent(eventName));
	        }
	    };
	
	    utils.createEvent = function(name) {
	        if (document.createEvent) {
	            var evnt = window.document.createEvent('HTMLEvents');
	
	            evnt.initEvent(name, true, true);
	            evnt.eventName = name;
	
	            return evnt;
	        }
	    };
	
	    utils.getRealEvent = function(e) {
	        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) {
	            return e.originalEvent.touches[0];
	        } else if (e.touches && e.touches.length) {
	            return e.touches[0];
	        }
	
	        return e;
	    };
	
	    var eventMatrix = [{
	        // Touchable devices
	        test: ('propertyIsEnumerable' in window || 'hasOwnProperty' in document) && (window.propertyIsEnumerable('ontouchstart') || document.hasOwnProperty('ontouchstart')),
	        events: {
	            start: 'touchstart',
	            move: 'touchmove',
	            end: 'touchend'
	        }
	    }, {
	        // IE10
	        test: window.navigator.msPointerEnabled,
	        events: {
	            start: 'MSPointerDown',
	            move: 'MSPointerMove',
	            end: 'MSPointerUp'
	        }
	    }, {
	        // Modern device agnostic web
	        test: window.navigator.pointerEnabled,
	        events: {
	            start: 'pointerdown',
	            move: 'pointermove',
	            end: 'pointerup'
	        }
	    }];
	
	    Tap.options = {
	        eventName: 'tap',
	        fingerMaxOffset: 11
	    };
	
	    var attachDeviceEvent, init, handlers, deviceEvents,
	        coords = {};
	
	    attachDeviceEvent = function(eventName) {
	        return utils.attachEvent(document.documentElement, deviceEvents[eventName], handlers[eventName]);
	    };
	
	    handlers = {
	        start: function(e) {
	            e = utils.getRealEvent(e);
	
	            coords.start = [e.pageX, e.pageY];
	            coords.offset = [0, 0];
	        },
	
	        move: function(e) {
	            if (!coords.start && !coords.move) {
	                return false;
	            }
	
	            e = utils.getRealEvent(e);
	
	            coords.move = [e.pageX, e.pageY];
	            coords.offset = [
	                Math.abs(coords.move[0] - coords.start[0]),
	                Math.abs(coords.move[1] - coords.start[1])
	            ];
	        },
	
	        end: function(e) {
	            e = utils.getRealEvent(e);
	
	            if (coords.offset[0] < Tap.options.fingerMaxOffset && coords.offset[1] < Tap.options.fingerMaxOffset && !utils.fireFakeEvent(e, Tap.options.eventName)) {
	                // Windows Phone 8.0 trigger `click` after `pointerup` firing
	                // #16 https://github.com/pukhalski/tap/issues/16
	                if (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) {
	                    var preventDefault = function(clickEvent) {
	                        clickEvent.preventDefault();
	                        e.target.removeEventListener('click', preventDefault);
	                    };
	
	                    e.target.addEventListener('click', preventDefault, false);
	                }
	
	                e.preventDefault();
	            }
	
	            coords = {};
	        },
	
	        click: function(e) {
	            if (!utils.fireFakeEvent(e, Tap.options.eventName)) {
	                return e.preventDefault();
	            }
	        },
	
	        emulatedTap: function( e ) {
	            if ( coords.offset ) {
	                utils.fireFakeEvent( e, Tap.options.eventName );
	            }
	
	            return e.preventDefault();
	        }
	    };
	
	    init = function() {
	        var i = 0;
	
	        for (; i < eventMatrix.length; i++) {
	            if (eventMatrix[i].test) {
	                deviceEvents = eventMatrix[i].events;
	
	                attachDeviceEvent('start');
	                attachDeviceEvent('move');
	                attachDeviceEvent('end');
	                utils.attachEvent(document.documentElement, 'click', handlers['emulatedTap']);
	
	                return false;
	            }
	        }
	
	        return utils.attachEvent(document.documentElement, 'click', handlers.click);
	    };
	
	    utils.attachEvent(window, 'load', init);
	
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            init();
	
	            return Tap;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        window.Tap = Tap;
	    }
	
	})( window );

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var data = exports.data = {
	    portfolio: {
	        slider: [{
	            img: '/static/img/assets/portfolio/portfolio.png',
	            title: 'Сайт онлайн магазина',
	            technology: ['html', 'css', 'javascript']
	        }, {
	            img: '/static/img/assets/portfolio/triolog.jpg',
	            title: 'Сайт тролог',
	            technology: ['html', 'sass']
	        }, {
	            img: '/static/img/assets/portfolio/yoga.jpg',
	            title: 'yoga',
	            technology: ['elm']
	        }]
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reviews = __webpack_require__(7);
	
	var _reviews2 = _interopRequireDefault(_reviews);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reviews1 = new _reviews2.default();
	
	(function () {})();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Reviews;
	function Reviews(type) {}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjA3NzE5YmJiODhlZDM0NTkyNGMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL21vdW50YWluLWJnL21vdW50YWluLWJnLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3RhcGpzL2Rpc3QvdGFwLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9jb21wb25lbnRzL3BvcnRmb2xpby9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIl0sIm5hbWVzIjpbImJnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYWxsYXgiLCJsYXllcnMiLCJjaGlsZHJlbiIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwidXNlck1vdmUiLCJwYXJhbGxheE1vdmUiLCJ4IiwieSIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJpdGVtIiwiaSIsImNvZSIsImJpYXMiLCJheGlzIiwidHJhbnNsYXRlM2QiLCJYIiwiWSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYXdhaXRpbmdVc2VyIiwiZiIsInMiLCJNYXRoIiwiUEkiLCJtb3ZlIiwic2luIiwiY29zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHJhY2tNb3VzZVBvc2l0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwic2Nyb2xsZWQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImhlaWdodEJnIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVyIiwicG9ydGZvbGlvIiwiU2xpZGVyIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwic2xpZGVzIiwiZmlsdGVyIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJsZWZ0U2hpZnQiLCJhcnIiLCJwdXNoIiwic2hpZnQiLCJyaWdodFNoaWZ0IiwidW5zaGlmdCIsInBvcCIsImNoZWNrSW1nTnVtYmVyIiwic3JjIiwiaW1hZ2VzIiwibWFwIiwiaW1nIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1vZGVsIiwicmVuZGVyIiwibGlzdFNsaWRlIiwidXBkYXRlU2xpZGVyIiwiZWxlbSIsInBhcmVudEVsZW1lbnQiLCJub2RlTmFtZSIsIm51bWJlciIsInRleHRDb250ZW50IiwidXBkYXRlRGVzY3JpcHRpb24iLCJ0aXRsZSIsInRlY2hub2xvZ3kiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJ2aWV3IiwicmVtb3ZlIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNsaWRlIiwiYnV0dG9uIiwic2lkZSIsImdldEF0dHJpYnV0ZSIsImluaXQiLCJyZXZpZXdzMSIsIlJldmlld3MiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7OztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSxFQUFDLFlBQVk7QUFDVDs7QUFFQSxTQUNJQSxLQUFLQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBRFQ7QUFBQSxTQUVJQyxXQUFXRixTQUFTQyxhQUFULENBQXVCLHdCQUF2QixDQUZmO0FBQUEsU0FHSUUsU0FBU0QsU0FBU0UsUUFIdEI7QUFBQSxTQUlJQyxlQUFlSCxTQUFTRyxZQUo1QjtBQUFBLFNBS0lDLGNBQWNKLFNBQVNJLFdBTDNCO0FBQUEsU0FNSUMsV0FBVyxLQU5mOztBQVNBLGNBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUN4QkMsZUFBTUMsSUFBTixDQUFXVCxNQUFYLEVBQW1CVSxPQUFuQixDQUEyQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUNwQyxpQkFBSUMsTUFBTUQsSUFBSSxFQUFkO0FBQ0EsaUJBQUlFLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxJQUFEO0FBQUEsd0JBQVVBLE9BQU9GLEdBQWpCO0FBQUEsY0FBWDtBQUNBLGlCQUFJRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRDtBQUFBLHdCQUFPLFVBQUNDLENBQUQ7QUFBQSw2Q0FBc0JKLEtBQUtHLENBQUwsQ0FBdEIsWUFBb0NILEtBQUtJLENBQUwsQ0FBcEM7QUFBQSxrQkFBUDtBQUFBLGNBQWxCOztBQUVBUCxrQkFBS1EsS0FBTCxDQUFXQyxTQUFYLEdBQXVCSixZQUFZVixDQUFaLEVBQWVDLENBQWYsQ0FBdkI7QUFDSCxVQU5EO0FBT0g7O0FBRUQsY0FBU2MsWUFBVCxHQUEyQztBQUFBLGFBQXJCZixDQUFxQix1RUFBakIsQ0FBaUI7QUFBQSxhQUFkQyxDQUFjLHVFQUFWLENBQVU7QUFBQSxhQUFQZSxDQUFPLHVFQUFILENBQUc7O0FBQ3ZDLGFBQUlsQixRQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0RDLHNCQUFhQyxDQUFiLEVBQWdCQyxDQUFoQjtBQUNBLGFBQUlnQixJQUFJLElBQUlDLEtBQUtDLEVBQVQsR0FBYyxJQUF0QjtBQUNBLGFBQUlDLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2JKLGtCQUFLQyxDQUFMO0FBQ0FGLDBCQUFhZixJQUFJLE1BQU1rQixLQUFLRyxHQUFMLENBQVNMLENBQVQsQ0FBTixHQUFvQixJQUFyQyxFQUEyQ2YsSUFBSSxNQUFNaUIsS0FBS0ksR0FBTCxDQUFTTixDQUFULENBQU4sR0FBb0IsSUFBbkUsRUFBeUVBLENBQXpFO0FBQ0gsVUFIRDtBQUlBTywrQkFBc0JILElBQXRCO0FBQ0g7O0FBR0QsY0FBU0ksa0JBQVQsQ0FBNEJDLENBQTVCLEVBQStCO0FBQzNCQSxXQUFFQyxjQUFGO0FBQ0E1QixvQkFBVyxJQUFYO0FBQ0E7Ozs7QUFJQUMsc0JBQWFGLGNBQWMsQ0FBZCxHQUFrQjRCLEVBQUV6QixDQUFqQyxFQUFvQ0osZUFBZSxDQUFmLEdBQW1CNkIsRUFBRXhCLENBQXpEO0FBQ0g7O0FBRUQsY0FBUzBCLE1BQVQsQ0FBZ0JGLENBQWhCLEVBQW1CO0FBQ2YsYUFBSUcsV0FBV0MsT0FBT0MsV0FBUCxJQUFzQnZDLFNBQVN3QyxlQUFULENBQXlCQyxTQUE5RDtBQUNBLGFBQUlDLFdBQVczQyxHQUFHTSxZQUFsQjs7QUFFQSxhQUFJcUMsWUFBWUwsUUFBaEIsRUFBMEI3QixhQUFhLENBQWIsRUFBZ0IsQ0FBQzZCLFFBQUQsR0FBWSxHQUE1QjtBQUM3Qjs7QUFHRCxTQUFJdEMsR0FBRzRDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixPQUF0QixDQUFKLEVBQW9DO0FBQ2hDN0MsWUFBRzhDLGdCQUFILENBQW9CLFdBQXBCLEVBQWlDWixrQkFBakM7QUFDSDs7QUFFRCxTQUFJbEMsR0FBRzRDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ2pDNUMsa0JBQVM2QyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ1QsTUFBcEM7QUFDSDs7QUFFRCxTQUFJckMsR0FBRzRDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixNQUF0QixDQUFKLEVBQW1DO0FBQy9CcEI7QUFDSDtBQUdKLEVBbkVELEk7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUlBLEtBQUlzQixTQUFTLHFCQUFXLFdBQUtDLFNBQUwsQ0FBZUQsTUFBMUIsQ0FBYixDOzs7Ozs7Ozs7OzttQkNId0JFLE07O0FBRnhCOzs7Ozs7QUFFZSxVQUFTQSxNQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNqQzs7QUFFQSxTQUNJSCxTQUFTOUMsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQURiO0FBQUEsU0FFSWlELGNBQWNKLE9BQU83QyxhQUFQLENBQXFCLHNCQUFyQixDQUZsQjtBQUFBLFNBR0lrRCxTQUFTeEMsTUFBTUMsSUFBTixDQUFXa0MsT0FBTzFDLFFBQWxCLEVBQTRCZ0QsTUFBNUIsQ0FBbUMsVUFBQ3RDLElBQUQ7QUFBQSxnQkFBVUEsU0FBU29DLFdBQW5CO0FBQUEsTUFBbkMsQ0FIYjtBQUFBLFNBSUlHLGFBQWFQLE9BQU83QyxhQUFQLENBQXFCLG1CQUFyQixDQUpqQjtBQUFBLFNBS0lxRCxhQUFhUixPQUFPN0MsYUFBUCxDQUFxQixlQUFyQixDQUxqQjs7QUFPQSxTQUFNc0QsWUFBWSxTQUFaQSxTQUFZO0FBQUEsZ0JBQU9DLElBQUlDLElBQUosQ0FBU0QsSUFBSUUsS0FBSixFQUFULENBQVA7QUFBQSxNQUFsQjtBQUNBLFNBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLGdCQUFPSCxJQUFJSSxPQUFKLENBQVlKLElBQUlLLEdBQUosRUFBWixDQUFQO0FBQUEsTUFBbkI7QUFDQSxjQUFTQyxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUN6QixhQUFJQyxTQUFTckQsTUFBTUMsSUFBTixDQUFXcUMsSUFBWCxFQUFpQmdCLEdBQWpCLENBQXFCO0FBQUEsb0JBQVFuRCxLQUFLb0QsR0FBYjtBQUFBLFVBQXJCLENBQWI7QUFDQSxhQUFJQyxZQUFKOztBQUVBSCxnQkFBT25ELE9BQVAsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUN4QixpQkFBSWdELElBQUluQixRQUFKLENBQWE5QixJQUFiLENBQUosRUFBd0I7QUFDcEJxRCx1QkFBTXBELENBQU47O0FBRUFxRCx5QkFBUUMsR0FBUixDQUFZdkQsSUFBWixFQUFrQmlELEdBQWxCO0FBRUg7QUFFSixVQVJEO0FBU0EsZ0JBQU9JLEdBQVA7QUFDSDs7QUFFRCxTQUFJRyxRQUFRckIsSUFBWjs7QUFFQSxjQUFTc0IsTUFBVCxDQUFnQkMsU0FBaEIsRUFBMkI7O0FBRXZCLFVBQUMsU0FBU0MsWUFBVCxDQUFzQkMsSUFBdEIsRUFBb0M7QUFBQSxpQkFBUjNELENBQVEsdUVBQUosQ0FBQyxDQUFHOztBQUNqQyxpQkFBSXlDLE1BQU1rQixLQUFLdEUsUUFBTCxHQUFnQnNFLEtBQUt0RSxRQUFyQixHQUFnQ3NFLElBQTFDOztBQUVBL0QsbUJBQU1DLElBQU4sQ0FBVzRDLEdBQVgsRUFBZ0IzQyxPQUFoQixDQUF5QixnQkFBUTtBQUM3QixxQkFBSUMsS0FBSzZELGFBQUwsQ0FBbUJoQyxTQUFuQixLQUFpQyxRQUFyQyxFQUErQyxFQUFFNUIsQ0FBRjtBQUMvQyxxQkFBSUQsS0FBSzhELFFBQUwsS0FBa0IsS0FBdEIsRUFBNkI5RCxLQUFLaUQsR0FBTCxHQUFXZCxLQUFLbEMsQ0FBTCxFQUFRbUQsR0FBbkI7QUFDN0IscUJBQUlwRCxLQUFLNkIsU0FBTCxLQUFtQixnQkFBdkIsRUFBeUM7QUFDckMseUJBQUl1QixNQUFNcEQsS0FBSzZELGFBQUwsQ0FBbUIxRSxhQUFuQixDQUFpQyxLQUFqQyxDQUFWO0FBQ0EseUJBQUk0RSxTQUFTZixlQUFlSSxJQUFJSCxHQUFuQixDQUFiO0FBQ0FLLDZCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQUUsNkJBQVFDLEdBQVIsQ0FBWVEsTUFBWjs7QUFHQS9ELDBCQUFLZ0UsV0FBTCxHQUFtQkQsTUFBbkI7QUFDSDs7QUFFREosOEJBQWEzRCxJQUFiLEVBQW1CQyxDQUFuQjtBQUNILGNBZEQ7QUFlSCxVQWxCRCxFQWtCR3lELFNBbEJIOztBQW9CQSxrQkFBU08saUJBQVQsR0FBNkI7QUFDekIsaUJBQUlDLFFBQVE5QixZQUFZakQsYUFBWixDQUEwQixtQkFBMUIsQ0FBWjtBQUNBLGlCQUFJZ0YsYUFBYS9CLFlBQVlqRCxhQUFaLENBQTBCLHFCQUExQixDQUFqQjtBQUNBLGlCQUFJaUYsV0FBV2xGLFNBQVNtRixzQkFBVCxFQUFmO0FBQ0EsaUJBQUlDLE9BQU8sQ0FBWDs7QUFFQXpFLG1CQUFNQyxJQUFOLENBQVdxRSxXQUFXN0UsUUFBdEIsRUFBZ0M2RCxHQUFoQyxDQUFvQztBQUFBLHdCQUFRbkQsS0FBS3VFLE1BQUwsRUFBUjtBQUFBLGNBQXBDOztBQUVBTCxtQkFBTUYsV0FBTixHQUFvQjdCLEtBQUttQyxJQUFMLEVBQVdKLEtBQS9COztBQUVBckUsbUJBQU1DLElBQU4sQ0FBV3FDLEtBQUttQyxJQUFMLEVBQVdILFVBQXRCLEVBQWtDcEUsT0FBbEMsQ0FBMkMsZ0JBQVE7QUFDL0MscUJBQUl5RSxPQUFPdEYsU0FBU3VGLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxzQkFBS1IsV0FBTCxHQUFtQmhFLElBQW5CO0FBQ0FvRSwwQkFBU00sV0FBVCxDQUFxQkYsSUFBckI7QUFDSCxjQUpEOztBQU1BTCx3QkFBV08sV0FBWCxDQUF1Qk4sUUFBdkI7QUFDSDs7QUFHREg7QUFFSDs7QUFFRCxjQUFTVSxLQUFULENBQWV2RCxDQUFmLEVBQWtCO0FBQ2QsYUFBSXdELFNBQVMsSUFBYjtBQUNBLGFBQUlDLE9BQU9ELE9BQU9FLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBWDs7QUFFQSxhQUFJRCxTQUFTLE1BQWIsRUFBcUJwQyxVQUFVZSxLQUFWO0FBQ3JCLGFBQUlxQixTQUFTLFVBQWIsRUFBeUJoQyxXQUFXVyxLQUFYOztBQUd6QkMsZ0JBQU9wQixNQUFQO0FBQ0g7O0FBRUQsTUFBQyxTQUFTMEMsSUFBVCxHQUFnQjs7QUFFYnhDLG9CQUFXUixnQkFBWCxDQUE0QixLQUE1QixFQUFtQzRDLEtBQW5DO0FBQ0FuQyxvQkFBV1QsZ0JBQVgsQ0FBNEIsS0FBNUIsRUFBbUM0QyxLQUFuQztBQUNILE1BSkQ7QUFLSCxFOzs7Ozs7QUM5RkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFjLHdCQUF3QjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTs7QUFFQSxFQUFDLFk7Ozs7Ozs7Ozs7O0FDcktNLEtBQUl4QyxzQkFBTztBQUNkRixnQkFBVztBQUNQRCxpQkFBUSxDQUNKO0FBQ0lvQixrQkFBSyw0Q0FEVDtBQUVJYyxvQkFBTyxzQkFGWDtBQUdJQyx5QkFBWSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFlBQWhCO0FBSGhCLFVBREksRUFNSjtBQUNJZixrQkFBSywwQ0FEVDtBQUVJYyxvQkFBTyxhQUZYO0FBR0lDLHlCQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQ7QUFIaEIsVUFOSSxFQVdKO0FBQ0lmLGtCQUFLLHVDQURUO0FBRUljLG9CQUFPLE1BRlg7QUFHSUMseUJBQVksQ0FBQyxLQUFEO0FBSGhCLFVBWEk7QUFERDtBQURHLEVBQVgsQzs7Ozs7Ozs7QUNBUDs7Ozs7O0FBQ0EsS0FBSWEsV0FBVyx1QkFBZjs7QUFFQSxFQUFDLFlBQVksQ0FHWixDQUhELEk7Ozs7Ozs7Ozs7O21CQ0h3QkMsTztBQUFULFVBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCLENBRXJDLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vc3RhdGljL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIwNzcxOWJiYjg4ZWQzNDU5MjRjIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICAgIFRoaXMgZmlsZSBjYW4gYmUgdXNlZCBhcyBlbnRyeSBwb2ludCBmb3Igd2VicGFjayFcbiAqL1xuXG5pbXBvcnQgbW91bnRhaW5CZyBmcm9tICdjb21wb25lbnRzL21vdW50YWluLWJnL21vdW50YWluLWJnLmpzJztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzJztcbmltcG9ydCBhYm91dG1lIGZyb20gJ2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuanMnO1xuaW1wb3J0IGZvb3RlciBmcm9tICdjb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwiKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBsZXRcbiAgICAgICAgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW91bnRhaW4tYmcnKSxcbiAgICAgICAgcGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW91bnRhaW4tYmdfX3BhcmFsbGF4JyksXG4gICAgICAgIGxheWVycyA9IHBhcmFsbGF4LmNoaWxkcmVuLFxuICAgICAgICBjbGllbnRIZWlnaHQgPSBwYXJhbGxheC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGNsaWVudFdpZHRoID0gcGFyYWxsYXguY2xpZW50V2lkdGgsXG4gICAgICAgIHVzZXJNb3ZlID0gZmFsc2U7XG5cblxuICAgIGZ1bmN0aW9uIHBhcmFsbGF4TW92ZSh4LCB5KSB7XG4gICAgICAgIEFycmF5LmZyb20obGF5ZXJzKS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29lID0gaSAvIDIwO1xuICAgICAgICAgICAgbGV0IGJpYXMgPSAoYXhpcykgPT4gYXhpcyAqIGNvZTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGUzZCA9IChYKSA9PiAoWSkgPT4gYHRyYW5zbGF0ZTNkKCR7YmlhcyhYKX1weCwgJHtiaWFzKFkpfXB4LCAwKWA7XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlM2QoeCkoeSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF3YWl0aW5nVXNlcih4ID0gMCwgeSA9IDAsIGYgPSAwKSB7XG4gICAgICAgIGlmICh1c2VyTW92ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFsbGF4TW92ZSh4LCB5KTtcbiAgICAgICAgbGV0IHMgPSAyICogTWF0aC5QSSAvIDM2MDA7XG4gICAgICAgIGxldCBtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgZiArPSBzO1xuICAgICAgICAgICAgYXdhaXRpbmdVc2VyKHggKyAzNjAgKiBNYXRoLnNpbihmKSAvIDEwMDAsIHkgKyAzNjAgKiBNYXRoLmNvcyhmKSAvIDEwMDAsIGYpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobW92ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0cmFja01vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHVzZXJNb3ZlID0gdHJ1ZTtcbiAgICAgICAgLyogc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICB1c2VyTW92ZSA9IGZhbHNlO1xuICAgICAgICAgaW1pdGF0aW9uVXNlcihjZW50ZXJYIC0gZS54LCBjZW50ZXJZIC0gZS55KTtcbiAgICAgICAgIH0sIDMwMDApOyovXG4gICAgICAgIHBhcmFsbGF4TW92ZShjbGllbnRXaWR0aCAvIDIgLSBlLngsIGNsaWVudEhlaWdodCAvIDIgLSBlLnkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbChlKSB7XG4gICAgICAgIGxldCBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBsZXQgaGVpZ2h0QmcgPSBiZy5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGhlaWdodEJnID49IHNjcm9sbGVkKSBwYXJhbGxheE1vdmUoMCwgK3Njcm9sbGVkICogMS41KTtcbiAgICB9XG5cblxuICAgIGlmIChiZy5jbGFzc05hbWUuaW5jbHVkZXMoJ21vdXNlJykpIHtcbiAgICAgICAgYmcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdHJhY2tNb3VzZVBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoYmcuY2xhc3NOYW1lLmluY2x1ZGVzKCdzY3JvbGwnKSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGwpO1xuICAgIH1cblxuICAgIGlmIChiZy5jbGFzc05hbWUuaW5jbHVkZXMoJ3dhaXQnKSkge1xuICAgICAgICBhd2FpdGluZ1VzZXIoKTtcbiAgICB9XG5cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21hcmt1cC9jb21wb25lbnRzL21vdW50YWluLWJnL21vdW50YWluLWJnLmpzIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuLi9zbGlkZXIvc2xpZGVyLmpzJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi4vcG9ydGZvbGlvL2RhdGEvZGF0YS5qcyc7XG5cblxuXG5sZXQgc2xpZGVyID0gbmV3IFNsaWRlcihkYXRhLnBvcnRmb2xpby5zbGlkZXIpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmpzIiwiaW1wb3J0IHRhcCBmcm9tICd0YXBqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcihkYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgbGV0XG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fZGVzY3JpcHRpb24nKSxcbiAgICAgICAgc2xpZGVzID0gQXJyYXkuZnJvbShzbGlkZXIuY2hpbGRyZW4pLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZGVzY3JpcHRpb24pLFxuICAgICAgICBwcmV2QnV0dG9uID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3ByZXZpb3VzJyksXG4gICAgICAgIG5leHRCdXR0b24gPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fbmV4dCcpO1xuXG4gICAgY29uc3QgbGVmdFNoaWZ0ID0gYXJyID0+IGFyci5wdXNoKGFyci5zaGlmdCgpKTtcbiAgICBjb25zdCByaWdodFNoaWZ0ID0gYXJyID0+IGFyci51bnNoaWZ0KGFyci5wb3AoKSk7XG4gICAgZnVuY3Rpb24gY2hlY2tJbWdOdW1iZXIoc3JjKSB7XG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRhdGEpLm1hcChpdGVtID0+IGl0ZW0uaW1nKTtcbiAgICAgICAgbGV0IHJlcztcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNyYy5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLCBzcmMpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgbGV0IG1vZGVsID0gZGF0YTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcihsaXN0U2xpZGUpIHtcblxuICAgICAgICAoZnVuY3Rpb24gdXBkYXRlU2xpZGVyKGVsZW0sIGkgPSAtMSkge1xuICAgICAgICAgICAgbGV0IGFyciA9IGVsZW0uY2hpbGRyZW4gPyBlbGVtLmNoaWxkcmVuIDogZWxlbTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbShhcnIpLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnc2xpZGVyJykgKytpO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5vZGVOYW1lID09PSAnSU1HJykgaXRlbS5zcmMgPSBkYXRhW2ldLmltZztcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc05hbWUgPT09ICdzbGlkZXJfX251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IGl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IGNoZWNrSW1nTnVtYmVyKGltZy5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbWcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IG51bWJlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoaXRlbSwgaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkobGlzdFNsaWRlKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRlc2NyaXB0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3RpdGxlIGgyJyk7XG4gICAgICAgICAgICBsZXQgdGVjaG5vbG9neSA9IGRlc2NyaXB0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3RlY2hub2xvZ3knKTtcbiAgICAgICAgICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gMTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0ZWNobm9sb2d5LmNoaWxkcmVuKS5tYXAoaXRlbSA9PiBpdGVtLnJlbW92ZSgpKTtcblxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhW3ZpZXddLnRpdGxlO1xuXG4gICAgICAgICAgICBBcnJheS5mcm9tKGRhdGFbdmlld10udGVjaG5vbG9neSkuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlY2hub2xvZ3kuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG5cblxuICAgICAgICB1cGRhdGVEZXNjcmlwdGlvbigpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGUoZSkge1xuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcztcbiAgICAgICAgbGV0IHNpZGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlJyk7XG5cbiAgICAgICAgaWYgKHNpZGUgPT09ICduZXh0JykgbGVmdFNoaWZ0KG1vZGVsKTtcbiAgICAgICAgaWYgKHNpZGUgPT09ICdwcmV2aW91cycpIHJpZ2h0U2hpZnQobW9kZWwpO1xuXG5cbiAgICAgICAgcmVuZGVyKHNsaWRlcyk7XG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgICAgICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0YXAnLCBzbGlkZSk7XG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndGFwJywgc2xpZGUpO1xuICAgIH0pKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwiKGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG4gICAgdmFyIFRhcCA9IHt9O1xuXG4gICAgdmFyIHV0aWxzID0ge307XG5cbiAgICB1dGlscy5hdHRhY2hFdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHV0aWxzLmZpcmVGYWtlRXZlbnQgPSBmdW5jdGlvbihlLCBldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuZGlzcGF0Y2hFdmVudCh1dGlscy5jcmVhdGVFdmVudChldmVudE5hbWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1dGlscy5jcmVhdGVFdmVudCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuXG4gICAgICAgICAgICBldm50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGV2bnQuZXZlbnROYW1lID0gbmFtZTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXRpbHMuZ2V0UmVhbEV2ZW50ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGUub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKGUudG91Y2hlcyAmJiBlLnRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfTtcblxuICAgIHZhciBldmVudE1hdHJpeCA9IFt7XG4gICAgICAgIC8vIFRvdWNoYWJsZSBkZXZpY2VzXG4gICAgICAgIHRlc3Q6ICgncHJvcGVydHlJc0VudW1lcmFibGUnIGluIHdpbmRvdyB8fCAnaGFzT3duUHJvcGVydHknIGluIGRvY3VtZW50KSAmJiAod2luZG93LnByb3BlcnR5SXNFbnVtZXJhYmxlKCdvbnRvdWNoc3RhcnQnKSB8fCBkb2N1bWVudC5oYXNPd25Qcm9wZXJ0eSgnb250b3VjaHN0YXJ0JykpLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICAgICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgICAgICAgIGVuZDogJ3RvdWNoZW5kJ1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICAvLyBJRTEwXG4gICAgICAgIHRlc3Q6IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBzdGFydDogJ01TUG9pbnRlckRvd24nLFxuICAgICAgICAgICAgbW92ZTogJ01TUG9pbnRlck1vdmUnLFxuICAgICAgICAgICAgZW5kOiAnTVNQb2ludGVyVXAnXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIC8vIE1vZGVybiBkZXZpY2UgYWdub3N0aWMgd2ViXG4gICAgICAgIHRlc3Q6IHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgc3RhcnQ6ICdwb2ludGVyZG93bicsXG4gICAgICAgICAgICBtb3ZlOiAncG9pbnRlcm1vdmUnLFxuICAgICAgICAgICAgZW5kOiAncG9pbnRlcnVwJ1xuICAgICAgICB9XG4gICAgfV07XG5cbiAgICBUYXAub3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnROYW1lOiAndGFwJyxcbiAgICAgICAgZmluZ2VyTWF4T2Zmc2V0OiAxMVxuICAgIH07XG5cbiAgICB2YXIgYXR0YWNoRGV2aWNlRXZlbnQsIGluaXQsIGhhbmRsZXJzLCBkZXZpY2VFdmVudHMsXG4gICAgICAgIGNvb3JkcyA9IHt9O1xuXG4gICAgYXR0YWNoRGV2aWNlRXZlbnQgPSBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmF0dGFjaEV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZGV2aWNlRXZlbnRzW2V2ZW50TmFtZV0sIGhhbmRsZXJzW2V2ZW50TmFtZV0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVycyA9IHtcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUgPSB1dGlscy5nZXRSZWFsRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIGNvb3Jkcy5zdGFydCA9IFtlLnBhZ2VYLCBlLnBhZ2VZXTtcbiAgICAgICAgICAgIGNvb3Jkcy5vZmZzZXQgPSBbMCwgMF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCFjb29yZHMuc3RhcnQgJiYgIWNvb3Jkcy5tb3ZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlID0gdXRpbHMuZ2V0UmVhbEV2ZW50KGUpO1xuXG4gICAgICAgICAgICBjb29yZHMubW92ZSA9IFtlLnBhZ2VYLCBlLnBhZ2VZXTtcbiAgICAgICAgICAgIGNvb3Jkcy5vZmZzZXQgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRzLm1vdmVbMF0gLSBjb29yZHMuc3RhcnRbMF0pLFxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGNvb3Jkcy5tb3ZlWzFdIC0gY29vcmRzLnN0YXJ0WzFdKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICBlbmQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUgPSB1dGlscy5nZXRSZWFsRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIGlmIChjb29yZHMub2Zmc2V0WzBdIDwgVGFwLm9wdGlvbnMuZmluZ2VyTWF4T2Zmc2V0ICYmIGNvb3Jkcy5vZmZzZXRbMV0gPCBUYXAub3B0aW9ucy5maW5nZXJNYXhPZmZzZXQgJiYgIXV0aWxzLmZpcmVGYWtlRXZlbnQoZSwgVGFwLm9wdGlvbnMuZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgOC4wIHRyaWdnZXIgYGNsaWNrYCBhZnRlciBgcG9pbnRlcnVwYCBmaXJpbmdcbiAgICAgICAgICAgICAgICAvLyAjMTYgaHR0cHM6Ly9naXRodWIuY29tL3B1a2hhbHNraS90YXAvaXNzdWVzLzE2XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGNsaWNrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmVudERlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvb3JkcyA9IHt9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxzLmZpcmVGYWtlRXZlbnQoZSwgVGFwLm9wdGlvbnMuZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW11bGF0ZWRUYXA6IGZ1bmN0aW9uKCBlICkge1xuICAgICAgICAgICAgaWYgKCBjb29yZHMub2Zmc2V0ICkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmZpcmVGYWtlRXZlbnQoIGUsIFRhcC5vcHRpb25zLmV2ZW50TmFtZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgZXZlbnRNYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChldmVudE1hdHJpeFtpXS50ZXN0KSB7XG4gICAgICAgICAgICAgICAgZGV2aWNlRXZlbnRzID0gZXZlbnRNYXRyaXhbaV0uZXZlbnRzO1xuXG4gICAgICAgICAgICAgICAgYXR0YWNoRGV2aWNlRXZlbnQoJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgYXR0YWNoRGV2aWNlRXZlbnQoJ21vdmUnKTtcbiAgICAgICAgICAgICAgICBhdHRhY2hEZXZpY2VFdmVudCgnZW5kJyk7XG4gICAgICAgICAgICAgICAgdXRpbHMuYXR0YWNoRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBoYW5kbGVyc1snZW11bGF0ZWRUYXAnXSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuYXR0YWNoRXZlbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBoYW5kbGVycy5jbGljayk7XG4gICAgfTtcblxuICAgIHV0aWxzLmF0dGFjaEV2ZW50KHdpbmRvdywgJ2xvYWQnLCBpbml0KTtcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaW5pdCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gVGFwO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuVGFwID0gVGFwO1xuICAgIH1cblxufSkoIHdpbmRvdyApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90YXBqcy9kaXN0L3RhcC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgbGV0IGRhdGEgPSB7XG4gICAgcG9ydGZvbGlvOiB7XG4gICAgICAgIHNsaWRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogJy9zdGF0aWMvaW1nL2Fzc2V0cy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBuZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQodCw0LnRgiDQvtC90LvQsNC50L0g0LzQsNCz0LDQt9C40L3QsCcsXG4gICAgICAgICAgICAgICAgdGVjaG5vbG9neTogWydodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiAnL3N0YXRpYy9pbWcvYXNzZXRzL3BvcnRmb2xpby90cmlvbG9nLmpwZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQodCw0LnRgiDRgtGA0L7Qu9C+0LMnLFxuICAgICAgICAgICAgICAgIHRlY2hub2xvZ3k6IFsnaHRtbCcsICdzYXNzJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiAnL3N0YXRpYy9pbWcvYXNzZXRzL3BvcnRmb2xpby95b2dhLmpwZycsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd5b2dhJyxcbiAgICAgICAgICAgICAgICB0ZWNobm9sb2d5OiBbJ2VsbSddXG4gICAgICAgICAgICB9XVxuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvY29tcG9uZW50cy9wb3J0Zm9saW8vZGF0YS9kYXRhLmpzIiwiaW1wb3J0IFJldmlld3MgZnJvbSAnLi4vcmV2aWV3cy9yZXZpZXdzLmpzJztcbmxldCByZXZpZXdzMSA9IG5ldyBSZXZpZXdzKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXdzKHR5cGUpIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==