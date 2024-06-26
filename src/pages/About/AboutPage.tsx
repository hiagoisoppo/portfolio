import styles from "./aboutpage.module.css";
import Image from "next/image";
import Logo from "@/components/Logo/Logo";

export default function AboutPage() {
  return (
    <section id="ABOUT" className={styles.about}>
      <article className={styles.containerProfile}>
        <div className={styles.image}>
          <Image 
            src="/assets/aboutPic.png"
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

        <div className={styles.profileWrapper}>
          <div className={styles.languages}>
            <h3>IDIOMAS</h3>
            <ul>
              <li>
                <Image
                  src="/assets/flags/FlagBRA.png"
                  alt="Bandeira do Brasil"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Português
              </li>
              <li>
                <Image
                  src="/assets/flags/FlagUSA.png"
                  alt="Bandeira dos Estados Unidos"
                  className={styles.flags}
                  width={50}
                  height={50}
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
                  src="/assets/flags/iconFamily.png"
                  alt="Icone Representando a Familia"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Familia
              </li>
              <li>
                <Image
                  src="/assets/flags/iconCoding.png"
                  alt="Icone de uma matriz de código"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Codar
              </li>
              <li>
                <Image
                  src="/assets/flags/iconGaming.png"
                  alt="Icone de Video Game"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Jogos
              </li>
              <li>
                <Image
                  src="/assets/flags/iconMovie.png"
                  alt="Icone de tela de cinema e balde de pipoca"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Filmes
              </li>
              <li>
                <Image
                  src="/assets/flags/iconRpg.png"
                  alt="Icone de dado D20"
                  className={styles.flags}
                  width={50}
                  height={50}
                />
                Rpg
              </li>
            </ul>
          </div>
        </div>

      </article>
      
      <article className={styles.containerAbout}>
        <h2>SOBRE MIM</h2>
        <div className={styles.insideAbout}>
          <p>
            Olá, me chamo Hiago, possuo 26 anos, resido em Sombrio-SC com minha
            esposa e filho. Atualmente sou Desenvolvedor Web, mas a vida já me
            proporcionou vivência o suficiente para aceitar qualquer desafio
            confiando cegamente em minhas capacidades de adaptação e evolução.
            Minha história com a tecnologia começa cedo, aos 8 anos me tornando
            aficionado por hardware, mas logo essa história é manchada pelo
            pigmento da arte, mais especificamente o design, foram alguns anos
            até identificar que minha paixão estava no processo de criação, na
            busca pela solução e não na arte em si, e que essa paixão poderia
            ser aplicada em algo que eu amava ainda mais, a tecnologia. Desde
            então venho aprofundando meus conhecimentos como desenvolvedor,
            sempre buscando me atualizar com as novidades do mercado, mas nunca
            esquecendo de solidificar minhas bases, podendo assim ser uma peça
            chave em qualquer equipe que for aplicado.
          </p>
        </div>
      </article>
    </section>
  );
}
