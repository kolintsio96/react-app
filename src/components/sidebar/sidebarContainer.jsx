import Sidebar from "./index";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
};
export default compose(connect(mapStateToProps))(Sidebar)