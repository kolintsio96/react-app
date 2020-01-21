import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import ProfileInfo from "./profileInfo";
import Posts from "./posts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <Banner />
            <ProfileInfo />
            <Posts/>
        </div>
    )
}
export default Profile