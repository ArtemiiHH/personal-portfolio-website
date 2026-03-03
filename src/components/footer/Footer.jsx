import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 className={styles.name}>Artemii Barashkov</h3>
          <p className={styles.tagline}>Frontend Developer</p>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/ArtemiiHH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/artemii-barashkov-570a723a3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:artemii.barashkov.dev@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Artemii Barashkov. All rights reserved.
      </div>
    </footer>
  );
}
