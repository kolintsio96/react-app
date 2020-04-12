import React from 'react';
import style from './index.module.scss';

let Pagination = ({total, limit, current, changePage}) => {
    let count = total / limit,
        pages = [];
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }
    let mapPagination = pages.map(p => {
        return <span key={p}
                     className={current === p ? `${style['pagination__item']} ${style['pagination__item_active']}` : style['pagination__item']}
                     onClick={() => {changePage(p)}}>{p}</span>
    });

    return (
        <div className={style.pagination}>
            {mapPagination}
        </div>
    )
}


export default Pagination