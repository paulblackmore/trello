import styles from './Button.module.css';
import type { Props } from './types';

export const PrimaryButton = ({ children, onClick }: Props) => (
  <button className={styles.buttonPrimary} onClick={onClick}>
    {children}
  </button>
);
