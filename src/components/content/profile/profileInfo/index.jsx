import React from 'react';
import style from './index.module.scss'
import ProfilePhoto from "./profilePhoto";
import ProfileDetail from './profileDetail'
const ProfileInfo = (props) => {
    return (
        <div className={style['user-info']}>
            <ProfilePhoto url={props.userInfo.photos.large} />
            <ProfileDetail {...props.userInfo}/>
        </div>
    )
}
export default ProfileInfo