import postsAvatar from "../img/post--avatar.png";
import userPhoto from "../img/avatar.png";
import banner from "../img/banner.jpg";

const ADD_POST = 'ADD-POST',
    ADD_LIKE = 'ADD-LIKE',
    UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';


export let addPostActionCreator = () => ({type: ADD_POST});
export let addLikeActionCreator = (id) => ({type: ADD_LIKE, id: id});
export let updateTextPostActionCreator = (message) => ({type: UPDATE_TEXT_POST, newText: message});

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
        user: {
            photoUrl: userPhoto,
            name: 'Volodymyr',
            surname: 'Kolintso',
            website: 'https://github.com/kolintsio96',
            education: 'National Aviation University',
            email: 'kolintsiovolodymyr@gmail.com',
            city: 'Kyiv',
            birthday: '10 Jul 1996',
            phone: '+380 (93) 47 35 200',
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
        default: {
            return state
        }
    }
}

export default profileReducer;