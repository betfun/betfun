"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _login_1 = require('./+login');
var router_1 = require('@angular/router');
var welcome_1 = require('./welcome');
var BetfunAppComponent = (function () {
    function BetfunAppComponent() {
        this.title = 'betfun works for the second time!';
    }
    BetfunAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'betfun-app',
            templateUrl: 'betfun.component.html',
            styleUrls: ['betfun.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', component: welcome_1.WelcomeComponent },
            { path: '/login', component: _login_1.LoginComponent },
            { path: '/welcome', component: welcome_1.WelcomeComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], BetfunAppComponent);
    return BetfunAppComponent;
}());
exports.BetfunAppComponent = BetfunAppComponent;
//# sourceMappingURL=betfun.component.js.map