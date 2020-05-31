import Profile from "./index";
import {
    addPost,
    addLike,
    getProfileData,
    getUserStatus,
    setStatus, setProfilePhoto, saveProfileData
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getUserId, isAuth} from "../../../redux/selectors/auth-selectors";
import {getBanner, getPosts, getProfile, getStatus} from "../../../redux/selectors/profile-selectors";
import {PostType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";



type MapPropsType = {
    bannerUrl: string | null,
    profile: PropsType,
    status: string | null | undefined,
    posts: Array<PostType>,
    isAuth: boolean,
    authorizedUserId: string,
}

type MapDispatchType = {
    addLike: (id: number) => void
    addPost: () => void,
    getProfileData:(userId: any) => any,
    getUserStatus: (userId: any) => any,
    setProfilePhoto: (photoFile: any) => any,
    saveProfileData: (data:any) => any,
    setStatus: (status: string | null) => any,
}
type MatchParams =  {
    userId: string | undefined
}
type PropsType = MapPropsType & MapDispatchType & RouteComponentProps<MatchParams>

class ProfileClassContainer extends React.Component<PropsType> {
    isOwner(){
        return !this.props.match.params.userId || parseInt(this.props.match.params.userId) === parseInt(this.props.authorizedUserId);
    }
    refreshProfile() {
        let userId = this.props.match.params.userId ? parseInt(this.props.match.params.userId) : '';
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login');
                return;
            }
        }
        this.props.getProfileData(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps:PropsType, prevState:any) {
        if(prevProps.authorizedUserId !== this.props.authorizedUserId && this.props.authorizedUserId === null){
            this.props.history.push('/login');
            return;
        }
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} status={this.props.status} setStatus={this.props.setStatus} setProfilePhoto={this.props.setProfilePhoto} saveProfileData={this.props.saveProfileData} isOwner={this.isOwner()}/>
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        bannerUrl: getBanner(state),
        profile: getProfile(state),
        status: getStatus(state),
        posts: getPosts(state),
        isAuth: isAuth(state),
        authorizedUserId: getUserId(state),
    }
};
export default compose(withRouter, connect(mapStateToProps, {addPost, addLike, getProfileData, getUserStatus, setStatus, setProfilePhoto, saveProfileData}))(ProfileClassContainer)