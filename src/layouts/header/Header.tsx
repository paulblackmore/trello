import type { ReactNode } from 'react';
import styles from './Header.module.css';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => (
  <header className={styles.header}>{children}</header>
);
