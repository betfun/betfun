import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './+login';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { AuthProviderService } from './auth-provider.service';
import './user';
import { SecretComponent } from './+secret';

/**
 * (description)
 * 
 * @export
 * @class BetfunAppComponent
 */
@Component({
  moduleId: module.id,
  selector: 'betfun-app',
  templateUrl: 'betfun.component.html',
  styleUrls: ['betfun.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS, AuthProviderService]
})
@Routes([
  { path: '/dashboard', component: SecretComponent },
  { path: '/login', component: LoginComponent },
])
export class BetfunAppComponent implements OnInit {
  /**
   * Creates an instance of BetfunAppComponent.
   *
   * @param {AuthProviderService} auth (description)
   */
  constructor(private router: Router, private auth: AuthProviderService) { }
  
  /**
   * (description)
   */
  ngOnInit(){
    this.auth.currentUser.subscribe(u => {
      if (u == null) this.router.navigate(['login']);
      else this.router.navigate(['dashboard']);
    });
  }
}
