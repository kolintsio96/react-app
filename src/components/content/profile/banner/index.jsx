import React from 'react';
import banner from './../../../../img/banner.jpg';
import style from './index.module.scss';
const Banner = () => {
    return (
        <div className={style.banner}>
            <img src={banner} alt="banner" className={style.banner__img}/>
        </div>
    )
}
export default Banner