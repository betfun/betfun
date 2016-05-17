import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { BehaviorSubject } from 'rxjs/Rx';

/**
 * (description)
 *
 * @export
 * @class AuthProviderService
 */
@Injectable()
export class AuthProviderService {
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  /**
   * Creates an instance of AuthProviderService.
   *
   * @param {AngularFire} af (description)
   */
  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => {

      if (auth === null) {
        this.user.next(null);
        return;
      }

      this.user.next({
        id: auth.uid,
        email: auth.google.email,
        name: auth.google.displayName,
        picture: auth.google.profileImageURL
      });
    });
  }

  /**
   * (description)
   * 
   * @readonly
   */
  get currentUser() : Observable<User> {
    // Create Observable Stream to output our data
    return new Observable<User>(fn => this.user.subscribe(fn));
  }

  /**
   * (description)
   */
  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      scope: ['email']
    });
  }

  /**
   * (description)
   */
  logoff() {
    this.af.auth.logout();
  }
}
