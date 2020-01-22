import React from 'react';
import style from './index.module.scss';
const Banner = (props) => {
    return (
        <div className={style.banner}>
            <img src={props.banner} alt="banner" className={style.banner__img}/>
        </div>
    )
}
export default Banner