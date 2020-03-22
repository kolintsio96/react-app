import React from "react";
import style from './index.module.scss'

const FormController = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const fieldClass = hasError ? `${style['form-controller']} ${style['has-error']}` : `${style['form-controller']}`;
    return (
        <div className={fieldClass}>
            {props.children}
            {hasError && <span className={style['form-controller__error']}>{meta.error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormController {...props}>
            <textarea {...restProps} {...input} ></textarea>
        </FormController>
    )
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return(
        <FormController {...props}>
            <input {...restProps} {...input} />
        </FormController>
    )
};
export const Checkbox = (props) => {
    const {input, meta, child, ...restProps} = props
    return(
        <FormController {...props}>
            <input {...restProps} {...input} />
            <span></span>
        </FormController>
    )
};