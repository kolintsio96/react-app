import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";
import * as serviceWorker from "./serviceWorker";

let rerenderEntireTree = (newState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={newState}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)
serviceWorker.unregister();