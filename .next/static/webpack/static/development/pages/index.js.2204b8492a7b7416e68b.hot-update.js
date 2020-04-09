webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





next_router__WEBPACK_IMPORTED_MODULE_10__["Router"].events.on('routeChangeStart', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_10__["Router"].events.on('routeChangeComplete', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_10__["Router"].events.on('routeChangeError', function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
});

var Layout = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  var _super = _createSuper(Layout);

  function Layout() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      return __jsx("div", {
        className: "jsx-1457079598"
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", {
        className: "jsx-1457079598"
      }, title), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale-1",
        className: "jsx-1457079598"
      })), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        href: "/"
      }, __jsx("a", {
        className: "jsx-1457079598"
      }, __jsx("header", {
        className: "jsx-1457079598"
      }, "Podcasts"))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1323391144"
      }, "header.jsx-1457079598{color:#fff;background:#8756ca;padding:15px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCb0IsQUFHd0IsV0FDUSxtQkFDTixhQUNLLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9mYWQvRGVzYXJyb2xsby9wbGF0emkvbmV4dC5qcy9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlLTFcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8aGVhZGVyPlBvZGNhc3RzPC9oZWFkZXI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBNYWtlIGNsaWNrcyBwYXNzLXRocm91Z2ggKi9cbiAgICAgICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cbiAgICAgICAgICAge1xuICAgICAgICAgICAgLyogI25wcm9ncmVzcyAuc3Bpbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI5ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH0gKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbiAgICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1738117711"
      }, "body{margin:0;font-family:system-ui;background:white;}a{-webkit-text-decoration:none;text-decoration:none;}#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhZC9EZXNhcnJvbGxvL3BsYXR6aS9uZXh0LmpzL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDMkIsQUFHc0IsQUFLWSxBQUlELEFBSUosQUFhRixBQXVDRSxBQU1FLEFBS2UsQUFHRSxBQUtWLEFBR0UsU0F0RkwsS0EwQkosRUFaSCxBQW1ERyxFQU1wQixFQTlEQSxXQVJtQixBQWNKLEFBNkRiLENBakRVLENBb0RWLENBYkYsUUF0Q2MsRUFaTixJQWRSLEVBR0EsQUFZUyxJQVlLLEdBVkQsU0FXNEIsRUFWNUIsV0FDYixFQStERSxNQUdBLGlCQXhEVSxVQUUwQyxtREFDSiwrQ0FDSiw2SUFDOUMiLCJmaWxlIjoiL2hvbWUvZmFkL0Rlc2Fycm9sbG8vcGxhdHppL25leHQuanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKVxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZS0xXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXG4gICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI5ZDtcblxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogRmFuY3kgYmx1ciBlZmZlY3QgKi9cbiAgICAgICAgICAjbnByb2dyZXNzIC5wZWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzI5ZCwgMCAwIDVweCAjMjlkO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFJlbW92ZSB0aGVzZSB0byBnZXQgcmlkIG9mIHRoZSBzcGlubmVyICovXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgIC8qICNucHJvZ3Jlc3MgLnNwaW5uZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMjlkO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9ICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXG4gICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5wcm9ncmVzcy1zcGlubmVyIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/fad/Desarrollo/platzi/next.js/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.2204b8492a7b7416e68b.hot-update.js.map