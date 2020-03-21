import Messages from "./index";
import {addMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (data) => {
            let action = addMessageActionCreator(data.newMessageText)
            dispatch(action);
        }
    }
};
export default compose(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Messages)