import { Trash, Plus } from 'lucide-react';
import { UnstyledButton } from '../../../../../components/button';
import styles from './Actions.module.css';

export const Actions = () => {
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
