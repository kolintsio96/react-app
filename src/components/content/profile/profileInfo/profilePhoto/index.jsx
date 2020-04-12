import React from 'react';
import style from './index.module.scss';
import defaultPhoto from './../../../../../img/user-default-photo.png'
const ProfilePhoto = ({url}) => {
    return (
        <div className={style['profile-photo']}>
            <img src={url ? url : defaultPhoto} alt="profilePhoto"/>
        </div>
    )
}
export default ProfilePhoto