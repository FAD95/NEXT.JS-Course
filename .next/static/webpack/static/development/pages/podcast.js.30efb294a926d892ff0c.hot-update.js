webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.js":
/*!**************************!*\
  !*** ./pages/podcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-h5-audio-player */ "./node_modules/react-h5-audio-player/es/index.js");
/* harmony import */ var react_h5_audio_player_src_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-h5-audio-player/src/styles.scss */ "./node_modules/react-h5-audio-player/src/styles.scss");
/* harmony import */ var react_h5_audio_player_src_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_h5_audio_player_src_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/home/fad/Desarrollo/platzi/next.js/pages/podcast.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var _default = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      return __jsx("div", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, __jsx("header", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, "Podcasts"), __jsx("div", {
        className: "jsx-4087144473" + " " + "modal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-4087144473" + " " + "clip",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, __jsx("nav", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/channel?id=".concat(clip.channel.id),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "jsx-4087144473" + " " + "close",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, "< Volver"))), __jsx("picture", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-4087144473" + " " + "player",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("h3", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }, clip.title), __jsx("h6", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      }, clip.channel.title), __jsx("div", {
        className: "jsx-4087144473",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, __jsx(react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__["default"], {
        autoPlay: true,
        src: clip.urls.high_mp3,
        layout: 'stacked-reverse',
        customProgressBarSection: [react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__["RHAP_UI"].PROGRESS_BAR, react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__["RHAP_UI"].CURRENT_TIME, __jsx("div", {
          className: "jsx-4087144473" + " " + "barrita",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }
        }, " / "), react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__["RHAP_UI"].DURATION],
        customVolumeControls: [react_h5_audio_player__WEBPACK_IMPORTED_MODULE_9__["RHAP_UI"].VOLUME],
        customAdditionalControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "619428224",
        __self: this
      }, ".barrita.jsx-4087144473{padding-top:142px;}nav.jsx-4087144473{background:none;}nav.jsx-4087144473 a.jsx-4087144473{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-4087144473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-4087144473{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-4087144473 div.jsx-4087144473{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;min-width:300px;}.player.jsx-4087144473{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}.player.jsx-4087144473 div.jsx-4087144473{position:relative;height:160px;}h3.jsx-4087144473{margin:0;font-size:25px;font-family:'system-ui';}h6.jsx-4087144473{margin:0;margin-top:1em;font-size:18px;}audio.jsx-4087144473{margin-top:2em;width:100%;}.modal.jsx-4087144473{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL3BvZGNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RvQixBQUcrQixBQUdGLEFBR0ssQUFPUixBQU9BLEFBU0YsQUFRRSxBQUtLLEFBSVQsQUFLQSxBQUtNLEFBS0EsU0FkQSxBQUtBLEVBdEJILEVBUWtCLEVBbUJuQixBQUtMLENBMURSLEVBSEEsQUEwQ2UsR0FwQ0EsQUF3RE4sRUFoQ3FCLENBaUJKLEFBS1QsRUFLakIsRUFNVSxHQXBCVixHQXBDYyxFQXlESCxHQVhYLENBZm9CLEtBMkJKLENBekRDLEVBd0NqQixHQWpCMEIsT0FRMUIsQ0EyQkEsRUF6RHVCLGFBSVQsQUFPTyxDQVlTLFdBbEJOLGlCQW1CTixRQXZCbEIsUUF3QkEsNkNBbkJxQixHQU1JLGdCQUxYLFlBQ2QsdUVBS1csdUNBQ2EsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6Ii9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL3BvZGNhc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgQXVkaW9QbGF5ZXIsIHsgUkhBUF9VSSB9IGZyb20gJ3JlYWN0LWg1LWF1ZGlvLXBsYXllcidcbmltcG9ydCAncmVhY3QtaDUtYXVkaW8tcGxheWVyL3NyYy9zdHlsZXMuc2NzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgbGV0IGlkID0gcXVlcnkuaWRcbiAgICBsZXQgZmV0Y2hDbGlwID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8ke2lkfS5tcDNgXG4gICAgKVxuICAgIGxldCBjbGlwID0gKGF3YWl0IGZldGNoQ2xpcC5qc29uKCkpLmJvZHkuYXVkaW9fY2xpcFxuICAgIHJldHVybiB7IGNsaXAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xpcCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NoYW5uZWw/aWQ9JHtjbGlwLmNoYW5uZWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VcIj4mbHQ7IFZvbHZlcjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1xuICAgICAgICAgICAgICAgICAgICBjbGlwLnVybHMuaW1hZ2UgfHwgY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbFxuICAgICAgICAgICAgICAgICAgfSlgXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcGljdHVyZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgICAgPGgzPntjbGlwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxoNj57Y2xpcC5jaGFubmVsLnRpdGxlfTwvaDY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEF1ZGlvUGxheWVyXG4gICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgc3JjPXtjbGlwLnVybHMuaGlnaF9tcDN9XG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9eydzdGFja2VkLXJldmVyc2UnfVxuICAgICAgICAgICAgICAgICAgY3VzdG9tUHJvZ3Jlc3NCYXJTZWN0aW9uPXtbXG4gICAgICAgICAgICAgICAgICAgIFJIQVBfVUkuUFJPR1JFU1NfQkFSLFxuICAgICAgICAgICAgICAgICAgICBSSEFQX1VJLkNVUlJFTlRfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJyaXRhXCI+IC8gPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICBSSEFQX1VJLkRVUkFUSU9OXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgY3VzdG9tVm9sdW1lQ29udHJvbHM9e1tSSEFQX1VJLlZPTFVNRV19XG4gICAgICAgICAgICAgICAgICBjdXN0b21BZGRpdGlvbmFsQ29udHJvbHM9e1tdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYmFycml0YSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTQycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBsYXllciBkaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzeXN0ZW0tdWknO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgIHtcbiAgICAgICAgICAgIC8qIC5yaGFwX3BsYXktcGF1c2UtYnV0dG9uIHtcbiAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRvIHVzZSAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBpbmxpbmUgc3R5bGVzLlxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfSAqL1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/podcast.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "822969264",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL3BhZ2VzL3BvZGNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkkyQixBQUdzQixTQUNhLHNCQUNMLGlCQUNuQiIsImZpbGUiOiIvaG9tZS9mYWQvRGVzYXJyb2xsby9wbGF0emkvbmV4dC5qcy9wYWdlcy9wb2RjYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IEF1ZGlvUGxheWVyLCB7IFJIQVBfVUkgfSBmcm9tICdyZWFjdC1oNS1hdWRpby1wbGF5ZXInXG5pbXBvcnQgJ3JlYWN0LWg1LWF1ZGlvLXBsYXllci9zcmMvc3R5bGVzLnNjc3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2NzcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIGxldCBpZCA9IHF1ZXJ5LmlkXG4gICAgbGV0IGZldGNoQ2xpcCA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vYXVkaW9fY2xpcHMvJHtpZH0ubXAzYFxuICAgIClcbiAgICBsZXQgY2xpcCA9IChhd2FpdCBmZXRjaENsaXAuanNvbigpKS5ib2R5LmF1ZGlvX2NsaXBcbiAgICByZXR1cm4geyBjbGlwIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsaXAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpcFwiPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7Y2xpcC5jaGFubmVsLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCI+Jmx0OyBWb2x2ZXI8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtcbiAgICAgICAgICAgICAgICAgICAgY2xpcC51cmxzLmltYWdlIHx8IGNsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgIH0pYFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8aDY+e2NsaXAuY2hhbm5lbC50aXRsZX08L2g2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICAgIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfVxuICAgICAgICAgICAgICAgICAgbGF5b3V0PXsnc3RhY2tlZC1yZXZlcnNlJ31cbiAgICAgICAgICAgICAgICAgIGN1c3RvbVByb2dyZXNzQmFyU2VjdGlvbj17W1xuICAgICAgICAgICAgICAgICAgICBSSEFQX1VJLlBST0dSRVNTX0JBUixcbiAgICAgICAgICAgICAgICAgICAgUkhBUF9VSS5DVVJSRU5UX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFycml0YVwiPiAvIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgUkhBUF9VSS5EVVJBVElPTlxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgIGN1c3RvbVZvbHVtZUNvbnRyb2xzPXtbUkhBUF9VSS5WT0xVTUVdfVxuICAgICAgICAgICAgICAgICAgY3VzdG9tQWRkaXRpb25hbENvbnRyb2xzPXtbXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmJhcnJpdGEge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0MnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsaXAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wbGF5ZXIgZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc3lzdGVtLXVpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgICAgfVxuICAgICAgICAgICB7XG4gICAgICAgICAgICAvKiAucmhhcF9wbGF5LXBhdXNlLWJ1dHRvbiB7XG4gICAgICAgICAgICAvLyBSZW1lbWJlciB0byB1c2UgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgaW5saW5lIHN0eWxlcy5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgICAgICAgIH0gKi9cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/pages/podcast.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query, id, fetchClip, clip;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref.query;
              id = query.id;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("https://api.audioboom.com/audio_clips/".concat(id, ".mp3")));

            case 4:
              fetchClip = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchClip.json());

            case 7:
              clip = _context.sent.body.audio_clip;
              return _context.abrupt("return", {
                clip: clip
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=podcast.js.30efb294a926d892ff0c.hot-update.js.map