import styles from './Header.module.css';

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => (
  <header className={styles.container}>{children}</header>
);
