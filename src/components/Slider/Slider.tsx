import style from "./slider.module.css";
import { projects } from "@/data/projects";
import Image from "next/image";
import iconDeploy from "@/assets/icons/website.svg";
import iconRepo from "@/assets/icons/github.svg";
import test from "@/data/test.png"

export default function Slider() {
  return (
    <div className={style.container}>
      {projects.map((project, index) => {
        return (
          <article
            key={index}
            className={style.project}
          >
            <Image 
              src={test}
              alt={project.description}
              width={1920}
              height={1080}
              className={style.image}
            />

            <h3>
              {project.title}
            </h3>

            <p>{project.description}</p>

            <ul className={style.buttonWrapper}>
              {project.deploy ? (<li>
                <a href={project.deploy} target="_blank">
                  <Image src={iconDeploy} alt="Deploy" width={12} height={12} />
                  Deploy
                </a>
              </li>) : null}
              {project.repository ? (<li>
                <a href={project.repository} target="_blank">
                  <Image src={iconRepo} alt="Repositorie" width={12} height={12} />
                  Repositório
                </a>
              </li>) : null}
            </ul>

            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>
        )
      })}
    </div>
  );
};
