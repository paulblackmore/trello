import clsx from 'clsx';
import styles from './StatusPill.module.css';
import { STATUS } from '../../const';

type Props = {
  status: 'OPEN' | 'CLOSED' | 'IN_PROGRESS';
};

const STATUS_CLASSES: Record<string, string> = {
  OPEN: styles.open,
  CLOSED: styles.closed,
  IN_PROGRESS: styles.inProgress,
};

export const StatusPill = ({ status }: Props) => {
  const currentStatus = STATUS_CLASSES[status] || styles.statusInProgress;

  return (
    <div className={clsx(styles.pill, currentStatus)}>
      <span>{STATUS[status] || status}</span>
    </div>
  );
};
