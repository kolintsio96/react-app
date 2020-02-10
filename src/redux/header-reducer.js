import logo from "../img/logo.png";

let initialState = {
    logo: logo
};
let headerReducer = (state = initialState, action) => {
    return {
        ...state
    }
}
export default headerReducer;