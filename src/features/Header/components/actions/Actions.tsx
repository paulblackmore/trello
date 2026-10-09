import { Button } from '@mantine/core';
import styles from './Actions.module.css';

type Props = { handleAddColumn: () => void };

export const Actions = ({ handleAddColumn }: Props) => {
  return (
    <div className={styles.container}>
      <Button
        variant='outline'
        color='cyan'
        size='sm'
        onClick={handleAddColumn}
      >
        + Add column
      </Button>
      <Button variant='filled' color='cyan' size='sm' onClick={() => {}}>
        Restart sprint
      </Button>
    </div>
  );
};
