import { UserDetails, users } from "../../assets/data/users_data";
import { saveAuthUserNameToLocalStorage } from "../../helpers/localstoragehelper";
import { AUTH_REDUX_CONSTANTS } from "../reduxConstants/authReduxConstants";

interface authReducerProps {
  branchId: string;
  userName: string;
  password: string;
  error: string | undefined;
  isAuthorised: boolean;
}

const initialAuthReducer: authReducerProps = {
  branchId: "",
  userName: "",
  password: "",
  error: undefined,
  isAuthorised: false,
};

export const authReducer = (
  state = initialAuthReducer,
  action: { type: string; data: Record<string, any> }
) => {
  switch (action?.type) {
    case AUTH_REDUX_CONSTANTS.ON_CHANGE_AUTH_INPUT_VALUE:
      const { name, value } = action?.data;
      return {
        ...state,
        [name]: value,
      };

    case AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS:
      const { isAuthorised } = action?.data;
      return {
        ...state,
        isAuthorised,
      };

    case AUTH_REDUX_CONSTANTS.SET_LOGGED_IN_USER_NAME:
      const { userName } = action?.data;
      return {
        ...state,
        userName,
      };

    case AUTH_REDUX_CONSTANTS.CHECK_CREDENTIALS: {
      const { branchId, userName, password } = action?.data;

      const existingUser: UserDetails | undefined = users.find(
        (user) => user.branchId === parseInt(branchId)
      );

      let errorMessage = undefined;
      let authStatus = false;
      if (existingUser) {
        if (
          userName === existingUser.userName &&
          password === existingUser.password
        ) {
          saveAuthUserNameToLocalStorage(userName);
          authStatus = true;
          errorMessage = undefined;
        } else if (
          userName !== existingUser.userName &&
          password !== existingUser.password
        ) {
          errorMessage = "User name and password are incorrect";
        } else if (userName !== existingUser.userName) {
          errorMessage = "User name is incorrect";
        } else if (password !== existingUser.password) {
          errorMessage = "Password is incorrect";
        }
      } else if(!branchId?.toString()?.trim()?.length) {
        errorMessage = "Please enter branch id"
      } else if(!userName.toString().trim().length) {
        errorMessage = "Please enter username"
      } else if(!password.toString().trim().length) {
        errorMessage = "Please enter password"
      } else {
        errorMessage = "No user with provided branch id exist";
      }
      return {
        ...state,
        error: errorMessage,
        isAuthorised: authStatus,
      };
    }

    default:
      return state;
  }
};
