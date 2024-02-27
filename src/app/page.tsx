import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section id="HOME" className={styles.home}></section>
      <section id="ABOUT" className={styles.about}></section>
      <section id="PROJECTS" className={styles.projects}></section>
      <section id="CONTACT" className={styles.contact}></section>
    </main>
  );
}
