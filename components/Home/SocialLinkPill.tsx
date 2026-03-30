import styles from "@/styles/home.module.css";

type SocialLinkPillProps = {
  label: string;
  icon: string;
  href: string;
};

export default function SocialLinkPill({ label, icon, href }: SocialLinkPillProps) {
  return (
    <a className={styles.socialPill} href={href} target="_blank" rel="noreferrer">
      <span className={`${styles.pillIcon} ${styles[icon] || ""}`} aria-hidden />
      <span>{label}</span>
    </a>
  );
}
