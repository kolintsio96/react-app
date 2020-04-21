import postsAvatar from "../img/post--avatar.png";
import banner from "../img/banner.jpg";
import {profileAPI} from "../api";

const ADD_POST = '/profile/ADD-POST',
    ADD_LIKE = '/profile/ADD-LIKE',
    DELETE_POST = '/profile/DELETE-LIKE',
    SET_PROFILE = '/profile/SET_PROFILE',
    SET_USER_PHOTO = '/profile/SET_USER_PHOTO',
    SET_USER_STATUS = '/profile/SET_USER_STATUS';

export let addPost = (data) => ({type: ADD_POST, data});
export let deletePost = (postId) => ({type: DELETE_POST, postId});
export let setProfile = (profile) => ({type: SET_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export let setUserPhoto = (photos) => ({type: SET_USER_PHOTO, photos});
export let addLike = (id) => ({type: ADD_LIKE, id: id});

export let getProfileData = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileData(userId);
        dispatch(setProfile(response));
    }
};
export let getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(response));
    }
};
export let setStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.setUserStatus(status);
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
};
export let setProfilePhoto = (photoFile) => {
    return async (dispatch) => {
        let response = await profileAPI.setProfilePhoto(photoFile);
        if (response.resultCode === 0) {
            dispatch(setUserPhoto(response.data.photos));
        }
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
        case SET_USER_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default: {
            return state
        }
    }
}

export default profileReducer;