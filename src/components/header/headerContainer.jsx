import React from "react";
import Header from "./index";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {compose} from "redux";

class HeaderClassContainer extends React.Component{
    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        logo: state.header.logo,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        id: state.auth.userId,
    }
};
export default compose(connect(mapStateToProps, {logout}))(HeaderClassContainer)