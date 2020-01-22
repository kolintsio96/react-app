import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './index.module.scss'
const NavItem = (props) => {
    return (
        <div className={style.nav__item}><NavLink to={props.url} activeClassName={style.active} className={style.nav__link}>{props.title}</NavLink></div>
    )
}
export default NavItem