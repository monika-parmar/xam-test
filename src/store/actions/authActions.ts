import { AppDispatch } from "../redux/store"
import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants"

export const onAuthInputValueChangeAction = (data:Record<string, string | number>) => {  
    return (dispatch: AppDispatch) => {
            dispatch({
                type: AUTH_REDUX_CONSTANTS.ON_CHANGE_AUTH_INPUT_VALUE,
                data
            })
    }
}

export const setLoggedInUserNameAction = (userName: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: AUTH_REDUX_CONSTANTS.SET_LOGGED_IN_USER_NAME,
            data: {userName}
        })
    }
}

export const onLoginClickAction = (data: Record<string, string | number | (() => void)>) => {
    return (dispatch: AppDispatch) => {
            dispatch({
                type: AUTH_REDUX_CONSTANTS.CHECK_CREDENTIALS,
                data
            })
    }
}

export {}