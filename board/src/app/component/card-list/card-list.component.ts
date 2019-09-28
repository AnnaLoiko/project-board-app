import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  public id: string;
  public name: string;
  public cards: ICard[];
  constructor() { }

  ngOnInit() {
  }

}
