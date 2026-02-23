import styles from "./Hero.module.css";
import arrowSvg from "../../assets/arrow.svg";
import meshBackground from "../../assets/mesh-background.png";
import downloadSvg from "../../assets/download.svg";

export default function Hero() {
  return (
    <div className={styles.outerContainer}>
      <section
        id="hero"
        className={styles.hero}
        style={{
          backgroundImage: `
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url(${meshBackground})
  `,
        }}
      >
        {/* Title */}
        <h1 className={styles.title}>Full Stack Developer</h1>
        <h2 className={styles.undertext}>Artemii Barashkov</h2>
        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <a href="#projects">
            <button className={styles.workButton}>
              View work <img src={arrowSvg} className={styles.icon} />
            </button>
          </a>
          <button className={styles.cvButton}>
            <img src={downloadSvg} className={styles.icon} /> Download CV
          </button>
        </div>
      </section>
    </div>
  );
}
