(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app/app.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app/app.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-container\">\n  <left-nav-bar></left-nav-bar>\n  <div>\n      <div class=\"top-nav\">\n        <a routerLink=\"/people\"><mat-icon [ngStyle]=\"{'color':'#0000008a'}\">notifications</mat-icon></a>\n        <a ><mat-icon [ngStyle]=\"{'color':'#0000008a'}\">account_box</mat-icon></a>\n        <a href=\"\"><mat-icon [ngStyle]=\"{'color':'#0000008a'}\">live_help</mat-icon></a>\n        <a routerLink=\"/settings\"><mat-icon [ngStyle]=\"{'color':'#0000008a'}\">settings_applications</mat-icon></a>\n        <a href=\"\"><mat-icon [ngStyle]=\"{'color':'#0000008a'}\">power_settings_new</mat-icon></a>\n      </div>\n      <div class=\"router-main\">\n        <router-outlet ></router-outlet>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/left-nav-bar/left-nav-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/left-nav-bar/left-nav-bar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu class=\"mat-typography\">\n  <div class=\"logo\"></div>\n  <ul>\n      <li><a href=\"#\" routerLink=\"/home\"><mat-icon [ngStyle]=\"{'color':'white'}\">home</mat-icon><span>asdsda</span></a></li>\n      <li><a href=\"#\" routerLink=\"/people\"><mat-icon [ngStyle]=\"{'color':'white'}\">people</mat-icon><span>People</span></a></li>\n      <li><a href=\"#\" routerLink=\"/expenses\"><mat-icon [ngStyle]=\"{'color':'white'}\">monetization_on</mat-icon><span>Expenses</span></a></li>\n      <li><a href=\"#\" routerLink=\"/invoices\"><mat-icon [ngStyle]=\"{'color':'white'}\">receipt</mat-icon><span>Invoices</span></a></li>\n      <li><a href=\"#\" routerLink=\"/reports\"><mat-icon [ngStyle]=\"{'color':'white'}\">timeline</mat-icon><span>Reports</span></a></li>\n  </ul>\n</menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/people/people.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/people/people.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  people works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-company/settings-company.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-company/settings-company.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>COMPANY PROFILE</h2>\n  <p>This information is used for invoicing, emails, and more. Make sure it's correct!</p>\n  <form class=\"row\" [formGroup]=\"companyForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <mat-form-field class=\"col col3\">\n      <input matInput formControlName=\"name\" tabindex=\"1\" placeholder=\"Company name\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n      <mat-label>Company type</mat-label>\n      <mat-select tabindex=\"2\" formControlName=\"type\">\n        <mat-option value=\"ltd\">Ltd.company</mat-option>\n        <mat-option value=\"trader\">Sole Trader</mat-option>\n        <mat-option value=\"partnership\">Partnership</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <mat-label>Industry</mat-label>\n      <mat-select tabindex=\"3\" formControlName=\"industry\">\n        <mat-option *ngFor=\"let industry of industries\" [value]=\"industry.id\">{{industry.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <mat-label>Base Currency</mat-label>\n      <mat-select tabindex=\"4\" formControlName=\"currency\">\n        <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.id\">{{currency.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <mat-label>Country</mat-label>\n      <mat-select tabindex=\"5\" formControlName=\"country\">\n        <mat-option *ngFor=\"let country of countries\" [value]=\"country.id\">{{country.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <mat-label>Address</mat-label>\n          <input matInput tabindex=\"6\" placeholder=\"Address Line 1\" formControlName=\"address1\">\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <input matInput tabindex=\"7\" type=\"text\" placeholder=\"Address Line 2\" formControlName=\"address1\" >\n    </mat-form-field>\n    <mat-form-field class=\"col col2\">\n      <input matInput tabindex=\"8\" placeholder=\"City\" formControlName=\"city\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n      <input matInput tabindex=\"9\" placeholder=\"Province\" formControlName=\"province\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n      <input matInput formControlName=\"postalCode\" tabindex=\"10\" placeholder=\"Postal Code\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Email</mat-label>\n      <input matInput formControlName=\"email\" type=\"email\" tabindex=\"11\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Business Phone</mat-label>\n      <input matInput formControlName=\"workPhone\" tabindex=\"12\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Mobile Phone</mat-label>\n      <input matInput formControlName=\"mobilePhone\" tabindex=\"12\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Fax</mat-label>\n      <input matInput formControlName=\"fax\" tabindex=\"12\">\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Time Zone</mat-label>\n      <mat-select formControlName=\"timezone\" tabindex=\"12\">\n          <mat-option *ngFor=\"let timezone of timezones\" [value]=\"timezone.id\">{{timezone.region}} {{timezone.gmt}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"col col3\">\n        <mat-label>Company URL</mat-label>\n      <input matInput formControlName=\"website\" tabindex=\"12\" placeholder=\"http://\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!companyForm.valid\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-email/settings-email.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-email/settings-email.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-email works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-logo/settings-logo.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-logo/settings-logo.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-logo works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-misc/settings-misc.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-misc/settings-misc.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-misc works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-permission/settings-permission.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-permission/settings-permission.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-permission works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-taxes/settings-taxes.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-taxes/settings-taxes.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-taxes works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings-template/settings-template.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings-template/settings-template.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings-template works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link [routerLink]=\"['company']\">Company</a>\n    <a mat-tab-link [routerLink]=\"['taxes']\">Taxes</a>\n    <a mat-tab-link [routerLink]=\"['logo']\">Logo&Colors</a>\n    <a mat-tab-link [routerLink]=\"['template']\">Templates</a>\n    <a mat-tab-link [routerLink]=\"['email']\">Emails</a>\n    <a mat-tab-link [routerLink]=\"['permission']\">Permissions</a>\n    <a mat-tab-link [routerLink]=\"['misc']\">Misc</a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app-load.module.ts":
/*!************************************!*\
  !*** ./src/app/app-load.module.ts ***!
  \************************************/
/*! exports provided: Settings, get_settings, AppLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_settings", function() { return get_settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadModule", function() { return AppLoadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_app_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app-load.service */ "./src/app/services/app-load.service.ts");




