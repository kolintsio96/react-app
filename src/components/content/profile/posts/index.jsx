import React from 'react';
import style from './index.module.scss'
import PostsForm from "./form/form";
import Post from "./post/post";
const Posts = (props) => {
    let postsElements = props.posts.map(el => <Post photo={el.photo} message = {el.message} likes = {el.likes} id={el.id} key={el.id}/>);
    return (
        <div className={style.posts}>
            <h2 className={style.posts__title}>My posts</h2>
            <PostsForm/>
            <div className={style['post-list']}>
                {postsElements}
            </div>
        </div>
    )
}
export default Posts