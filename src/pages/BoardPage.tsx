import { useState } from 'react';
import { Column } from '../features/Board/components/column/Column';
import { DEFAULT_COLUMNS_DATA } from '../data';
import { Header } from '../components/header';
import { OutlinedButton } from '../components/button';
import styles from './BoardPage.module.css';
import type { ColumnData } from '../features/Board/types';

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
          <Column key={column.id} column={column as ColumnData} />
        ))}
      </main>
    </>
  );
}
