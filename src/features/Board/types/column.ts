export type ColumnData = {
  id: number;
  title: string;
  cards: CardData[];
};

export type CardData = {
  id: number;
  title: string;
  description: string;
};
