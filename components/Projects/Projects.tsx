import styles from "@/styles/projects.module.css";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.header}>
        <p className={styles.kicker}>// projects.js : things I’ve built & shipped</p>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.sub}>const projects = [ ...shipped, ...building ]</p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={`${styles.card} ${styles[p.accent] || ""}`}>
            <div className={styles.cardTop}>
              <div className={styles.cardSubtitle}>{p.subtitle}</div>
              <div className={styles.cardActions}>
                <a className={styles.badge} href={p.repoUrl} target="_blank" rel="noreferrer">
                  {p.repo} ↗
                </a>
                {p.live && (
                  <a className={styles.badgeAlt} href={p.liveUrl} target="_blank" rel="noreferrer">
                    {p.live} ↗
                  </a>
                )}
              </div>
            </div>
            {/* <div className={styles.cardLabel}>{p.label}</div> */}
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.description}</p>
            <div className={styles.tagRow}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
