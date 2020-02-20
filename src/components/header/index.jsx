import React from 'react';
import style from './index.module.scss';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={props.logo} alt="Logo" className={style.header__logo}/>
            <NavLink to={'/login'} >{props.isAuth ? props.login : 'Login'}</NavLink>
        </header>
    )
}
export default Header