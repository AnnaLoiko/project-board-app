import { Component, OnInit, Input } from '@angular/core';
import { ICardList } from "../../models/CardList";
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, ICardList {
  public id: string;
  public name: string;
  public cards: ICard[];
  @Input() card: string;

  cardItems: string[] = ["", "", ""];
  constructor() { }

  ngOnInit() {
  }

}
