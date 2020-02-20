import React from 'react';
import style from './index.module.scss';
import defaultPhoto from './../../../../../img/user-default-photo.png';

const Post = (props) => {
    let addLike = () => {
        props.addLike(props.id)
    }
    return (
        <div className={style['post-item']}>
            <div className={style['post-item__top']}>
                <div className={style['post-item__avatar']}>
                    <img src={props.photo ? props.photo : defaultPhoto} alt="avatar" className={style['post-item__icon']}/>
                </div>
                <p className={style['post-item__text']}>{props.message}</p>
            </div>
            <div className={style['post-item__bottom']}>
                <p onClick={addLike} className={style['post-item__like']}>Likes {props.likes}</p>
            </div>
        </div>
    )
}
export default Post