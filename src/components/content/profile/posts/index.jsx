import React from 'react';
import style from './index.module.scss'
import PostsForm from "./form/form";
import Post from "./post/post";
const Posts = () => {
    return (
        <div className={style.posts}>
            <h2 className={style.posts__title}>My posts</h2>
            <PostsForm/>
            <div className={style['post-list']}>
                <Post message = "Post 1" likes = '10'/>
                <Post message = "Post 2" likes = '2'/>
                <Post message = "Post 3" likes = '23'/>
            </div>
        </div>
    )
}
export default Posts