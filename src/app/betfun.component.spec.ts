import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {BetfunAppComponent} from '../app/betfun.component';

beforeEachProviders(() => [BetfunAppComponent]);

describe('App: Betfun', () => {
  it('should create the app',
     inject([BetfunAppComponent], (app: BetfunAppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'betfun works!\'',
     inject([BetfunAppComponent], (app: BetfunAppComponent) => {
       expect(app.title).toEqual('betfun works!');
     }));
});
