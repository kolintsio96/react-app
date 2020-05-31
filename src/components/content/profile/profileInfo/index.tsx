import React from 'react';
import style from './index.module.scss'
import ProfilePhoto from "./profilePhoto";
import ProfileDetail from './profileDetail'
import {ProfileType} from "../../../../types/types";

type PropsType = {
    userInfo: ProfileType,
    status: string | null | undefined,
    setUserStatus: (status: string) => void,
    isOwner: boolean,
    setProfilePhoto: (photoFile: any) => any,
    saveProfileData: (data:any) => any
}

const ProfileInfo:React.FC<PropsType> = ({userInfo, status, setUserStatus, isOwner, setProfilePhoto, saveProfileData}) => {
    return (
        <div className={style['user-info']}>
            <ProfilePhoto setProfilePhoto={setProfilePhoto} isOwner={isOwner} url={userInfo.photos.large} />
            <ProfileDetail saveProfileData={saveProfileData} userInfo={userInfo} isOwner={isOwner} status={status} setUserStatus={setUserStatus} />
        </div>
    )
}
export default ProfileInfo