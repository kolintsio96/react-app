import React from "react";
import style from './../index.module.scss';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <form className={style['login__form']} onSubmit={props.handleSubmit}>
        <div className={style['login__label']}>
            <Field className={style['login__field']} name={'email'} component={'input'} placeholder={'Login'} type={'text'}/>
        </div>
        <div className={style['login__label']}>
            <Field className={style['login__field']} name={'password'} component={'input'} placeholder={'Password'} type={'password'}/>
        </div>
        <label className={style['login__label']}>
            <Field className={style['login__checkbox']} name={'rememberMe'} component={'input'} type={'checkbox'}/>
            <span></span>
            <span>remember me</span>
        </label>
        <div className={style['login__label']}>
            <button className={style['login__button']}>Submit</button>
        </div>
    </form>
};
const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default ReduxLoginForm