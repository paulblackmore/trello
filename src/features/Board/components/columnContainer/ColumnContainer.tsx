import { ColumnActions } from '../columnActions/ColumnActions';
import type { ColumnData } from '../../types';
import styles from './ColumnContainer.module.css';
import { Card } from '../card/Card';

type Props = {
  column: ColumnData;
};

export const ColumnContainer = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLayout}>
          <h4 className={styles.title}>{column.title}</h4>
          <ColumnActions />
        </div>
        <div className={styles.divider} />
      </header>
      <div className={styles.cardContent}>
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
};
