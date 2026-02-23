import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.outerContainer}>
      <section id="hero" className={styles.hero}></section>
    </div>
  );
}
