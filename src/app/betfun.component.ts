import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'betfun-app',
  templateUrl: 'betfun.component.html',
  styleUrls: ['betfun.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path:'/', component: LoginComponent}
])
export class BetfunAppComponent {
  title = 'betfun works for real!';
}
