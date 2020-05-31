import React from 'react';
import style from './index.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/formController/formController";
import {maxLength, required} from "../../../../../utils/validation";
const maxLength50 = maxLength(50);
const PostsForm:React.FC<InjectedFormProps<{}>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['message-form']}>
            <Field name={'newPostText'} component={Textarea} validate={[required, maxLength50]} className={style['message-form__field']} placeholder='your news'/>
            <button className={style['message-form__btn']}>Send</button>
        </form>
    )
};
const PostFormRedux = reduxForm<{}>({
    form: 'postForm'
})(PostsForm)
export default PostFormRedux