import {getAuthInfo} from "./auth-reducer";

const INITIALIZED_SUCCESS = '/app/INITIALIZED_SUCCESS';

type ActionType = {type: typeof INITIALIZED_SUCCESS}
type InitializedSuccessType = () => ActionType
type InitialStateType = {
    initialized: boolean
}
type AppReducerType = (state: InitialStateType, action: ActionType) => {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

let setInitializedSuccess: InitializedSuccessType = () => ({type: INITIALIZED_SUCCESS});

export let initializationApp = () => {
    return async (dispatch) => {
        let loginPromise = dispatch(getAuthInfo());
        await Promise.all([loginPromise])
        dispatch(setInitializedSuccess());
    }
};

let appReducer: AppReducerType = (state = initialState, action) => {
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