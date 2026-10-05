export type CardData = {
  id: number;
  title: string;
  description: string;
  status: 'OPEN' | 'CLOSED' | 'IN_PROGRESS';
};
