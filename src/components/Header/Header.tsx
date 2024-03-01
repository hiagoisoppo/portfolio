import Logo from '../Logo/Logo';
import NavMenu from './NavMenu/NavMenu';
import style from './header.module.css';

export default function Header(){
  return(
    <header className={style.header}>
      <div className={style.leftContainer}>
        <div className={style.logo}>
          <Logo />
        </div>
        <h1 className={style.h1}>Hiago Isoppo</h1>
      </div>
      <NavMenu />
    </header>
  )
}