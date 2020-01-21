import React from 'react';
import style from './index.module.scss';
import avatar from './../../../../../img/avatar.png';
const Avatar = () => {
    return (
        <div className={style.avatar}>
            <img src={avatar} alt="avatar"/>
        </div>
    )
}
export default Avatar