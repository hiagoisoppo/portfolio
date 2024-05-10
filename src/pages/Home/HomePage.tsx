import Logo from "@/components/Logo/Logo";
import styles from "./homepage.module.css";
import Image from "next/image";
import photo from '@/assets/photoTest.png';

export default function HomePage() {
  return (
    <section id="HOME" className={styles.home}>
      <div className={styles.title}>
        <p>
          Todo <span>problema</span> possui uma <span>solução</span>, só depende de quanto <span>tempo</span> e <span>café</span> você
          tem a me oferecer<span>.</span>
        </p>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </div>

      <div className={styles.image}>
        <Image 
          src={photo}
          alt="Foto de perfil"
          className={styles.photo}
          width={400}
        />
        <span className={styles.symbol}></span>
        <span className={styles.emblemWrapper}>
          <span className={styles.emblem}></span>
        </span>
      </div>

      <a href="#SKILLS" className={styles.linkWrapper}>
        Explore meu portifólio
        <div>
          <div className={styles.bar}></div>
          <div className={styles.arrow}></div>
        </div>
      </a>
    </section>
  );
}
