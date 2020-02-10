import React from 'react';
import style from './index.module.scss'
import Footer from "./components/footer";
import Content from "./components/content";
import HeaderContainer from "./components/header/headerContainer";
import SidebarContainer from "./components/sidebar/sidebarContainer";

function App() {
    return (
        <div className={style['app-wrapper']}>
            <HeaderContainer/>
            <SidebarContainer/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
