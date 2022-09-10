"use strict";
self["webpackHotUpdatebuffs"]("check/check",{

/***/ "./check/filter.ts":
/*!*************************!*\
  !*** ./check/filter.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter)
/* harmony export */ });
/**
 * 生成下来选单逻辑
 */
class Filter {
  constructor() {
    const container = document.getElementById('check-container');
    if (!container) throw "找不到初始容器";
    this.checkContainer = container; // 星级下拉
    // this.checkContainer.append(this.helpCreateSelect(['5', '4', '3', '2', '1', '0'], 'starSelect'))
    // 宝可梦下拉
    // this.checkContainer.append(this.helpCreateSelect(['???'], 'pmSelect'))
  }

  helpCreateSelect(selectArray, id) {
    var selectList = document.createElement("select");
    selectList.id = id; //Create and append the options

    for (var i = 0; i < selectArray.length; i++) {
      var option = document.createElement("option");
      option.value = selectArray[i];
      option.text = selectArray[i];
      selectList.appendChild(option);
    }

    return selectList;
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc817279ecfa034a6df0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=check.dfa7d8e2bc3ed852e486.hot-update.js.map