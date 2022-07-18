import { AppDispatch } from "../redux/store"
import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants"

export const onAuthInputValueChangeAction = (data:Record<string, string | number>) => {  
    return (dispatch: AppDispatch) => {
        try {
            dispatch({
                type: AUTH_REDUX_CONSTANTS.ON_CHANGE_AUTH_INPUT_VALUE,
                data
            })
        } catch(e) {
            /* error */
        }
    }
}

export const onLoginClickAction = (data: Record<string, string | number | (() => void)>) => {
    return (dispatch: AppDispatch) => {
        try {
            dispatch({
                type: AUTH_REDUX_CONSTANTS.CHECK_CREDENTIALS,
                data
            })
        } catch(e) {
            /* error */
        }
    }
}

export {}