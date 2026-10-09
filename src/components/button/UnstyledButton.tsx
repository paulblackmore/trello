import styles from './Button.module.css';
import type { Props } from './types';

export const UnstyledButton = ({ children, onClick }: Props) => (
  <button className={styles.buttonUnstyled} onClick={onClick}>
    {children}
  </button>
);
