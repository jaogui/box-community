/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/file-size-check.js":
/*!*******************************************!*\
  !*** ./src/js/modules/file-size-check.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileEdit)
/* harmony export */ });
class FileEdit {
    constructor(selectFile, menssageFile) {
        this.selectFile = document.querySelector(selectFile);
        this.menssageFile = document.querySelector(menssageFile);
    }

    verifySize() {
        this.selectFile.addEventListener('change', () => {
            if (this.selectFile.files[0].size > (1024 * 1024 * 2)) {
                this.menssageFile.innerHTML = "Arquivo excedeu tamanho permitido, suportamos até 2 MB.";
                this.menssageFile.style.color = "#FF1E0F";
            } else {
                this.menssageFile.innerHTML = ("Arquivo adicionado com sucesso!" + "</br> Tipo de arquivo: " + this.selectFile.files[0].type);
                this.menssageFile.style.color = "#F7E752";

            }
        });
    }

    init() {
        this.verifySize();
        return this;
    }

}

/***/ }),

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
/* harmony import */ var _modules_file_size_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/file-size-check */ "./src/js/modules/file-size-check.js");





const tabNav = new _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__["default"]('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-modal-config', '.close-modal-config', '.modal-config');
modalConfig.init();

const modalDownload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-download', '.close-modal-download', '.modal-download');
modalDownload.init();

const modalUpload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-upload', '.close-modal-upload', '.modal-upload');
modalUpload.init();

