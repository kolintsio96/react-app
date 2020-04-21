import React from 'react';
import style from './index.module.scss'
import ProfileStatus from "../../status/ProfileStatusWithHooks";
const ProfileDetail = (props) => {
    return (
        <div className={style['user-info__detail']}>
            <div className={style['user-info__header']}>
                {props.fullName && <h2 className={style['user-info__name']}>{props.fullName}</h2>}
                <ProfileStatus isOwner={props.isOwner} setUserStatus={props.setUserStatus} status={props.status}/>
            </div>
            {props.aboutMe && <p className={style['user-info__desc']}>About me: {props.aboutMe}</p>}
            {props.lookingForAJob && <p className={style['user-info__desc']}>Job status: {props.lookingForAJobDescription}</p>}
            {props.contacts.length > 0 && <p className={style['user-info__desc']}>Web Site:
            {
                Object.keys(props.contacts).map((key, i) => {
                    return props.contacts[key] != null ? <a key={i} target='_blank' rel='noopener noreferrer' href={props.contacts[key]} className={style['user-info__site']}>{key}</a> : '';
                })
            }
            </p>}
        </div>
    )
}
export default ProfileDetail