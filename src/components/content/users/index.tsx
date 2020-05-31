import React from 'react';
import style from './index.module.scss';
import User from "./user";
import Pagination from "../../common/Pagination";
import {PaginationType, UserType} from "../../../types/types";
type Props = {
    title: string
    users:Array<UserType>,
    pagination:PaginationType,
    inProgressFollowing:Array<number>,

    changePage: (pageNumber: number) => void,
    followingUser: (userId: number, followed: boolean) => void,

}
let Users:React.FC<Props> = ({users,pagination,changePage, ...props}) => {
    let mapUsers = users.map(user => {
        return <User key={user.id} id={user.id} user={user} followingUser={props.followingUser} inProgressFollowing={props.inProgressFollowing}/>
    });
    return (
        <div className={style.users}>
            <h2 className={style['users__title']}>{props.title}</h2>
            <div className={style['users__container']}>
                {mapUsers}
            </div>
            <Pagination totalItems={pagination.total} pageSize={pagination.limit} currentPage={pagination.current} handleEvent={changePage}/>
        </div>
    )
}


export default Users