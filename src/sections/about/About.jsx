import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <div className={styles.aboutTitle}>
        <h1>About me</h1>
      </div>

      <div className={styles.outerContainer}>
        <section className={styles.about}>
          {/* Left Column */}
          <div className={styles.left}>
            <div className={styles.descriptionBox}>
              {/* Title */}
              <h1>
                <span>Hello, I'm</span> Artemii
              </h1>
              {/* Description */}
              <p>
                I am a Full Stack Developer with a background in Graphic Design,
                combining technical skills with a strong eye for design and user
                experience. I enjoy building applications that are both
                functional and visually refined, focusing on clean, intuitive
                digital experiences.
              </p>
            </div>
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
      </div>
    </section>
  );
}
