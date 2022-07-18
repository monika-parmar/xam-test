import { AppDispatch } from "../redux/store"
import { USER_MANAGEMENT_REDUX_CONSTANTS } from "../reduxConstants/userManagementsReduxConstants"

export const loadExistingUsersAction = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: USER_MANAGEMENT_REDUX_CONSTANTS.LOAD_USERS
        })
    }
}

export const onUserDetailFormInputChangeAction = (data: Record<string, string | number> ) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: USER_MANAGEMENT_REDUX_CONSTANTS.ON_CHANGE_USER_FORM_INPUTS,
            data
        })
    }
}

export const onResetUserDetailFormAction = () => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: USER_MANAGEMENT_REDUX_CONSTANTS.ON_RESET_USER_DETAIL_FORM
        })
    }
}

export const onAddUserDetailFormAction = (data:Record<string, string | number>) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: USER_MANAGEMENT_REDUX_CONSTANTS.ON_ADD_USER_DETAIL_FORM,
            data
        })
    }
}

export const onDeleteUserRecordAction = (index: number) => {
    return (dispatch: AppDispatch) => {
        dispatch({
            type: USER_MANAGEMENT_REDUX_CONSTANTS.ON_DELETE_USER_RECORD,
            data: {index}
        })
    }
}

export {}