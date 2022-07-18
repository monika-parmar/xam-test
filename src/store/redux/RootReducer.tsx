import { combineReducers } from 'redux';
import { clearAuthUserNameFromLocalStorage } from '../../helpers/localstoragehelper';
import { authReducer } from "../reducers/authReducer";
import { userManagementReducer } from "../reducers/userManagementReducer";
import { AUTH_REDUX_CONSTANTS } from '../reduxConstants/authReduxConstants';

const appReducer = combineReducers({
  authReducer,
  userManagementReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === AUTH_REDUX_CONSTANTS.LOGOUT_USER_ACTION) {
    clearAuthUserNameFromLocalStorage();
    const emptyState: Record<string, any> = {};
    Object.keys(state).forEach((key) => {
      emptyState[key] = null;
      localStorage.clear();
    });
    return emptyState;
  }

  return appReducer(state, action);
};

export default rootReducer;
