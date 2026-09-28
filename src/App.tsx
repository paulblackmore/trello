import { useState } from 'react';
import styles from './App.module.css';
import { ColumnLayout } from './components/column/ColumnLayout';

const DEFAULT_COLUMN_COUNT = 3;

function App() {
  const [columnCount, setColunCount] = useState(DEFAULT_COLUMN_COUNT);

  return (
    <>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        {Array.from({ length: columnCount }, (_, index) => (
          <ColumnLayout key={index} />
        ))}
      </main>
    </>
  );
}

export default App;
