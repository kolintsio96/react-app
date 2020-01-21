import React from 'react';
import style from './index.module.scss';
const ProfilePhoto = (props) => {
    return (
        <div className={style['profile-photo']}>
            <img src={props.url} alt="profilePhoto"/>
        </div>
    )
}
export default ProfilePhoto