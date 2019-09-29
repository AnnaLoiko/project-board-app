import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'board';

  public searchCriterion: string;

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }
}

