import Image from "next/image";
import style from "./page.module.css";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import ProjectsPage from "@/pages/Projects/ProjectsPage";
import ContactPage from "@/pages/Contact/ContactPage";

export default function Home() {
  return (
    <main className={style.main}>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
