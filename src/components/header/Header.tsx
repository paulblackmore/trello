import styles from './Header.module.css';

const AddColumnButton = () => (
  <button className={styles.button}>+ Add column</button>
);

export const Header = () => (
  <header className={styles.header}>
    <AddColumnButton />
  </header>
);
