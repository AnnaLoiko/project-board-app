import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import IUser from 'src/app/models/user';
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
  @Output() expandCard = new EventEmitter<ICard>();

  onExpand(task: ICard) {
    this.expandCard.emit(task);
  }

}
