import style from './logo.module.css';

export default function Logo(){
  return(
    <div className={style.container}>
      <div className={style.triangle}></div>
    </div>
  )
}