class Settings {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
}
Settings.ctorParameters = () => [
    { type: String },
    { type: String }
];
function get_settings(appLoadService) {
    return () => appLoadService.getSettings();
}
let AppLoadModule = class AppLoadModule {
};
AppLoadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [
            _services_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"],
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useValue: get_settings, deps: [_services_app_load_service__WEBPACK_IMPORTED_MODULE_3__["AppLoadService"]], multi: true }
        ]
    })
], AppLoadModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_settings_company_settings_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings-company/settings-company.component */ "./src/app/components/settings-company/settings-company.component.ts");
/* harmony import */ var _components_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings-email/settings-email.component */ "./src/app/components/settings-email/settings-email.component.ts");
/* harmony import */ var _components_settings_logo_settings_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings-logo/settings-logo.component */ "./src/app/components/settings-logo/settings-logo.component.ts");
/* harmony import */ var _components_settings_taxes_settings_taxes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings-taxes/settings-taxes.component */ "./src/app/components/settings-taxes/settings-taxes.component.ts");
/* harmony import */ var _components_settings_misc_settings_misc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/settings-misc/settings-misc.component */ "./src/app/components/settings-misc/settings-misc.component.ts");
/* harmony import */ var _components_settings_permission_settings_permission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/settings-permission/settings-permission.component */ "./src/app/components/settings-permission/settings-permission.component.ts");
/* harmony import */ var _components_settings_template_settings_template_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/settings-template/settings-template.component */ "./src/app/components/settings-template/settings-template.component.ts");














const routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'people', component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"], pathMatch: 'full' },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], pathMatch: 'prefix',
        children: [
            { path: 'company', component: _components_settings_company_settings_company_component__WEBPACK_IMPORTED_MODULE_7__["SettingsCompanyComponent"], pathMatch: 'full' },
            { path: 'taxes', component: _components_settings_taxes_settings_taxes_component__WEBPACK_IMPORTED_MODULE_10__["SettingsTaxesComponent"], pathMatch: 'full' },
            { path: 'email', component: _components_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_8__["SettingsEmailComponent"], pathMatch: 'full' },
            { path: 'logo', component: _components_settings_logo_settings_logo_component__WEBPACK_IMPORTED_MODULE_9__["SettingsLogoComponent"], pathMatch: 'full' },
            { path: 'misc', component: _components_settings_misc_settings_misc_component__WEBPACK_IMPORTED_MODULE_11__["SettingsMiscComponent"], pathMatch: 'full' },
            { path: 'permission', component: _components_settings_permission_settings_permission_component__WEBPACK_IMPORTED_MODULE_12__["SettingsPermissionComponent"], pathMatch: 'full' },
            { path: 'template', component: _components_settings_template_settings_template_component__WEBPACK_IMPORTED_MODULE_13__["SettingsTemplateComponent"], pathMatch: 'full' },
            { path: '', redirectTo: 'company', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_load_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-load.module */ "./src/app/app-load.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_left_nav_bar_left_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/left-nav-bar/left-nav-bar.component */ "./src/app/components/left-nav-bar/left-nav-bar.component.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/people/people.component */ "./src/app/components/people/people.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_settings_company_settings_company_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/settings-company/settings-company.component */ "./src/app/components/settings-company/settings-company.component.ts");
/* harmony import */ var _components_settings_taxes_settings_taxes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/settings-taxes/settings-taxes.component */ "./src/app/components/settings-taxes/settings-taxes.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_settings_logo_settings_logo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/settings-logo/settings-logo.component */ "./src/app/components/settings-logo/settings-logo.component.ts");
/* harmony import */ var _components_settings_template_settings_template_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/settings-template/settings-template.component */ "./src/app/components/settings-template/settings-template.component.ts");
/* harmony import */ var _components_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/settings-email/settings-email.component */ "./src/app/components/settings-email/settings-email.component.ts");
/* harmony import */ var _components_settings_permission_settings_permission_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/settings-permission/settings-permission.component */ "./src/app/components/settings-permission/settings-permission.component.ts");
/* harmony import */ var _components_settings_misc_settings_misc_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/settings-misc/settings-misc.component */ "./src/app/components/settings-misc/settings-misc.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _components_left_nav_bar_left_nav_bar_component__WEBPACK_IMPORTED_MODULE_17__["LeftNavBarComponent"],
            _components_people_people_component__WEBPACK_IMPORTED_MODULE_18__["PeopleComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
            _components_settings_company_settings_company_component__WEBPACK_IMPORTED_MODULE_20__["SettingsCompanyComponent"],
            _components_settings_taxes_settings_taxes_component__WEBPACK_IMPORTED_MODULE_21__["SettingsTaxesComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"],
            _components_settings_logo_settings_logo_component__WEBPACK_IMPORTED_MODULE_23__["SettingsLogoComponent"],
            _components_settings_template_settings_template_component__WEBPACK_IMPORTED_MODULE_24__["SettingsTemplateComponent"],
            _components_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_25__["SettingsEmailComponent"],
            _components_settings_permission_settings_permission_component__WEBPACK_IMPORTED_MODULE_26__["SettingsPermissionComponent"],
            _components_settings_misc_settings_misc_component__WEBPACK_IMPORTED_MODULE_27__["SettingsMiscComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _app_load_module__WEBPACK_IMPORTED_MODULE_8__["AppLoadModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
        ],
        providers: [
            _services_settings_service__WEBPACK_IMPORTED_MODULE_28__["SettingsService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }
        ],
        bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app/app.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-nav {\n  display: flex;\n  justify-content: flex-end;\n  height: 60px;\n  background-color: #c1d5ea; }\n  .top-nav a {\n    flex: 0 0 50px;\n    display: flex;\n    align-items: center;\n    text-decoration: none; }\n  .top-nav a mat-icon {\n      font-size: 32px;\n      height: 32px;\n      width: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1eC9wcm9qZWN0cy9vcmdhbmljLXdvcmxkL3dlYmFwcC9zcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0VBSjdCO0lBTVEsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCLEVBQUE7RUFUN0I7TUFXWSxlQUFlO01BQ2YsWUFBWTtNQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWQ1ZWE7XG4gICAgYSB7XG4gICAgICAgIGZsZXg6IDAgMCA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICB9XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'webapp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/left-nav-bar/left-nav-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/left-nav-bar/left-nav-bar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "menu {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  width: 60px;\n  transition: width 500ms ease-in-out;\n  -webkit-transition: width 500ms ease-in-out;\n  -moz-transition: width 500ms ease-in-out;\n  -o-transition: width 500ms ease-in-out; }\n  menu:hover {\n    width: 200px; }\n  menu:hover > ul a span {\n      opacity: 1; }\n  menu div.logo {\n    height: 60px;\n    background: rgba(0, 0, 0, 0.87) url(\"http://angular-material.fusetheme.com/assets/images/logos/fuse.svg\") center/contain no-repeat; }\n  menu > ul {\n    background-color: #2d323e;\n    margin: 0;\n    padding: 0;\n    height: calc(100vh - 60px);\n    overflow: hidden; }\n  menu > ul a {\n      display: flex;\n      width: 200px;\n      color: #ffffff;\n      text-decoration: none;\n      padding: 10px 0;\n      line-height: 26px; }\n  menu > ul a mat-icon {\n        margin: 0 18px; }\n  menu > ul a span {\n        opacity: .2; }\n  menu > ul a:hover {\n        opacity: .7;\n        background-color: #20242c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1eC9wcm9qZWN0cy9vcmdhbmljLXdvcmxkL3dlYmFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGVmdC1uYXYtYmFyL2xlZnQtbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxzQ0FBc0MsRUFBQTtFQVIxQztJQVVRLFlBQVksRUFBQTtFQVZwQjtNQVlZLFVBQVUsRUFBQTtFQVp0QjtJQWdCUSxZQWxCUTtJQW1CUixrSUFBZ0ksRUFBQTtFQWpCeEk7SUFvQlEseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGdCQUFnQixFQUFBO0VBeEJ4QjtNQTBCWSxhQUFhO01BQ2IsWUFBWTtNQUNaLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBL0I3QjtRQWlDZ0IsY0FBYyxFQUFBO0VBakM5QjtRQW9DZSxXQUFXLEVBQUE7RUFwQzFCO1FBdUNnQixXQUFXO1FBQ1gseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlZnQtbmF2LWJhci9sZWZ0LW5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmF2LXdpZHRoOiA2MHB4O1xuXG5tZW51IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXIge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgID4gdWwgYSBzcGFuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2LmxvZ28geyAgXG4gICAgICAgIGhlaWdodDogJG5hdi13aWR0aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuODcpIHVybCgnaHR0cDovL2FuZ3VsYXItbWF0ZXJpYWwuZnVzZXRoZW1lLmNvbS9hc3NldHMvaW1hZ2VzL2xvZ29zL2Z1c2Uuc3ZnJykgY2VudGVyIC8gY29udGFpbiBuby1yZXBlYXQ7XG4gICAgfVxuICAgID4gdWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjNlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgbWF0LWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICBvcGFjaXR5OiAuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDI0MmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/left-nav-bar/left-nav-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/left-nav-bar/left-nav-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeftNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavBarComponent", function() { return LeftNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LeftNavBarComponent = class LeftNavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
LeftNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'left-nav-bar',
        template: __webpack_require__(/*! raw-loader!./left-nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/left-nav-bar/left-nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./left-nav-bar.component.scss */ "./src/app/components/left-nav-bar/left-nav-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LeftNavBarComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/people/people.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/people/people.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/people/people.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/people/people.component.ts ***!
  \*******************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PeopleComponent = class PeopleComponent {
    constructor() { }
    ngOnInit() {
    }
};
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'people',
        template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/people/people.component.html"),
        styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/components/people/people.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PeopleComponent);



/***/ }),

/***/ "./src/app/components/settings-company/settings-company.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/settings-company/settings-company.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtY29tcGFueS9zZXR0aW5ncy1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-company/settings-company.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/settings-company/settings-company.component.ts ***!
  \***************************************************************************/
/*! exports provided: SettingsCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsCompanyComponent", function() { return SettingsCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");




let SettingsCompanyComponent = class SettingsCompanyComponent {
    constructor(settingsService, fb) {
        settingsService.getCompanyTypes().subscribe((data) => {
            this.industries = data;
        });
        settingsService.getCurrencies().subscribe((data) => {
            this.currencies = data;
        });
        settingsService.getCountries().subscribe((data) => {
            this.countries = data;
        });
        settingsService.getTimezones().subscribe((data) => {
            this.timezones = data;
        });
        this._fb = fb;
        this.createForm();
    }
    createForm() {
        //form control name should match with User class property name
        this.companyForm = this._fb.group({
            name: ['fffff', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: '',
            industry: '',
            currency: '',
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address1: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            workPhone: '',
            mobilePhone: '',
            fax: '',
            timezone: '',
            website: ''
        });
    }
    ngOnInit() { }
    onSubmit() {
        console.log(this.companyForm.value);
    }
};
SettingsCompanyComponent.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SettingsCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-company',
        template: __webpack_require__(/*! raw-loader!./settings-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-company/settings-company.component.html"),
        styles: [__webpack_require__(/*! ./settings-company.component.scss */ "./src/app/components/settings-company/settings-company.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], SettingsCompanyComponent);



/***/ }),

