import React from 'react';
import style from './index.module.scss';
const Message = (props) => {
    return (
        <div className={style.dialog}>
            <p className={style.dialog__message}>{props.message}</p>
        </div>
    )
}
export default Message