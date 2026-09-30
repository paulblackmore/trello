import { useState } from 'react';
import { Container } from '../features/Board/components/column/container/Container';
import { DEFAULT_COLUMNS_DATA } from '../data';
import { Header } from '../components/header';
import { OutlinedButton } from '../components/button';
import styles from './BoardPage.module.css';

export default function BoardPage() {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS_DATA);

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      { id: columns.length + 1, title: 'Placheolder title', cards: [] },
    ]);
  };

  return (
    <>
      <Header>
        <OutlinedButton onClick={handleAddColumn}>+ Add column</OutlinedButton>
      </Header>
      <main className={styles.container}>
        {columns.map((column) => (
          <Container key={column.id} column={column} />
        ))}
      </main>
    </>
  );
}
