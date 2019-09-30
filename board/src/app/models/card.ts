import { IUser } from 'src/app/models/user';
export interface ICard {
    id: string;
    name: string;
    description: string;
    dueDate?: Date | string;
    assignee?: IUser;
    expanded: boolean;
    isDone: boolean;
}