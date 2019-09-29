import { ICard } from 'src/app/models/card';
export interface ICardList {
    id: string;
    name: string;
    cards: ICard[ ];
    isDoneSection: boolean;
}