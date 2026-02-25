import styles from "./Hero.module.css";
import arrowSvg from "../../assets/arrow.svg";
import downloadSvg from "../../assets/download.svg";
import animatedBackground from "../../assets/background-animation.gif";

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
          <a href="#projects">
            <button className={styles.workButton}>
              View work <img src={arrowSvg} className={styles.icon} />
            </button>
          </a>
          <a href="../../assets/pdf-test.pdf" download>
            <button className={styles.cvButton}>
              <img src={downloadSvg} className={styles.icon} /> Download CV
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
