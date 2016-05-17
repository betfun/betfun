import { Component, OnInit } from '@angular/core';
import { AuthProviderService } from '../auth-provider.service';
import { Router } from '@angular/router';

/**
 * (description)
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthProviderService]
})
export class LoginComponent implements OnInit {
  /**
   * Creates an instance of LoginComponent.
   * 
   * @param {Router} router (description)
   * @param {AuthProviderService} auth (description)
   */
  constructor(private router: Router, private auth: AuthProviderService) {
    // this.auth.currentUser.subscribe(u => {
    //   if (u != null) this.router.navigate(['/']);
    // });
  }

  /**
   * (description)
   */
  ngOnInit() { }

  /**
   * (description)
   */
  onLogin() {
    this.auth.login();
  }
}
