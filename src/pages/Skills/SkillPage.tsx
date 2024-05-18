import styles from "./skillspage.module.css";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <section id="SKILLS" className={styles.skills}>
      <article className={styles.content}>
        <h2>Frontend</h2>
        <div className={styles.aboutWrapper}>
          <p>
            Como desenvolvedor frontend minha abordagem é centrada no usuário
            final, a usabilidade e fluidez de uma página são os pilares para um
            frontend de qualidade. Não são em todos os casos de uso que o
            frontend precisa encher os olhos, mas em todos os casos é necessário
            que ele seja intuitivo.
          </p>
          <ul>
            <li>
              <Image
                src="/assets/icons/git.svg"
                alt="Icone do Git"
                width={256}
                height={256}
                className={styles.flags}
              />
              Git
            </li>
            <li>
              <Image
                src="/assets/icons/nextjs.svg"
                alt="Icone do NextJs"
                width={256}
                height={256}
                className={styles.flags}
              />
              Next.js
            </li>
            <li>
              <Image
                src="/assets/icons/react.svg"
                alt="Icone do React"
                width={256}
                height={256}
                className={styles.flags}
              />
              React
            </li>
            <li>
              <Image
                src="/assets/icons/redux-original.svg"
                alt="Icone do Redux"
                width={256}
                height={256}
                className={styles.flags}
              />
              Redux
            </li>
            <li>
              <Image
                src="/assets/icons/jsonwebtokens.svg"
                alt="Icone do JsonWebToken"
                width={256}
                height={256}
                className={styles.flags}
              />
              JWT
            </li>
            <li>
              <Image
                src="/assets/icons/javascript.svg"
                alt="Icone do Javascript"
                width={256}
                height={256}
                className={styles.flags}
              />
              Javascript
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-html.svg"
                alt="Icone do HTML"
                width={256}
                height={256}
                className={styles.flags}
              />
              HTML
            </li>
            <li>
              <Image
                src="/assets/icons/css3.svg"
                alt="Icone do CSS"
                width={256}
                height={256}
                className={styles.flags}
              />
              CSS
            </li>
            <li>
              <Image
                src="/assets/icons/sass.svg"
                alt="Icone do Sass"
                width={256}
                height={256}
                className={styles.flags}
              />
              Sass
            </li>
            <li>
              <Image
                src="/assets/icons/tailwind-css.svg"
                alt="Icone do TailwindCss"
                width={256}
                height={256}
                className={styles.flags}
              />
              Tailwind
            </li>
            <li>
              <Image
                src="/assets/icons/bootstrap.svg"
                alt="Icone do Bootstrap"
                width={256}
                height={256}
                className={styles.flags}
              />
              Bootstrap
            </li>
            <li>
              <Image
                src="/assets/icons/octopus-128x128.png"
                alt="Icone do TestingLibrary"
                width={256}
                height={256}
                className={styles.flags}
              />
              RTL
            </li>
            <li>
              <Image
                src="/assets/icons/cypress.svg"
                alt="Icone do Cypress"
                width={256}
                height={256}
                className={styles.flags}
              />
              Cypress
            </li>
          </ul>
        </div>
      </article>

      <article className={styles.content}>
        <h2>Backend</h2>
        <div className={styles.aboutWrapper}>
          <p>
            Atuando como desenvolvedor backend, meu foco está em três pilares
            que considero essenciais: segurança, performance e escalabilidade. A
            união desses três pilares, aliado a um código limpo e altamente
            desacoplado, resulta em um backend sólido e de qualidade.
          </p>
          <ul>
            <li>
              <Image
                src="/assets/icons/docker.svg"
                alt="Icone do Docker"
                width={256}
                height={256}
                className={styles.flags}
              />
              Docker
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-typescript-official.svg"
                alt="Icone do Typescript"
                width={256}
                height={256}
                className={styles.flags}
              />
              Typescript
            </li>
            <li>
              <Image
                src="/assets/icons/nodejs.svg"
                alt="Icone do NodeJs"
                width={256}
                height={256}
                className={styles.flags}
              />
              NodeJs
            </li>
            <li>
              <Image
                src="/assets/icons/csharp.svg"
                alt="Icone do Csharp"
                width={256}
                height={256}
                className={styles.flags}
              />
              C#
            </li>
            <li>
              <Image
                src="/assets/icons/dotnet.svg"
                alt="Icone do ASP.Net"
                width={256}
                height={256}
                className={styles.flags}
              />
              ASP.Net
            </li>
            <li>
              <Image
                src="/assets/icons/python.svg"
                alt="Icone do Python"
                width={256}
                height={256}
                className={styles.flags}
              />
              Python
            </li>
            <li>
              <Image
                src="/assets/icons/rabbitmq.svg"
                alt="Icone do RabbitMQ"
                width={256}
                height={256}
                className={styles.flags}
              />
              RabbitMQ
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-mysql.svg"
                alt="Icone do MySQL"
                width={256}
                height={256}
                className={styles.flags}
              />
              MySQL
            </li>
            <li>
              <Image
                src="/assets/icons/sql-database-sql-azure.svg"
                alt="Icone do SQLServer"
                width={256}
                height={256}
                className={styles.flags}
              />
              SQLServer
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-firebase.svg"
                alt="Icone do Firebase"
                width={256}
                height={256}
                className={styles.flags}
              />
              Firebase
            </li>
            <li>
              <Image
                src="/assets/icons/sequelize.svg"
                alt="Icone do Sequelize"
                width={256}
                height={256}
                className={styles.flags}
              />
              Sequelize
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-mocha.svg"
                alt="Icone do Mocha"
                width={256}
                height={256}
                className={styles.flags}
              />
              Mocha
            </li>
            <li>
              <Image
                src="/assets/icons/file-type-jest.svg"
                alt="Icone do Jest"
                width={256}
                height={256}
                className={styles.flags}
              />
              Jest
            </li>
            <li>
              <Image
                src="/assets/icons/xUnit.png"
                alt="Icone do xUnit"
                width={256}
                height={256}
                className={styles.flags}
              />
              xUnit
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
