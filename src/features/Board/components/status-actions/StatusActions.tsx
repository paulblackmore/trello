import { StatusPill } from '../status-pill/StatusPill';
import styles from './StatusActions.module.css';

export const StatusActions = () => {
  return (
    <div className={styles.container}>
      <StatusPill status='OPEN' />
      <StatusPill status='CLOSED' />
      <StatusPill status='IN_PROGRESS' />
    </div>
  );
};
