"use client";
import ToogleTheme from '@/contexts/ToogleTheme';
import Logo from '../../Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import style from './header.module.css';

export default function Header(){
  return(
    <header className={style.header}>
      <div className={style.leftContainer}>
        <div className={style.logo}>
          <Logo />
        </div>
        <span className={style.name}>
          <span>Hiago</span> Isoppo
        </span>
      </div>
      {/* <NavMenu /> */}
      <button
        onClick={() => {
          ToogleTheme();
        }}
      >
        TOOGLE
      </button>
    </header>
  )
}