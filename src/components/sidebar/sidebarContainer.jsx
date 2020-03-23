import Sidebar from "./index";
import {connect} from "react-redux";
import {compose} from "redux";
import {getSidebar} from "../../redux/selectors/sidebar-selectors";

let mapStateToProps = (state) => {
    return {
        sidebar: getSidebar(state),
    }
};
export default compose(connect(mapStateToProps))(Sidebar)