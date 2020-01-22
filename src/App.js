import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import style from './index.module.scss'
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Sidebar from "./components/sidebar";

function App(props) {
    return (
        <BrowserRouter>
            <div className={style['app-wrapper']}>
                <Header state={props.state.header}/>
                <Sidebar state={props.state.sidebar}/>
                <Content state={props.state.content}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
