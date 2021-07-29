import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matched-rating',
  templateUrl: './matched-rating.component.html',
  styleUrls: ['./matched-rating.component.css']
})
export class MatchedRatingComponent implements OnInit {

  @Input()
  score: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    console.log("### counter " + i);
    return new Array(i);
  }
}
