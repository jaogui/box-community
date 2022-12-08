/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/tab-navegation.js":
/*!******************************************!*\
  !*** ./src/js/modules/tab-navegation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabNav)
/* harmony export */ });
class TabNav {
    constructor(menu, sectionContent) {
        this.tabMenu = document.querySelectorAll(menu);
        this.sectionContent = document.querySelectorAll(sectionContent);
        this.activeClass = 'active';
    }

    //Ativa a tab de acordo com index indicado
    activeTab(index) {
        this.sectionContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });

        this.sectionContent[index].classList.add(this.activeClass);
    }

    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => { this.activeTab(index) });
        });
    }

    init() {
        if (this.tabMenu.length && this.sectionContent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-navegation */ "./src/js/modules/tab-navegation.js");


// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__["default"]('.nav-options > li', '.content-support > section')
tabNav.init();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsdUJBQXVCO0FBQzlFLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDOztBQUU5QztBQUNBOztBQUVBLG1CQUFtQiwrREFBTTtBQUN6QixjOzs7Ozs7Ozs7QUNOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTmF2IHtcbiAgICBjb25zdHJ1Y3RvcihtZW51LCBzZWN0aW9uQ29udGVudCkge1xuICAgICAgICB0aGlzLnRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1lbnUpO1xuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWN0aW9uQ29udGVudCk7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvL0F0aXZhIGEgdGFiIGRlIGFjb3JkbyBjb20gaW5kZXggaW5kaWNhZG9cbiAgICBhY3RpdmVUYWIoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudC5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnRbaW5kZXhdLmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgYWRkVGFiTmF2RXZlbnQoKSB7XG4gICAgICAgIHRoaXMudGFiTWVudS5mb3JFYWNoKChpdGVtTWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFjdGl2ZVRhYihpbmRleCkgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYk1lbnUubGVuZ3RoICYmIHRoaXMuc2VjdGlvbkNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYigwKTtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiTmF2RXZlbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYWJOYXYgZnJvbSAnLi9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uJztcblxuLy8gY29uc3QgVGFiTmF2ID0gbmV3IFRhYk5hdignJyk7XG4vLyBUYWJOYXYuaW5pdCgpO1xuXG5jb25zdCB0YWJOYXYgPSBuZXcgVGFiTmF2KCcubmF2LW9wdGlvbnMgPiBsaScsICcuY29udGVudC1zdXBwb3J0ID4gc2VjdGlvbicpXG50YWJOYXYuaW5pdCgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==