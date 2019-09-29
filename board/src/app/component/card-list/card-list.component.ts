import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardList } from 'src/app/models/cardList';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() dataItem: ICardList;
  @Input() isDoneSection: boolean;
  @Input() searchCriterion: string;
  @Output() expandCard = new EventEmitter<ICard>();
  @Output() removeCard = new EventEmitter<any>();

  onExpand(task: ICard) {
    this.expandCard.emit(task);
  }

  onRemove(task: ICard) {
    this.removeCard.emit({
      dataItem: this.dataItem,
      task
    });
  }
}
