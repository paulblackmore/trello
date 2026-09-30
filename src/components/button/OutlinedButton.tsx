import type { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode;
  handleAddColumn: () => void;
};

export const OutlinedButton = ({ children, handleAddColumn }: Props) => (
  <button className={styles.buttonOutline} onClick={handleAddColumn}>
    {children}
  </button>
);
