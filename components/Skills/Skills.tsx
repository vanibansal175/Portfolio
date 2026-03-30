import styles from "@/styles/skills.module.css";
import { skills } from "@/data/skills";

type Skill = { name: string; level: number; color: string };

type GroupProps = {
  title: string;
  items: Skill[];
};

function SkillGroup({ title, items }: GroupProps) {
  return (
    <div className={styles.group}>
      <div className={styles.groupTitle}>{title}</div>
      <div className={styles.rows}>
        {items.map((item) => (
          <div key={item.name} className={styles.row}>
            <div className={styles.label}>{item.name}</div>
            <div className={styles.barWrap}>
              <div className={styles.barTrack}>
                <div
                  className={`${styles.barFill} ${styles[item.color] || ""}`}
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
            <div className={`${styles.percent} ${styles[item.color] || ""}`}>
              {item.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.header}>
        <p className={styles.kicker}>// skills.json — tech stack & tools I actually use</p>
        <h1 className={styles.title}>Skills</h1>
        <p className={styles.sub}>{`{ "status": "always_learning", "passion": "immeasurable" }`}</p>
      </div>

      <div className={styles.grid}>
        <SkillGroup title="LANGUAGES" items={skills.languages} />
        <SkillGroup title="GENERATIVE AI & LLM ENGINEERING" items={skills.genai} />
        <SkillGroup title="AI · ML · DATA SCIENCE" items={skills.aiml} />
        <SkillGroup title="BACKEND & APIS" items={skills.backend} />
        <SkillGroup title="DATABASES" items={skills.databases} />
        <SkillGroup title="VECTOR DATABASES" items={skills.vector} />
        <SkillGroup title="DEVOPS & TOOLS" items={skills.devops} />
        <SkillGroup title="FRONTEND" items={skills.frontend} />
        <SkillGroup title="DESIGN" items={skills.design} />
        <SkillGroup title="DATA ANALYTICS" items={skills.analytics} />
      </div>

      <div className={styles.familiar}>
        <div className={styles.groupTitle}>ALSO FAMILIAR WITH</div>
        <div className={styles.chips}>
          {skills.familiar.map((tag) => (
            <span key={tag} className={styles.chip}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
