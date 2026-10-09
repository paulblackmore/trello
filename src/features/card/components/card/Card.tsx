import { Trash } from 'lucide-react';
import { Flex } from '@mantine/core';
import styles from './Card.module.css';
import type { CardData } from '../../types';
import { ActionIcon } from '@mantine/core';

type Props = {
  card: CardData;
};

export const Card = ({ card }: Props) => {
  return (
    <div className={styles.container}>
      <Flex h={25} justify='space-between' align='center' w='100%'>
        <h5 className={styles.title}>{card.title}</h5>
        <ActionIcon variant='default' onClick={() => {}}>
          <Trash color='#3e9392' size={15} />
        </ActionIcon>
      </Flex>
      <div>
        <p>{card.description}</p>
      </div>
    </div>
  );
};
