import React from 'react';
import style from './index.module.scss';
import {NavLink} from 'react-router-dom';
type PropsType = {
    id: number,
    name: string | null
}
const DialogUser:React.FC<PropsType> = (props) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/messages/${props.id}`} activeClassName={style.dialog__user_active} className={style.dialog__user}>{props.name}</NavLink>
        </div>
    )
}
export default DialogUser