import { ColumnActions } from '../columnActions/ColumnActions';
import type { ColumnData } from '../../types';
import styles from './ColumnContainer.module.css';

type Props = {
  column: ColumnData;
};

export const ColumnContainer = ({ column }: Props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLayout}>
          <h4 className={styles.title}>{column.title}</h4>
          <ColumnActions />
        </div>
        <div className={styles.divider} />
      </header>
    </main>
  );
};
