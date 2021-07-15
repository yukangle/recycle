import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Match } from '../service/match';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  results$!: Observable<Match[]>;
  private searchTerms = new Subject<string>();
  isSearched: boolean = false;

  @Output()
  protected isSearchedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private service: QueryService) {
  }

  ngOnInit(): void {
    this.results$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.service.QueryMatches(term))
    );
  }

  search(term: string): any {
    console.log("searching...");
    if (!this.isSearched) {
      this.isSearched = true;
      this.isSearchedChanged.emit(true);
    }
    this.searchTerms.next(term);
  }
}
