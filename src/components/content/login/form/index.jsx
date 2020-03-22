import React from "react";
import style from './../index.module.scss';
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../../../common/formController/formController";
import {required} from "../../../../utils/validation";

const LoginForm = (props) => {
    return <form className={style['login__form']} onSubmit={props.handleSubmit}>
        <div className={style['login__label']}>
            <Field className={style['login__field']} name={'email'} component={Input} validate={[required]} placeholder={'Login'} type={'text'}/>
        </div>
        <div className={style['login__label']}>
            <Field className={style['login__field']} name={'password'} component={Input} validate={[required]} placeholder={'Password'} type={'password'}/>
        </div>
        <label className={style['login__label'] + ' ' + style['checkbox']}>
            <Field className={style['login__checkbox']} name={'rememberMe'} component={Checkbox}  type={'checkbox'}/>
            <span>remember me</span>
        </label>
        <div className={style['login__label']}>
            <button className={style['login__button']}>Submit</button>
        </div>
    </form>
};
const  ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default ReduxLoginForm