import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './index.module.scss'
const Sidebar = () => {
    return (
            <nav className={style.nav}>
                <div className={style.nav__item}><NavLink to="/profile" className={style.nav__link}>Profile</NavLink></div>
                <div className={style.nav__item}><NavLink to="/messages" className={style.nav__link}>Messages</NavLink></div>
                <div className={style.nav__item}><NavLink to="/news" className={style.nav__link}>News</NavLink></div>
                <div className={style.nav__item}><NavLink to="/music" className={style.nav__link}>Music</NavLink></div>
                <div className={style.nav__item}><NavLink to="/settings" className={style.nav__link}>Settings</NavLink></div>
            </nav>
    )
}
export default Sidebar