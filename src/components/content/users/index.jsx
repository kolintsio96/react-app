import React from 'react';
import style from './index.module.scss';
import User from "./user";

let Users = (props) => {
    let count = props.pagination.total / props.pagination.limit,
        pages = [];
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }
    let mapUsers = props.users.map(user => {
        return <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow}/>
    });
    let mapPagination = pages.map(p => {
        return <span key={p}
                     className={props.pagination.current === p ? `${style['pagination__item']} ${style['pagination__item_active']}` : style['pagination__item']}
                     onClick={() => {props.changePage(p)}}>{p}</span>
    })
    return (
        <div className={style.users}>
            <h2 className={style['users__title']}>Users</h2>
            <div className={style.pagination}>
                {mapPagination}
            </div>
            {mapUsers}
            <div className={style.pagination}>
                {mapPagination}
            </div>
        </div>
    )
}


export default Users