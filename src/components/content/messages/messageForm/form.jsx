import React from 'react';
import style from './index.module.scss';
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../../redux/state";

const MessageForm = (props) => {
    let newPostElement = React.createRef();
    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action);
    };
    let onChangeText = () => {
        let textValue = newPostElement.current.value,
            action = updateTextMessageActionCreator(textValue)
        props.dispatch(action);
    }
    return (
        <div className={style['post-form']}>
            <textarea
                ref={newPostElement}
                name="post" className={style['post-form__field']}
                placeholder='your message'
                value={props.newMessageText}
                onChange={onChangeText}
            />
            <button onClick={addMessage} className={style['post-form__btn']}>Send</button>
        </div>
    )
}
export default MessageForm