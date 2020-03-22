import React from 'react';
import style from './index.module.scss'
import Footer from "./components/footer";
import Content from "./components/content";
import HeaderContainer from "./components/header/headerContainer";
import SidebarContainer from "./components/sidebar/sidebarContainer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {initializationApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader";

class App extends React.Component{
    componentDidMount() {
        this.props.initializationApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className={style['app-wrapper']}>
                <HeaderContainer/>
                <SidebarContainer/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(withRouter, connect(mapStateToProps , {initializationApp}))(App);
