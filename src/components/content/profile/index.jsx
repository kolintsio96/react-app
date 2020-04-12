import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import ProfileInfo from "./profileInfo";
import Posts from "./posts";
import Preloader from "../../common/preloader";

const Profile = ({profile, bannerUrl, setStatus, status, posts, addLike, addPost}) => {
    if (!profile) return <Preloader/>;
    return (
        <div className={style.profile}>
            <Banner banner={bannerUrl} />
            <ProfileInfo userInfo={profile} setUserStatus={setStatus} status={status} />
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