import Header from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        logo: state.header.logo,
    }
}

const HeaderContainer = connect(mapStateToProps)(Header)
export default HeaderContainer