import NavMenu from './NavMenu/NavMenu';
import style from './header.module.css';

export default function Header(){
  return(
    <header>
      <h1 className={style.h1}>Header</h1>
      <NavMenu />
    </header>
  )
}