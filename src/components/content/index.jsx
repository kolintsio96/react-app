import React from 'react';
import {Route} from 'react-router-dom'
import style from './index.module.scss';
import MessagesContainer from "./messages/messagesContainer";
import ProfileContainer from "./profile/profileContainer";
import UsersContainer from "./users/usersContainer";
import Login from "./login/loginContainer";
const Content = () => {
    return (
            <div className={style.content}>
                <Route path = '/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path = '/messages' render={() => <MessagesContainer/>}/>
                <Route path = '/users' render={() => <UsersContainer/>}/>
                <Route path = '/login' render={() => <Login/>}/>
            </div>
    )
}
export default Content