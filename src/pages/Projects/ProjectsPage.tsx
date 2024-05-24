import styles from "./projectspage.module.css";
import SliderMotion from "@/components/Slider/SliderMotion";
import { projects } from "./projects";

export default function ProjectsPage() {
  return (
    <section id="PROJECTS" className={styles.projects}>
      <SliderMotion slider={projects} />
    </section>
  );
}
