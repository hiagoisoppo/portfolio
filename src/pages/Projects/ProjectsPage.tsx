import styles from "./projectspage.module.css";

export default function ProjectsPage() {
  return (
    <section id="PROJECTS" className={styles.projects}>
      <h1>PROJECTS</h1>
      <a href="#ABOUT" className={styles.linkWrapper}>
        <div className={styles.arrow}></div>
        <div className={styles.bar}></div>
        Explore meu portifólio
      </a>
    </section>
  );
}
