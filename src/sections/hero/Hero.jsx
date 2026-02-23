import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left Column */}
      <div className={styles.left}>
        <h1>My name is...</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
          sagittis mi. Nulla rhoncus efficitur dolor, vitae consequat ante
          feugiat at. Sed maximus bibendum vehicula. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Donec nec nunc eu neque aliquam
          ullamcorper.{" "}
        </p>
        <button>View work</button>
        <button>Download CV</button>
      </div>
      {/* Right Column */}
      <div className={styles.right}>
        <div className={styles.imageFrame}></div>
      </div>
    </section>
  );
}
