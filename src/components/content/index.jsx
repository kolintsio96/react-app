import React from 'react';
import {Route} from 'react-router-dom'
import style from './index.module.scss';
import Profile from './profile'
import Messages from "./messages";
import News from "./news";
import Music from "./music";
import Settings from "./settings";
const Content = () => {
    return (
            <div className={style.content}>
                <Route path = '/profile' component = {Profile}/>
                <Route path = '/messages' component = {Messages}/>
                <Route path = '/news' component = {News}/>
                <Route path = '/music' component = {Music}/>
                <Route path = '/settings' component = {Settings}/>
            </div>
    )
}
export default Content