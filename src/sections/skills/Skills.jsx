import styles from "./Skills.module.css";
import reactLogo from "../../assets/react-logo.svg";
import nodeLogo from "../../assets/node-logo.svg";
import javascriptLogo from "../../assets/javascript-logo.svg";
import htmlLogo from "../../assets/html-logo.svg";
import cssLogo from "../../assets/css-logo.svg";
import expressLogo from "../../assets/express-logo.svg";

export default function Skills() {
  return (
    <div className={styles.outerContainer}>
      <section id="skills" className={styles.skills}>
        {/* Title */}
        <h2>My stack</h2>

        {/* Stack List */}
        <ul className={styles.stackItems}>
          <li className={styles.item}>
            <img src={reactLogo} className={styles.logoIcon} />
            <p>React</p>
          </li>
          <li className={styles.item}>
            <img src={nodeLogo} className={styles.logoIcon} />
            <p>Node.js</p>
          </li>
          <li className={styles.item}>
            <img src={javascriptLogo} className={styles.logoIcon} />
            <p>JavaScript</p>
          </li>
          <li className={styles.item}>
            <img src={htmlLogo} className={styles.logoIcon} />
            <p>HTML</p>
          </li>
          <li className={styles.item}>
            <img src={cssLogo} className={styles.logoIcon} />
            <p>CSS</p>
          </li>
          <li className={styles.item}>
            <img src={expressLogo} className={styles.logoIcon} />
            <p>Express</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
