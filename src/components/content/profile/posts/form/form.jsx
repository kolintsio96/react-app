import React from 'react';
import style from './index.module.scss'
const PostsForm = () => {
    return (
        <form className={style['post-form']}>
            <textarea name="post" className={style['post-form__field']} placeholder='your news'></textarea>
            <button className={style['post-form__btn']}>Send</button>
        </form>
    )
}
export default PostsForm