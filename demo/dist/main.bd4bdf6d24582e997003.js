"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ 569);




function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello2ww', 'webpack'], ' ');
    element.classList.add('hello');



    btn.innerHTML = 'Click me and check2 the console!';
    btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function printMe() {
    console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Another', 'module', 'loaded!'], ' '));
    console.log('I get called from print.js!');
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZDRiZGY2ZDI0NTgyZTk5NzAwMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ1U7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ1QjtBQUNSO0FBQ2YsZ0JBQWdCLGtEQUFNO0FBQ3RCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2RlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9wcmludC5qcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAvLyBsb2Rhc2jvvIjnm67liY3pgJrov4fkuIDkuKogc2NyaXB0IOW8leWFpe+8ieWvueS6juaJp+ihjOi/meS4gOihjOaYr+W/hemcgOeahFxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbzJ3dycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XHJcblxyXG5cclxuXHJcbiAgICBidG4uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBjaGVjazIgdGhlIGNvbnNvbGUhJztcclxuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuICBcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xyXG4gICAgY29uc29sZS5sb2coXy5qb2luKFsnQW5vdGhlcicsICdtb2R1bGUnLCAnbG9hZGVkISddLCAnICcpKTtcclxuICAgIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcclxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9