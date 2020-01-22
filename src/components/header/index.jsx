import React from 'react';
import style from './index.module.scss';
const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={props.state.logo} alt="Logo" className={style.header__logo}/>
        </header>
    )
}
export default Header