import userPhoto from './../img/avatar.png';
import banner from './../img/banner.jpg';
import logo from './../img/logo.png';
import postsAvatar from './../img/post--avatar.png';
import friendPhoto from './../img/friend.jpg';
import friendPhoto1 from './../img/friend1.png';
import friendPhoto2 from './../img/friend2.png';
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


let dialogUsers = [
        {
            id: 1,
            name: 'Andrew'
        },
        {
            id: 2,
            name: 'Igor'
        },
        {
            id: 3,
            name: 'Vlad'
        },
    ],
    messagesArr = [
        {
            id: 1,
            message: 'Hello'
        },
        {
            id: 2,
            message: 'Hello'
        },
        {
            id: 3,
            message: 'Hello'
        },
    ],
    sidebarLinks = [
        {
            id: 1,
            title: 'Profile',
            url: '/profile'
        },
        {
            id: 2,
            title: 'Messages',
            url: '/messages'
        },
        {
            id: 3,
            title: 'News',
            url: '/news'
        },
        {
            id: 4,
            title: 'Music',
            url: '/music'
        },
        {
            id: 5,
            title: 'Settings',
            url: '/settings'
        },
    ],
    sidebarFriends = [
        {
            id: 1,
            name: 'Andrew',
            photoUrl: friendPhoto
        },
        {
            id: 2,
            name: 'Igor',
            photoUrl: friendPhoto1
        },
        {
            id: 3,
            name: 'Vlad',
            photoUrl: friendPhoto2
        }
    ],
    postsArr = [
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


let store = {
    _state: {
        content: {
            profilePage: {
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
            },
            messagesPage: {
                dialogs: dialogUsers,
                messages: messagesArr,
                newMassageText: ''
            }
        },
        header: {
            logo: logo
        },
        sidebar: {
            links: sidebarLinks,
            friends: sidebarFriends
        }
    },
    _callSubscriber() {},

    subscriber(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.content.profilePage = profileReducer(this._state.content.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.content.messagesPage = dialogsReducer(this._state.content.messagesPage, action);
        this._callSubscriber(this._state);
    },
};


export default store;
