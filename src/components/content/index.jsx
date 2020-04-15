import React from 'react';
import {Route} from 'react-router-dom'
import style from './index.module.scss';
import UsersContainer from "./users/usersContainer";
import withSuspense from "../../hoc/withSuspense";
const ProfileContainer = React.lazy(() => import('./profile/profileContainer'));
const MessagesContainer = React.lazy(() => import('./messages/messagesContainer'));
const Login = React.lazy(() => import('./login/loginContainer'));
const Content = () => {
    return (
            <div className={style.content}>
                <Route path = '/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                <Route path = '/messages' render={withSuspense(MessagesContainer)}/>
                <Route path = '/users' render={() => <UsersContainer/>}/>
                <Route path = '/login' render={withSuspense(Login)}/>
            </div>
    )
}
export default Content