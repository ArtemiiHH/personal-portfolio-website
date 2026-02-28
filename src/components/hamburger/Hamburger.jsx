import styles from "./Hamburger.module.css";

export default function Hamburger() {
  return (
    <div className={styles.hamMenu}>
      <ul>
        <li>
          <a href="#about" onClick={() => onClose()}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => onClose()}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => onClose()}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => onClose()}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
