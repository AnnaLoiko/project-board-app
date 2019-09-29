import { Component } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  public readonly dataList = [
    {
      id: 1,
      name: 'Backlog',
      isDoneSection: false,
      items: [
        {
          id: 1,
          expanded: true,
          name: 'Task 1',
          description: 'description 1',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 1',
            lastName: 'LastName 1',
          },
        },
        {
          id: 2,
          expanded: false,
          name: 'Task 2',
          description: 'description 2',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 2',
            lastName: 'LastName 2',
          }
        },
        {
          id: 3,
          expanded: false,
          name: 'Task 3',
          description: 'description 3',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 3',
            lastName: 'LastName 3',
          },
        },
      ]
    },
    {
      id: 2,
      name: 'In progress',
      isDoneSection: false,
      items: [
        {
          id: 4,
          expanded: false,
          name: 'Task 4',
          description: 'description 4',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 4',
            lastName: 'LastName 4',
          },
        },
        {
          id: 5,
          expanded: false,
          name: 'Task 5',
          description: 'description 5',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 5',
            lastName: 'LastName 5',
          },
        },
        {
          id: 6,
          expanded: false,
          name: 'Task 6',
          description: 'description 6',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 6',
            lastName: 'LastName 6',
          },
        },
      ]
    },
    {
      id: 3,
      name: 'Done',
      isDoneSection: true,
      items: [
        {
          id: 7,
          expanded: false,
          name: 'Task 7',
          description: 'description 7',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 7',
            lastName: 'LastName 7',
          },
        },
        {
          id: 8,
          expanded: false,
          name: 'Task 8',
          description: 'description 8',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 8',
            lastName: 'LastName 8',
          },
        },
        {
          id: 9,
          expanded: false,
          name: 'Task 9',
          description: 'description 9',
          dueDate: '01.10.2019',
          Assignee: {
            firstName: 'FirstName 9',
            lastName: 'LastName 9',
          },
        },
      ]
    },
  ];

  public expandCard(task: ICard) {
    task.expanded = !task.expanded;
    console.log(222,task.expanded )
  }

}
