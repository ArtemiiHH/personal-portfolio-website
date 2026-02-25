import styles from "./Skills.module.css";
import reactLogo from "../../assets/react-logo.svg";
import nodeLogo from "../../assets/node-logo.svg";
import javascriptLogo from "../../assets/javascript-logo.svg";
import htmlLogo from "../../assets/html-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import expressLogo from "../../assets/express-logo.svg";
import sqlLogo from "../../assets/sql-logo.svg";

export default function Skills() {
  return (
    <section id="skills">
      <div className={styles.skillsTitle}>
        <h1>Skills</h1>
      </div>
      <div className={styles.outerContainer}>
        <section className={styles.skills}>
          {/* Stack List */}
          <ul className={styles.stackItems}>
            <li className={styles.item} title="React.js">
              <img src={reactLogo} className={styles.logoIcon} />
              <p>React</p>
            </li>
            <li className={styles.item} title="Node.js">
              <img src={nodeLogo} className={styles.logoIcon} />
              <p>Node.js</p>
            </li>
            <li className={styles.item} title="JavaScript">
              <img src={javascriptLogo} className={styles.logoIcon} />
              <p>JavaScript</p>
            </li>
            <li className={styles.item} title="HTML">
              <img src={htmlLogo} className={styles.logoIcon} />
              <p>HTML</p>
            </li>
            <li className={styles.item} title="CSS">
              <img src={cssLogo} className={styles.logoIcon} />
              <p>CSS</p>
            </li>
            <li className={styles.item} title="Express">
              <img src={expressLogo} className={styles.logoIcon} />
              <p>Express</p>
            </li>
            <li className={styles.item} title="SQL">
              <img src={sqlLogo} className={styles.logoIcon} />
              <p>SQL</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
