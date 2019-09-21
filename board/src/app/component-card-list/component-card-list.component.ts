import { Component, OnInit } from '@angular/core';
import { ICardList } from 'src/app/models/cardList';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-component-card-list',
  templateUrl: './component-card-list.component.html',
  styleUrls: ['./component-card-list.component.css']
})
export class ComponentCardListComponent implements OnInit, ICardList {
  public id: string;
  public name: string;
  public cards: ICard[];

  constructor() { }

  ngOnInit() {
  }

}
