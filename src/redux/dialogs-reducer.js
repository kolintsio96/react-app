const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
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
    ];

let initialState = {
    dialogs: dialogUsers,
    messages: messagesArr,
    newMessageText: ''
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (!state.newMessageText) return {...state};
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case UPDATE_TEXT_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default: {
            return state
        }
    }
}
export default dialogsReducer;