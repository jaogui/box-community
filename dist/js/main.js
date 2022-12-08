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
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");



// const TabNav = new TabNav('');
// TabNav.init();

const tabNav = new _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__["default"]('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-modal-config', '.close-modal', '.modal');
modalConfig.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsdUJBQXVCO0FBQzlFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDVjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBTTtBQUN6QjtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFLO0FBQzdCLG1COzs7Ozs7Ozs7QUNWQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IoYnRuQWJyaXIsIGJ0bkZlY2hhciwgY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICB0aGlzLmJ0bkFicmlyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG5BYnJpcilcclxuICAgICAgICB0aGlzLmJ0bkZlY2hhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuRmVjaGFyKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lck1vZGFsKVxyXG5cclxuXHJcbiAgICAgICAgLy9CaW5kIHRoaXMgYW8gXCJjYWxsYmFja1wiIHBhcmFcclxuICAgICAgICAvL2ZhemVyIHJlZmVyw6puY2lhIGFvIG9iamV0byBkYSBjbGFzc2VcclxuICAgICAgICB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwgPSB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsaXF1ZUZvcmFNb2RhbCA9IHRoaXMuY2xpcXVlRm9yYU1vZGFsLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vVG9nZ2xlTW9kYWxcclxuICAgIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL0FkaWNpb25hIG8gZXZlbnRvIGRlIHRvZ2dsZSBubyBtb2RhbC5cclxuICAgIGV2ZW50VG9nZ2xlTW9kYWwoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0ZlY2hhIG1vZGFsIHF1YW5kbyBjbGljYSBmb3JhIGRhIG1lc21hLlxyXG4gICAgY2xpcXVlRm9yYU1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWluZXJNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGljaW9uYSBvcyBldmVudG9zIG5vcyBlbGVtZW50b3MgZG8gbW9kYWwuXHJcbiAgICBhZGRNb2RhbEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmJ0bkFicmlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudFRvZ2dsZU1vZGFsKTtcclxuICAgICAgICB0aGlzLmJ0bkZlY2hhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpcXVlRm9yYU1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkFicmlyICYmIHRoaXMuYnRuRmVjaGFyICYmIHRoaXMuY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRNb2RhbEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYk5hdiB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZW51LCBzZWN0aW9uQ29udGVudCkge1xyXG4gICAgICAgIHRoaXMudGFiTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWVudSk7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnYWN0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICAvL0F0aXZhIGEgdGFiIGRlIGFjb3JkbyBjb20gaW5kZXggaW5kaWNhZG9cclxuICAgIGFjdGl2ZVRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnQuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnRbaW5kZXhdLmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFiTmF2RXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJNZW51LmZvckVhY2goKGl0ZW1NZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hY3RpdmVUYWIoaW5kZXgpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiTWVudS5sZW5ndGggJiYgdGhpcy5zZWN0aW9uQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiTmF2RXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYWJOYXYgZnJvbSAnLi9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kdWxlcy9tb2RhbCc7XHJcblxyXG4vLyBjb25zdCBUYWJOYXYgPSBuZXcgVGFiTmF2KCcnKTtcclxuLy8gVGFiTmF2LmluaXQoKTtcclxuXHJcbmNvbnN0IHRhYk5hdiA9IG5ldyBUYWJOYXYoJy5uYXYtb3B0aW9ucyA+IGxpJywgJy5jb250ZW50LXN1cHBvcnQgPiBzZWN0aW9uJylcclxudGFiTmF2LmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsQ29uZmlnID0gbmV3IE1vZGFsKCcuYnRuLW1vZGFsLWNvbmZpZycsICcuY2xvc2UtbW9kYWwnLCAnLm1vZGFsJyk7XHJcbm1vZGFsQ29uZmlnLmluaXQoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=