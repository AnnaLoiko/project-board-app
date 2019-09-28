import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  public id: string;
  public name: string;
  public description: string;
  public dueDate: Date | string;
  public assignee: IUser;
  constructor() { }

  ngOnInit() {
  }

}
