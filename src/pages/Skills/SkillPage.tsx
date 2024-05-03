import styles from "./skillspage.module.css";
import Image from 'next/image';
import iconNextJs from '@/assets/icons/nextjs.svg';
import iconReact from '@/assets/icons/react.svg';
import iconGit from '@/assets/icons/git.svg';
import iconDocker from '@/assets/icons/docker.svg';
import iconDotnet from '@/assets/icons/dotnet.svg';
import iconNodejs from '@/assets/icons/nodejs.svg';
import iconTypescript from '@/assets/icons/file-type-typescript-official.svg';
import iconCsharp from '@/assets/icons/csharp.svg';
import iconPython from '@/assets/icons/python.svg';
import iconRabbitMQ from '@/assets/icons/rabbitmq.svg';
import iconMySQL from '@/assets/icons/file-type-mysql.svg';
import iconSQLServer from '@/assets/icons/sql-database-sql-azure.svg';
import iconFirebase from '@/assets/icons/file-type-firebase.svg';
import iconJwt from '@/assets/icons/jsonwebtokens.svg';
import iconMocha from '@/assets/icons/file-type-mocha.svg';
import iconCypress from '@/assets/icons/cypress.svg';
import iconJest from '@/assets/icons/file-type-jest.svg';
import iconXunit from '@/assets/icons/xUnit.png';
import iconRtl from '@/assets/icons/octopus-128x128.png';
import iconGpt from '@/assets/icons/ChatGPT_logo.png';
import iconRedux from '@/assets/icons/redux-original.svg';
import iconJs from '@/assets/icons/javascript.svg';
import iconHtml from '@/assets/icons/file-type-html.svg';
import iconCss from '@/assets/icons/css3.svg';
import iconSass from '@/assets/icons/sass.svg';
import iconTail from '@/assets/icons/tailwind-css.svg';
import iconBoot from '@/assets/icons/bootstrap.svg';
import iconSequelize from '@/assets/icons/sequelize.svg';


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
              <li>
                <Image 
                  src={iconRedux}
                  alt="Icone do Redux"
                  className={styles.flags}
                />
                Redux
              </li>
              <li>
                <Image 
                  src={iconJs}
                  alt="Icone do Javascript"
                  className={styles.flags}
                />
                Javascript
              </li>
              <li>
                <Image 
                  src={iconHtml}
                  alt="Icone do HTML"
                  className={styles.flags}
                />
                HTML
              </li>
              <li>
                <Image 
                  src={iconCss}
                  alt="Icone do CSS"
                  className={styles.flags}
                />
                CSS
              </li>
              <li>
                <Image 
                  src={iconSass}
                  alt="Icone do Sass"
                  className={styles.flags}
                />
                Sass
              </li>
              <li>
                <Image 
                  src={iconTail}
                  alt="Icone do TailwindCss"
                  className={styles.flags}
                />
                Tailwind
              </li>
              <li>
                <Image 
                  src={iconBoot}
                  alt="Icone do Bootstrap"
                  className={styles.flags}
                />
                Bootstrap
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
                  src={iconTypescript}
                  alt="Icone do Typescript"
                  className={styles.flags}
                />
                Typescript
              </li>
              <li>
                <Image 
                  src={iconNodejs}
                  alt="Icone do NodeJs"
                  className={styles.flags}
                />
                NodeJs
              </li>
              <li>
                <Image 
                  src={iconCsharp}
                  alt="Icone do Csharp"
                  className={styles.flags}
                />
                C#
              </li>
              <li>
                <Image 
                  src={iconDotnet}
                  alt="Icone do .Net"
                  className={styles.flags}
                />
                .Net
              </li>
              <li>
                <Image 
                  src={iconPython}
                  alt="Icone do Python"
                  className={styles.flags}
                />
                Python
              </li>
              <li>
                <Image 
                  src={iconRabbitMQ}
                  alt="Icone do RabbitMQ"
                  className={styles.flags}
                />
                RabbitMQ
              </li>
              <li>
                <Image 
                  src={iconMySQL}
                  alt="Icone do MySQL"
                  className={styles.flags}
                />
                MySQL
              </li>
              <li>
                <Image 
                  src={iconSQLServer}
                  alt="Icone do SQLServer"
                  className={styles.flags}
                />
                SQLServer
              </li>
              <li>
                <Image 
                  src={iconFirebase}
                  alt="Icone do Firebase"
                  className={styles.flags}
                />
                Firebase
              </li>
              <li>
                <Image 
                  src={iconSequelize}
                  alt="Icone do Sequelize"
                  className={styles.flags}
                />
                Sequelize
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
              <li>
                <Image 
                  src={iconJwt}
                  alt="Icone do JsonWebToken"
                  className={styles.flags}
                />
                JWT
              </li>
              <li>
                <Image 
                  src={iconGpt}
                  alt="Icone do ChatGPT"
                  className={styles.flags}
                />
                ChatGPT
              </li>
              <li>
                <Image 
                  src={iconRtl}
                  alt="Icone do TestingLibrary"
                  className={styles.flags}
                />
                RTL
              </li>
              <li>
                <Image 
                  src={iconJest}
                  alt="Icone do Jest"
                  className={styles.flags}
                />
                Jest
              </li>
              <li>
                <Image 
                  src={iconMocha}
                  alt="Icone do Mocha"
                  className={styles.flags}
                />
                Mocha
              </li>
              <li>
                <Image 
                  src={iconCypress}
                  alt="Icone do Cypress"
                  className={styles.flags}
                />
                Cypress
              </li>
              <li>
                <Image 
                  src={iconXunit}
                  alt="Icone do xUnit"
                  className={styles.flags}
                />
                xUnit
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
