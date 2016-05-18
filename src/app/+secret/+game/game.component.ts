import { Component, OnInit } from '@angular/core';
import { BetsComponent } from './bets';
import { OnActivate, RouteSegment } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  directives: [BetsComponent]
})
export class GameComponent implements OnInit, OnActivate {

  name: string = "Test";
  
  constructor() {}

  ngOnInit() {
  }

 routerOnActivate(curr: RouteSegment): void {
    this.name = curr.getParam('id');
  }
}
