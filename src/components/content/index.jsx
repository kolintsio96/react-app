import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import style from './index.module.scss';
import MessagesContainer from "./messages/messagesContainer";
import ProfileContainer from "./profile/profileContainer";
import UsersContainer from "./users/usersContainer";
import LoginContainer from "./login/loginContainer";
const Content = () => {
    return (
            <div className={style.content}>
                <Redirect from='/' to='/profile' />
                <Route path = '/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path = '/messages' render={() => <MessagesContainer/>}/>
                <Route path = '/users' render={() => <UsersContainer/>}/>
                <Route path = '/login' render={() => <LoginContainer/>}/>
            </div>
    )
}
export default Content