const checkSizeUpload = new _modules_file_size_check__WEBPACK_IMPORTED_MODULE_2__["default"]('#file-upload', '.response-file');
checkSizeUpload.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHVCQUF1QjtBQUM5RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNWO0FBQ2E7QUFDakQ7QUFDQTtBQUNBLG1CQUFtQiwrREFBTTtBQUN6QjtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFLO0FBQzdCO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQUs7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QixzREFBSztBQUM3QjtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFRO0FBQ3BDLHVCOzs7Ozs7Ozs7QUNsQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy9maWxlLXNpemUtY2hlY2suanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21vZHVsZXMvdGFiLW5hdmVnYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz9mODNhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVFZGl0IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdEZpbGUsIG1lbnNzYWdlRmlsZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0RmlsZSk7XHJcbiAgICAgICAgdGhpcy5tZW5zc2FnZUZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnNzYWdlRmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmVyaWZ5U2l6ZSgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RGaWxlLmZpbGVzWzBdLnNpemUgPiAoMTAyNCAqIDEwMjQgKiAyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW5zc2FnZUZpbGUuaW5uZXJIVE1MID0gXCJBcnF1aXZvIGV4Y2VkZXUgdGFtYW5obyBwZXJtaXRpZG8sIHN1cG9ydGFtb3MgYXTDqSAyIE1CLlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW5zc2FnZUZpbGUuc3R5bGUuY29sb3IgPSBcIiNGRjFFMEZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVuc3NhZ2VGaWxlLmlubmVySFRNTCA9IChcIkFycXVpdm8gYWRpY2lvbmFkbyBjb20gc3VjZXNzbyFcIiArIFwiPC9icj4gVGlwbyBkZSBhcnF1aXZvOiBcIiArIHRoaXMuc2VsZWN0RmlsZS5maWxlc1swXS50eXBlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVuc3NhZ2VGaWxlLnN0eWxlLmNvbG9yID0gXCIjRjdFNzUyXCI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnZlcmlmeVNpemUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihidG5BYnJpciwgYnRuRmVjaGFyLCBjb250YWluZXJNb2RhbCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWJyaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bkFicmlyKVxyXG4gICAgICAgIHRoaXMuYnRuRmVjaGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG5GZWNoYXIpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyTW9kYWwpXHJcblxyXG4gICAgICAgIC8vQmluZCB0aGlzIGFvIFwiY2FsbGJhY2tcIiBwYXJhXHJcbiAgICAgICAgLy9mYXplciByZWZlcsOqbmNpYSBhbyBvYmpldG8gZGEgY2xhc3NlXHJcbiAgICAgICAgdGhpcy5ldmVudFRvZ2dsZU1vZGFsID0gdGhpcy5ldmVudFRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbGlxdWVGb3JhTW9kYWwgPSB0aGlzLmNsaXF1ZUZvcmFNb2RhbC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1RvZ2dsZU1vZGFsXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FkaWNpb25hIG8gZXZlbnRvIGRlIHRvZ2dsZSBubyBtb2RhbC5cclxuICAgIGV2ZW50VG9nZ2xlTW9kYWwoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0ZlY2hhIG1vZGFsIHF1YW5kbyBjbGljYSBmb3JhIGRhIG1lc21hLlxyXG4gICAgY2xpcXVlRm9yYU1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5jb250YWluZXJNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGljaW9uYSBvcyBldmVudG9zIG5vcyBlbGVtZW50b3MgZG8gbW9kYWwuXHJcbiAgICBhZGRNb2RhbEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmJ0bkFicmlyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudFRvZ2dsZU1vZGFsKTtcclxuICAgICAgICB0aGlzLmJ0bkZlY2hhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpcXVlRm9yYU1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJ0bkFicmlyICYmIHRoaXMuYnRuRmVjaGFyICYmIHRoaXMuY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRNb2RhbEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYk5hdiB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZW51LCBzZWN0aW9uQ29udGVudCkge1xyXG4gICAgICAgIHRoaXMudGFiTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWVudSk7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VjdGlvbkNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSAnYWN0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICAvL0F0aXZhIGEgdGFiIGRlIGFjb3JkbyBjb20gaW5kZXggaW5kaWNhZG9cclxuICAgIGFjdGl2ZVRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnQuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnRbaW5kZXhdLmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFiTmF2RXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJNZW51LmZvckVhY2goKGl0ZW1NZW51LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5hY3RpdmVUYWIoaW5kZXgpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFiTWVudS5sZW5ndGggJiYgdGhpcy5zZWN0aW9uQ29udGVudC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIoMik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVGFiTmF2RXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYWJOYXYgZnJvbSAnLi9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kdWxlcy9tb2RhbCc7XHJcbmltcG9ydCBGaWxlRWRpdCBmcm9tICcuL21vZHVsZXMvZmlsZS1zaXplLWNoZWNrJztcclxuXHJcblxyXG5jb25zdCB0YWJOYXYgPSBuZXcgVGFiTmF2KCcubmF2LW9wdGlvbnMgPiBsaScsICcuY29udGVudC1zdXBwb3J0ID4gc2VjdGlvbicpXHJcbnRhYk5hdi5pbml0KCk7XHJcblxyXG5jb25zdCBtb2RhbENvbmZpZyA9IG5ldyBNb2RhbCgnLmJ0bi1tb2RhbC1jb25maWcnLCAnLmNsb3NlLW1vZGFsLWNvbmZpZycsICcubW9kYWwtY29uZmlnJyk7XHJcbm1vZGFsQ29uZmlnLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsRG93bmxvYWQgPSBuZXcgTW9kYWwoJy5idG4tZG93bmxvYWQnLCAnLmNsb3NlLW1vZGFsLWRvd25sb2FkJywgJy5tb2RhbC1kb3dubG9hZCcpO1xyXG5tb2RhbERvd25sb2FkLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsVXBsb2FkID0gbmV3IE1vZGFsKCcuYnRuLXVwbG9hZCcsICcuY2xvc2UtbW9kYWwtdXBsb2FkJywgJy5tb2RhbC11cGxvYWQnKTtcclxubW9kYWxVcGxvYWQuaW5pdCgpO1xyXG5cclxuY29uc3QgY2hlY2tTaXplVXBsb2FkID0gbmV3IEZpbGVFZGl0KCcjZmlsZS11cGxvYWQnLCAnLnJlc3BvbnNlLWZpbGUnKTtcclxuY2hlY2tTaXplVXBsb2FkLmluaXQoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=