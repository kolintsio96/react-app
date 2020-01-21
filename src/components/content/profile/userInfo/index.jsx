import React from 'react';
import style from './index.module.scss'
import Avatar from "./avatar";
import UserDetail from './detail'
const UserInfo = () => {
    return (
        <div className={style['user-info']}>
            <Avatar />
            <UserDetail />
        </div>
    )
}
export default UserInfo