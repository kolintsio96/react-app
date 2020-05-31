import logo from "../img/logo.png";

let initialState = {
    logo: logo
};
export type InitialStateType = typeof initialState
let headerReducer = (state = initialState, action: any): InitialStateType => {
    return {
        ...state
    }
}
export default headerReducer;