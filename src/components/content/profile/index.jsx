import React from 'react';
import style from './index.module.scss';
import Banner from './banner'
import UserInfo from "./userInfo";
import Posts from "./posts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <Banner />
            <UserInfo />
            <Posts/>
        </div>
    )
}
export default Profile