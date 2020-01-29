import React from 'react';
import style from './index.module.scss'
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import Sidebar from "./components/sidebar";

function App(props) {
    return (
        <div className={style['app-wrapper']}>
            <Header state={props.state.header}/>
            <Sidebar state={props.state.sidebar}/>
            <Content
                state={props.state.content}
                dispatch={props.dispatch}
            />
            <Footer/>
        </div>
    );
}

export default App;
