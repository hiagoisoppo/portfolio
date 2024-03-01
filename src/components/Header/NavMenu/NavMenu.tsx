"use client";

import { useEffect, useState } from "react";
import { inView } from "framer-motion/dom"
import style from "./navmenu.module.css";

export default function NavMenu() {
  const [markMenu, setMarkMenu] = useState<boolean[]>([true, false, false, false]);
  useEffect(() => {
    inView('section', ({target}) => {
      switch (target.id) {
        case 'HOME':
          setMarkMenu([true, false, false, false]);
          break;
        case 'ABOUT':
          setMarkMenu([false, true, false, false]);
          break;
        case 'PROJECTS':
          setMarkMenu([false, false, true, false]);
          break;
        case 'CONTACT':
          setMarkMenu([false, false, false, true]);
          break;
        default:
          setMarkMenu([false, false, false, false]);
          break;
      }
    })
  })

  return (
    <nav className={style.navmenu}>
      <ul>
        <li
          className={`${style.link} ${markMenu[0] ? style.mark : ''}`}
        >
          <a
            href="#HOME"
            onClick={ () => setMarkMenu([true, false, false, false]) }
            
          >
            Início
          </a>
        </li>

        <li className={`${style.link} ${markMenu[1] ? style.mark : ''}`}>
          <a
            href="#ABOUT"
            onClick={ () => setMarkMenu([false, true, false, false]) }
          >
            Sobre
          </a>
        </li>

        <li className={`${style.link} ${markMenu[2] ? style.mark : ''}`}>
          <a
            href="#PROJECTS"
            onClick={ () => setMarkMenu([false, false, true, false]) }
          >
            Projetos
          </a>
        </li>

        <li className={`${style.link} ${markMenu[3] ? style.mark : ''}`}>
          <a
            href="#CONTACT"
            onClick={ () => setMarkMenu([false, false, false, true]) }
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
