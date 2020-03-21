import React from 'react';
import style from './index.module.scss';
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['post-form']}>
            <Field className={style['post-form__field']} component={'textarea'} name={'newMessageText'} placeholder={'your message'}/>
            <button className={style['post-form__btn']}>Send</button>
        </form>
    )
};
const MessageFormRedux = reduxForm({
    form: 'messageForm'
})(MessageForm);
export default MessageFormRedux