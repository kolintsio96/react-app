import React, {Profiler} from 'react';
import style from './index.module.scss';
import Content from "./components/content";
import HeaderContainer from "./components/header/headerContainer";
import SidebarContainer from "./components/sidebar/sidebarContainer";
import {compose} from "redux";
import {BrowserRouter, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializationApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader";
import {getInit} from "./redux/selectors/app-selectors";
import store from "./redux/redux-store";

class App extends React.Component{
    catchAllUnhandledErrors = (reason, promise) => {
        console.error(reason);
        console.error(promise);
    }
    componentDidMount() {
        this.props.initializationApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: getInit(state)
    }
}
let AppContainer = compose(withRouter, connect(mapStateToProps , {initializationApp}))(App);
let SocialApp = () => {
    function onRenderCallback(
        id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
        phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
        actualDuration, // время, затраченное на рендер зафиксированного обновления
        baseDuration, // предполагаемое время рендера всего поддерева без кеширования
        startTime, // когда React начал рендерить это обновление
        commitTime, // когда React зафиксировал это обновление
        interactions // Множество «взаимодействий» для данного обновления
    ) {
        // Обработка или логирование результатов...
        // https://ru.reactjs.org/docs/profiler.html
    }
    return(
        <Profiler id='app' onRender={onRenderCallback}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </Profiler>
    )
};
export default SocialApp;
