import styles from './Button.module.css';
import type { Props } from './types';

export const OutlinedButton = ({ children, onClick }: Props) => (
  <button className={styles.buttonOutline} onClick={onClick}>
    {children}
  </button>
);
