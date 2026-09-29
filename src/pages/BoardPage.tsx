import { useState } from 'react';
import { Header } from '../components/header/Header';
import { ColumnLayout } from '../features/Board/components/column/ColumnLayout';
import styles from './BoardPage.module.css';

export default function BoardPage() {
  const [columnCount, setColunCount] = useState(3);

  const handleIncrementColumnCount = () => setColunCount(columnCount + 1);

  return (
    <>
      <Header handleIncrementColumnCount={handleIncrementColumnCount} />
      <main className={styles.main}>
        {Array.from({ length: columnCount }, (_, index) => (
          <ColumnLayout key={index} />
        ))}
      </main>
    </>
  );
}
