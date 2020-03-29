import React from 'react';
import style from './index.module.scss'
import PostsForm from "./form/form";
import Post from "./post/post";
const Posts = React.memo((props) => {
    let postsElements = props.posts.map(el => <Post addLike={props.addLike} photo={props.postPhoto} message = {el.message} likes = {el.likes} id={el.id} key={el.id}/>);
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

// class Posts extends React.Component{
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return nextProps !== this.props || nextState !== this.state;
//     }
//     render() {}
// }
//
// class Posts extends React.PureComponent{
//     render() {}
// }

//React.memo == React.PureComponent == shouldComponentUpdate
//https://ru.reactjs.org/docs/react-api.html
export default Posts