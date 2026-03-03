import styles from "./Hero.module.css";
import arrowSvg from "../../assets/arrow.svg";
import downloadSvg from "../../assets/download.svg";
import animatedBackground from "../../assets/background-animation.gif";
import cv from "../../assets/cv-artemii-barashkov.pdf";

export default function Hero() {
  return (
    <div className={styles.outerContainer}>
      <section
        id="hero"
        className={styles.hero}
        style={{
          backgroundImage: `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url(${animatedBackground})
  `,
        }}
      >
        {/* Title */}
        <h1 className={styles.title}>Artemii Barashkov</h1>
        <h2 className={styles.undertext}>Full Stack Developer</h2>
        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
            View Work
            <img src={arrowSvg} className={styles.icon} />
          </a>

          <a href={cv} download className={`${styles.btn} ${styles.secondary}`}>
            <img src={downloadSvg} className={styles.icon} />
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
