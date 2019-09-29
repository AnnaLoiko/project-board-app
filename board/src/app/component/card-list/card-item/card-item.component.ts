import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: ICard;
  @Input() isDone: boolean;

  @Output() expandCard = new EventEmitter<ICard>();
  @Output() public removeCard = new EventEmitter<ICard>();

  onExpand() {
    this.expandCard.emit(this.item);
  }

  onRemove() {
    console.log(1);
    this.removeCard.emit(this.item);
  }

}
