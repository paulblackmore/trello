import { Trash } from 'lucide-react';
import { Header } from '../header/Header';
import styles from './Card.module.css';

type Props = {
  card: {
    id: number;
    title: string;
    description: string;
  };
};

export const Card = ({ card }: Props) => {
  return (
    <div className={styles.container}>
      <Header>
        <h5>{card.title}</h5>
        <Trash color='#3e9392' size={15} />
      </Header>
      <div>
        <p>{card.description}</p>
      </div>
    </div>
  );
};
