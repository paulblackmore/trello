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
      <header>
        <h5>{card.title}</h5>
      </header>
      <p>{card.description}</p>
      <footer>{/* <p>Status</p> */}</footer>
    </div>
  );
};
