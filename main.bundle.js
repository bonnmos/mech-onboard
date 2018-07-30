webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_details_company_details_component__ = __webpack_require__("../../../../../src/app/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_contact_main_contact_component__ = __webpack_require__("../../../../../src/app/main-contact/main-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__other_info_other_info_component__ = __webpack_require__("../../../../../src/app/other-info/other-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__ = __webpack_require__("../../../../../src/app/workflow/workflow-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    // 1st Route
    { path: 'companyDetails', component: __WEBPACK_IMPORTED_MODULE_2__company_details_company_details_component__["a" /* CopmanyDetailsComponent */] },
    // 2nd Route
    { path: 'otherInfo', component: __WEBPACK_IMPORTED_MODULE_4__other_info_other_info_component__["a" /* OtherInfoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 3rd Route
    { path: 'mainContact', component: __WEBPACK_IMPORTED_MODULE_3__main_contact_main_contact_component__["a" /* MainContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 4th Route
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_5__result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 5th Route
    { path: '', redirectTo: '/companyDetails', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__company_details_company_details_component__["a" /* CopmanyDetailsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__workflow_workflow_guard_service__["a" /* WorkflowGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"background:#efefe9;\">\n    <div style=\"height: 80px;\">\n        <div class=\"row\">\n            <div class=\"col-xs-3 col-sm-2 dpo-logo\">\n                <img class=\"dpo-logo\" src=\"../assets/images/DPO LOGO - Think Payments.png\" alt=\"DPO Logo\">\n            </div>\n            <div class='col-xs-9 col-sm-10'>\n                <h2 style=\"margin-left: 10%; margin-top: 25px;\">Merchant Onboarding</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"header-underline\"></div>\n    <div class=\"container\">\n        <div class=\"board\">\n            <!-- Navigation Area (Circular Tabs) -->\n            <msw-navbar></msw-navbar>\n            <!-- End Navigation Area (Circular Tabs) -->\n\n            <!-- Content Area -->\n            <div class=\"tab-content\">\n                <!-- Nested view  -->\n                <router-outlet></router-outlet>\n            </div>\n            <!-- End Content Area -->\n        </div>\n\n    <!-- For Debugging: show our valid formData -->\n    <!-- pre>{{ formData | json }}</pre -->\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Merchant Onboarding';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "formData", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'multi-step-wizard-app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_service__["a" /* FormDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_details_company_details_component__ = __webpack_require__("../../../../../src/app/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_info_other_info_component__ = __webpack_require__("../../../../../src/app/other-info/other-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_contact_main_contact_component__ = __webpack_require__("../../../../../src/app/main-contact/main-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__result_result_component__ = __webpack_require__("../../../../../src/app/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Feature Components */




/* Routing Module */

/* Shared Service */



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_10__data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_10__data_formData_service__["a" /* FormDataService */] },
            { provide: __WEBPACK_IMPORTED_MODULE_11__workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_11__workflow_workflow_service__["a" /* WorkflowService */] }
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__company_details_company_details_component__["a" /* CopmanyDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_contact_main_contact_component__["a" /* MainContactComponent */],
            __WEBPACK_IMPORTED_MODULE_6__other_info_other_info_component__["a" /* OtherInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__result_result_component__["a" /* ResultComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/company-details/company-details.component.html":
/***/ (function(module, exports) {

module.exports = "<form #companyDetailsForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"form-group\">\n                    <label for=\"sel1\">Select Account Type</label>\n                    <select class=\"form-control\" id=\"sel1\">\n                        <option>Standard</option>\n                        <option>Strategic</option>\n                        <option>DPO In-House</option>\n                        <option>Sub Account</option>\n                    </select>\n                </div>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"companyName\">Company Name</label>  \n                            <input class=\"form-control input-md\" #companyName=\"ngModel\" required id=\"companyName\" name=\"companyName\" type=\"text\" placeholder=\"Company Name\" [(ngModel)]=\"companyDetails.companyName\">   \n                            <div class=\"alert alert-danger\" [hidden]=\"companyName.valid\">Company Name is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"tradeName\">Trade Name</label>  \n                            <input class=\"form-control input-md\" #tradeName=\"ngModel\" required id=\"tradeName\" name=\"tradeName\" type=\"text\" placeholder=\"Trade Name\" [(ngModel)]=\"companyDetails.tradeName\">\n                            <div class=\"alert alert-danger\" [hidden]=\"tradeName.valid\">Trade Name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Company Email</label>\n                    <input class=\"form-control input-md\" #companyEmail=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"companyEmail\" name=\"companyEmail\" type=\"text\" placeholder=\"Company Email\" [(ngModel)]=\"companyDetails.companyEmail\">\n                    <div class=\"alert alert-danger\" [hidden]=\"companyEmail.valid\">Email is required and must be valid</div>\n                </div>\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"websiteUrl\">Website (URL)</label>  \n                        <input class=\"form-control input-md\" #websiteUrl=\"ngModel\" required id=\"websiteUrl\" name=\"websiteUrl\" type=\"text\" placeholder=\"Website (URL)\" [(ngModel)]=\"companyDetails.websiteUrl\">\n                        <div class=\"alert alert-danger\" [hidden]=\"websiteUrl.valid\">Website URL is required</div>\n                    </div>\n                <!--/div-->\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"phoneNumber\">Phone Number</label>  \n                        <input class=\"form-control input-md\" #phoneNumber=\"ngModel\" required id=\"phoneNumber\" name=\"phoneNumber\" type=\"text\" placeholder=\"phoneNumber\" [(ngModel)]=\"companyDetails.phoneNumber\">\n                        <div class=\"alert alert-danger\" [hidden]=\"phoneNumber.valid\">Phone Number is required</div>\n                    </div>\n                <!--/div-->\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address1\">Address1</label>  \n                        <input class=\"form-control input-md\" #address1=\"ngModel\" required id=\"address1\" name=\"address1\" type=\"text\" placeholder=\"Address1\" [(ngModel)]=\"companyDetails.address1\">\n                        <div class=\"alert alert-danger\" [hidden]=\"address1.valid\">Address 1 is required</div>\n                    </div>\n                <!--/div-->\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address1\">Address2</label>  \n                        <input class=\"form-control input-md\" #address2=\"ngModel\" id=\"address2\" name=\"address2\" type=\"text\" placeholder=\"Address2\" [(ngModel)]=\"companyDetails.address2\">\n                    </div>\n                <!--/div-->\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"city\">City</label>  \n                            <input class=\"form-control input-md\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\" placeholder=\"City\" [(ngModel)]=\"companyDetails.city\">\n                            <div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"tradeName\">State</label>  \n                            <input class=\"form-control input-md\" #state=\"ngModel\" id=\"state\" name=\"state\" type=\"text\" placeholder=\"State\" [(ngModel)]=\"companyDetails.state\">\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"zip\">Zip</label>  \n                            <input class=\"form-control input-md\" #zip=\"ngModel\" id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Postal / Zip Code\" [(ngModel)]=\"companyDetails.zip\">\n                        </div>\n                    </div>\n                </div>\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <!--div class=\"form-group\">\n                        <label for=\"country\" class=\"col-sm-2 control-label\">Country</label>\n                        <div class=\"col-sm-2\">\n                            <input type=\"text\" list=\"countrylist\" class=\"form-control\" ng-model=\"userDoc.country\">\n                            <ngcountries></ngcountries>\n                        </div>\n                    </div-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"tradeName\">Country</label>  \n                        <input class=\"form-control input-md\" #country=\"ngModel\" required id=\"country\" name=\"country\" type=\"text\" placeholder=\"Country\" [(ngModel)]=\"companyDetails.country\">\n                        <div class=\"alert alert-danger\" [hidden]=\"country.valid\">Country is required</div>\n                    </div>\n                <!--/div-->\n                <!--div class='col-xs-12 col-sm-6'-->\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"zip\">Other Info</label>  \n                        <textarea class=\"form-control input-md\" #otherInfo=\"ngModel\" id=\"otherInfo\" name=\"otherInfo\" type=\"text\" placeholder=\"Other information shared...\" [(ngModel)]=\"companyDetails.otherInfo\"></textarea>\n                    </div>\n                <!--/div-->\n                    \n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-outline-rounded btn-info\" [disabled]=\"!companyDetailsForm.valid\" (click)=\"goToNext(companyDetailsForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/company-details/company-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopmanyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CopmanyDetailsComponent = (function () {
    function CopmanyDetailsComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Company Details';
    }
    CopmanyDetailsComponent.prototype.ngOnInit = function () {
        this.companyDetails = this.formDataService.getCompanyDetails();
        console.log('Personal feature loaded!');
    };
    CopmanyDetailsComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setCompanyDetails(this.companyDetails);
        return true;
    };
    CopmanyDetailsComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/mainContact']);
        }
    };
    return CopmanyDetailsComponent;
}());
CopmanyDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-personal',
        template: __webpack_require__("../../../../../src/app/company-details/company-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], CopmanyDetailsComponent);

var _a, _b;
//# sourceMappingURL=company-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFormData; });
/* unused harmony export CompanyDetails */
/* unused harmony export MainContact */
/* unused harmony export OtherInfo */
var MyFormData = (function () {
    function MyFormData() {
        this.accountType = '';
        this.companyName = '';
        this.tradeName = '';
        this.registrationNumber = '';
        this.companyEmail = '';
        this.websiteUrl = '';
        this.phoneNumber = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zip = '';
        this.otherInfo = '';
        this.mainContactFirstName = '';
        this.mainContactLastName = '';
        this.mainContactPosition = '';
        this.mainContactEmail = '';
        this.mainContactMobile = '';
        this.websiteIntegration = false;
        this.cmsPlugin = '';
        this.uploadedCertificate = false;
    }
    MyFormData.prototype.clear = function () {
        this.accountType = '';
        this.companyName = '';
        this.tradeName = '';
        this.registrationNumber = '';
        this.companyEmail = '';
        this.websiteUrl = '';
        this.phoneNumber = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zip = '';
        this.mainContactFirstName = '';
        this.mainContactLastName = '';
        this.mainContactPosition = '';
        this.mainContactEmail = '';
        this.mainContactPosition = '';
        this.websiteIntegration = false;
        this.cmsPlugin = '';
        this.uploadedCertificate = false;
    };
    return MyFormData;
}());

var CompanyDetails = (function () {
    function CompanyDetails() {
        this.accountType = '';
        this.companyName = '';
        this.tradeName = '';
        this.registrationNumber = '';
        this.companyEmail = '';
        this.websiteUrl = '';
        this.phoneNumber = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zip = '';
        this.otherInfo = '';
    }
    return CompanyDetails;
}());

var MainContact = (function () {
    function MainContact() {
        this.mainContactFirstName = '';
        this.mainContactLastName = '';
        this.mainContactPosition = '';
        this.mainContactEmail = '';
        this.mainContactMobile = '';
    }
    return MainContact;
}());

var OtherInfo = (function () {
    function OtherInfo() {
        this.websiteIntegration = false;
        this.cmsPlugin = '';
        this.uploadedCertificate = false;
    }
    return OtherInfo;
}());

//# sourceMappingURL=formData.model.js.map

/***/ }),

