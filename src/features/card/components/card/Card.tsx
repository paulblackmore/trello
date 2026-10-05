import { Trash } from 'lucide-react';
import { Header } from '../../../column/components/header/Header';
import styles from './Card.module.css';
import type { CardData } from '../../types';

type Props = {
  card: CardData;
};

export const Card = ({ card }: Props) => {
  return (
    <div className={styles.container}>
      <Header>
        <h5 className={styles.title}>{card.title}</h5>
        <Trash color='#3e9392' size={15} />
      </Header>
      <div>
        <p>{card.description}</p>
      </div>
    </div>
  );
};
