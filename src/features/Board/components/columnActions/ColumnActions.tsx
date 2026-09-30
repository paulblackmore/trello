import { Trash, Plus } from 'lucide-react';
import { UnstyledButton } from '../../../../components/button';
import styles from './ColumnActions.module.css';

export const ColumnActions = () => {
  return (
    <div className={styles.container}>
      <UnstyledButton onClick={() => {}}>
        <Plus color='#3e9392' size={15} />
      </UnstyledButton>
      <UnstyledButton onClick={() => {}}>
        <Trash color='#3e9392' size={15} />
      </UnstyledButton>
    </div>
  );
};
