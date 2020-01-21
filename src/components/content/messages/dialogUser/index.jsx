import React from 'react';
import style from './index.module.scss';
import {NavLink} from 'react-router-dom'
const DialogUser = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={style.dialog__user_active} className={style.dialog__user}>{props.name}</NavLink>
        </div>
    )
}
export default DialogUser