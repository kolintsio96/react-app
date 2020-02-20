import Profile from "./index";
import {addPost, changeText, addLike, setProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileClassContainer extends React.Component {
    getData = (userId) => {
        let baseUrl = `https://social-network.samuraijs.com/api/1.0`;
        axios.get(`${baseUrl}/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    };
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.getData(userId);
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
const ProfileContainer = connect(mapStateToProps, {addPost, changeText, addLike, setProfile})(WirhUrlProfileClassContainer)
export default ProfileContainer