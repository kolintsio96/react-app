import postsAvatar from "../img/post--avatar.png";
import banner from "../img/banner.jpg";
import {profileAPI} from "../api";

const ADD_POST = 'ADD-POST',
    ADD_LIKE = 'ADD-LIKE',
    SET_PROFILE = 'SET_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

export let addPost = (data) => ({type: ADD_POST, data});
export let setProfile = (profile) => ({type: SET_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export let addLike = (id) => ({type: ADD_LIKE, id: id});
export let changeText = (message) => ({type: UPDATE_TEXT_POST, newText: message});

export let getProfileData = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileData(userId)
            .then(response => {
                dispatch(setProfile(response));
            })
    }
};
export let getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                let status = response ? response : '';
                dispatch(setUserStatus(status));
            })
    }
};
export let setStatus = (status) => {
    return (dispatch) => {
        profileAPI.setUserStatus(status)
            .then(() => {
                dispatch(setUserStatus(status));
            })
    }
};

let postsArr = [
        {
            id: 1,
            message: 'Post 1',
            likes: 1,
            photo: postsAvatar
        },
        {
            id: 2,
            message: 'Post 2',
            likes: 32,
            photo: postsAvatar
        },
        {
            id: 3,
            message: 'Post 3',
            likes: 10,
            photo: postsAvatar
        }
    ];

let initialState = {
        post: {
            posts: postsArr,
            newTextPost: '',
        },
        profile: {
            "aboutMe": null,
            "contacts": {
                "facebook": null,
                "website": null,
                "vk": null,
                "twitter": null,
                "instagram": null,
                "youtube": null,
                "github": null,
                "mainLink": null
            },
            "lookingForAJob": false,
            "lookingForAJobDescription": null,
            "fullName": null,
            "userId": 6039,
            'status': null,
            "photos": {
                "small": null,
                "large": null
            }
        },
        bannerUrl: banner
    };

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.post.posts.length + 1,
                message: action.data.newPostText,
                likes: 0,
                photo: postsAvatar
            };
            return {
                ...state,
                post:{
                    ...state.post,
                    newTextPost: '',
                    posts:[...state.post.posts, newPost]
                }
            };
        }
        case ADD_LIKE: {
            return  {
                ...state,
                post:{
                    ...state.post,
                    posts:state.post.posts.map(post => {
                        if(post.id === action.id){
                            return {
                                 ...post,
                                likes: post.likes + 1
                            }
                        }
                        return post;
                    })
                }
            };
        }
        case UPDATE_TEXT_POST: {
            return {
                ...state,
                post:{
                    ...state.post,
                    newTextPost: action.newText
                }
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile:{...action.profile}
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                profile:{
                    ...state.profile,
                    status: action.status
                }
            };
        }
        default: {
            return state
        }
    }
}

export default profileReducer;