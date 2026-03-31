import styles from "@/styles/about.module.css";
import { about, currentFocus, education } from "@/data/about";

export default function About() {
  return (
    <section className={styles.about}>
      <header className={styles.header}>
        <p className={styles.kicker}>&lt;!-- about.html - Vani Bansal--&gt;</p>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.sub}>// who I am • what I do • where I build</p>
      </header>

      <div className={styles.card}>
        <p className={styles.body}>
          <span className={styles.highlight}>Hi! I'm {about.name}</span>, {about.description}
        </p>
      </div>

      <div className={styles.sectionHeader}>CURRENT FOCUS</div>
      <div className={styles.focusCard}>
        <div className={styles.focusGrid}>
          {currentFocus.map((item, i) => (
            <div key={item} className={styles.focusItem}>
              <span className={styles.focusIcon} aria-hidden>
                {i % 6 === 0 ? "🛠️" : i % 6 === 1 ? "🤖" : i % 6 === 2 ? "🌱" : i % 6 === 3 ? "💬" : i % 6 === 4 ? "⚡" : "✨"}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sectionHeader}>EDUCATION</div>
      <div className={styles.eduList}>
        {education.map((edu) => (
          <div key={`${edu.institute}-${edu.degree}`} className={styles.eduCard}>
            <div className={styles.eduTop}>
              <div>
                <div className={styles.eduInstitute}>{edu.institute}</div>
                <div className={styles.eduDegree}>{edu.degree}</div>
                {edu.focus && <div className={styles.eduFocus}>{edu.focus}</div>}
                {edu.details && (
                  <div className={styles.eduFocus}>
                    {edu.details.stream && <span>{edu.details.stream}</span>}
                    {edu.details.score && <span>{edu.details.score}</span>}
                  </div>
                )}
                {edu.description && (
                  <div className={styles.eduDesc}>{edu.description}</div>
                )}
              </div>
              <div className={styles.eduDuration}>{edu.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
