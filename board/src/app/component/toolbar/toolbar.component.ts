import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, IUser {
  public id: string;
  public firstName: string;
  public lastName: string;
  constructor() { }

  ngOnInit() {
  }

}
