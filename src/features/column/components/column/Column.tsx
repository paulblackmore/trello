import { Card } from '../../../card/components/card/Card';
import styles from './Column.module.css';
import { Header } from '../../../../layouts/header';
import { Trash } from 'lucide-react';
import type { ColumnData } from '../../types';
import { EmptyCard } from '../../../card/components/empty-card/EmptyCard';
import { Button, ActionIcon, UnstyledButton } from '@mantine/core';
type Props = {
  column: ColumnData;
};

export const Column = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Header>
        <h4 className={styles.title}>{column.title}</h4>
        <div className={styles.actions}>
          <Button variant='outline' color='cyan' size='xs' onClick={() => {}}>
            <span>+ Add card</span>
          </Button>
          <ActionIcon variant='default' onClick={() => {}}>
            <Trash color='#3e9392' size={15} />
          </ActionIcon>
        </div>
      </Header>
      <div className={styles.content}>
        {column.cards.length ? (
          column.cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <UnstyledButton onClick={() => {}}>
            <EmptyCard />
          </UnstyledButton>
        )}
      </div>
    </main>
  );
};
