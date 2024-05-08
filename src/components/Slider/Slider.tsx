import style from "./slider.module.css";
import { projects } from "@/data/projects";
import Image from "next/image";

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
              src={project.preview}
              alt={project.description}
              width={300}
              height={300}
            />
            <h3>
              {project.title}
            </h3>
            <p>{project.description}</p>
            <div>
              <button>Deploy</button>
              <button>Github</button>
            </div>
            
            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>
        )
      })}
    </div>
  );
};
