import {getAuthInfo} from "./auth-reducer";

const INITIALIZED_SUCCESS = '/app/INITIALIZED_SUCCESS';
let initialState = {
    initialized: false
};

let setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export let initializationApp = () => {
    return async (dispatch) => {
        let loginPromise = dispatch(getAuthInfo());
        await Promise.all([loginPromise])
        dispatch(setInitializedSuccess());
    }
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
};

export default appReducer;