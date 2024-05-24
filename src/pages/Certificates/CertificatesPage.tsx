import styles from "./certificatespage.module.css";
import SliderMotion from "@/components/Slider/SliderMotion";
import { certificates } from "../../../public/certificates";

export default function CertificatesPage() {
  return (
    <section id="CERTIFICATES" className={styles.certificates}>
      <SliderMotion slider={certificates}/>
    </section>
  );
}
