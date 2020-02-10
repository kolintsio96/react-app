import React from 'react';
import style from './index.module.scss'

const PostsForm = (props) => {
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.changeText(text)
    }
    return (
        <div className={style['message-form']}>
            <textarea
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