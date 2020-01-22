import React from 'react';
import style from './index.module.scss'
const Friend = (props) => {
    return (
        <div className={style.friends__item}>
            <div className={style.friends__icon}>
                <img className={style.friends__img} src={props.url} alt=""/>
            </div>
            <p className={style.friends__name}>{props.name}</p>
        </div>
    )
}
export default Friend