import React from 'react';
import style from './index.module.scss';

type PropsType = {
    message: string | null,
    id: number
}

const Message:React.FC<PropsType> = (props) => {
    return (
        <div className={style.dialog}>
            <p className={style.dialog__message}>{props.message}</p>
        </div>
    )
}
export default Message