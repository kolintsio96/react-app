import React from 'react';
import style from './index.module.scss'
const ProfileDetail = (props) => {
    return (
        <div className={style['user-info__detail']}>
            <h2 className={style['user-info__name']}>{props.name}</h2>
            <p className={style['user-info__desc']}>Date of Birth: {props.birthday}</p>
            <p className={style['user-info__desc']}>City: {props.city}</p>
            <p className={style['user-info__desc']}>Education: {props.education}</p>
            <p className={style['user-info__desc']}>Web Site: <a target='_blank' rel='noopener noreferrer' href='https://github.com/kolintsio96'className={style['user-info__site']}>{props.link}</a></p>
        </div>
    )
}
export default ProfileDetail