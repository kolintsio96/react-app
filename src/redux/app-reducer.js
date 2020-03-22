import {getAuthInfo} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
let initialState = {
    initialized: false
};

let setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export let initializationApp = () => {
    return (dispatch) => {
        let loginPromise = dispatch(getAuthInfo());
        Promise.all([loginPromise])
            .then(() => {
                dispatch(setInitializedSuccess());
            })
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