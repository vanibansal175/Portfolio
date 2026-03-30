import styles from "@/styles/home.module.css";

type Role = {
  label: string;
  color?: "green" | "pink" | "blue" | "purple";
};

type RoleChipsProps = {
  roles: Role[];
};

export default function RoleChips({ roles }: RoleChipsProps) {
  return (
    <div className={styles.roleChips}>
      {roles.map((role) => (
        <span
          key={role.label}
          className={`${styles.roleChip} ${role.color ? styles[role.color] : ""}`}
        >
          <span
            className={`${styles.chipDot} ${role.color ? styles[`${role.color}Dot`] : ""}`}
            aria-hidden
          />
          {role.label}
        </span>
      ))}
    </div>
  );
}
