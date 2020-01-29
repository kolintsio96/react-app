import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import style from './index.module.scss';
import Profile from './profile'
import Messages from "./messages";
import News from "./news";
import Music from "./music";
import Settings from "./settings";
const Content = (props) => {
    return (
            <div className={style.content}>
                <Redirect from='/' to='/profile' />
                <Route path = '/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path = '/messages' render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch} />}/>
                <Route path = '/news' component = {News}/>
                <Route path = '/music' component = {Music}/>
                <Route path = '/settings' component = {Settings}/>
            </div>
    )
}
export default Content