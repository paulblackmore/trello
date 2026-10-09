import { Card } from '../../../card/components/card/Card';
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
    <Flex
      direction='column'
      justify='flex-start'
      align='center'
      w={300}
      mih={200}
      gap={2}
      bg='#f1f9f1'
      p={10}
      bdrs={5}
    >
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
      <Flex justify='center' align='flex-start' direction='column'>
        {column.cards.length ? (
          column.cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <UnstyledButton onClick={() => {}}>
            <EmptyCard />
          </UnstyledButton>
        )}
      </Flex>
    </Flex>
  );
};
