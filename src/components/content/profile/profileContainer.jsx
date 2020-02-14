import Profile from "./index";
import {addPost, changeText, addLike, setProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";

class ProfileClassContainer extends React.Component {
    getData = (userId) => {
        let baseUrl = `https://social-network.samuraijs.com/api/1.0`;
        axios.get(`${baseUrl}/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    };
    componentDidMount() {
        this.getData(9);
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
const ProfileContainer = connect(mapStateToProps, {addPost, changeText, addLike, setProfile})(ProfileClassContainer)
export default ProfileContainer