/***/ "./src/app/components/settings-email/settings-email.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings-email/settings-email.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtZW1haWwvc2V0dGluZ3MtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings-email/settings-email.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-email/settings-email.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEmailComponent", function() { return SettingsEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsEmailComponent = class SettingsEmailComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-email',
        template: __webpack_require__(/*! raw-loader!./settings-email.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-email/settings-email.component.html"),
        styles: [__webpack_require__(/*! ./settings-email.component.scss */ "./src/app/components/settings-email/settings-email.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsEmailComponent);



/***/ }),

/***/ "./src/app/components/settings-logo/settings-logo.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-logo/settings-logo.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtbG9nby9zZXR0aW5ncy1sb2dvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-logo/settings-logo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings-logo/settings-logo.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsLogoComponent", function() { return SettingsLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsLogoComponent = class SettingsLogoComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-logo',
        template: __webpack_require__(/*! raw-loader!./settings-logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-logo/settings-logo.component.html"),
        styles: [__webpack_require__(/*! ./settings-logo.component.scss */ "./src/app/components/settings-logo/settings-logo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsLogoComponent);



/***/ }),

/***/ "./src/app/components/settings-misc/settings-misc.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-misc/settings-misc.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtbWlzYy9zZXR0aW5ncy1taXNjLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-misc/settings-misc.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings-misc/settings-misc.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsMiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsMiscComponent", function() { return SettingsMiscComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsMiscComponent = class SettingsMiscComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsMiscComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-misc',
        template: __webpack_require__(/*! raw-loader!./settings-misc.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-misc/settings-misc.component.html"),
        styles: [__webpack_require__(/*! ./settings-misc.component.scss */ "./src/app/components/settings-misc/settings-misc.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsMiscComponent);



/***/ }),

