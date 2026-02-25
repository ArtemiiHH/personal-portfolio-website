import styles from "./Projects.module.css";
import projectImage from "../../assets/project-image.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.projectsTitle}>
        <h1>Projects</h1>
      </div>
      <div className={styles.outerContainer}>
        <section className={styles.projects}>
          {/* Card Grid */}
          <ul className={styles.grid}>
            {/* Each Project Card */}
            <li className={styles.projectCard}>
              <img src={projectImage} className={styles.projectImage} />
              <h3>Project</h3>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                finibus, felis a elementum lacinia, tellus massa vehicula leo,
                id maximus urna ipsum non metus.
              </p>
            </li>
            <li className={styles.projectCard}>
              <img src={projectImage} className={styles.projectImage} />
              <h3>Project</h3>
              <p>Description...</p>
            </li>
            <li className={styles.projectCard}>
              <img src={projectImage} className={styles.projectImage} />
              <h3>Project</h3>
              <p>Description...</p>
            </li>
            <li className={styles.projectCard}>
              <img src={projectImage} className={styles.projectImage} />
              <h3>Project</h3>
              <p>Description...</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
