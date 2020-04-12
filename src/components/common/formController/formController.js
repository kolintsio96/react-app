import React from "react";
import styleLogin from './../../content/login/index.module.scss'
import style from './index.module.scss'
import {Field} from "redux-form";

const FormController = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;
    const fieldClass = hasError ? `${style['form-controller']} ${style['has-error']}` : `${style['form-controller']}`;
    return (
        <div className={fieldClass}>
            {children}
            {hasError && <span className={style['form-controller__error']}>{error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormController {...props}>
            <textarea {...restProps} {...input} ></textarea>
        </FormController>
    )
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return(
        <FormController {...props}>
            <input {...restProps} {...input} />
        </FormController>
    )
};
export const Checkbox = (props) => {
    const {input, meta, child, ...restProps} = props;
    return(
        <FormController {...props}>
            <input {...restProps} {...input} />
            <span></span>
        </FormController>
    )
};
export const createField = (name, component, validator, placeholder, props = {}) => {
    return (
        <div className={styleLogin['login__label']}>
            <Field className={styleLogin['login__field']} name={name} component={component} validate={validator} placeholder={validator} {...props}/>
        </div>
    )
};
export const createCheckbox = (name, component, validator, placeholder, props = {}, text = '') => {
    return (
        <label className={styleLogin['login__label'] + ' ' + styleLogin['checkbox']}>
            <Field className={styleLogin['login__checkbox']} name={name} component={component}  {...props}/>
            <span>{text}</span>
        </label>
    )
};