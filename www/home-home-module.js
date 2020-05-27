(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <link\n    href=\"https://fonts.googleapis.com/css?family=Josefin+Sans\"\n    rel=\"stylesheet\"\n  />\n\n  <ion-toolbar>\n    <ion-title> </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wrapper\">\n    <!-- MICROFONE -->\n    <ion-icon\n      *ngIf=\"estado == 0\"\n      (click)=\"temPermissao()\"\n      class=\"microfone\"\n      md=\"md-microphone\"\n    ></ion-icon>\n\n    <!-- OUVINDO -->\n    <div class=\"centralizarIcone\" *ngIf=\"estado == 1\">\n      <div class=\"lds-css ng-scope\">\n        <div style=\"width:100%;height:100%\" class=\"lds-ripple\">\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- respodendo -->\n\n    <div class=\"centralizarIcone\" (click)=\"estado = 0\" *ngIf=\"estado == 2\">\n      <div class=\"lds-css ng-scope\">\n        <div style=\"width:100%;height:100%\" class=\"lds-facebook\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n        <ion-card-content>\n          {{ fala }}\n        </ion-card-content>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-content {\n  display: flex;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 30px;\n  text-transform: capitalize; }\n\n.microfone {\n  font-size: 300px;\n  color: #5699d2;\n  height: 100%;\n  align-content: center;\n  justify-content: center; }\n\n.wrapper {\n  display: flex;\n  height: 100%;\n  align-content: center;\n  justify-content: center; }\n\n.centralizarIcone {\n  display: flex; }\n\n@keyframes lds-ripple {\n  0% {\n    top: 94px;\n    left: 94px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 17px;\n    left: 17px;\n    width: 154px;\n    height: 154px;\n    opacity: 0; } }\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 94px;\n    left: 94px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 17px;\n    left: 17px;\n    width: 154px;\n    height: 154px;\n    opacity: 0; } }\n\n.lds-ripple {\n  position: relative; }\n\n.lds-css {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n\n.lds-ripple div {\n  box-sizing: content-box;\n  position: absolute;\n  border-width: 6px;\n  border-style: solid;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 2.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  animation: lds-ripple 2.3s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\n\n.lds-ripple div:nth-child(1) {\n  border-color: #1d3f72; }\n\n.lds-ripple div:nth-child(2) {\n  border-color: #5699d2;\n  -webkit-animation-delay: -1.15s;\n  animation-delay: -1.15s; }\n\n.lds-ripple {\n  width: 200px !important;\n  height: 200px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px); }\n\n@keyframes lds-facebook_1 {\n  0% {\n    top: 36px;\n    height: 128px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_1 {\n  0% {\n    top: 36px;\n    height: 128px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@keyframes lds-facebook_2 {\n  0% {\n    top: 41.99999999999999px;\n    height: 116.00000000000001px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_2 {\n  0% {\n    top: 41.99999999999999px;\n    height: 116.00000000000001px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@keyframes lds-facebook_3 {\n  0% {\n    top: 48px;\n    height: 104px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n@-webkit-keyframes lds-facebook_3 {\n  0% {\n    top: 48px;\n    height: 104px; }\n  50% {\n    top: 60px;\n    height: 80px; }\n  100% {\n    top: 60px;\n    height: 80px; } }\n\n.lds-facebook {\n  position: relative; }\n\n.lds-facebook div {\n  position: absolute;\n  width: 30px; }\n\n.lds-facebook div:nth-child(1) {\n  left: 35px;\n  background: #93dbe9;\n  -webkit-animation: lds-facebook_1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  -webkit-animation-delay: -0.24s;\n  animation-delay: -0.24s; }\n\n.lds-facebook div:nth-child(2) {\n  left: 85px;\n  background: #689cc5;\n  -webkit-animation: lds-facebook_2 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_2 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  -webkit-animation-delay: -0.12s;\n  animation-delay: -0.12s; }\n\n.lds-facebook div:nth-child(3) {\n  left: 135px;\n  background: #5e6fa3;\n  -webkit-animation: lds-facebook_3 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  animation: lds-facebook_3 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite; }\n\n.lds-facebook {\n  width: 200px !important;\n  height: 200px !important;\n  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n  transform: translate(-100px, -100px) scale(1) translate(100px, 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJuYW5kYW51bmVzL0Rlc2t0b3AvSW9uaWMgQXBwIFdhdHNvbi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVUsRUFBQTtFQUVaO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVUsRUFBQSxFQUFBOztBQUdkO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVSxFQUFBLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix3RUFBd0U7RUFDeEUsZ0VBQWdFLEVBQUE7O0FBRWxFO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDZFQUE2RTtFQUM3RSxxRUFBcUUsRUFBQTs7QUFJdkU7RUFDRTtJQUNFLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFFZjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFFZjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qiw0QkFBNEIsRUFBQTtFQUU5QjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFFZjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRTtJQUNFLFNBQVM7SUFDVCxhQUFhLEVBQUE7RUFFZjtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUE7RUFFZDtJQUNFLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiw0RUFBNEU7RUFDNUUsb0VBQW9FO0VBQ3BFLCtCQUErQjtFQUMvQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDRFQUE0RTtFQUM1RSxvRUFBb0U7RUFDcEUsK0JBQStCO0VBQy9CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNEVBQTRFO0VBQzVFLG9FQUFvRSxFQUFBOztBQUV0RTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsNkVBQTZFO0VBQzdFLHFFQUFxRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbn1cclxuXHJcbi5taWNyb2ZvbmUge1xyXG4gICAgZm9udC1zaXplOiAzMDBweDtcclxuICAgIGNvbG9yOiAjNTY5OWQyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudHJhbGl6YXJJY29uZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiA5NHB4O1xyXG4gICAgICBsZWZ0OiA5NHB4O1xyXG4gICAgICB3aWR0aDogMDtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogMTdweDtcclxuICAgICAgbGVmdDogMTdweDtcclxuICAgICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1NHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogOTRweDtcclxuICAgICAgbGVmdDogOTRweDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDE3cHg7XHJcbiAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgIHdpZHRoOiAxNTRweDtcclxuICAgICAgaGVpZ2h0OiAxNTRweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxkcy1yaXBwbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubGRzLWNzc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5sZHMtcmlwcGxlIGRpdiB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLXJpcHBsZSAyLjNzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMi4zcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzFkM2Y3MjtcclxuICB9XHJcbiAgLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM1Njk5ZDI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMTVzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xNXM7XHJcbiAgfVxyXG4gIC5sZHMtcmlwcGxlIHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwcHgsIC0xMDBweCkgc2NhbGUoMSkgdHJhbnNsYXRlKDEwMHB4LCAxMDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwcHgsIC0xMDBweCkgc2NhbGUoMSkgdHJhbnNsYXRlKDEwMHB4LCAxMDBweCk7XHJcbiAgfVxyXG5cclxuLy8gICBGQUxBTkRPXHJcbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2tfMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogMzZweDtcclxuICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWZhY2Vib29rXzEge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2tfMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogNDEuOTk5OTk5OTk5OTk5OTlweDtcclxuICAgICAgaGVpZ2h0OiAxMTYuMDAwMDAwMDAwMDAwMDFweDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWZhY2Vib29rXzIge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDQxLjk5OTk5OTk5OTk5OTk5cHg7XHJcbiAgICAgIGhlaWdodDogMTE2LjAwMDAwMDAwMDAwMDAxcHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2tfMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogNDhweDtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbGRzLWZhY2Vib29rXzMge1xyXG4gICAgMCUge1xyXG4gICAgICB0b3A6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5sZHMtZmFjZWJvb2sgZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgbGVmdDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICM5M2RiZTk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbGRzLWZhY2Vib29rXzEgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2tfMSAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XHJcbiAgfVxyXG4gIC5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBsZWZ0OiA4NXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzY4OWNjNTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2tfMiAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGxkcy1mYWNlYm9va18yIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEycztcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGxlZnQ6IDEzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzVlNmZhMztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2tfMyAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IGxkcy1mYWNlYm9va18zIDEuMnMgY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1mYWNlYm9vayB7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LCAtMTAwcHgpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LCAtMTAwcHgpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _watson_provider_watson_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../watson-provider/watson.service */ "./src/app/watson-provider/watson.service.ts");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");





