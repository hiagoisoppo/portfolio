'use client'

import { useEffect, useState } from "react";
import style from "./console.module.css";
import getRandomConsoleInput from "@/utils/getRandomConsoleInput";

export default function Console() {
  const [consoleInput, setConsoleInput] = useState(['', '', '', '']);
  useEffect(() => {
    const timing = setInterval(() => {
      setConsoleInput([getRandomConsoleInput(), consoleInput[0], consoleInput[1], consoleInput[2]]);
    }, 150)

    return () => clearInterval(timing);
  }, [consoleInput])
  return (
    <>
      <div className={style.sidebar}></div>
      <div className={style.console}>
        <span>{consoleInput[3]}</span>
        <span>{consoleInput[2]}</span>
        <span>{consoleInput[1]}</span>
        <span>{consoleInput[0]}</span>
      </div>
    </>
  );
}
