import { STATUS } from '../../const';
import styles from './StatusActions.module.css';

export const StatusActions = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.text}>Sprint closing: 1 day</h5>
      <div className={styles.section}>
        {Object.values(STATUS).map((status) => (
          <h6 key={status}>{status} (1)</h6>
        ))}
      </div>
    </div>
  );
};
