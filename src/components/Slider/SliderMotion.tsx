"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import style from "./slider.module.css";
import { projects } from "./projects";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

// Experimentando destilar o deslocamento do deslize e a velocida de em uma única variável, de modo que quanto menor a distância que um usuário percorreu, mais velocidade ele precisa registrar como um deslize. Deve acomodar movimentos mais longos e movimentos curtos sem ter verificações binárias apenas nos limites de distância e velocidade> 0.
const swipeConfidenceThreshold = 50000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function SliderMotion() {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIndex = wrap(0, projects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={style.container}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", stiffness: 600, damping: 2000, duration: 0.001},
            opacity: { duration: 0.3 }
          }}
        >
            <article className={style.project}>
              <div className={style.insideContainer}>
                <h3>{projects[projectIndex].title}</h3>

                <p>{projects[projectIndex].description}</p>

                <ul className={style.tags}>
                  {projects[projectIndex].tags.map((tag, index) => {
                    return <li key={index}>{tag}</li>;
                  })}
                </ul>

                <ul className={style.buttonWrapper}>
                  {projects[projectIndex].deploy ? (
                    <li>
                      <a href={projects[projectIndex].deploy} target="_blank">
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
                  {projects[projectIndex].repository ? (
                    <li>
                      <a
                        href={projects[projectIndex].repository}
                        target="_blank"
                      >
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
                <Image
                  src={projects[projectIndex].preview}
                  alt={projects[projectIndex].description}
                  width={1920}
                  height={1080}
                  className={style.image}
                />
              </div>
              <span className={style.symbol}></span>
              <span className={style.emblem}></span>
            </article>
        </motion.div>
      </AnimatePresence>
      <div className={style.next} onClick={() => paginate(1)}>
        {">"}
      </div>
      <div className={style.prev} onClick={() => paginate(-1)}>
        {"<"}
      </div>
    </>
  );
}
