import Users from "./index";
import {connect} from "react-redux";
import {
    follow,
    setActivePagination,
    setTotalPagination,
    setUsers, toggleIsFetching,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/preloader";
import {usersAPI} from "../../../api";

class UserContainer extends React.Component {
    getUsers = (page = 1) => {

        this.props.toggleIsFetching(true);
        usersAPI.getUsersData(page, this.props.pagination.limit)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalPagination(data.totalCount);
                this.props.toggleIsFetching(false)
            })
    };
    changePage = (page) => {
        this.props.setActivePagination(page);
        this.getUsers(page);
    };
    componentDidMount() {
        this.props.setActivePagination(1);
        this.getUsers();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                changePage={this.changePage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                pagination={this.props.pagination}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: {
            total: state.usersPage.pagination.total,
            current: state.usersPage.pagination.current,
            limit: state.usersPage.pagination.limit,
        },
        isFetching: state.usersPage.isFetching
    }
}
let mapDispatchToProps = {follow, unfollow, setUsers, setActivePagination, setTotalPagination, toggleIsFetching}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer)
export default UsersContainer