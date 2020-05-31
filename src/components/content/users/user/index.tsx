import React from 'react';
import style from './index.module.scss';
import userDefaultPhoto from './../../../../img/user-default-photo.png'
import {NavLink} from "react-router-dom";
import {UserType} from '../../../../types/types';

type PropsType = {
    id: number,
    inProgressFollowing:Array<number>,
    followingUser: (userId: number, followed: boolean) => void,
    user:UserType,
}

const User:React.FC<PropsType> = ({followingUser, id, user, inProgressFollowing}) => {
    let followingUserEvent = () => {
        followingUser(id, user.followed);
    };
    return (
        <div className={style.user}>
            <div className={style['user__wrap']}>
                <NavLink to={`/profile/${id}`}>
                    <img src={user.photos.large ? user.photos.large : userDefaultPhoto} alt="userPhoto"
                         className={style['user__photo']}/>
                </NavLink>
                <button disabled={inProgressFollowing.indexOf(id) !== -1} className={style['user__follow']} onClick={followingUserEvent}>{user.followed ? 'Unfollow' : 'follow'}</button>
            </div>

            <div className={style['user__info']}>
                <div className={style['user__name']}>
                    <h3 className={style['user__fullname']}>{user.name}</h3>
                    <p className={style['user__status']}>{user.status}</p>
                </div>
            </div>
        </div>
    )
}
export default User