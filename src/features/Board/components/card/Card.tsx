import clsx from 'clsx';
import { Trash } from 'lucide-react';
import { Header } from '../header/Header';
import styles from './Card.module.css';
import type { CardData } from '../../types';

type Props = {
  card: CardData;
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

export const Card = ({ card }: Props) => {
  const currentStatus = STATUS_CLASSES[card.status] || styles.statusInProgress;

  return (
    <div className={styles.container}>
      <Header>
        <h5 className={styles.title}>{card.title}</h5>
        <Trash color='#3e9392' size={15} />
      </Header>
      <div>
        <p>{card.description}</p>
      </div>
      <footer>
        <div className={clsx(styles.pill, currentStatus)}>
          <span>{STATUS[card.status] || card.status}</span>
        </div>
      </footer>
    </div>
  );
};
