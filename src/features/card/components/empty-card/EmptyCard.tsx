import styles from './EmptyCard.module.css';
import { Text, UnstyledButton } from '@mantine/core';

export const EmptyCard = () => {
  return (
    <UnstyledButton onClick={() => {}} w='100%'>
      <div className={styles.container}>
        <Text size='xs'>Click to add a card</Text>
      </div>
    </UnstyledButton>
  );
};
