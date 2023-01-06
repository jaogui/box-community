/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
    constructor(btnAbrir, btnFechar, containerModal) {
        this.btnAbrir = document.querySelector(btnAbrir)
        this.btnFechar = document.querySelector(btnFechar)
        this.containerModal = document.querySelector(containerModal)


        //Bind this ao "callback" para
        //fazer referência ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);

    }

    //ToggleModal
    toggleModal() {
        this.containerModal.classList.toggle('modal--active');
    }


    //Adiciona o evento de toggle no modal.
    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    //Fecha modal quando clica fora da mesma.
    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event);
        }
    }

    //Adiciona os eventos nos elementos do modal.
    addModalEvents() {
        this.btnAbrir.addEventListener('click', this.eventToggleModal);
        this.btnFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.btnAbrir && this.btnFechar && this.containerModal) {
            this.addModalEvents();
            console.log(this.btnFechar)
        }
        return this;
    }
}

/***/ }),

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
            this.activeTab(2);
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
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");



// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__["default"]('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-modal-config', '.close-modal-config', '.modal-config');
modalConfig.init();

const modalDownload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-download', '.close-modal-download', '.modal-download');
modalDownload.init();

const modalUpload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-upload', '.close-modal-upload', '.modal-upload');
modalUpload.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1QkFBdUI7QUFDOUUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNWO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFNO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUs7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQixzREFBSztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFLO0FBQzdCLG1COzs7Ozs7Ozs7QUNoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy90YWItbmF2ZWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ0bkFicmlyLCBidG5GZWNoYXIsIGNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5idG5BYnJpciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuQWJyaXIpXHJcbiAgICAgICAgdGhpcy5idG5GZWNoYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bkZlY2hhcilcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJNb2RhbClcclxuXHJcblxyXG4gICAgICAgIC8vQmluZCB0aGlzIGFvIFwiY2FsbGJhY2tcIiBwYXJhXHJcbiAgICAgICAgLy9mYXplciByZWZlcsOqbmNpYSBhbyBvYmpldG8gZGEgY2xhc3NlXHJcbiAgICAgICAgdGhpcy5ldmVudFRvZ2dsZU1vZGFsID0gdGhpcy5ldmVudFRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGlxdWVGb3JhTW9kYWwgPSB0aGlzLmNsaXF1ZUZvcmFNb2RhbC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1RvZ2dsZU1vZGFsXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9BZGljaW9uYSBvIGV2ZW50byBkZSB0b2dnbGUgbm8gbW9kYWwuXHJcbiAgICBldmVudFRvZ2dsZU1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GZWNoYSBtb2RhbCBxdWFuZG8gY2xpY2EgZm9yYSBkYSBtZXNtYS5cclxuICAgIGNsaXF1ZUZvcmFNb2RhbChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRpY2lvbmEgb3MgZXZlbnRvcyBub3MgZWxlbWVudG9zIGRvIG1vZGFsLlxyXG4gICAgYWRkTW9kYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BYnJpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5idG5GZWNoYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaXF1ZUZvcmFNb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5idG5BYnJpciAmJiB0aGlzLmJ0bkZlY2hhciAmJiB0aGlzLmNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW9kYWxFdmVudHMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5idG5GZWNoYXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTmF2IHtcclxuICAgIGNvbnN0cnVjdG9yKG1lbnUsIHNlY3Rpb25Db250ZW50KSB7XHJcbiAgICAgICAgdGhpcy50YWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtZW51KTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWN0aW9uQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9ICdhY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQXRpdmEgYSB0YWIgZGUgYWNvcmRvIGNvbSBpbmRleCBpbmRpY2Fkb1xyXG4gICAgYWN0aXZlVGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudC5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudFtpbmRleF0uY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWJOYXZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnRhYk1lbnUuZm9yRWFjaCgoaXRlbU1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFjdGl2ZVRhYihpbmRleCkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJNZW51Lmxlbmd0aCAmJiB0aGlzLnNlY3Rpb25Db250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYigyKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYWJOYXZFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhYk5hdiBmcm9tICcuL21vZHVsZXMvdGFiLW5hdmVnYXRpb24nO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcclxuXHJcbi8vIGNvbnN0IFRhYk5hdiA9IG5ldyBUYWJOYXYoJycpO1xyXG4vLyBUYWJOYXYuaW5pdCgpO1xyXG5cclxuY29uc3QgdGFiTmF2ID0gbmV3IFRhYk5hdignLm5hdi1vcHRpb25zID4gbGknLCAnLmNvbnRlbnQtc3VwcG9ydCA+IHNlY3Rpb24nKVxyXG50YWJOYXYuaW5pdCgpO1xyXG5cclxuY29uc3QgbW9kYWxDb25maWcgPSBuZXcgTW9kYWwoJy5idG4tbW9kYWwtY29uZmlnJywgJy5jbG9zZS1tb2RhbC1jb25maWcnLCAnLm1vZGFsLWNvbmZpZycpO1xyXG5tb2RhbENvbmZpZy5pbml0KCk7XHJcblxyXG5jb25zdCBtb2RhbERvd25sb2FkID0gbmV3IE1vZGFsKCcuYnRuLWRvd25sb2FkJywgJy5jbG9zZS1tb2RhbC1kb3dubG9hZCcsICcubW9kYWwtZG93bmxvYWQnKTtcclxubW9kYWxEb3dubG9hZC5pbml0KCk7XHJcblxyXG5jb25zdCBtb2RhbFVwbG9hZCA9IG5ldyBNb2RhbCgnLmJ0bi11cGxvYWQnLCAnLmNsb3NlLW1vZGFsLXVwbG9hZCcsICcubW9kYWwtdXBsb2FkJyk7XHJcbm1vZGFsVXBsb2FkLmluaXQoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=