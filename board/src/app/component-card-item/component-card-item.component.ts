import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-component-card-item',
  templateUrl: './component-card-item.component.html',
  styleUrls: ['./component-card-item.component.css']
})
export class ComponentCardItemComponent implements OnInit {
  public id: string;
  public name: string;
  public description: string;
  public dueDate: Date | string;
  public assignee: IUser;

  constructor() { }

  ngOnInit() {
  }

}
