import styles from './EmptyCard.module.css';

export const EmptyCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Click to add a card</p>
    </div>
  );
};
