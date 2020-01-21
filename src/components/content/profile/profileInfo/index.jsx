import React from 'react';
import style from './index.module.scss'
import profileImage from './../../../../img/avatar.png';
import ProfilePhoto from "./profilePhoto";
import ProfileDetail from './profileDetail'
const ProfileInfo = () => {
    return (
        <div className={style['user-info']}>
            <ProfilePhoto url={profileImage} />
            <ProfileDetail name="Volodymyr Kolintso" city="Kyiv" education="National Aviation University" birthday="10 Jul 1996" link="https://github.com/kolintsio96" />
        </div>
    )
}
export default ProfileInfo