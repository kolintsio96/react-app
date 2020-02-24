import Users from "./index";
import {connect} from "react-redux";
import {
    follow, followingUser, getUsers,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/preloader";

class UserContainer extends React.Component {
    changePage = (page) => {
        this.props.getUsers(page, this.props.pagination.limit);
    };
    componentDidMount() {
        this.props.getUsers(1, this.props.pagination.limit);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                changePage={this.changePage}
                users={this.props.users}
                followingUser = {this.props.followingUser}
                pagination={this.props.pagination}
                inProgressFollowing = {this.props.inProgressFollowing}

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
        isFetching: state.usersPage.isFetching,
        inProgressFollowing: state.usersPage.inProgressFollowing
    }
}
let mapDispatchToProps = {follow, unfollow, toggleFollowing, getUsers, followingUser}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer)
export default UsersContainer