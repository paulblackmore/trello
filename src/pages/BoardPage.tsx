import { useState } from 'react';
import { ColumnLayout } from '../features/Board/components/column/ColumnLayout';
import { ColumnHeader } from '../features/Board/components/columnHeader/ColumnHeader';
import { DEFAULT_COLUMNS_DATA } from '../data';
import styles from './BoardPage.module.css';
import { Header } from '../components/header';

export default function BoardPage() {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS_DATA);

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      { id: columns.length + 1, title: 'Placheolder title' },
    ]);
  };

  return (
    <>
      <Header>
        <ColumnHeader handleAddColumn={handleAddColumn} />
      </Header>
      <main className={styles.container}>
        {columns.map((column) => (
          <ColumnLayout key={column.id} column={column} />
        ))}
      </main>
    </>
  );
}
