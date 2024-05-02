import styles from "./aboutpage.module.css";
import Image from 'next/image';
import photo from '@/assets/photoTest.png';
import flagBRA from '@/assets/FlagBRA.png';
import flagUSA from '@/assets/FlagUSA.png';
import iconTs from '@/assets/IconTs.png';
import iconCsharp from '@/assets/IconCsharp.png';
import iconJs from '@/assets/IconJs.png';
import iconPy from '@/assets/IconPy.png';
import iconHtml from '@/assets/IconHtml.png';
import iconSass from '@/assets/IconSass.png';
import iconFamily from '@/assets/iconFamily.png';
import iconGame from '@/assets/iconGaming.png';
import iconRpg from '@/assets/iconRpg.png';
import iconCode from '@/assets/iconCoding.png';
import iconMovie from '@/assets/iconMovie.png';

export default function AboutPage() {
  return (
    <section id="ABOUT" className={styles.about}>
      <div className={styles.image}>
        <Image 
          src={photo}
          alt="Foto de perfil"
          className={styles.photo}
        />
        <span className={styles.symbol}></span>
        <span className={styles.emblem}></span>
      </div>
      <article className={styles.content}>
        <div className={styles.aboutWrapper}>
          <h2>SOBRE MIM</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
            nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
            amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
            in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
            pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
            in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue
            blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
            pellentesque fermentum. Maecenas adipiscing ante non diam sodales
            hendrerit.
          </p>
        </div>
        <div className={styles.languagesWrapper}>
          <div className={styles.languages}>
            <h3>IDIOMAS</h3>
            <ul>
              <li>
                <Image 
                  src={flagBRA}
                  alt="Bandeira do Brasil"
                  className={styles.flags}
                  layout="center"
                />
                Português
              </li>
              <li>
                <Image 
                  src={flagUSA}
                  alt="Bandeira dos Estados Unidos"
                  className={styles.flags}
                />
                Inglês
              </li>
            </ul>
          </div>
          <div className={styles.hobbies}>
            <h3>HOBBIES</h3>
            <ul>
              <li>
                <Image 
                  src={iconFamily}
                  alt="Icone Representando a Familia"
                  className={styles.flags}
                />
                Familia
              </li>
              <li>
                <Image 
                  src={iconGame}
                  alt="Icone de Video Game"
                  className={styles.flags}
                />
                Jogos
              </li>
              <li>
                <Image 
                  src={iconRpg}
                  alt="Icone de dado D20"
                  className={styles.flags}
                />
                Rpg
              </li>
              <li>
                <Image 
                  src={iconCode}
                  alt="Icone de uma matriz de código"
                  className={styles.flags}
                />
                Codar
              </li>
              <li>
                <Image 
                  src={iconMovie}
                  alt="Icone de tela de cinema e balde de pipoca"
                  className={styles.flags}
                />
                Filmes
              </li>
            </ul>
          </div>
        </div>
      </article>
      <a href="#PROJECTS" className={styles.linkWrapper}>
        Conheça meus projetos.
        <div className={styles.bar}></div>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
}
