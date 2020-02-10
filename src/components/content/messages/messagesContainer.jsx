import Messages from "./index";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action);
        },
        changeText: (newVal) => {
            newVal = newVal || null;
            let action = updateTextMessageActionCreator(newVal)
            dispatch(action);
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer