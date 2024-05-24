"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import style from "./slider.module.css";
import { createPublicKey } from "crypto";

export interface SliderProps {
  stack: string;
  title: string;
  description: string;
  deploy: string;
  repository: string;
  url: string;
  preview: string;
  tags: string[];
  institution: string;
  date: string;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

// Experimentando destilar o deslocamento do deslize e a velocida de em uma única variável, de modo que quanto menor a distância que um usuário percorreu, mais velocidade ele precisa registrar como um deslize. Deve acomodar movimentos mais longos e movimentos curtos sem ter verificações binárias apenas nos limites de distância e velocidade> 0.
const swipeConfidenceThreshold = 50000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function SliderMotion({ slider }: { slider: SliderProps[] }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const projectIndex = wrap(0, slider.length, page);
  const projectIndex2 = wrap(0, slider.length, page+1);
  const projectIndex3 = wrap(0, slider.length, page+2);


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
            x: {
              type: "tween",
              stiffness: 600,
              damping: 2000,
              duration: 0.001,
            },
            opacity: { duration: 0.3 },
          }}
        >
          <article className={style.project}>
            <div className={style.insideContainer}>
              <h3>{slider[projectIndex].title}</h3>

              <p>
                {slider[projectIndex].institution &&
                slider[projectIndex].date ? (
                  <span>{`${slider[projectIndex].institution} - ${slider[projectIndex].date}`}</span>
                ) : null}
                {slider[projectIndex].description}
              </p>

              <ul className={style.tags}>
                {slider[projectIndex].tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>

              <ul className={style.buttonWrapper}>
                {slider[projectIndex].deploy ? (
                  <li>
                    <a href={slider[projectIndex].deploy} target="_blank">
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
                {slider[projectIndex].repository ? (
                  <li>
                    <a href={slider[projectIndex].repository} target="_blank">
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
              <div className={style.imageWrapper}>
                <a
                  href={
                    slider[projectIndex].url
                      ? slider[projectIndex].url
                      : slider[projectIndex].deploy
                      ? slider[projectIndex].deploy
                      : slider[projectIndex].repository
                  }
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/click.svg"
                    alt="Icon Click to visit the project"
                    width={50}
                    height={50}
                  />
                </a>
                <Image
                  src={slider[projectIndex].preview}
                  alt={slider[projectIndex].description}
                  width={1920}
                  height={1080}
                  className={style.image}
                />
              </div>
            </div>
            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>
          

          <article className={`${style.project} ${style.projectB}`}>
            <div className={style.insideContainer}>
              <h3>{slider[projectIndex2].title}</h3>

              <p>
                {slider[projectIndex2].institution &&
                slider[projectIndex2].date ? (
                  <span>{`${slider[projectIndex2].institution} - ${slider[projectIndex2].date}`}</span>
                ) : null}
                {slider[projectIndex2].description}
              </p>

              <ul className={style.tags}>
                {slider[projectIndex2].tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>

              <ul className={style.buttonWrapper}>
                {slider[projectIndex2].deploy ? (
                  <li>
                    <a href={slider[projectIndex2].deploy} target="_blank">
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
                {slider[projectIndex2].repository ? (
                  <li>
                    <a href={slider[projectIndex2].repository} target="_blank">
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
              <div className={style.imageWrapper}>
                <a
                  href={
                    slider[projectIndex2].url
                      ? slider[projectIndex2].url
                      : slider[projectIndex2].deploy
                      ? slider[projectIndex2].deploy
                      : slider[projectIndex2].repository
                  }
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/click.svg"
                    alt="Icon Click to visit the project"
                    width={50}
                    height={50}
                  />
                </a>
                <Image
                  src={slider[projectIndex2].preview}
                  alt={slider[projectIndex2].description}
                  width={1920}
                  height={1080}
                  className={style.image}
                />
              </div>
            </div>
            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>

          <article className={`${style.project} ${style.projectB}`}>
            <div className={style.insideContainer}>
              <h3>{slider[projectIndex3].title}</h3>

              <p>
                {slider[projectIndex3].institution &&
                slider[projectIndex3].date ? (
                  <span>{`${slider[projectIndex3].institution} - ${slider[projectIndex3].date}`}</span>
                ) : null}
                {slider[projectIndex3].description}
              </p>

              <ul className={style.tags}>
                {slider[projectIndex3].tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
              </ul>

              <ul className={style.buttonWrapper}>
                {slider[projectIndex3].deploy ? (
                  <li>
                    <a href={slider[projectIndex3].deploy} target="_blank">
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
                {slider[projectIndex3].repository ? (
                  <li>
                    <a href={slider[projectIndex3].repository} target="_blank">
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
              <div className={style.imageWrapper}>
                <a
                  href={
                    slider[projectIndex3].url
                      ? slider[projectIndex3].url
                      : slider[projectIndex3].deploy
                      ? slider[projectIndex3].deploy
                      : slider[projectIndex3].repository
                  }
                  target="_blank"
                >
                  <Image
                    src="/assets/icons/click.svg"
                    alt="Icon Click to visit the project"
                    width={50}
                    height={50}
                  />
                </a>
                <Image
                  src={slider[projectIndex3].preview}
                  alt={slider[projectIndex3].description}
                  width={1920}
                  height={1080}
                  className={style.image}
                />
              </div>
            </div>
            <span className={style.symbol}></span>
            <span className={style.emblem}></span>
          </article>


        </motion.div>
      </AnimatePresence>
      <div className={style.next} onClick={() => paginate(1)}>
        <span className={style.bar}></span>
        <span className={style.arrow}></span>
      </div>
      <div className={style.prev} onClick={() => paginate(-1)}>
        <span className={style.arrow}></span>
        <span className={style.bar}></span>
      </div>
    </>
  );
}
