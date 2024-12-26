import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Plot Clothing</h1>
      <nav>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}
