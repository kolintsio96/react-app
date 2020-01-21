import React from 'react';
import logo from '../../img/logo.png';
import style from './index.module.scss';
const Header = (props) => {
    console.log(props)
    return (
        <header className={style.header}>
            <img src={logo} alt="Logo" className={style.header__logo}/>
        </header>
    )
}
export default Header