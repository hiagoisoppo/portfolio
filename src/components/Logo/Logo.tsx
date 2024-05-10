import style from './logo.module.css';

export default function Logo(){
  return(
    <div className={style.container}>
      <span className={style.hBotShadow}>
        <span className={style.hBot}></span>
      </span>
      <span className={style.hTop}></span>
    </div>
  )
}