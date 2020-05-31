import Messages from "./index";
import {addMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose, Dispatch} from "redux";
import {isAuth} from "../../../redux/selectors/auth-selectors";
import {getDialogs, getMessages} from "../../../redux/selectors/dialogs-selectors";
import {DialogType, MessagesType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";

type NewMessageTextType = {
    newMessageText: string
}

type MapPropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessagesType>
    isAuth: boolean
}
type MapDispatchType = {
    addMessage: (data:NewMessageTextType) => void
}


let mapStateToProps = (state:any): MapPropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
        isAuth: isAuth(state)
    }
};
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchType => {
    return {
        addMessage: (data) => {
            let action = addMessageActionCreator(data.newMessageText)
            dispatch(action);
        }
    }
};
export default compose(withAuthRedirect,connect<MapPropsType, MapDispatchType, AppStateType>(mapStateToProps, mapDispatchToProps))(Messages)