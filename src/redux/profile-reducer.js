import postsAvatar from "../img/post--avatar.png";
import banner from "../img/banner.jpg";

const ADD_POST = 'ADD-POST',
    ADD_LIKE = 'ADD-LIKE',
    SET_PROFILE = 'SET_PROFILE',
    UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

export let addPost = () => ({type: ADD_POST});
export let setProfile = (profile) => ({type: SET_PROFILE, profile});
export let addLike = (id) => ({type: ADD_LIKE, id: id});
export let changeText = (message) => ({type: UPDATE_TEXT_POST, newText: message});

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
            "userId": 2,
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
            if (!state.post.newTextPost) return {...state};
            let newPost = {
                id: state.post.posts.length + 1,
                message: state.post.newTextPost,
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
        default: {
            return state
        }
    }
}

export default profileReducer;