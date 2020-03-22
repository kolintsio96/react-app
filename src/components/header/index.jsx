import React from 'react';
import style from './index.module.scss';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={props.logo} alt="Logo" className={style.header__logo}/>
            {
                props.isAuth ?
                    <div className={style['header__auth']}>
                        <NavLink to={`/profile`} >{props.login}</NavLink>
                        <button className={style['header__logout']} onClick={props.logout}>Log out</button>
                    </div> :
                    <NavLink className={style['header__logout']} to={'/login'} >Login</NavLink>
            }
        </header>
    )
}
export default Header