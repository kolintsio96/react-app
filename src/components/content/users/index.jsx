import React from 'react';
import style from './index.module.scss';
import User from "./user";
import Pagination from "../../common/Pagination";

let Users = ({users,pagination,changePage, ...props}) => {
    let mapUsers = users.map(user => {
        return <User key={user.id} id={user.id} user={user} followingUser={props.followingUser} inProgressFollowing={props.inProgressFollowing}/>
    });
    return (
        <div className={style.users}>
            <h2 className={style['users__title']}>Users</h2>
            <Pagination total={pagination.total} limit={pagination.limit} current={pagination.current} changePage={changePage}/>
            <div>
                {mapUsers}
            </div>
            <Pagination total={pagination.total} limit={pagination.limit} current={pagination.current} changePage={changePage}/>
        </div>
    )
}


export default Users