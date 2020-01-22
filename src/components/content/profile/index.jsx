import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import ProfileInfo from "./profileInfo";
import Posts from "./posts";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Banner banner={props.state.bannerUrl} />
            <ProfileInfo userInfo={props.state.user} />
            <Posts posts={props.state.posts}/>
        </div>
    )
}
export default Profile