var HomePage = /** @class */ (function () {
    function HomePage(tts, watsonService, stt, zone) {
        this.tts = tts;
        this.watsonService = watsonService;
        this.stt = stt;
        this.zone = zone;
        this.estadoMic = true;
        this.estadoOuvindo = false;
        this.estadoRespondendo = false;
        this.fala = "";
        this.estado = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        this.funcaoInput("");
    };
    //CHECA SE TEM PERMISSAO
    HomePage.prototype.temPermissao = function () {
        var _this = this;
        //  console.log('entrou')
        this.trocarEstadoMic();
        this.stt.hasPermission().then(function (hasPermission) {
            if (!hasPermission) {
                _this.stt.requestPermission();
            }
            else {
                _this.comecarOuvir();
            }
        });
    };
    //COMECA A OUVIR A FALA
    HomePage.prototype.comecarOuvir = function () {
        var _this = this;
        this.estado = 1;
        this.trocarEstadoOuvindo();
        var options = {
            language: 'por-BRA',
            showPopup: false
        };
        this.stt.startListening(options)
            .subscribe(function (matches) { return _this.funcaoInput(matches[0]); }, function (onerror) { return console.log('error:', onerror); });
    };
    //WATSON 
    //WATSON ARMAZENA A FALA
    HomePage.prototype.funcaoInput = function (text) {
        var _this = this;
        this.fala = text;
        var body = {
            apikey: "YbXjEu6o9YbKLsfSxQmOOxapIxl77rFGVZ8WRk_nIGVF",
            workspace_id: "01dd598c-3e3b-4be9-8214-d0012c9c6259",
            url: "https://gateway.watsonplatform.net/assistant/api",
            input: text,
        };
        this.change();
        this.watsonService.postWatson(body).then(function (res) {
            console.log(res);
            _this.funcaoOutput(res.output.text[0]);
        });
    };
    //WATSON FALA
    HomePage.prototype.funcaoOutput = function (texto) {
        this.trocarEstadoRespondendo();
        this.tts.speak({
            text: texto,
            locale: "por-BRA",
            rate: 1.0
        });
    };
    //PARA DE OUVIR (IOS)
    // paraDeOuvir(){
    //   this.stt.stopListening()
    //   this.trocarEstadoRespondendo()
    // }
    HomePage.prototype.trocarEstadoMic = function () {
        this.estadoMic ? this.estadoMic = false : this.estadoMic = true;
    };
    HomePage.prototype.trocarEstadoOuvindo = function () {
        if (this.estadoMic == false) {
            this.estadoOuvindo = true;
        }
        else {
            this.estadoOuvindo = false;
        }
    };
    HomePage.prototype.trocarEstadoRespondendo = function () {
        if (this.estadoOuvindo == true) {
            this.estadoRespondendo = true;
            this.estadoOuvindo = false;
            this.estadoMic = false;
        }
        this.trocarEstadoMic();
    };
    HomePage.prototype.change = function () {
        var _this = this;
        //ATUALIZA A VIEW (TERCEIRA)
        this.zone.run(function () {
            _this.estado = 2;
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [_ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"], _watson_provider_watson_service__WEBPACK_IMPORTED_MODULE_3__["WatsonService"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map