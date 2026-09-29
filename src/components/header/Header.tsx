import styles from './Header.module.css';

type Props = {
  handleAddColumn: () => void;
};

const AddColumnButton = ({ handleAddColumn }: Props) => (
  <button className={styles.button} onClick={handleAddColumn}>
    + Add column
  </button>
);

export const Header = ({ handleAddColumn }: Props) => (
  <header className={styles.header}>
    <AddColumnButton handleAddColumn={handleAddColumn} />
  </header>
);
