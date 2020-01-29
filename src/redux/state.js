import userPhoto from './../img/avatar.png';
import banner from './../img/banner.jpg';
import logo from './../img/logo.png';
import postsAvatar from './../img/post--avatar.png';
import friendPhoto from './../img/friend.jpg';
import friendPhoto1 from './../img/friend1.png';
import friendPhoto2 from './../img/friend2.png';

const ADD_POST = 'ADD-POST',
    ADD_MESSAGE = 'ADD-MESSAGE',
    ADD_LIKE = 'ADD-LIKE',
    UPDATE_TEXT_POST = 'UPDATE-TEXT-POST',
    UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

export let addPostActionCreator = () => ({type: ADD_POST});
export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let addLikeActionCreator = (id) => ({type: ADD_LIKE, index: id});
export let updateTextPostActionCreator = (message) => ({type: UPDATE_TEXT_POST, newText: message});
export let updateTextMessageActionCreator = (message) => ({type: UPDATE_TEXT_MESSAGE, newText: message});

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
    _addPost() {
        if (!this._state.content.profilePage.post.newTextPost) return;
        let newPost = {
            id: this._state.content.profilePage.post.posts.length + 1,
            message: this._state.content.profilePage.post.newTextPost,
            likes: 0,
            photo: postsAvatar
        };
        this._state.content.profilePage.post.posts.push(newPost);
        this._state.content.profilePage.post.newTextPost = '';
        this._callSubscriber(this._state);
    },
    _addMessage() {
        if (!this._state.content.messagesPage.newMassageText) return;
        let newMessage = {
            id: this._state.content.messagesPage.messages.length + 1,
            message: this._state.content.messagesPage.newMassageText
        };
        this._state.content.messagesPage.messages.push(newMessage);
        this._state.content.messagesPage.newMassageText = '';
        this._callSubscriber(this._state);
    },
    _addLike(index) {
        this._state.content.profilePage.post.posts[index - 1].likes = this._state.content.profilePage.post.posts[index - 1].likes + 1;
        this._callSubscriber(this._state);
    },
    _updateTextPost(newText) {
        this._state.content.profilePage.post.newTextPost = newText;
        this._callSubscriber(this._state);
    },
    _updateTextMessage(newText) {
        this._state.content.messagesPage.newMassageText = newText
        this._callSubscriber(this._state);
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                this._addPost()
                break;
            }
            case ADD_MESSAGE: {
                this._addMessage()
                break;
            }
            case ADD_LIKE: {
                this._addLike(action.index)
                break;
            }
            case UPDATE_TEXT_POST: {
                this._updateTextPost(action.newText)
                break;
            }
            case UPDATE_TEXT_MESSAGE: {
                this._updateTextMessage(action.newText)
                break;
            }
            default: {
                console.log('default event')
            }
        }
    },

};


export default store;
