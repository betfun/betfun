import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {BetfunAppComponent, environment} from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(
    BetfunAppComponent,
    [HTTP_PROVIDERS, FIREBASE_PROVIDERS, defaultFirebase('https://euro2016pournous.firebaseio.com')]);
