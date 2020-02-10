import React from 'react';
import style from './index.module.scss';

const MessageForm = (props) => {
    let addMessage = () => {
        props.addMessage();
    };
    let onChangeText = (e) => {
        let textValue = e.target.value;
        props.changeText(textValue);
    }
    return (
        <div className={style['post-form']}>
            <textarea
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