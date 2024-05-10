import Image from "next/image";
import styles from "./contactpage.module.css";
import iconGithub from "@/assets/icons/rounded-githubalt.svg";
import iconCurriculum from "@/assets/icons/rounded-appstorealt.svg";
import iconEmail from "@/assets/icons/rounded-email.svg";
import iconWhatsapp from "@/assets/icons/rounded-imessage.svg";
import iconLinkedin from "@/assets/icons/rounded-linkedin.svg";
import iconInstagram from "@/assets/icons/rounded-instagram.svg";

export default function ContactPage() {
  return (
    <section id="CONTACT" className={styles.contact}>
      <div className={styles.container}>
        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconWhatsapp}
            alt="Whatsapp icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>WhatsApp</h3>
          <p>Clique para entrar em contato atráves do meu telefone pessoal.</p>
          <span>+55 48 92000-3855</span>
          <a href="https://api.whatsapp.com/send?phone=5548920003855" target="_blank"></a>
        </article>

        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconLinkedin}
            alt="Linkedin icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Linkedin</h3>
          <p>Clique para acessar meu linkedin, e descobrir mais sobre minha carreira.</p>
          <span>linkedin.com/in/hiagoisoppo</span>
          <a href="https://www.linkedin.com/in/hiagoisoppo/" target="_blank"></a>
        </article>

        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconInstagram}
            alt="Instagram icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Instagram</h3>
          <p>Fique a vontade para acessar meu instagram, e me conhecer melhor.</p>
          <span>instagram.com/hiagoisoppo</span>
          <a href="https://www.instagram.com/hiagoisoppo" target="_blank"></a>
        </article>
      </div>
      <div className={styles.container}>
        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconEmail}
            alt="Email icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Email</h3>
          <p>Clique para entrar em contato atráves do meu e-mail profissional.</p>
          <span>hiagoisoppotrajano@gmail.com</span>
          <a href="mailto:hiagoisoppotrajano@gmail.com" target="_blank"></a>
        </article>

        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconGithub}
            alt="Github icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Github</h3>
          <p>Clique para acessar meu github, e ter acesso aos meus repositórios de código.</p>
          <span>github.com/hiagoisoppo</span>
          <a href="https://github.com/hiagoisoppo" target="_blank"></a>
        </article>

        <article className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src={iconCurriculum}
            alt="Download icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Currículo</h3>
          <p>Clique para acessar meu curriculo virtual, e fazer download do mesmo.</p>
          <span>hiagoisoppo.dev/cv</span>
          <a href="/CV-HiagoIsoppo.pdf" download></a>
        </article>
      </div>
      <a href="#HOME" className={styles.linkWrapper}>
        Volte ao topo!
        <div>
          <div className={styles.arrow}></div>
          <div className={styles.bar}></div>
        </div>
      </a>
    </section>
  );
}
