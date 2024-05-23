"use client";
import { useState } from 'react';
import Logo from '../../Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import style from './header.module.css';
import ThemeToogle from '@/components/ThemeToogle/ThemeToogle';

export default function Header(){
  return(
    <header className={style.header}>
      <div className={style.leftContainer}>
        <a className={style.logo} href='#HOME'>
          <Logo />
        </a>
        <span className={style.name}>
          <span>Hiago</span> Isoppo
        </span>
      </div>
      <div className={style.middleContainer}>
        <NavMenu />
      </div>
      <div className={style.rightContainer}>
        <ThemeToogle />
      </div>
    </header>
  )
}