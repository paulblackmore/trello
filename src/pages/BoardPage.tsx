import { useState } from 'react';
import { Column } from '../features/column/components/column/Column';
import { DEFAULT_COLUMNS_DATA } from '../data';
import styles from './BoardPage.module.css';
import type { ColumnData } from '../features/column/types';
import { StatusCount } from '../features/header/components/status-count/StatusCount';
import { Actions } from '../features/header/components/actions/Actions';
import { CountDown } from '../features/header/components/count-down/CountDown';
import { Container, Flex } from '@mantine/core';

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
      <Flex mih={50} gap='md' justify='space-between' align='center' p='md'>
        <CountDown />
        <StatusCount />
        <Actions handleAddColumn={handleAddColumn} />
      </Flex>
      <Container>
        <main className={styles.container}>
          {columns.map((column) => (
            <Column key={column.id} column={column as ColumnData} />
          ))}
        </main>
      </Container>
    </>
  );
}