/***/ "./src/app/components/settings-permission/settings-permission.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/settings-permission/settings-permission.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtcGVybWlzc2lvbi9zZXR0aW5ncy1wZXJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/settings-permission/settings-permission.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/settings-permission/settings-permission.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SettingsPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPermissionComponent", function() { return SettingsPermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsPermissionComponent = class SettingsPermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-permission',
        template: __webpack_require__(/*! raw-loader!./settings-permission.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-permission/settings-permission.component.html"),
        styles: [__webpack_require__(/*! ./settings-permission.component.scss */ "./src/app/components/settings-permission/settings-permission.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsPermissionComponent);



/***/ }),

/***/ "./src/app/components/settings-taxes/settings-taxes.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/settings-taxes/settings-taxes.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtdGF4ZXMvc2V0dGluZ3MtdGF4ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings-taxes/settings-taxes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/settings-taxes/settings-taxes.component.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsTaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsTaxesComponent", function() { return SettingsTaxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsTaxesComponent = class SettingsTaxesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsTaxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-taxes',
        template: __webpack_require__(/*! raw-loader!./settings-taxes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-taxes/settings-taxes.component.html"),
        styles: [__webpack_require__(/*! ./settings-taxes.component.scss */ "./src/app/components/settings-taxes/settings-taxes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsTaxesComponent);



/***/ }),

