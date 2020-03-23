import Messages from "./index";
import {addMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {isAuth} from "../../../redux/selectors/auth-selectors";
import {getDialogs, getMessages} from "../../../redux/selectors/dialogs-selectors";

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
        isAuth: isAuth(state)
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