import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import style from './index.module.scss'
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <div className={style['app-wrapper']}>
            <Header/>
            <BrowserRouter>
                <Sidebar/>
                <Content/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
