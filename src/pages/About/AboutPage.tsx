import styles from "./aboutpage.module.css";

export default function AboutPage() {
  return (
    <section id="ABOUT" className={styles.about}>
      <div className={styles.image}>FOTINHA</div>
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
              <li>PortuguÊs (NATIVO)</li>
              <li>INglês (B3)</li>
            </ul>
          </div>
          <div className={styles.technologies}>
            <h3>LINGUAGENS</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaSript</li>
              <li>Python</li>
              <li>CSharp</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
