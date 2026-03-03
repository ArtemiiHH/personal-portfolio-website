import styles from "./Projects.module.css";
import projectImage from "../../assets/project-image.png";
import projectPortfolio from "../../assets/project-portfolio.jpg";
import projectShop from "../../assets/project-shop.jpg";
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
                  Game developed using React and REST APIs.
                </p>
                <div className={styles.group}>
                  <div className={styles.iconGroup}>
                    <a
                      href="https://geography-memo-game.netlify.app/"
                      target="_blank"
                      title="Live preview"
                    >
                      <img src={previewIcon} className={styles.icon} />
                    </a>
                    <a
                      href="https://github.com/ArtemiiHH/memory-card-game"
                      target="_blank"
                      title="GitHub Link"
                    >
                      <img src={githubLogo} className={styles.icon} />
                    </a>
                  </div>
                  <p className={styles.stackLabel}>React</p>
                </div>
              </div>
            </li>

            <li className={styles.projectCard}>
              <img src={projectPortfolio} className={styles.projectImage} />
              <div className={styles.textBox}>
                <h3>Personal Portfolio</h3>
                <p className={styles.text}>
                  Personal portfolio website you are viewing now.
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

            <li className={styles.projectCard}>
              <img src={projectShop} className={styles.projectImage} />
              <div className={styles.textBox}>
                <h3>Shopping Cart Website</h3>
                <p className={styles.text}>
                  Simple shopping cart website.
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
