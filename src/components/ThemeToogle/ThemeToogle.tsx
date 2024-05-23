"use client";

import ToogleTheme from '@/contexts/ToogleTheme';
import style from './themeToogle.module.css';

export default function ThemeToogle(){
  return(
    <div
      className={style.container}
      onClick={() => {
        ToogleTheme();
      }}
    >
      <span className={style.hBotShadow}>
        <span className={style.hBot}></span>
      </span>
      <span className={style.hTop}></span>
    </div>
  )
}