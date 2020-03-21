import React from "react";
import {postLogin} from "../../../redux/auth-reducer";
import {connect} from "react-redux";
import ReduxLoginForm from './form/index';
import style from './index.module.scss';

class Login extends React.Component {
    onSubmit = (data) => {
        this.props.postLogin(data);
    };
    render() {
        return <div className={style.login}>
            <h2 className={style['login__title']}>Login</h2>
            <ReduxLoginForm onSubmit={this.onSubmit}/>
        </div>
    }
}

let mapStateToProps = () => {
    return {
    }
};
export default connect(mapStateToProps,{postLogin})(Login)