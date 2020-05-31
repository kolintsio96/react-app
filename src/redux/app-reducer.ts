import {getAuthInfo} from "./auth-reducer";

const INITIALIZED_SUCCESS = '/app/INITIALIZED_SUCCESS';

type InitializedSuccessType = {type: typeof INITIALIZED_SUCCESS}
type InitialStateType =  {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};

let setInitializedSuccess = ():InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export let initializationApp = () => {
    return async (dispatch: any) => {
        let loginPromise = dispatch(getAuthInfo());
        await Promise.all([loginPromise])
        dispatch(setInitializedSuccess());
    }
};

let appReducer = (state = initialState, action: any): InitialStateType => {
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