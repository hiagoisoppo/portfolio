import Logo from "@/components/Logo/Logo";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <section id="HOME" className={styles.home}>
      <h1 className={styles.title}>
        Todo problema possui uma solução, só depende de quanto tempo e café você
        tem a me oferecer!
      </h1>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <a href="#ABOUT" className={styles.linkWrapper}>
        Explore meu portifólio
        <div className={styles.bar}></div>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
}
