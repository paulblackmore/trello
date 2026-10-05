import { Card } from '../../../card/components/card/Card';
import styles from './Column.module.css';
import { Header } from '../header/Header';
import { IconButton, OutlinedButton } from '../../../../components/button';
import { Trash } from 'lucide-react';
import type { ColumnData } from '../../types';
import { EmptyCard } from '../../../card/components/empty-card/EmptyCard';

type Props = {
  column: ColumnData;
};

export const Column = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Header>
        <h4 className={styles.title}>{column.title}</h4>
        <div className={styles.actions}>
          <OutlinedButton onClick={() => {}}>
            <span>+ Add card</span>
          </OutlinedButton>
          <IconButton onClick={() => {}}>
            <Trash color='#3e9392' size={15} />
          </IconButton>
        </div>
      </Header>
      <div className={styles.content}>
        {column.cards.length ? (
          column.cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <IconButton onClick={() => {}}>
            <EmptyCard />
          </IconButton>
        )}
      </div>
    </main>
  );
};
