import React from 'react';
import style from './index.module.scss'
const ProfileDetail = (props) => {
    let validPhone = props.propsUser.phone.trim().replace(/[\s,(,)]+/g, '');
    return (
        <div className={style['user-info__detail']}>
            <h2 className={style['user-info__name']}>{`${props.propsUser.name} ${props.propsUser.surname}`}}</h2>
            <p className={style['user-info__desc']}>Phone: <a href={`tel:${validPhone}`}>{props.propsUser.phone}</a></p>
            <p className={style['user-info__desc']}>Email: <a href={`mailto:${props.propsUser.email}`}>{props.propsUser.email}</a></p>
            <p className={style['user-info__desc']}>Date of Birth: {props.propsUser.birthday}</p>
            <p className={style['user-info__desc']}>City: {props.propsUser.city}</p>
            <p className={style['user-info__desc']}>Education: {props.propsUser.education}</p>
            <p className={style['user-info__desc']}>Web Site: <a target='_blank' rel='noopener noreferrer' href={props.propsUser.website} className={style['user-info__site']}>{props.propsUser.website}</a></p>
        </div>
    )
}
export default ProfileDetail