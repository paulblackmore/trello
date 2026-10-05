import { STATUS } from '../../const';
import styles from './StatusCount.module.css';

export const StatusCount = () => {
  return (
    <div className={styles.container}>
      {Object.values(STATUS).map((status) => (
        <h5 key={status}>{status} (1)</h5>
      ))}
    </div>
  );
};
