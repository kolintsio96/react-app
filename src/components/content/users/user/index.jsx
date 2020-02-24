import React from 'react';
import style from './index.module.scss';
import userDefaultPhoto from './../../../../img/user-default-photo.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
    let followingUser = () => {
        props.followingUser(props.id, props.user.followed);
    };
    return (
        <div className={style.user}>
            <div className={style['user__wrap']}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.user.photos.large ? props.user.photos.large : userDefaultPhoto} alt="userPhoto"
                         className={style['user__photo']}/>
                </NavLink>
                <button disabled={props.inProgressFollowing.indexOf(props.id) !== -1} className={style['user__follow']} onClick={followingUser}>{props.user.followed ? 'Unfollow' : 'follow'}</button>
            </div>

            <div className={style['user__info']}>
                <div className={style['user__name']}>
                    <h3 className={style['user__fullname']}>{props.user.name}</h3>
                    <p className={style['user__status']}>{props.user.status}</p>
                </div>
                <div className={style['user__location']}>
                    <p className={style['user__country']}>{props.user.location ? props.user.location.country : ''}</p>
                    <p className={style['user__city']}>{props.user.location ? props.user.location.city : ''}</p>
                </div>
            </div>
        </div>
    )
}
export default User