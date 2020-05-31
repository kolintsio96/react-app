import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import ProfileInfo from "./profileInfo";
import Posts from "./posts";
import Preloader from "../../common/preloader";
import {PostType, ProfileType} from "../../../types/types";

type OwnPropsType = {
    profile: ProfileType,
    status: string | null | undefined,
    bannerUrl: string | undefined,
    isOwner: boolean,
    setProfilePhoto: (photoFile: any) => any,
    saveProfileData: (data:any) => any,
    setStatus: (status: string | null) => any,
    posts: Array<PostType>,
    addLike: (id: number) => void
    addPost: () => void
}

type PropsType = OwnPropsType & any

const Profile:React.FC<PropsType> = ({profile, bannerUrl, setStatus, status, posts, addLike, addPost, isOwner, setProfilePhoto, saveProfileData}) => {
    if (!profile) return <Preloader/>;
    return (
        <div className={style.profile}>
            <Banner banner={bannerUrl} />
            <ProfileInfo saveProfileData={saveProfileData} setProfilePhoto={setProfilePhoto} userInfo={profile} setUserStatus={setStatus} status={status} isOwner={isOwner} />
            <Posts
                posts={posts}
                postPhoto={profile.photos.large}
                addLike={addLike}
                addPost={addPost}
            />
        </div>
    )
}
export default Profile