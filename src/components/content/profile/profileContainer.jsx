import Profile from "./index";
import {
    addPost,
    changeText,
    addLike,
    getProfileData,
    getUserStatus,
    setStatus
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 6039;
        this.props.getProfileData(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        bannerUrl: state.profilePage.bannerUrl,
        profile: state.profilePage.profile,
        posts: state.profilePage.post.posts,
        newPostText: state.profilePage.post.newTextPost,
        isAuth: state.auth.isAuth
    }
};
export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {addPost, changeText, addLike, getProfileData, getUserStatus, setStatus}))(ProfileClassContainer)