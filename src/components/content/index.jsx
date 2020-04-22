import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import style from './index.module.scss';
import UsersContainer from "./users/usersContainer";
import withSuspense from "../../hoc/withSuspense";
import NotFound from "./notFound";
const ProfileContainer = React.lazy(() => import('./profile/profileContainer'));
const MessagesContainer = React.lazy(() => import('./messages/messagesContainer'));
const Login = React.lazy(() => import('./login/loginContainer'));
const Content = () => {
    return (
            <div className={style.content}>
                <Switch>
                    <Route exact path = '/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path = '/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path = '/messages' render={withSuspense(MessagesContainer)}/>
                    <Route path = '/users' render={() => <UsersContainer/>}/>
                    <Route path = '/login' render={withSuspense(Login)}/>
                    <Route path = '*' render={() => <NotFound/>}/>
                </Switch>
            </div>
    )
}
export default Content