import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";

let mapStateToProps = (props) => {
    return {
        isAuth: props.auth.isAuth
    }
}

let withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to='/login'/>;
        }
    }
    let connectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectRedirectComponent;
}
export default withAuthRedirect