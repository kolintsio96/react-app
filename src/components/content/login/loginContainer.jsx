import React from "react";
import {login} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import ReduxLoginForm from './form/index';
import style from './index.module.scss';
import {Redirect} from "react-router-dom";
import {getCaptcha, isAuth} from "../../../redux/selectors/auth-selectors";

class Login extends React.Component {
    onSubmit = (data) => {
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
const mapStateToProps = (state) => {
    return {
        isAuth: isAuth(state),
        captcha: getCaptcha(state)
    }
}
export default connect(mapStateToProps,{login})(Login)