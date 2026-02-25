import styles from "./Projects.module.css";
import projectImage from "../../assets/project-image.png";
import previewIcon from "../../assets/preview.svg";
import githubLogo from "../../assets/github-logo.svg";

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
              <div className={styles.textBox}>
                <h3>Geography Game</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  finibus, felis a elementum lacinia, tellus massa vehicula leo,
                  id maximus urna ipsum non metus.
                </p>
                <div className={styles.group}>
                  <div className={styles.iconGroup}>
                    <a href="">
                      <img src={previewIcon} className={styles.icon} />
                    </a>
                    <a href="">
                      <img src={githubLogo} className={styles.icon} />
                    </a>
                  </div>
                  <p className={styles.stackLabel}>React</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
