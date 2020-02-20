import React from "react";
import Header from "./index";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthInfo} from "../../redux/auth-reducer";

class HeaderClassContainer extends React.Component{
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let baseUrl = `https://social-network.samuraijs.com/api/1.0`;
        axios.get(`${baseUrl}/auth/me`, {withCredentials: true})
            .then(response => {
                let data = response.data.data;
                this.props.setAuthInfo(data);
            })
    };

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

const HeaderContainer = connect(mapStateToProps, {setAuthInfo})(HeaderClassContainer)
export default HeaderContainer