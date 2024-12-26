import styles from '../styles/Home.module.css';
import Header from '../components/Header.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to Plot Clothing</h1>
        <p>Discover stylish and modern clothing for all occasions.</p>
        <div className={styles.buttons}>
          <button className={styles.btn}>Shop Now</button>
          <button className={styles.btnSecondary}>Sign Up</button>
        </div>
      </main>
    </div>
  );
}
