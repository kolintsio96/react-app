import React from 'react';
import style from './index.module.scss'
import ProfilePhoto from "./profilePhoto";
import ProfileDetail from './profileDetail'
const ProfileInfo = ({userInfo, status, setUserStatus}) => {
    return (
        <div className={style['user-info']}>
            <ProfilePhoto url={userInfo.photos.large} />
            <ProfileDetail {...userInfo} status={status} setUserStatus={setUserStatus}/>
        </div>
    )
}
export default ProfileInfo