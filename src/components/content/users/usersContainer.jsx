import Users from "./index";
import {connect} from "react-redux";
import {
    follow, followingUser, getUsers,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import React from "react";
import Preloader from "../../common/preloader";
import {compose} from "redux";
import {
    getUsersData, inProgressFollowing, isFetching,
    paginationCurrent,
    paginationLimit,
    paginationTotal
} from "../../../redux/selectors/users-selectors";

class UserContainer extends React.Component {
    changePage = (page) => {
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
                followingUser = {this.props.followingUser}
                pagination={this.props.pagination}
                inProgressFollowing = {this.props.inProgressFollowing}

            />
        </>

    }
}

let mapStateToProps = (state) => {
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
let mapDispatchToProps = {follow, unfollow, toggleFollowing, getUsers, followingUser}

export default compose(connect(mapStateToProps, mapDispatchToProps))(UserContainer)