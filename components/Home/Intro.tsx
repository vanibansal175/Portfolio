import styles from "@/styles/home.module.css";

export default function Intro() {
  return (
    <div className={styles.introCopy}>
      <p className={styles.heroNote}>Exploring LLMs &amp; RAG pipelines</p>
      <p>
        I live at the crossroads of{" "}
        <span className={styles.accentBlue}>backend engineering</span>,{" "}
        <span className={styles.accentPink}>AI/ML</span>, and{" "}
        <span className={styles.accentBlue}>data science</span>. I build systems
        that are genuinely{" "}
        <span className={styles.accentBlue}>intelligent</span> and{" "}
        <span className={styles.accentBlue}>scalable</span>.
      </p>
    </div>
  );
}
