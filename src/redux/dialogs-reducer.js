const ADD_MESSAGE = '/dialogs/ADD-MESSAGE';

export let addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

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
    ];

let initialState = {
    dialogs: dialogUsers,
    messages: messagesArr,
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        default: {
            return state
        }
    }
}
export default dialogsReducer;