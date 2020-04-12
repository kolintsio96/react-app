import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import * as serviceWorker from "./serviceWorker";
import SocialApp from "./App";

ReactDOM.render(
    <SocialApp/>, document.getElementById('root')
);
serviceWorker.unregister();