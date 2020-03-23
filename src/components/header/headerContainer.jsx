import React from "react";
import Header from "./index";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";
import {getUserId, isAuth, userEmail} from "../../redux/selectors/auth-selectors";
import {getLogo} from "../../redux/selectors/header-selectors";

class HeaderClassContainer extends React.Component{
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        logo: getLogo(state),
        login: userEmail(state),
        email: userEmail(state),
        isAuth: isAuth(state),
        id: getUserId(state),
    }
};
export default compose(connect(mapStateToProps, {logout}))(HeaderClassContainer)