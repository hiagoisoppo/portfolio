"use client";

import { LiHTMLAttributes, useRef } from "react";
import style from "./navmenu.module.css";

export default function NavMenu() {
  return (
    <nav className={style.navmenu}>
      <ul>
        <li className={style.link}>
          <a href="#HOME">Início</a>
        </li>

        <li className={style.link}>
          <a href="#ABOUT">Sobre</a>
        </li>

        <li className={style.link}>
          <a href="#PROJECTS">Projetos</a>
        </li>

        <li className={style.link}>
          <a href="#CONTACT">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
