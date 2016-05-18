import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteTree, Routes} from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { AuthProviderService } from '../auth-provider.service';
import { DashboardComponent } from './+dashboard';
import { GameComponent } from './+game';

@Component({
  moduleId: module.id,
  selector: 'app-secret',
  templateUrl: 'secret.component.html',
  styleUrls: ['secret.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdIcon],
  providers: [MdIconRegistry, AuthProviderService]
})
@Routes([
  {path: '/', component: DashboardComponent},
  {path: '/game', component: GameComponent}
])
export class SecretComponent implements OnInit {
  loginName: string;
  picture: string;
  
  constructor(private router: Router, private auth: AuthProviderService) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(u => {
      if (u != null) {
        this.loginName = u.name;
        this.picture = u.picture;
      }
      else{
        this.loginName = "";
        this.picture = "";        
      }
    });
  }

  logout() {
    this.auth.logoff();
  }
}
