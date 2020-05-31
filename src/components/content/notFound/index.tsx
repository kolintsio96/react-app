import React from 'react';
import style from './index.module.scss';

let NotFound = () => {
    return (
        <div className={style['not-found']}>
            <h1 className={style['not-found__title']}>404 Not Found</h1>
        </div>
    )
}
export default NotFound