import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  public searchCriterion: string;

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchCriterion);
  }

}
