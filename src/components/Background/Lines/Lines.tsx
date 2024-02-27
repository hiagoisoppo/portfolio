import style from "./lines.module.css";

export default function Lines() {
  return (
    <>
      <div className={style.topRight}></div>
      <div className={style.topLeft}></div>
      <div className={style.leftTop}></div>
      <div className={style.leftBot}></div>
      <div className={style.botLeft}></div>
      <div className={style.botRight}></div>
      <div className={style.rightBot}></div>
      <div className={style.rightTop}></div>
    </>
  );
}
