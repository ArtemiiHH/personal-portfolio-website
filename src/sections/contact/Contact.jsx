import styles from "./Contact.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={styles.outerContainer}>
      <section id="contact" className={styles.contact}>
        <h1 className={styles.title}>Let’s build something great.</h1>

        <p className={styles.subtitle}>
          I’m currently open to freelance opportunities and collaborations. If
          you have a project in mind, let’s talk.
        </p>

        <div className={styles.buttons}>
          <a
            href="mailto:artemii.barashkov.dev@gmail.com"
            className={`${styles.btn} ${styles.primary}`}
          >
            Get In Touch <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.secondary}`}
          >
            View Resume
          </a>
        </div>
      </section>
    </div>
  );
}
