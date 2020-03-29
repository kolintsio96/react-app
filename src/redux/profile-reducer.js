import postsAvatar from "../img/post--avatar.png";
import banner from "../img/banner.jpg";
import {profileAPI} from "../api";

const ADD_POST = 'ADD-POST',
    ADD_LIKE = 'ADD-LIKE',
    DELETE_POST = 'DELETE-LIKE',
    SET_PROFILE = 'SET_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS';

export let addPost = (data) => ({type: ADD_POST, data});
export let deletePost = (postId) => ({type: DELETE_POST, postId});
export let setProfile = (profile) => ({type: SET_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export let addLike = (id) => ({type: ADD_LIKE, id: id});

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
                dispatch(setUserStatus(response));
            })
    }
};
export let setStatus = (status) => {
    return (dispatch) => {
        profileAPI.setUserStatus(status)
            .then((response) => {
                if (response.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
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
    posts: postsArr,
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
        "photos": {
            "small": null,
            "large": null
        }
    },
    bannerUrl: banner,
    status: '',
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.data.newPostText,
                likes: 0,
                photo: postsAvatar
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case ADD_LIKE: {
            return {
                ...state,
                posts: state.post.posts.map(post => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            likes: post.likes + 1
                        }
                    }
                    return post;
                })
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: {...action.profile}
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: {
            return state
        }
    }
}

export default profileReducer;