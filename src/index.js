import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
serviceWorker.unregister();