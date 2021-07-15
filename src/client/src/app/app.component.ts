import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  isSearched: boolean = false;

  moveToSearchedState(searched: boolean) {
    this.isSearched = searched;
    console.log(searched);
  }
}
