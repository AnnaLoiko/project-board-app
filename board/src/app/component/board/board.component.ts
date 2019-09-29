import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { DataListService } from 'src/app/services/data-list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  public dataList;
  private _dataListService;

  @Input() public searchCriterion: string;

  constructor(dataListService: DataListService) {
    this._dataListService = dataListService;
  }

  ngOnInit() {
    this.dataList = this._dataListService.getAll();
  }

  public expandCard(task: ICard) {
    task.expanded = !task.expanded;
  }

  public removeCard(task) {
    let arr = task.dataItem.items;
    const index = arr.findIndex((i: ICard) => i.id === task.id);
    arr.splice(index, 1);
  }

}
