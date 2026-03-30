import styles from "@/styles/home.module.css";
import HeroHeader from "./HeroHeader";
import RoleChips from "./Role";
import Intro from "./Intro";
import HeroActions from "./HeroActions";
import StatsBar from "./StatsBar";
import SocialLinks from "./SocialLinks";
import { links, roles, stats } from "@/data/home";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroHeader
        name="Divyanshu Prakash"
        subtitle="// hello world !! Welcome to my portfolio"
      />
      <RoleChips roles={roles} />
      <Intro />
      <HeroActions />
      <StatsBar stats={stats} />
      <SocialLinks links={links} />
    </section>
  );
}
