import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-component-toolbar',
  templateUrl: './component-toolbar.component.html',
  styleUrls: ['./component-toolbar.component.css']
})
export class ComponentToolbarComponent implements OnInit, IUser {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor() { }

  ngOnInit() {
  }

}
