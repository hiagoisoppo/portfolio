import styles from "./contactpage.module.css";

export default function ContactPage() {
  return (
    <section id="CONTACT" className={styles.contact}>
      <h1>CONTACT</h1>
      <a href="#HOME" className={styles.linkWrapper}>
        Volte ao topo!
        <div className={styles.bar}></div>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
}
