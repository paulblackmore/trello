import clsx from 'clsx';
import styles from './StatusPill.module.css';

type Props = {
  status: 'OPEN' | 'CLOSED' | 'IN_PROGRESS';
};

const STATUS_CLASSES: Record<string, string> = {
  OPEN: styles.open,
  CLOSED: styles.closed,
  IN_PROGRESS: styles.inProgress,
};

const STATUS: Record<string, string> = {
  OPEN: 'Open',
  CLOSED: 'Close',
  IN_PROGRESS: 'In progress',
};

export const StatusPill = ({ status }: Props) => {
  const currentStatus = STATUS_CLASSES[status] || styles.statusInProgress;

  return (
    <div className={clsx(styles.pill, currentStatus)}>
      <span>{STATUS[status] || status}</span>
    </div>
  );
};
