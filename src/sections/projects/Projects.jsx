import styles from "./Projects.module.css";
import projectImage from "../../assets/project-image.png";
import casePilot from "../../assets/case-pilot-mockup8.png";
import consultingLeads from "../../assets/consulting-leads-mockup2.png";
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
              <a href="https://getcasepilot.co/" target="_blank">
                <img src={casePilot} className={styles.projectImage} />
              </a>
              <div className={styles.textBox}>
                <h3>Email Automation software for law firms</h3>
                <p className={styles.text}>
                  Personal portfolio website you are viewing now.
                </p>
                <div className={styles.group}>
                  <div className={styles.iconGroup}>
                    <a
                      href="https://artemii-barashkov.netlify.app/"
                      target="_blank"
                      title="Live preview"
                    >
                      <img src={previewIcon} className={styles.icon} />
                    </a>
                    <a
                      href="https://github.com/ArtemiiHH/personal-portfolio-website"
                      target="_blank"
                      title="GitHub Link"
                    >
                      <img src={githubLogo} className={styles.icon} />
                    </a>
                  </div>
                  <div className={styles.tags}>
                    <p className={styles.stackLabel}>React</p>
                    <p className={styles.stackLabel}>Node</p>
                    <p className={styles.stackLabel}>Express</p>
                    <p className={styles.stackLabel}>PostgreSQL</p>
                  </div>
                </div>
              </div>
            </li>

            <li className={styles.projectCard}>
              <a href="https://getconsultingleads.com/" target="_blank">
                <img src={consultingLeads} className={styles.projectImage} />
              </a>
              <div className={styles.textBox}>
                <h3>A B2B tool that helps consulting firms find leads</h3>
                <p className={styles.text}>
                  Built a platform that helps consulting firms find leads.
                </p>
                <div className={styles.group}>
                  <div className={styles.iconGroup}>
                    <a
                      href="https://getconsultingleads.com/"
                      target="_blank"
                      title="Live preview"
                    >
                      <img src={previewIcon} className={styles.icon} />
                    </a>
                    <a
                      href="https://github.com/ArtemiiHH/consulting-leads"
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
          </ul>
        </section>
      </div>
    </section>
  );
}
