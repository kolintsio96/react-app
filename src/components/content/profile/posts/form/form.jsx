import React from 'react';
import style from './index.module.scss'
import {addPostActionCreator, updateTextPostActionCreator} from "../../../../../redux/state";

const PostsForm = (props) => {
    let newMessageElement = React.createRef();
    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }
    let onPostChange = () => {
        let text = newMessageElement.current.value,
            action = updateTextPostActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div className={style['message-form']}>
            <textarea
                ref={newMessageElement}
                name="message"
                className={style['message-form__field']}
                placeholder='your news'
                onChange={onPostChange}
                value={props.postText}
            />
            <button onClick={addPost} className={style['message-form__btn']}>Send</button>
        </div>
    )
}
export default PostsForm