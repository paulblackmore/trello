import styles from './Header.module.css';

type Props = {
  handleIncrementColumnCount: () => void;
};

const AddColumnButton = ({ handleIncrementColumnCount }: Props) => (
  <button
    className={styles.button}
    onClick={() => handleIncrementColumnCount()}
  >
    + Add column
  </button>
);

export const Header = ({ handleIncrementColumnCount }: Props) => (
  <header className={styles.header}>
    <AddColumnButton handleIncrementColumnCount={handleIncrementColumnCount} />
  </header>
);
