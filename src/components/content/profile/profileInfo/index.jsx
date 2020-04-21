import React from 'react';
import style from './index.module.scss'
import ProfilePhoto from "./profilePhoto";
import ProfileDetail from './profileDetail'
const ProfileInfo = ({userInfo, status, setUserStatus, isOwner, setProfilePhoto, saveProfileData}) => {
    return (
        <div className={style['user-info']}>
            <ProfilePhoto setProfilePhoto={setProfilePhoto} isOwner={isOwner} url={userInfo.photos.large} />
            <ProfileDetail saveProfileData={saveProfileData} userInfo={userInfo} isOwner={isOwner} status={status} setUserStatus={setUserStatus} />
        </div>
    )
}
export default ProfileInfo