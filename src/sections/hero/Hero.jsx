import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Left Column */}
      <div className={styles.left}>
        {/* Title */}
        <h1>My name is...</h1>
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
          sagittis mi. Nulla rhoncus efficitur dolor, vitae consequat ante
          feugiat at. Sed maximus bibendum vehicula. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Donec nec nunc eu neque aliquam
          ullamcorper.{" "}
        </p>
        {/* Button Group */}
        <div className={styles.buttonGroup}>
          <button>View work</button>
          <button>Download CV</button>
        </div>
      </div>
      {/* Right Column */}
      <div className={styles.right}>
        <div className={styles.imageFrame}></div>
      </div>
    </section>
  );
}
