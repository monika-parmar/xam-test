import { stat } from "fs";
import { users } from "../../assets/data/users_data";
import { USER_MANAGEMENT_REDUX_CONSTANTS } from "../reduxConstants/userManagementsReduxConstants";

const initialUserManagementReducer = {
  users,
  newUserDetails: {
    branchId: undefined,
    userName: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    position: "",
  },
  userAlreadyExist: false,
};

export const userManagementReducer = (
  state = initialUserManagementReducer,
  action: { type: string; data: Record<string, any> }
) => {
  switch (action?.type) {
    case USER_MANAGEMENT_REDUX_CONSTANTS.LOAD_USERS:
      return { ...state, users };

    case USER_MANAGEMENT_REDUX_CONSTANTS.ON_CHANGE_USER_FORM_INPUTS:
      const { name, value } = action?.data;

      return {
        ...state,
        newUserDetails: {
          ...state.newUserDetails,
          [name]: value,
        },
      };

    case USER_MANAGEMENT_REDUX_CONSTANTS.ON_RESET_USER_DETAIL_FORM:
      return {
        ...state,
        newUserDetails: {},
      };

    case USER_MANAGEMENT_REDUX_CONSTANTS.ON_ADD_USER_DETAIL_FORM:
      return {
        users: [...state.users, state.newUserDetails],
        newUserDetails: initialUserManagementReducer.newUserDetails,
      };

    case USER_MANAGEMENT_REDUX_CONSTANTS.ON_DELETE_USER_RECORD:
      let updatedUserList = state.users;
      const { index } = action.data;
      updatedUserList = updatedUserList.splice(index, 1);
      return {
        ...state,
        users: updatedUserList,
      };

    default:
      return state;
  }
};
