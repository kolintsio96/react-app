import React from 'react';
import avatar from '../../../../../img/post--avatar.png';
import style from './index.module.scss'
const Post = (props) => {
    return (
        <div className={style['post-item']}>
            <div className={style['post-item__top']}>
                <div className={style['post-item__avatar']}>
                    <img src={avatar} alt="avatar" className={style['post-item__icon']}/>
                </div>
                <p className={style['post-item__text']}>{props.message}</p>
            </div>
            <div className={style['post-item__bottom']}>
                <p className={style['post-item__like']}>Likes {props.likes}</p>
            </div>
        </div>
    )
}
export default Post