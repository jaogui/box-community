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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1QkFBdUI7QUFDOUUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QztBQUNWO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFNO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUs7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQixzREFBSztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFLO0FBQzdCLG1COzs7Ozs7Ozs7QUNoQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy90YWItbmF2ZWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzP2Y4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IoYnRuQWJyaXIsIGJ0bkZlY2hhciwgY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICB0aGlzLmJ0bkFicmlyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG5BYnJpcilcclxuICAgICAgICB0aGlzLmJ0bkZlY2hhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuRmVjaGFyKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lck1vZGFsKVxyXG5cclxuICAgICAgICAvL0JpbmQgdGhpcyBhbyBcImNhbGxiYWNrXCIgcGFyYVxyXG4gICAgICAgIC8vZmF6ZXIgcmVmZXLDqm5jaWEgYW8gb2JqZXRvIGRhIGNsYXNzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCA9IHRoaXMuZXZlbnRUb2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xpcXVlRm9yYU1vZGFsID0gdGhpcy5jbGlxdWVGb3JhTW9kYWwuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9Ub2dnbGVNb2RhbFxyXG4gICAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGljaW9uYSBvIGV2ZW50byBkZSB0b2dnbGUgbm8gbW9kYWwuXHJcbiAgICBldmVudFRvZ2dsZU1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GZWNoYSBtb2RhbCBxdWFuZG8gY2xpY2EgZm9yYSBkYSBtZXNtYS5cclxuICAgIGNsaXF1ZUZvcmFNb2RhbChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRpY2lvbmEgb3MgZXZlbnRvcyBub3MgZWxlbWVudG9zIGRvIG1vZGFsLlxyXG4gICAgYWRkTW9kYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BYnJpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5idG5GZWNoYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaXF1ZUZvcmFNb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5idG5BYnJpciAmJiB0aGlzLmJ0bkZlY2hhciAmJiB0aGlzLmNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW9kYWxFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJOYXYge1xyXG4gICAgY29uc3RydWN0b3IobWVudSwgc2VjdGlvbkNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1lbnUpO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlY3Rpb25Db250ZW50KTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gJ2FjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BdGl2YSBhIHRhYiBkZSBhY29yZG8gY29tIGluZGV4IGluZGljYWRvXHJcbiAgICBhY3RpdmVUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50LmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50W2luZGV4XS5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhYk5hdkV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMudGFiTWVudS5mb3JFYWNoKChpdGVtTWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYWN0aXZlVGFiKGluZGV4KSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYk1lbnUubGVuZ3RoICYmIHRoaXMuc2VjdGlvbkNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiKDIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhYk5hdkV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFiTmF2IGZyb20gJy4vbW9kdWxlcy90YWItbmF2ZWdhdGlvbic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xyXG5cclxuLy8gY29uc3QgVGFiTmF2ID0gbmV3IFRhYk5hdignJyk7XHJcbi8vIFRhYk5hdi5pbml0KCk7XHJcblxyXG5jb25zdCB0YWJOYXYgPSBuZXcgVGFiTmF2KCcubmF2LW9wdGlvbnMgPiBsaScsICcuY29udGVudC1zdXBwb3J0ID4gc2VjdGlvbicpXHJcbnRhYk5hdi5pbml0KCk7XHJcblxyXG5jb25zdCBtb2RhbENvbmZpZyA9IG5ldyBNb2RhbCgnLmJ0bi1tb2RhbC1jb25maWcnLCAnLmNsb3NlLW1vZGFsLWNvbmZpZycsICcubW9kYWwtY29uZmlnJyk7XHJcbm1vZGFsQ29uZmlnLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsRG93bmxvYWQgPSBuZXcgTW9kYWwoJy5idG4tZG93bmxvYWQnLCAnLmNsb3NlLW1vZGFsLWRvd25sb2FkJywgJy5tb2RhbC1kb3dubG9hZCcpO1xyXG5tb2RhbERvd25sb2FkLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsVXBsb2FkID0gbmV3IE1vZGFsKCcuYnRuLXVwbG9hZCcsICcuY2xvc2UtbW9kYWwtdXBsb2FkJywgJy5tb2RhbC11cGxvYWQnKTtcclxubW9kYWxVcGxvYWQuaW5pdCgpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==