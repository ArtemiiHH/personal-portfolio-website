import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Name/Logo */}
      <h1>
        <a href="" className={styles.name}>Artemii</a>
      </h1>
      {/* Navigation Tab */}
      <nav>
        <ul className={styles.navbar}>
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
