import { Card } from '../card/Card';
import styles from './Column.module.css';
import { Header } from '../header/Header';
import { UnstyledButton } from '../../../../components/button';
import { Plus, Trash } from 'lucide-react';
import type { ColumnData } from '../../types';

type Props = {
  column: ColumnData;
};

export const Column = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Header>
        <h4 className={styles.title}>{column.title}</h4>
        <div className={styles.actions}>
          <UnstyledButton onClick={() => {}}>
            <Plus color='#3e9392' size={15} />
          </UnstyledButton>
          <UnstyledButton onClick={() => {}}>
            <Trash color='#3e9392' size={15} />
          </UnstyledButton>
        </div>
      </Header>
      <div className={styles.content}>
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
};
