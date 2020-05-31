import React from 'react';
import style from './index.module.scss'
import PostsForm from "./form/form";
import Post from "./post/post";
import {PostType} from "../../../../types/types";

type PropsType = {
    posts: Array<PostType>,
    postPhoto: string | undefined | null,
    addLike: (id: number) => void
    addPost: () => void

}

const Posts:React.FC<PropsType> = React.memo((props) => {
    let postsElements = props.posts.map(el => <Post addLike={props.addLike} photo={props.postPhoto} message={el.message} likes = {el.likes} id={el.id} key={el.id}/>);
    return (
        <div className={style.posts}>
            <h2 className={style.posts__title}>My posts</h2>
            <PostsForm onSubmit={props.addPost}/>
            <div className={style['post-list']}>
                {postsElements}
            </div>
        </div>
    )
});
export default Posts