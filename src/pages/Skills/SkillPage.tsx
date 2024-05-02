import styles from "./skillspage.module.css";
import Image from 'next/image';
import iconNextJs from '@/assets/icons/nextjs.svg';
import iconReact from '@/assets/icons/react.svg';
import iconGit from '@/assets/icons/git.svg';
import iconDocker from '@/assets/icons/docker.svg';
import iconDotnet from '@/assets/icons/dotnet.svg';
import iconNodejs from '@/assets/icons/nodejs.svg';

export default function SkillsPage() {
  return (
    <section id="SKILLS" className={styles.skills}>
      <article className={styles.content}>
        <h2>Frontend</h2>
        <div className={styles.aboutWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
              nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
              amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
              in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
              pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
              in pede.
            </p>
            <ul>
              <li>
                <Image 
                  src={iconNextJs}
                  alt="Icone do NextJs"
                  className={styles.flags}
                  layout="center"
                />
                Next.js
              </li>
              <li>
                <Image 
                  src={iconReact}
                  alt="Icone do React"
                  className={styles.flags}
                />
                React
              </li>
            </ul>
        </div>
      </article>

      <article className={styles.content}>
        <h2>Backend</h2>
        <div className={styles.aboutWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
              nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
              amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
              in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
              pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
              in pede.
            </p>
            <ul>
              <li>
                <Image 
                  src={iconNodejs}
                  alt="Icone do NodeJs"
                  className={styles.flags}
                  layout="center"
                />
                NodeJs
              </li>
              <li>
                <Image 
                  src={iconDotnet}
                  alt="Icone do .Net"
                  className={styles.flags}
                />
                .Net
              </li>
            </ul>
        </div>
      </article>

      <article className={styles.content}>
        <h2>Segurança</h2>
        <div className={styles.aboutWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
              massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
              nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit
              amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat
              in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
              pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo
              in pede.

            </p>
            <ul>
              <li>
                <Image 
                  src={iconGit}
                  alt="Icone do Git"
                  className={styles.flags}
                  layout="center"
                />
                Git
              </li>
              <li>
                <Image 
                  src={iconDocker}
                  alt="Icone do Docker"
                  className={styles.flags}
                />
                Docker
              </li>
            </ul>
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
