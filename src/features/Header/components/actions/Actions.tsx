import { OutlinedButton, PrimaryButton } from '../../../../components/button';
import styles from './Actions.module.css';

type Props = { handleAddColumn: () => void };

export const Actions = ({ handleAddColumn }: Props) => {
  return (
    <div className={styles.container}>
      <OutlinedButton onClick={handleAddColumn}>+ Add column</OutlinedButton>
      <PrimaryButton onClick={() => {}}>Restart sprint</PrimaryButton>
    </div>
  );
};
