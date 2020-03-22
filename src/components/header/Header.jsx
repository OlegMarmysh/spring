import React, { useState } from 'react'
import style from './Header.module.scss'
import styleMenu from './menu/Menu.module.scss'
import Menu from './menu/Menu'
import logo from '../../image/logo.svg'
import '../../index.scss'
import { useDispatch } from 'react-redux'
import { loginOut } from '../redux/loginPageReducer'

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  const menuBurgerClassActive = isHidden ? style.menuBurgerActive : style.menuBurger
  const menuActive = isHidden ? styleMenu.menuActive : styleMenu.menu
  const toggleBurgerMenu = () => {
    setIsHidden(!isHidden)
  }
  if (isHidden) {
    document.querySelector('body').classList.add('lock')
  } else {
    document.querySelector('body').classList.remove('lock')
  }
  const dispatch = useDispatch()
  const onLogOut = () => {
    dispatch(loginOut())
  }
  return (
    <header>
      <div className={style.wrapperBlock}>
        <div className={style.headerBody}>
          <div className={style.logo}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={menuBurgerClassActive} onClick={toggleBurgerMenu}>
            <span />
          </div>
          <Menu menu={menuActive} />
        </div>
        <div>
          <button onClick={onLogOut}>Log out</button>
        </div>
      </div>
    </header>
  )
}

export default Header
