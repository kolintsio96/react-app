import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    header: headerReducer,
    auth: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;