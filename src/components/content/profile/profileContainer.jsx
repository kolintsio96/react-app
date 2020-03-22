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
import {compose} from "redux";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login');
                return;
            }
        }
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
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId
    }
};
export default compose(withRouter, connect(mapStateToProps, {addPost, changeText, addLike, getProfileData, getUserStatus, setStatus}))(ProfileClassContainer)