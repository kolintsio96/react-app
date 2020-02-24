import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;