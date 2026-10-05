import { useState } from 'react';
import { Column } from '../features/column/components/column/Column';
import { DEFAULT_COLUMNS_DATA } from '../data';
import { Header } from '../components/header';
import styles from './BoardPage.module.css';
import type { ColumnData } from '../features/column/types';
import { StatusCount } from '../features/header/components/status-count/StatusCount';
import { Actions } from '../features/header/components/actions/Actions';
import { CountDown } from '../features/header/components/count-down/CountDown';

export default function BoardPage() {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS_DATA);

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        id: columns.length + 1,
        title: 'Placheolder title',
        cards: [],
      },
    ]);
  };

  return (
    <>
      <Header>
        <CountDown />
        <StatusCount />
        <Actions handleAddColumn={handleAddColumn} />
      </Header>
      <main className={styles.container}>
        {columns.map((column) => (
          <Column key={column.id} column={column as ColumnData} />
        ))}
      </main>
    </>
  );
}
