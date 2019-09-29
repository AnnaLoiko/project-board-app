import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
  public readonly dataList = [
    {
      id: 1,
      title: 'Backlog',
      isDoneSection: false,
      items: [
        {
          id: 1,
          expanded: true,
          title: 'Task 1',
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
          title: 'Task 2',
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
          title: 'Task 3',
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
      title: 'In progress',
      isDoneSection: false,
      items: [
        {
          id: 4,
          expanded: false,
          title: 'Task 4',
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
          title: 'Task 5',
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
          title: 'Task 6',
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
      title: 'Done',
      isDoneSection: true,
      items: [
        {
          id: 7,
          expanded: false,
          title: 'Task 7',
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
          title: 'Task 8',
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
          title: 'Task 9',
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

  constructor() { }

  public getAll() {
    return this.dataList;
  }

}
