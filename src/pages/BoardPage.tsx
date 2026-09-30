import { useState } from 'react';
import { ColumnContainer } from '../features/Board/components/columnContainer/ColumnContainer';
import { ColumnHeader } from '../features/Board/components/columnHeader/ColumnHeader';
import { DEFAULT_COLUMNS_DATA } from '../data';
import { Header } from '../components/header';
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
        <ColumnHeader handleAddColumn={handleAddColumn} />
      </Header>
      <main className={styles.container}>
        {columns.map((column) => (
          <ColumnContainer key={column.id} column={column} />
        ))}
      </main>
    </>
  );
}
