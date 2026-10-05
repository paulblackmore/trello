import styles from './Button.module.css';
import type { Props } from './types';

export const IconButton = ({ children, onClick }: Props) => (
  <button className={styles.buttonIcon} onClick={onClick}>
    {children}
  </button>
);
