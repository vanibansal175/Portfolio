import styles from "@/styles/home.module.css";

export default function HeroActions() {
  return (
    <div className={styles.heroActions}>
      <button className={styles.btnPrimary}>
        <span className={styles.btnIcon} aria-hidden>
          📁
        </span>
        Projects
      </button>
      <button className={styles.btnGhost}>
        <span className={styles.btnIcon} aria-hidden>
          👤
        </span>
        About Me
      </button>
      <button className={styles.btnGhost}>
        <span className={styles.btnIcon} aria-hidden>
          ✉️
        </span>
        Contact
      </button>
    </div>
  );
}
