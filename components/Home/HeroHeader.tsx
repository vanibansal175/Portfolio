import styles from "@/styles/home.module.css";

type HeroHeaderProps = {
  name: string;
  subtitle: string;
  splitName?: boolean;
};

export default function HeroHeader({
  name,
  subtitle,
  splitName = true,
}: HeroHeaderProps) {
  const [first, ...rest] = name.split(" ");
  const last = rest.join(" ");

  return (
    <header className={styles.heroHeader}>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <h1 className={styles.heroTitle}>
        {splitName && last ? (
          <>
            <span>{first}</span>
            <span className={styles.accent}>{last}</span>
          </>
        ) : (
          name
        )}
      </h1>
      <div className={styles.heroDivider} aria-hidden />
    </header>
  );
}
