import style from "./slider.module.css";
import { projects } from "./projects";
import Image from "next/image";

export default function Slider() {
  return (
    <div className={style.container}>
      {projects.map((project, index) => {
        return (
          <article key={index} className={style.project}>
            <div className={style.insideContainer}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className={style.tags}>
                {project.tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>

              <ul className={style.buttonWrapper}>
                {project.deploy ? (
                  <li>
                    <a href={project.deploy} target="_blank">
                      <Image
                        src="/assets/icons/website.svg"
                        alt="Deploy"
                        width={12}
                        height={12}
                      />
                      Deploy
                    </a>
                  </li>
                ) : null}
                {project.repository ? (
                  <li>
                    <a href={project.repository} target="_blank">
                      <Image
                        src="/assets/icons/github.svg"
                        alt="Repositorie"
                        width={12}
                        height={12}
                      />
                      Repositório
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
            
            <Image
              src="/assets/test.png"
              alt={project.description}
              width={1920}
              height={1080}
              className={style.image}
            />
            
            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>
        );
      })}
    </div>
  );
}
