import Profile from "./index";
import {addLikeActionCreator, addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        bannerUrl: state.profilePage.bannerUrl,
        userInfo: state.profilePage.user,
        posts: state.profilePage.post.posts,
        newPostText: state.profilePage.post.newTextPost
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        changeText: (text) => {
            let action = updateTextPostActionCreator(text);
            dispatch(action)
        },
        addLike: (id) => {
            let action = addLikeActionCreator(id)
            dispatch(action);
        }
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer