"use client";

import { LegacyRef, useEffect, useRef, useState } from "react";
import { inView } from "framer-motion/dom"
import style from "./navmenu.module.css";

export default function NavMenu() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [markMenu, setMarkMenu] = useState<boolean[]>([true, false, false, false, false, false]);
  useEffect(() => {
    inView('section', ({target}) => {
      switch (target.id) {
        case 'HOME':
          setMarkMenu([true, false, false, false, false, false]);
          break;
        case 'SKILLS':
          setMarkMenu([false, true, false, false, false, false]);
          break;
        case 'PROJECTS':
          setMarkMenu([false, false, true, false, false, false]);
          break;
        case 'ABOUT':
          setMarkMenu([false, false, false, true, false, false]);
          break;
        case 'CERTIFICATES':
          setMarkMenu([false, false, false, false, true, false]);
          break;
        case 'CONTACT':
          setMarkMenu([false, false, false, false, false, true]);
          break;
        default:
          setMarkMenu([false, false, false, false, false, false]);
          break;
      }
    })
  })

  return (
    <>
      <div
        className={style.menu} 
        onClick={() => {
          setShowNav(!showNav)
        }}
      >
        <span className={`${style.menuTitle} ${showNav ? style.hiddenMenu : ''}`}>
          {['Início', 'Habilidades', 'Projetos', 'Sobre Mim', 'Certificações', 'Contatos'][markMenu.findIndex((value) => value == true)]}
        </span>
        <span className={`${style.bar} ${showNav ? style.hiddenMenu : ''}`}></span>
        <span className={`${style.arrow} ${showNav ? style.hiddenMenu : ''}`}></span>
      </div>
      <nav
        className={`dark ${style.navmenu} ${showNav ? '' : style.hiddenMenu}`} id="#NAVMENU"
      >
        <ul>
          <li
            className={`${style.link} ${markMenu[0] ? 'mark' : ''}`}
          >
            <a
              href="#HOME"
              onClick={ () => {
                setMarkMenu([true, false, false, false, false, false]);
                setShowNav(false);
              } }
            >
              Início
            </a>
          </li>

          <li className={`${style.link} ${markMenu[1] ? 'mark' : ''}`}>
            <a
              href="#SKILLS"
              onClick={ () => {
                setMarkMenu([false, true, false, false, false, false]);
                setShowNav(false);
              } }
            >
              Habilidades
            </a>
          </li>

          <li className={`${style.link} ${markMenu[2] ? 'mark' : ''}`}>
            <a
              href="#PROJECTS"
              onClick={ () => {
                setMarkMenu([false, false, true, false, false, false]);
                setShowNav(false);
              } }
            >
              Projetos
            </a>
          </li>

          <li className={`${style.link} ${markMenu[3] ? 'mark' : ''}`}>
            <a
              href="#ABOUT"
              onClick={ () => {
                setMarkMenu([false, false, false, true, false, false]);
                setShowNav(false);
              } }
            >
              Sobre Mim
            </a>
          </li>

          <li className={`${style.link} ${markMenu[4] ? 'mark' : ''}`}>
            <a
              href="#CERTIFICATES"
              onClick={ () => {
                setMarkMenu([false, false, false, false, true, false]);
                setShowNav(false);
              } }
            >
              Certificações
            </a>
          </li>

          <li className={`${style.link} ${markMenu[5] ? 'mark' : ''}`}>
            <a
              href="#CONTACT"
              onClick={ () => {
                setMarkMenu([false, false, false, false, false, true]);
                setShowNav(false);
              } }
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
