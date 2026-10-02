import { Trash } from 'lucide-react';
import { Header } from '../header/Header';
import styles from './Card.module.css';
import type { CardData } from '../../types';

type Props = {
  card: CardData;
};

export const Card = ({ card }: Props) => {
  const handleStatusColor = () =>
    card.status === 'OPEN'
      ? '#45be45'
      : card.status === 'CLOSED'
      ? '#f04d4d'
      : '#ff890b';

  return (
    <div className={styles.container}>
      <Header>
        <h5>{card.title}</h5>
        <Trash color='#3e9392' size={15} />
      </Header>
      <div>
        <p>{card.description}</p>
      </div>
      <footer>
        <div
          className={styles.statusPill}
          style={{
            backgroundColor: handleStatusColor(),
          }}
        >
          <span>{card.status}</span>
        </div>
      </footer>
    </div>
  );
};
