import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import styles from "./projectspage.module.css";

export default function ProjectsPage() {
  return (
    <section id="PROJECTS" className={styles.projects}>
      <Slider />
      <a href="#ABOUT" className={styles.linkWrapper}>
        Conheça mais sobre mim
        <div className={styles.bar}></div>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
}
