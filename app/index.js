System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+login/login.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-login",templateUrl:"login.component.html",styleUrls:["login.component.css"]}),e("design:paramtypes",[])],a)}();return b.LoginComponent=g,c.exports}),System.registerDynamic("app/+login/index.js",["./login.component"],!0,function(a,b,c){"use strict";var d=a("./login.component");return b.LoginComponent=d.LoginComponent,c.exports}),System.registerDynamic("app/betfun.component.js",["@angular/core","./+login","@angular/router"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./+login"),h=a("@angular/router"),i=function(){function a(){this.title="betfun works for real!"}return a=d([f.Component({moduleId:c.id,selector:"betfun-app",templateUrl:"betfun.component.html",styleUrls:["betfun.component.css"],directives:[h.ROUTER_DIRECTIVES],providers:[h.ROUTER_PROVIDERS]}),h.Routes([{path:"/",component:g.LoginComponent}]),e("design:paramtypes",[])],a)}();return b.BetfunAppComponent=i,c.exports}),System.registerDynamic("app/index.js",["./environment","./betfun.component"],!0,function(a,b,c){"use strict";var d=a("./environment");b.environment=d.environment;var e=a("./betfun.component");return b.BetfunAppComponent=e.BetfunAppComponent,c.exports});