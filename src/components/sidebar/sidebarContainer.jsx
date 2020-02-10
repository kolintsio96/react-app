import Sidebar from "./index";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}
const SidebarContainer = connect(mapStateToProps)(Sidebar)
export default SidebarContainer