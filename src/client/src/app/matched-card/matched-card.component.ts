import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../service/match';

@Component({
  selector: 'app-matched-card',
  templateUrl: './matched-card.component.html',
  styleUrls: ['./matched-card.component.css']
})
export class MatchedCardComponent implements OnInit {

  @Input()
  item!: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
