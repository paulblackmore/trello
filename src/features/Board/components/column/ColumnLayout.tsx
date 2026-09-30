import type { ColumnData } from '../../../../types';
import styles from './Column.module.css';

type Props = {
  column: ColumnData;
};

export const ColumnLayout = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.title}>{column.title}</h4>
        <div className={styles.divider} />
      </header>
    </main>
  );
};
