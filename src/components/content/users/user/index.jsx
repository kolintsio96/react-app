import React from 'react';
import style from './index.module.scss';
import userDefaultPhoto from './../../../../img/user-default-photo.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    let followUser = () => {
        let baseUrl = `https://social-network.samuraijs.com/api/1.0`;
        axios.post(`${baseUrl}/follow/${props.id}`,null,{
                withCredentials: true,
                headers: {
                    'API-KEY': '32095882-97ef-40ca-9d97-61b1e6a6cf7f'
                }
            })
            .then(response => {
                console.log(response.data.resultCode)
                if(response.data.resultCode === 0) props.unfollow(props.id);
            })
    };
    let unFollowUser = () => {
        let baseUrl = `https://social-network.samuraijs.com/api/1.0`;
        axios.delete(`${baseUrl}/follow/${props.id}`,{
            withCredentials: true,
            headers: {
                'API-KEY': '32095882-97ef-40ca-9d97-61b1e6a6cf7f'
            }
        })
            .then(response => {
                console.log(response.data.resultCode)
                if(response.data.resultCode === 0) props.unfollow(props.id);
            })
    }
    return (
        <div className={style.user}>

            <div className={style['user__wrap']}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.user.photos.large ? props.user.photos.large : userDefaultPhoto} alt="userPhoto"
                         className={style['user__photo']}/>
                </NavLink>
                {props.user.followed ?
                    <button className={style['user__follow']} onClick={unFollowUser}>Unfollow</button> :
                    <button className={style['user__follow']} onClick={followUser}>Follow</button>
                }
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