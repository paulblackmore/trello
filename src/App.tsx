import { MantineProvider } from '@mantine/core';
import BoardPage from './pages/BoardPage';
import '@mantine/core/styles.css';

export default function App() {
  return (
    <MantineProvider>
      <BoardPage />
    </MantineProvider>
  );
}
