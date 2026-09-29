import type { ColumnData } from '../../types';
import styles from './Column.module.css';

type Props = {
  column: ColumnData;
};

export const ColumnLayout = ({ column }: Props) => {
  return <div className={styles.container}>{column.title}</div>;
};
