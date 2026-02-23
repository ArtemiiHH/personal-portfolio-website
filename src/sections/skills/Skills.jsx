import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      {/* Title */}
      <h2>My stack</h2>

      {/* Stack List */}
      <ul className={styles.stackItems}>
        <li>React</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
}
