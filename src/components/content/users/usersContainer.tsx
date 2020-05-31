import Users from "./index";
import {connect} from "react-redux";
import {followingUser, getUsers} from "../../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/preloader";
import {compose} from "redux";
import {
    getUsersData, inProgressFollowing, isFetching,
    paginationCurrent,
    paginationLimit,
    paginationTotal
} from "../../../redux/selectors/users-selectors";
import {PaginationType, UserType} from "../../../types/types";
import { AppStateType } from "../../../redux/redux-store";

type MapPropsType = {
    pagination:PaginationType,
    isFetching: boolean,
    users:Array<UserType>,
    inProgressFollowing:Array<number>,
}

type MapDispatchType = {
    followingUser: (userId: number, followed: boolean) => void,
    getUsers: (page: number, limit: number) => void,

}

type OwnPropsType = {
    title: string

}

type PropsType = OwnPropsType & MapDispatchType & MapPropsType;

class UserContainer extends React.Component<PropsType> {
    changePage = (page: number) => {
        this.props.getUsers(page, this.props.pagination.limit);
    };
    componentDidMount() {
        let {pagination} = this.props;
        this.props.getUsers(pagination.current, pagination.limit);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                changePage={this.changePage}
                users={this.props.users}
                title={this.props.title}
                followingUser = {this.props.followingUser}
                pagination={this.props.pagination}
                inProgressFollowing = {this.props.inProgressFollowing}

            />
        </>

    }
}

let mapStateToProps = (state: AppStateType):MapPropsType => {
    return {
        users: getUsersData(state),
        pagination: {
            total: paginationTotal(state),
            current: paginationCurrent(state),
            limit: paginationLimit(state),
        },
        isFetching: isFetching(state),
        inProgressFollowing: inProgressFollowing(state)
    }
}
let mapDispatchToProps = {getUsers, followingUser}

export default compose(
    connect<MapPropsType, MapDispatchType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(UserContainer)