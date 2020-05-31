import React from 'react';
import style from './index.module.scss';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formController/formController";
import {maxLength, required} from "../../../../utils/validation";
let maxLength50 = maxLength(50);

const MessageForm:React.FC<InjectedFormProps<{}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['post-form']}>
            <Field className={style['post-form__field']} validate={[required, maxLength50]} component={Textarea} name={'newMessageText'} placeholder={'your message'}/>
            <button className={style['post-form__btn']}>Send</button>
        </form>
    )
};
const MessageFormRedux = reduxForm<{}>({
    form: 'messageForm'
})(MessageForm);
export default MessageFormRedux