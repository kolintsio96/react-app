import React from 'react';
import style from './index.module.scss'
import {Field, reduxForm} from "redux-form";

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style['message-form']}>
            <Field name={'newPostText'} component={'textarea'} className={style['message-form__field']} placeholder='your news'/>
            <button className={style['message-form__btn']}>Send</button>
        </form>
    )
};
const PostFormRedux = reduxForm({
    form: 'postForm'
})(PostsForm)
export default PostFormRedux