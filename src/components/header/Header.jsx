import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Name/Logo */}
      <h1>
        <a href="#hero" className={styles.name}>
          Artemii
        </a>
      </h1>
      {/* Navigation Tab */}
      <nav>
        <ul className={styles.navbar}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
