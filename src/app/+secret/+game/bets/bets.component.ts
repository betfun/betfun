import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-bets',
  templateUrl: 'bets.component.html',
  styleUrls: ['bets.component.css'], 
  directives: [MD_CARD_DIRECTIVES]
})
export class BetsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
