import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
export default rerenderEntireTree;
