import { Actions } from '../actions/Actions';
import { Card } from '../../card/Card';
import type { ColumnData } from '../../../types';
import styles from './Container.module.css';
import { Header } from '../../header/Header';

type Props = {
  column: ColumnData;
};

export const Container = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Header>
        <h4 className={styles.title}>{column.title}</h4>
        <Actions />
      </Header>
      <div className={styles.content}>
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
};
