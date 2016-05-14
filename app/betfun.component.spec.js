"use strict";
var testing_1 = require('@angular/core/testing');
var betfun_component_1 = require('../app/betfun.component');
testing_1.beforeEachProviders(function () { return [betfun_component_1.BetfunAppComponent]; });
testing_1.describe('App: Betfun', function () {
    testing_1.it('should create the app', testing_1.inject([betfun_component_1.BetfunAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'betfun works!\'', testing_1.inject([betfun_component_1.BetfunAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('betfun works!');
    }));
});
//# sourceMappingURL=betfun.component.spec.js.map