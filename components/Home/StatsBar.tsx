import styles from "@/styles/home.module.css";
import StatCard from "./StatCard";

type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
};

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className={styles.statsBar}>
      {stats.map((s) => (
        <StatCard key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}
