webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/fad/Desarrollo/platzi/next.js/pages/channel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var _default = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          channel = _this$props.channel,
          audio_clips = _this$props.audio_clips,
          series = _this$props.series;
      return __jsx("div", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx("a", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, __jsx("header", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, "Podcasts"), ' ')), console.log(channel.urls.banner_image.original), channel.urls.banner_image.original != null ? __jsx("img", {
        src: channel.urls.banner_image.original,
        alt: "".concat(channel.title, " banner"),
        className: "jsx-3889508141" + " " + "banner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }) : __jsx("div", {
        className: "jsx-3889508141" + " " + "defaultBanner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, channel.title)), __jsx("p", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, channel.description), audio_clips > [] ? __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h2", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, "Ultimos Podcast"), audio_clips.map(function (clip) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: clip.id,
          href: "/podcast?id=".concat(clip.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "jsx-3889508141" + " " + "podcast",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 17
          }
        }, __jsx("h3", {
          className: "jsx-3889508141",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 19
          }
        }, clip.title), __jsx("div", {
          className: "jsx-3889508141" + " " + "meta",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 19
          }
        }, Math.ceil(clip.duration / 60), " minutes")));
      })) : null, series > [] ? __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("h2", {
        className: "jsx-3889508141",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, "Series"), series.map(function (serie) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: serie.id,
          href: "/channel?id=".concat(serie.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }
        }, __jsx("a", {
          className: "jsx-3889508141" + " " + "podcast",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }
        }, __jsx("h3", {
          className: "jsx-3889508141",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 19
          }
        }, serie.title)));
      }), console.log(series)) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2288006343",
        __self: this
      }, "header.jsx-3889508141{color:#fff;background:#8756ca;padding:15px;}.defaultBanner.jsx-3889508141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.defaultBanner.jsx-3889508141 h1.jsx-3889508141{font-size:7em;}.banner.jsx-3889508141{width:100%;}.podcast.jsx-3889508141{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3889508141:hover{color:#000;}.podcast.jsx-3889508141 h3.jsx-3889508141{margin:0;}.podcast.jsx-3889508141 .meta.jsx-3889508141{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZvQixBQUd3QixBQUtFLEFBS0MsQUFHSCxBQUdHLEFBUUgsQUFHRixBQUdFLFNBRmIsRUEzQnFCLEFBYXJCLEFBV0EsQUFNbUIsR0FwQm5CLEFBTXVCLGNBZUwsRUE5QkgsYUFDZixDQThCQSxvQkFmYSxVQVpZLENBYVYsYUFDOEIsd0NBQzVCLGVBQ2pCLDhCQWZxQiw2RkFDckIiLCJmaWxlIjoiL2hvbWUvZmFkL0Rlc2Fycm9sbG8vcGxhdHppL25leHQuanMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxuXG4gICAgbGV0IFtyZXFDaGFubmVsLCByZXFBdWRpb3MsIHJlcVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYClcbiAgICBdKVxuXG4gICAgLy8gICBMbGFtYSBlbCBjYW5hbCBjb24gZWwgaWQgZXNwZWNpZmljYWRvXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgLy8gICBMTGFtYSBsb3MgYXJjaGl2b3MgZGUgYXVkaW8gcHJpbmNpcGFsZXMgZGVsIHBvZGNhc3RcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBsZXQgYXVkaW9fY2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHNcblxuICAgIC8vICAgTExhbWEgbG9zIGFyY2hpdm9zIGRlIGF1ZGlvIGRlIHN1YnNlcmllcyBkZWwgcG9kY2FzdFxuICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcbiAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+eycgJ31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2NvbnNvbGUubG9nKGNoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWwpfVxuICAgICAgICB7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbCAhPSBudWxsID8gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lclwiXG4gICAgICAgICAgICBzcmM9e2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICBhbHQ9e2Ake2NoYW5uZWwudGl0bGV9IGJhbm5lcmB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRCYW5uZXJcIj5cbiAgICAgICAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxwPntjaGFubmVsLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICB7YXVkaW9fY2xpcHMgPiBbXSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdDwvaDI+XG4gICAgICAgICAgICB7YXVkaW9fY2xpcHMubWFwKChjbGlwKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17Y2xpcC5pZH0gaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XG4gICAgICAgICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICB7TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHtzZXJpZXMgPiBbXSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPlNlcmllczwvaDI+XG4gICAgICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUpID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtzZXJpZS5pZH0gaHJlZj17YC9jaGFubmVsP2lkPSR7c2VyaWUuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPntzZXJpZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coc2VyaWVzKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmYXVsdEJhbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmYXVsdEJhbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/channel.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "112771683",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUgyQixBQUdzQixBQUtZLFNBSkMsc0JBQ0wsaUJBQ25CLEVBR0EiLCJmaWxlIjoiL2hvbWUvZmFkL0Rlc2Fycm9sbG8vcGxhdHppL25leHQuanMvcGFnZXMvY2hhbm5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIGxldCBpZENoYW5uZWwgPSBxdWVyeS5pZFxuXG4gICAgbGV0IFtyZXFDaGFubmVsLCByZXFBdWRpb3MsIHJlcVNlcmllc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYClcbiAgICBdKVxuXG4gICAgLy8gICBMbGFtYSBlbCBjYW5hbCBjb24gZWwgaWQgZXNwZWNpZmljYWRvXG4gICAgbGV0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBsZXQgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbFxuXG4gICAgLy8gICBMTGFtYSBsb3MgYXJjaGl2b3MgZGUgYXVkaW8gcHJpbmNpcGFsZXMgZGVsIHBvZGNhc3RcbiAgICBsZXQgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBsZXQgYXVkaW9fY2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHNcblxuICAgIC8vICAgTExhbWEgbG9zIGFyY2hpdm9zIGRlIGF1ZGlvIGRlIHN1YnNlcmllcyBkZWwgcG9kY2FzdFxuICAgIGxldCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGxldCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcbiAgICByZXR1cm4geyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgc2VyaWVzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+eycgJ31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2NvbnNvbGUubG9nKGNoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWwpfVxuICAgICAgICB7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbCAhPSBudWxsID8gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lclwiXG4gICAgICAgICAgICBzcmM9e2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICBhbHQ9e2Ake2NoYW5uZWwudGl0bGV9IGJhbm5lcmB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZmF1bHRCYW5uZXJcIj5cbiAgICAgICAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxwPntjaGFubmVsLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICB7YXVkaW9fY2xpcHMgPiBbXSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPlVsdGltb3MgUG9kY2FzdDwvaDI+XG4gICAgICAgICAgICB7YXVkaW9fY2xpcHMubWFwKChjbGlwKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17Y2xpcC5pZH0gaHJlZj17YC9wb2RjYXN0P2lkPSR7Y2xpcC5pZH1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwb2RjYXN0XCI+XG4gICAgICAgICAgICAgICAgICA8aDM+e2NsaXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICB7TWF0aC5jZWlsKGNsaXAuZHVyYXRpb24gLyA2MCl9IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHtzZXJpZXMgPiBbXSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGgyPlNlcmllczwvaDI+XG4gICAgICAgICAgICB7c2VyaWVzLm1hcCgoc2VyaWUpID0+IChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtzZXJpZS5pZH0gaHJlZj17YC9jaGFubmVsP2lkPSR7c2VyaWUuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9kY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPntzZXJpZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coc2VyaWVzKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmYXVsdEJhbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGVmYXVsdEJhbm5lciBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDdlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvZGNhc3QgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9kY2FzdCAubWV0YSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/channel.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query, idChannel, _await$Promise$all, _await$Promise$all2, reqChannel, reqAudios, reqSeries, dataChannel, channel, dataAudios, audio_clips, dataSeries, series;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query;
              idChannel = query.id;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"))]));

            case 4:
              _await$Promise$all = _context.sent;
              _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_await$Promise$all, 3);
              reqChannel = _await$Promise$all2[0];
              reqAudios = _await$Promise$all2[1];
              reqSeries = _await$Promise$all2[2];
              _context.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reqChannel.json());

            case 11:
              dataChannel = _context.sent;
              channel = dataChannel.body.channel; //   LLama los archivos de audio principales del podcast

              _context.next = 15;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reqAudios.json());

            case 15:
              dataAudios = _context.sent;
              audio_clips = dataAudios.body.audio_clips; //   LLama los archivos de audio de subseries del podcast

              _context.next = 19;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(reqSeries.json());

            case 19:
              dataSeries = _context.sent;
              series = dataSeries.body.channels;
              return _context.abrupt("return", {
                channel: channel,
                audio_clips: audio_clips,
                series: series
              });

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.7e8476bbbe662be4595e.hot-update.js.map