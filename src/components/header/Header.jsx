import styles from "./Header.module.css";
import menuIcon from "../../assets/hamburger-menu.svg";
import { useState } from "react";

// Import Hamburger Menu component
import Hamburger from "../hamburger/Hamburger";

export default function Header() {
  const [hamMenu, setHamMenu] = useState(false);

  function toggleMenu() {
    setHamMenu((prev) => !prev);
  }

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
        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Toggle menu"
          aria-expanded={hamMenu}
        >
          <img src={menuIcon} className={styles.menuIcon} />
        </button>

        {hamMenu && <Hamburger onClose={() => setHamMenu(false)}></Hamburger>}
      </nav>
    </header>
  );
}
