import style from "./page.module.css";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import ProjectsPage from "@/pages/Projects/ProjectsPage";
import ContactPage from "@/pages/Contact/ContactPage";
import SkillsPage from "@/pages/Skills/SkillPage";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <main className={style.main}>
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
    </main>
  );
}
