import styles from "./Hero.module.css";
import arrowSvg from "../../assets/arrow.svg";

export default function Hero() {
  return (
    <div className={styles.outerContainer}>
      <section id="hero" className={styles.hero}>
        {/* Title */}
        <h1 className={styles.title}>Full Stack Developer</h1>
        <h2 className={styles.undertext}>Artemii Barashkov</h2>
        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <button className={styles.workButton}>
            View work <img src={arrowSvg} />
          </button>
          <button className={styles.cvButton}>Download CV</button>
        </div>
      </section>
    </div>
  );
}
