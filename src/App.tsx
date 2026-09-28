import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/header/Header';
import { ColumnLayout } from './components/column/ColumnLayout';

const DEFAULT_COLUMN_COUNT = 3;

function App() {
  const [columnCount, setColunCount] = useState(DEFAULT_COLUMN_COUNT);

  return (
    <>
      <Header />
      <main className={styles.main}>
        {Array.from({ length: columnCount }, (_, index) => (
          <ColumnLayout key={index} />
        ))}
      </main>
    </>
  );
}

export default App;
