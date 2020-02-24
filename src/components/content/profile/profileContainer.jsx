import Profile from "./index";
import {addPost, changeText, addLike, getProfileData} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.props.getProfileData(userId);
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
        newPostText: state.profilePage.post.newTextPost
    }
}
let WirhUrlProfileClassContainer = withRouter(ProfileClassContainer)
const ProfileContainer = connect(mapStateToProps, {addPost, changeText, addLike, getProfileData})(WirhUrlProfileClassContainer)
export default ProfileContainer