import React from 'react';
import style from './index.module.scss';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={props.logo} alt="Logo" className={style.header__logo}/>
            {
                props.isAuth ?
                    <NavLink to={`/profile/${props.id}`} >{props.login}</NavLink> :
                    <NavLink to={'/login'} >Login</NavLink>
            }
        </header>
    )
}
export default Header