import React from "react";
import {login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import ReduxLoginForm from './form/index';
import style from './index.module.scss';
import {Redirect, RouteComponentProps} from "react-router-dom";
import {getCaptcha, isAuth} from "../../../redux/selectors/auth-selectors";
import {AppStateType} from "../../../redux/redux-store";

type MapPropsType = {
    isAuth: boolean,
    captcha: string | null
}
type MapDispatchType = {
    login: (data:object) => void
}
type PropsType = MapPropsType & MapDispatchType & RouteComponentProps

class Login extends React.Component<PropsType> {
    onSubmit = (data:object) => {
        this.props.login(data);
    };
    render() {
        if(this.props.isAuth){
            return <Redirect to={'/profile'}/>
        }
        return <div className={style.login}>
            <h2 className={style['login__title']}>Login</h2>
            <ReduxLoginForm onSubmit={this.onSubmit} captcha={this.props.captcha}/>
        </div>
    }
}
const mapStateToProps = (state: any) => {
    return {
        isAuth: isAuth(state),
        captcha: getCaptcha(state)
    }
}
let mapDispatchToProps = {login}
export default connect<MapPropsType, MapDispatchType, AppStateType>(mapStateToProps, mapDispatchToProps)(Login)
