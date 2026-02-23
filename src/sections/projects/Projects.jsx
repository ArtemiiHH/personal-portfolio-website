import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.outerContainer}>
      <section id="projects" className={styles.projects}>
        {/* Title */}
        <h2>Projects</h2>

        {/* Card Grid */}
        <ul className={styles.grid}>
          {/* Each Project Card */}
          <li className={styles.projectCard}>
            <h3>Project</h3>
            <p>Description...</p>
          </li>
          <li className={styles.projectCard}>
            <h3>Project</h3>
            <p>Description...</p>
          </li>
          <li className={styles.projectCard}>
            <h3>Project</h3>
            <p>Description...</p>
          </li>
          <li className={styles.projectCard}>
            <h3>Project</h3>
            <p>Description...</p>
          </li>
          <li className={styles.projectCard}>
            <h3>Project</h3>
            <p>Description...</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
