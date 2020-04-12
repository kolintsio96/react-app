import React from "react";
import style from './../index.module.scss';
import styleForm from './../../../common/formController/index.module.scss';
import {reduxForm} from "redux-form";
import {Checkbox, createCheckbox, createField, Input} from "../../../common/formController/formController";
import {required} from "../../../../utils/validation";

const LoginForm = ({handleSubmit,error}) => {
    return <form className={style['login__form']} onSubmit={handleSubmit}>
        {createField('email', Input, [required], 'Login', {type:'text'})}
        {createField('password', Input, [required], 'Password', {type:'password'})}
        {createCheckbox('rememberMe', Checkbox, [], null, {type: 'checkbox'}, 'remember me')}
        {
            error &&
                <div className={styleForm['form-summary-error']}>{error}</div>
        }
        <div className={style['login__label']}>
            <button className={style['login__button']}>Submit</button>
        </div>
    </form>
};
const  ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default ReduxLoginForm