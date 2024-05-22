import Image from "next/image";
import styles from "./contactpage.module.css";

export default function ContactPage() {
  return (
    <section id="CONTACT" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-imessage.svg"
            alt="Whatsapp icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>WhatsApp</h3>
          <p>Clique para entrar em contato atráves do meu telefone pessoal.</p>
          <a href="https://api.whatsapp.com/send?phone=5548920003855" target="_blank"></a>
        </div>

        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-linkedin.svg"
            alt="Linkedin icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Linkedin</h3>
          <p>Clique para acessar meu linkedin, e descobrir mais sobre minha carreira.</p>
          <a href="https://www.linkedin.com/in/hiagoisoppo/" target="_blank"></a>
        </div>

        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-instagram.svg"
            alt="Instagram icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Instagram</h3>
          <p>Fique a vontade para acessar meu instagram, e me conhecer melhor.</p>
          <a href="https://www.instagram.com/hiagoisoppo" target="_blank"></a>
        </div>

        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-email.svg"
            alt="Email icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Email</h3>
          <p>Clique para entrar em contato atráves do meu e-mail profissional.</p>
          <a href="mailto:hiagoisoppotrajano@gmail.com" target="_blank"></a>
        </div>

        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-githubalt.svg"
            alt="Github icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Github</h3>
          <p>Clique para acessar meu github, e ter acesso aos meus repositórios.</p>
          <a href="https://github.com/hiagoisoppo" target="_blank"></a>
        </div>

        <div className={styles.link}>
          <span className={styles.linkBar}></span>
          <Image 
            src="/assets/icons/rounded-appstorealt.svg"
            alt="Download icon"
            width={50}
            height={50}
            className={styles.linkIcon}
          />
          <h3>Currículo</h3>
          <p>Clique para acessar meu curriculo virtual, e fazer download do mesmo.</p>
          <a href="/CV-HiagoIsoppo.pdf" download></a>
        </div>
      </div>
    </section>
  );
}
