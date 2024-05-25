"use client";

import ToogleTheme, {DetectTheme} from '@/contexts/ToogleTheme';
import style from './themeToogle.module.css';
import { useEffect } from 'react';

export default function ThemeToogle(){
  useEffect(() => {
    DetectTheme();
  })
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