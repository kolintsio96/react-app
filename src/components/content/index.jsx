import React from 'react';
import {Route} from 'react-router-dom'
import style from './index.module.scss';
import Profile from './profile'
import Messages from "./messages";
import News from "./news";
import Music from "./music";
import Settings from "./settings";
const Content = (props) => {
    return (
            <div className={style.content}>
                <Route path = '/profile' render={(() => <Profile state={props.state.profilePage}  />)}/>
                <Route path = '/messages' render={() => <Messages state={props.state.messagesPage} />}/>
                <Route path = '/news' component = {News}/>
                <Route path = '/music' component = {Music}/>
                <Route path = '/settings' component = {Settings}/>
            </div>
    )
}
export default Content