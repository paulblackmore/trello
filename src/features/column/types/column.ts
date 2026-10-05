import type { CardData } from '../../card/types';

export type ColumnData = {
  id: number;
  title: string;
  cards: CardData[];
};