/***/ "../../../../../src/app/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* MyFormData */]();
        this.isCompanyDetailsFormValid = false;
        this.isMainContactFormValid = false;
        this.isOtherInfoFormValid = false;
    }
    FormDataService.prototype.getCompanyDetails = function () {
        // Return the Personal data
        var companyDetails = {
            accountType: this.formData.accountType,
            companyName: this.formData.companyName,
            tradeName: this.formData.tradeName,
            registrationNumber: this.formData.registrationNumber,
            companyEmail: this.formData.companyEmail,
            websiteUrl: this.formData.websiteUrl,
            phoneNumber: this.formData.phoneNumber,
            address1: this.formData.address1,
            address2: this.formData.address2,
            city: this.formData.city,
            state: this.formData.state,
            country: this.formData.country,
            zip: this.formData.zip,
            otherInfo: this.formData.otherInfo
        };
        return companyDetails;
    };
    FormDataService.prototype.setCompanyDetails = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isCompanyDetailsFormValid = true;
        this.formData.companyName = data.companyName;
        this.formData.tradeName = data.tradeName;
        this.formData.registrationNumber = data.registrationNumber;
        this.formData.companyEmail = data.companyEmail;
        this.formData.websiteUrl = data.websiteUrl;
        this.formData.phoneNumber = data.phoneNumber;
        this.formData.address1 = data.address1;
        this.formData.address2 = data.address2;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.country = data.country;
        this.formData.zip = data.zip;
        this.formData.mainContactFirstName = data.otherInfo;
        // Validate Company Details Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].companyDetails);
    };
    FormDataService.prototype.getMainContact = function () {
        var mainContact = {
            mainContactFirstName: this.formData.mainContactFirstName,
            mainContactLastName: this.formData.mainContactLastName,
            mainContactPosition: this.formData.mainContactPosition,
            mainContactEmail: this.formData.mainContactEmail,
            mainContactMobile: this.formData.mainContactMobile
        };
        return mainContact;
    };
    FormDataService.prototype.setMainContact = function (data) {
        // Update the main contact only when the MainContact Form had been validated successfully
        this.isMainContactFormValid = true;
        this.formData.mainContactFirstName = data.mainContactFirstName;
        this.formData.mainContactLastName = data.mainContactLastName;
        this.formData.mainContactEmail = data.mainContactEmail;
        this.formData.mainContactPosition = data.mainContactPosition;
        this.formData.mainContactMobile = data.mainContactMobile;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].mainContact);
    };
    FormDataService.prototype.getOtherInfo = function () {
        // Return the Address data
        var otherInfo = {
            websiteIntegration: this.formData.websiteIntegration,
            cmsPlugin: this.formData.cmsPlugin,
            uploadedCertificate: this.formData.uploadedCertificate
        };
        return otherInfo;
    };
    FormDataService.prototype.setOtherInfo = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isOtherInfoFormValid = true;
        this.formData.websiteIntegration = data.websiteIntegration;
        this.formData.cmsPlugin = data.cmsPlugin;
        this.formData.uploadedCertificate = data.uploadedCertificate;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].otherInfo);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isCompanyDetailsFormValid = this.isMainContactFormValid = this.isOtherInfoFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isCompanyDetailsFormValid &&
            this.isMainContactFormValid &&
            this.isOtherInfoFormValid;
    };
    return FormDataService;
}());
FormDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]) === "function" && _a || Object])
], FormDataService);

