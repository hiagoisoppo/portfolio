import Logo from "@/components/Logo/Logo";
import styles from "./homepage.module.css";
import Image from "next/image";
import photo from '@/assets/photoTest.png';

export default function HomePage() {
  return (
    <section id="HOME" className={styles.home}>
      <div className={styles.title}>
        <h1>
          Todo problema possui uma solução, só depende de quanto tempo e café você
          tem a me oferecer!
        </h1>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </div>

      <div className={styles.image}>
        <Image 
          src={photo}
          alt="Foto de perfil"
          className={styles.photo}
        />
        <span className={styles.symbol}></span>
        <span className={styles.emblem}></span>
      </div>

      <a href="#SKILLS" className={styles.linkWrapper}>
        Explore meu portifólio
        <div className={styles.bar}></div>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
}
