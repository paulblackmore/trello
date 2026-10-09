import { Card } from '../../../card/components/card/Card';
import styles from './Column.module.css';
import { Trash } from 'lucide-react';
import type { ColumnData } from '../../types';
import { EmptyCard } from '../../../card/components/empty-card/EmptyCard';
import {
  Button,
  ActionIcon,
  UnstyledButton,
  Flex,
  Title,
  Text,
} from '@mantine/core';
type Props = {
  column: ColumnData;
};

export const Column = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <Flex h={40} justify='space-between' align='center' w='100%'>
        <Title order={4}>{column.title}</Title>
        <Flex gap={5}>
          <Button variant='outline' color='cyan' size='xs' onClick={() => {}}>
            <Text size='xs'>+ Add card</Text>
          </Button>
          <ActionIcon variant='default' onClick={() => {}}>
            <Trash color='#3e9392' size={15} />
          </ActionIcon>
        </Flex>
      </Flex>
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