var _a;
//# sourceMappingURL=formData.service.js.map

/***/ }),

/***/ "../../../../../src/app/main-contact/main-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form #mainContactForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n               \n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"maincContactFirstName\">First Name</label>  \n                    <input class=\"form-control input-md\" #mainContactFirstName=\"ngModel\" required id=\"mainContactFirstName\" name=\"maincContactFirstName\" type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"mainContact.mainContactFirstName\">\n                    <div class=\"alert alert-danger\" [hidden]=\"mainContactFirstName.valid\">First Name is required</div>\n                </div>   \n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"mainContactLastName\">Last Name</label>  \n                    <input class=\"form-control input-md\" #mainContactLastName=\"ngModel\" required id=\"maincContactLastName\" name=\"maincContactLastName\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"mainContact.mainContactLastName\">\n                    <div class=\"alert alert-danger\" [hidden]=\"mainContactLastName.valid\">Last Name is required</div>\n                </div>  \n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"mainContactPosition\">Position</label>  \n                    <input class=\"form-control input-md\" #mainContactPosition=\"ngModel\" id=\"mainContactPosition\" name=\"mainContactPosition\" type=\"text\" placeholder=\"Position\" [(ngModel)]=\"mainContact.mainContactPosition\">\n                </div> \n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"mainContactEmail\">Email</label>\n                    <input class=\"form-control input-md\" #mainContactEmail=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"mainContactEmail\" name=\"mainContactEmail\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"mainContact.mainContactEmail\">\n                    <div class=\"alert alert-danger\" [hidden]=\"mainContactEmail.valid\">Email is required and must be valid</div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"mainContactMobile\">Mobile</label>  \n                    <input class=\"form-control input-md\" #mainContactMobile=\"ngModel\" required id=\"mainContactMobile\" name=\"mainContactMobile\" type=\"text\" placeholder=\"Mobile #\" [(ngModel)]=\"mainContact.mainContactMobile\">\n                    <div class=\"alert alert-danger\" [hidden]=\"mainContactMobile.valid\">Mobile # is required</div>\n                </div>  \n            </div>\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(mainContactForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!mainContactForm.valid\" (click)=\"goToNext(mainContactForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    \n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/main-contact/main-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContactComponent = (function () {
    function MainContactComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Main Contact';
    }
    MainContactComponent.prototype.ngOnInit = function () {
        this.mainContact = this.formDataService.getMainContact();
        console.log('Main contact feature loaded!');
    };
    MainContactComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setMainContact(this.mainContact);
        return true;
    };
    MainContactComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/companyDetails']);
        }
    };
    MainContactComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    };
    return MainContactComponent;
}());
MainContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-address',
        template: __webpack_require__("../../../../../src/app/main-contact/main-contact.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], MainContactComponent);

var _a, _b;
//# sourceMappingURL=main-contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n                    \n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"/companyDetails\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"company details\">\n                <span class=\"round-tabs one\">\n                    <i class=\"glyphicon glyphicon-user\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"/mainContact\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"main contact\">\n                <span class=\"round-tabs two\">\n                    <i class=\"glyphicon glyphicon-tasks\"></i>\n                </span> \n            </a>\n        </li>\n\n        <!-- circular home icon -->\n        <li>\n            <a routerLink=\"/otherInfo\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"other info\">\n                <span class=\"round-tabs three\">\n                    <i class=\"glyphicon glyphicon-home\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs four\">\n                    <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li>\n                \n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'msw-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html")
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/other-info/other-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtherInfoComponent = (function () {
    function OtherInfoComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Other Info';
        this.websiteIntegrationRequired = false;
        this.pluginType = '';
    }
    OtherInfoComponent.prototype.ngOnInit = function () {
        this.otherInfo = this.formDataService.getOtherInfo();
        console.log('Work feature loaded!');
    };
    OtherInfoComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setOtherInfo(this.otherInfo);
        return true;
    };
    OtherInfoComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/mainContact']);
        }
    };
    OtherInfoComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/result']);
        }
    };
    OtherInfoComponent.prototype.onWebIntegrationRequired = function ($event) {
        console.log('website integration : ' + $event);
        this.websiteIntegrationRequired = $event;
    };
    return OtherInfoComponent;
}());
OtherInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-work',
        template: __webpack_require__("../../../../../src/app/other-info/other-info.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object])
], OtherInfoComponent);

