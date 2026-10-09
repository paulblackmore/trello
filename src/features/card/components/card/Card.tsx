import { Trash } from 'lucide-react';
import type { CardData } from '../../types';
import { ActionIcon, Title, Text, Flex } from '@mantine/core';

type Props = {
  card: CardData;
};

export const Card = ({ card }: Props) => {
  return (
    <Flex
      gap={5}
      direction='column'
      justify='space-between'
      align='flex-start'
      p={10}
    >
      <Flex h={25} justify='space-between' align='center' w='100%'>
        <Title order={6}>{card.title}</Title>
        <ActionIcon variant='default' onClick={() => {}}>
          <Trash color='#3e9392' size={15} />
        </ActionIcon>
      </Flex>
      <div>
        <Text size='sm'>{card.description}</Text>
      </div>
    </Flex>
  );
};
