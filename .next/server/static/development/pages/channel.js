module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/fad/Desarrollo/platzi/next.js/pages/channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    query
  }) {
    let idChannel = query.id; //   Llama el canal con el id especificado

    let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
    let dataChannel = await reqChannel.json();
    let channel = dataChannel.body.channel; //   LLama los archivos de audio principales del podcast

    let reqAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`);
    let dataAudios = await reqAudios.json();
    let audio_clips = dataAudios.body.audio_clips; //   LLama los archivos de audio de subseries del podcast

    let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`);
    let dataSeries = await reqSeries.json();
    let series = dataSeries.body.channels;
    return {
      channel,
      audio_clips,
      series
    };
  }

  render() {
    const {
      channel,
      audio_clips,
      series
    } = this.props;
    return __jsx("div", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("header", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, "Podcasts"), __jsx("h1", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, channel.title), __jsx("h2", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, "Series"), series.map(serie => __jsx("div", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, serie.title)), __jsx("h2", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, "Ultimos Podcast"), audio_clips.map(clip => __jsx("div", {
      className: "jsx-2105851563",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, clip.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "964170817",
      __self: this
    }, ".channels.jsx-2105851563{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}header.jsx-2105851563{color:#fff;background:#8756ca;padding:15px;}.channel.jsx-2105851563{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);text-align:center;margin-bottom:0.5em;}.channel.jsx-2105851563 img.jsx-2105851563{width:100%;}.h2.jsx-2105851563{padding:5px;font-size:0.9em;font-weight:600;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENvQixBQUcwQixBQU1GLEFBV0csQUFPSCxBQUdDLFdBcEJPLEFBa0JyQixDQUdrQixDQTNCRixDQWlCSSxhQWhCTCxDQTJCRyxFQXJCSCxFQVc4QixRQWhCaUIsR0FNOUQsQ0FxQlcsU0FDWCxtQkFYb0Isa0JBQ0UsUUFqQnRCLFlBa0JBIiwiZmlsZSI6Ii9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXG5cbiAgICAvLyAgIExsYW1hIGVsIGNhbmFsIGNvbiBlbCBpZCBlc3BlY2lmaWNhZG9cbiAgICBsZXQgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9YFxuICAgIClcbiAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGxldCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsXG5cbiAgICAvLyAgIExMYW1hIGxvcyBhcmNoaXZvcyBkZSBhdWRpbyBwcmluY2lwYWxlcyBkZWwgcG9kY2FzdFxuICAgIGxldCByZXFBdWRpb3MgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2BcbiAgICApXG4gICAgbGV0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpXG4gICAgbGV0IGF1ZGlvX2NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXG5cbiAgICAvLyAgIExMYW1hIGxvcyBhcmNoaXZvcyBkZSBhdWRpbyBkZSBzdWJzZXJpZXMgZGVsIHBvZGNhc3RcbiAgICBsZXQgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgXG4gICAgKVxuICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcbiAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cbiAgICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XG4gICAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUpID0+IChcbiAgICAgICAgICA8ZGl2PntzZXJpZS50aXRsZX08L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoMj5VbHRpbW9zIFBvZGNhc3Q8L2gyPlxuICAgICAgICB7YXVkaW9fY2xpcHMubWFwKChjbGlwKSA9PiAoXG4gICAgICAgICAgPGRpdj57Y2xpcC50aXRsZX08L2Rpdj5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYW5uZWwge1xuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLyogbWF4LXdpZHRoOiAxMDAwcHg7ICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiBtYXJnaW46IDAgYXV0byAwLjVlbTsgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhbm5lbCBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/channel.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "112771683",
      __self: this
    }, "body{margin:0;font-family:system-ui;background:white;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkUyQixBQUdzQixBQUtZLFNBSkMsc0JBQ0wsaUJBQ25CLEVBR0EiLCJmaWxlIjoiL2hvbWUvZmFkL0Rlc2Fycm9sbG8vcGxhdHppL25leHQuanMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICBsZXQgaWRDaGFubmVsID0gcXVlcnkuaWRcblxuICAgIC8vICAgTGxhbWEgZWwgY2FuYWwgY29uIGVsIGlkIGVzcGVjaWZpY2Fkb1xuICAgIGxldCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gXG4gICAgKVxuICAgIGxldCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG4gICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcblxuICAgIC8vICAgTExhbWEgbG9zIGFyY2hpdm9zIGRlIGF1ZGlvIHByaW5jaXBhbGVzIGRlbCBwb2RjYXN0XG4gICAgbGV0IHJlcUF1ZGlvcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYFxuICAgIClcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBsZXQgYXVkaW9fY2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHNcblxuICAgIC8vICAgTExhbWEgbG9zIGFyY2hpdm9zIGRlIGF1ZGlvIGRlIHN1YnNlcmllcyBkZWwgcG9kY2FzdFxuICAgIGxldCByZXFTZXJpZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9jaGlsZF9jaGFubmVsc2BcbiAgICApXG4gICAgbGV0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuICAgIHJldHVybiB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBzZXJpZXMgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBzZXJpZXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxuICAgICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cbiAgICAgICAgPGgyPlNlcmllczwvaDI+XG4gICAgICAgIHtzZXJpZXMubWFwKChzZXJpZSkgPT4gKFxuICAgICAgICAgIDxkaXY+e3NlcmllLnRpdGxlfTwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdDwvaDI+XG4gICAgICAgIHthdWRpb19jbGlwcy5tYXAoKGNsaXApID0+IChcbiAgICAgICAgICA8ZGl2PntjbGlwLnRpdGxlfTwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhbm5lbCB7XG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvKiBtYXgtd2lkdGg6IDEwMDBweDsgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8qIG1hcmdpbjogMCBhdXRvIDAuNWVtOyAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jaGFubmVsIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmgyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/channel.js */"));
  }

});

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/channel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fad/Desarrollo/platzi/next.js/pages/channel.js */"./pages/channel.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map