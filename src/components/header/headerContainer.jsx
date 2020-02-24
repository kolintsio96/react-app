import React from "react";
import Header from "./index";
import {connect} from "react-redux";
import {getAuthInfo} from "../../redux/auth-reducer";

class HeaderClassContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthInfo();
    }

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
        id: state.auth.id,
    }
}

const HeaderContainer = connect(mapStateToProps, {getAuthInfo})(HeaderClassContainer)
export default HeaderContainer