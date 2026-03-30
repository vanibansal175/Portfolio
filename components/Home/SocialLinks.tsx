import styles from "@/styles/home.module.css";
import SocialLinkPill from "./SocialLinkPill";

type Link = {
  label: string;
  icon: string;
  href: string;
};

type SocialLinksProps = {
  links: Link[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className={styles.socialLinks}>
      {links.map((l) => (
        <SocialLinkPill
          key={l.label}
          label={l.label}
          icon={l.icon}
          href={l.href}
        />
      ))}
    </div>
  );
}
