import Messages from "./index";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
    }
};
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
};
export default compose(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Messages)