import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import ProfileInfo from "./profileInfo";
import Posts from "./posts";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Banner banner={props.bannerUrl ? props.bannerUrl : null} />
            <ProfileInfo userInfo={props.profile ? props.profile : {}} />
            <Posts
                posts={props.posts}
                addLike={props.addLike}
                addPost={props.addPost}
                changeText={props.changeText}
                newPostText={props.newPostText}
            />
        </div>
    )
}
export default Profile