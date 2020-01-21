import React from 'react';
import style from './index.module.scss'
const UserDetail = () => {
    return (
        <div className={style['user-info__detail']}>
            <h2 className={style['user-info__name']}>Volodymyr Kolintso</h2>
            <p className={style['user-info__desc']}><span>Date of Birth:</span><span className={style['user-info__birthday']}>10 Jul 96</span></p>
            <p className={style['user-info__desc']}><span>City:</span><span className={style['user-info__city']}>Kyiv</span></p>
            <p className={style['user-info__desc']}><span>Education:</span><span className={style['user-info__education']}>National Aviation University</span></p>
            <p className={style['user-info__desc']}><span>Web Site:</span><a target='_blank' rel='noopener noreferrer' href='https://github.com/kolintsio96'className={style['user-info__site']}>https://github.com/kolintsio96</a></p>
        </div>
    )
}
export default UserDetail