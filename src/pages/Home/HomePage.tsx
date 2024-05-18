import Logo from "@/components/Logo/Logo";
import styles from "./homepage.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="HOME" className={styles.home}>
      <div className={styles.title}>
        <h1>
          Todo <span>problema</span> possui uma <span>solução</span>, só depende de quanto <span>tempo</span> e <span>café</span> você
          tem a me oferecer<span>.</span>
        </h1>
      </div>

      <div className={styles.image}>
        <Image 
          src="/assets/homePic.png"
          alt="Foto de perfil"
          width={2232}
          height={3007}
          className={styles.photo}
        />
        <span className={styles.symbol}></span>
        <span className={styles.emblemWrapper}>
          <span className={styles.emblem}></span>
        </span>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </div>
    </section>
  );
}