var _a, _b;
//# sourceMappingURL=other-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/other-info/other-info.html":
/***/ (function(module, exports) {

module.exports = "<form #otherInfoForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <div class=\"tab-pane fade in active\">\n            <h4 class=\"head text-center\">{{title}}</h4>\n            <br/>\n            <div class=\"row\">\n            <!--div class='row'-->\n                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n                    <div class=\"form-group\">\n                        <div class=\"checkbox\">\n                            <label style=\"padding-left: 0;\" class=\"control-label\" for=\"websiteIntegrationRequired\">\n                                Is Website Integration Required?\n                            </label>\n                            <input type=\"checkbox\" #websiteIntegrationRequired=\"ngModel\" \n                                id=\"websiteIntegrationRequired\"\n                                required \n                                name=\"websiteIntegrationRequired\" \n                                [ngModel]=\"websiteIntegrationRequired\" \n                                (ngModelChange)=\"onWebIntegrationRequired($event)\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"websiteIntegrationRequired === true\">\n                        <label for=\"sel1\">Select Account Type</label>\n                        <select class=\"form-control\" id=\"sel1\" [ngModel]=\"pluginType\">\n                            <option>Woo-Commerce</option>\n                            <option>Shopify</option>\n                            <option>Magento</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"sel2\">Certificate Type</label>\n                        <select class=\"form-control\" id=\"sel2\">\n                            <option>COR</option>\n                            <option>COI</option>\n                            <option>T&amp;C</option>\n                            <option>ID</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <!-- upload file -->\n                        <label for=\"sel2\">Upload Certificate</label>\n                        <input type=\"file\" \n                            (change)=\"startUpload($event.target.files)\" \n                            class=\"file-input\"\n                            id=\"file-upload\">\n                    </div>\n                </div>\n            </div>\n            <!--/div-->\n            <div class=\"form-group text-center space-20\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(otherInfoForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!otherInfoForm.valid\" (click)=\"goToNext(otherInfoForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <p class=\"narrow text-center\">\n        Here is a copy of the information you have entered:\n    </p>\n    <div class='row'>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"panel-heading\">Company Details</div>\n                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Account Type: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.accountType}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Company Name: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.companyName}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Trade Name: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.tradeName}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Company Email: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.companyEmail}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Website (URL): </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.websiteUrl}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Company Email: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.companyEmail}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Phone Number: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.phoneNumber}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Address 1:</label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.address1}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Address 2:</label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.address2}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">City: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.city}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">State: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.state}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Country: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.country}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Postal / Zip Code: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.zip}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Other Info: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.otherInfo}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"panel-heading\">Main Contact</div>\n                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">First Name: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.mainContactFirstName}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Last Name: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.mainContactLastName}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Position: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.position}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Email: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.mainContactEmail}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Mobile: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.mainContactMobile}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                <div class=\"panel-heading\">Other Info</div>\n                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Website Integration?: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.websiteIntegration}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Plugin Type: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.cmsPlugin}}\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class='col-xs-3 col-sm-2'>\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"name\">Certificate: </label> \n                            </div>\n                        </div>\n                        <div class='col-xs-9 col-sm-10'>\n                            {{myFormData.uploadedCertificate}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"text-center\">\n        <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__("../../../../../src/app/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultComponent = (function () {
    function ResultComponent(formDataService, http) {
        this.formDataService = formDataService;
        this.http = http;
        this.title = 'Confirm Details';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.myFormData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    ResultComponent.prototype.submit = function () {
        this.myFormData = this.formDataService.resetFormData();
        this.isFormValid = false;
        console.log('form values', JSON.stringify(this.myFormData));
        var formData = new FormData();
        formData.append('company-details', JSON.stringify(this.myFormData));
        // const stringFormData = JSON.stringify(this.merchantForm.value);
        // const map = new Map<string, any>();
        // map.set('company-details', stringFormData);
        this.http.post('http://localhost/onboarding-backend/dist/excel-generator.php', formData)
            .subscribe(function (data) {
            console.log('Got some data from backend', data);
        }, function (error) {
            console.log('Error', error);
        });
    };
    return ResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* MyFormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* MyFormData */]) === "function" && _a || Object)
], ResultComponent.prototype, "myFormData", void 0);
ResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'mt-wizard-result',
        template: __webpack_require__("../../../../../src/app/result/result.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _c || Object])
], ResultComponent);

var _a, _b, _c;
//# sourceMappingURL=result.component.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/workflow/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        console.log('inside canActivate..');
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            // Remove spaces from url. I don't know where TF the space comes from!
            if (firstPath === 'main contact') {
                firstPath = 'mainContact';
            }
            if (firstPath === 'other info') {
                firstPath = 'otherInfo';
            }
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        return true;
    };
    return WorkflowGuard;
}());
WorkflowGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowGuard);

var _a, _b;
//# sourceMappingURL=workflow-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    companyDetails: 'companyDetails',
    mainContact: 'mainContact',
    otherInfo: 'otherInfo',
    result: 'result'
};
//# sourceMappingURL=workflow.model.js.map

/***/ }),

/***/ "../../../../../src/app/workflow/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("../../../../../src/app/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].companyDetails, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].mainContact, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].otherInfo, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].result, valid: false }
        ];
        // tslint:disable-next-line:eofline
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        console.log('inside getFirstInvalidStep..');
        return redirectToStep;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map