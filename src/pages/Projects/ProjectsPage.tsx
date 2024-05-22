import styles from "./projectspage.module.css";
import SliderMotion from "@/components/Slider/SliderMotion";

export default function ProjectsPage() {
  return (
    <section id="PROJECTS" className={styles.projects}>
      <SliderMotion />
    </section>
  );
}
