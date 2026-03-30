import styles from "@/styles/contact.module.css";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.header}>
        <p className={styles.kicker}>/* contact.css — let’s build something */</p>
        <h1 className={styles.title}>{contact.title}</h1>
        <p className={styles.sub}>{contact.subtitle}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.sectionTitle}>{contact.leftTitle}</div>
          <div className={styles.linkList}>
            {contact.links.map((link) => (
              <a key={link.label} className={`${styles.linkCard} ${styles[link.accent] || ""}`} href={link.href} target="_blank" rel="noreferrer">
                <div className={styles.linkIcon} />
                <div>
                  <div className={styles.linkLabel}>{link.label}</div>
                  <div className={styles.linkValue}>{link.value}</div>
                </div>
                <span className={styles.linkArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.sectionTitle}>{contact.rightTitle}</div>
          <form className={styles.form}>
            <label className={styles.field}>
              <span>// YOUR_NAME <b>*</b></span>
              <input type="text" placeholder="Divyanshu" />
            </label>
            <label className={styles.field}>
              <span>// YOUR_EMAIL <b>*</b></span>
              <input type="email" placeholder="apish@gmail.com" />
            </label>
            <label className={styles.field}>
              <span>// SUBJECT</span>
              <input type="text" placeholder="Reason...." />
            </label>
            <label className={styles.field}>
              <span>// MESSAGE <b>*</b></span>
              <textarea placeholder="your message" rows={5} />
            </label>
            <button type="button" className={styles.submit}>
              → send_message()
            </button>
            <p className={styles.hint}>
              // Powered by Formspree (lands directly in my inbox) :p
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
