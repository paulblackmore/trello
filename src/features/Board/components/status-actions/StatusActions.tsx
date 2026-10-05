// import { StatusPill } from '../status-pill/StatusPill';
import { STATUS } from '../../const';
import styles from './StatusActions.module.css';

export const StatusActions = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.text}>Status:</h4>
      {Object.values(STATUS).map((status) => (
        <h5 key={status}>{status}</h5>
      ))}
    </div>
  );
};
