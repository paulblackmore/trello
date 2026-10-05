import { Card } from '../card/Card';
import styles from './Column.module.css';
import { Header } from '../header/Header';
import { IconButton } from '../../../../components/button';
import { Plus, Trash } from 'lucide-react';
import type { ColumnData } from '../../types';
import { EmptyCard } from '../empty-card/EmptyCard';

type Props = {
  column: ColumnData;
};

export const Column = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Header>
        <h4 className={styles.title}>{column.title}</h4>
        <div className={styles.actions}>
          <IconButton onClick={() => {}}>
            <Plus color='#3e9392' size={15} />
          </IconButton>
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