/***/ "./src/app/components/settings-template/settings-template.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings-template/settings-template.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtdGVtcGxhdGUvc2V0dGluZ3MtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings-template/settings-template.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/settings-template/settings-template.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingsTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsTemplateComponent", function() { return SettingsTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsTemplateComponent = class SettingsTemplateComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings-template',
        template: __webpack_require__(/*! raw-loader!./settings-template.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings-template/settings-template.component.html"),
        styles: [__webpack_require__(/*! ./settings-template.component.scss */ "./src/app/components/settings-template/settings-template.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsTemplateComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-nav-bar {\n  border-bottom: 1px solid #fff; }\n  .mat-tab-nav-bar a {\n    color: #fff; }\n  .mat-tab-nav-bar .mat-tab-link.cdk-mouse-focused {\n    border-bottom: 3px solid #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1eC9wcm9qZWN0cy9vcmdhbmljLXdvcmxkL3dlYmFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSw2QkFBNkIsRUFBQTtFQURqQztJQUdRLFdBQVcsRUFBQTtFQUhuQjtJQU9ZLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYXQtdGFiLWxpbmsge1xuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAmLmNkay1mb2N1c2VkIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbi8vICAgICB9XG4vLyB9XG5cbi5tYXQtdGFiLW5hdi1iYXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLm1hdC10YWItbGluayB7XG4gICAgICAgICYuY2RrLW1vdXNlLWZvY3VzZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/services/app-load.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/app-load.service.ts ***!
  \**********************************************/
/*! exports provided: AppLoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoadService", function() { return AppLoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppLoadService = class AppLoadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getSettings() {
        console.log(`getSettings:: before http.get call`);
        const promise = this.httpClient.get('init')
            .toPromise()
            .then(settings => {
            console.log(`Settings from API: `, settings);
            //APP_SETTINGS.connectionString = settings[0].value;
            //APP_SETTINGS.defaultImageUrl = settings[1].value;
            return settings;
        });
        return promise;
    }
};
AppLoadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppLoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppLoadService);



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SettingsService = class SettingsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiPath = 'https://localhost:8443/api/';
    }
    getCompanyTypes() { return this.httpClient.get(`${this.apiPath}industry`); }
    ;
    getCurrencies() { return this.httpClient.get(`${this.apiPath}currency`); }
    ;
    getCountries() { return this.httpClient.get(`${this.apiPath}country`); }
    ;
    getTimezones() { return this.httpClient.get(`${this.apiPath}timezone`); }
    ;
};
SettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SettingsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gux/projects/organic-world/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map