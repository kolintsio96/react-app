import React from "react";
import style from './../index.module.scss';
import styleForm from './../../../common/formController/index.module.scss';
import {reduxForm, InjectedFormProps} from "redux-form";
import {Checkbox, createCheckbox, createField, Input} from "../../../common/formController/formController";
import {required} from "../../../../utils/validation";

type OwnPropsType = {
    captcha: string | null
}

const LoginForm:React.FC<OwnPropsType & InjectedFormProps<{}, OwnPropsType>> = ({handleSubmit,error, captcha}) => {
    return <form className={style['login__form']} onSubmit={handleSubmit}>
        {createField('email', Input, [required], 'Login', {type:'text'})}
        {createField('password', Input, [required], 'Password', {type:'password'})}
        {createCheckbox('rememberMe', Checkbox, [], null, {type: 'checkbox'}, 'remember me')}
        {captcha && <div className={style['login__captcha']}>
            <img src={captcha} alt=""/>
            {createField('captcha', Input, [required], 'Enter symbols from image', {type:'text'})}
        </div>}
        {
            error &&
                <div className={styleForm['form-summary-error']}>{error}</div>
        }
        <div className={style['login__label']}>
            <button className={style['login__button']}>Submit</button>
        </div>
    </form>
};
const  ReduxLoginForm = reduxForm<{}, OwnPropsType>({
    form: 'login'
})(LoginForm);

export default ReduxLoginForm