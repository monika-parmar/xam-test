import { FC, useEffect } from "react";
import Button from "../../components/button/Button";
import { getAuthUserNameFromLocalStorage } from "../../helpers/localstoragehelper";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setLoggedInUserNameAction } from "../../store/actions/authActions";
import { AUTH_REDUX_CONSTANTS } from "../../store/reduxConstants/authReduxConstants";
import UserDetailForm from "./userDetailForm/UserDetailForm";
import UserInfoTable from "./userInfoTable/UserInfoTable";

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer ?? {}
  );

  const onClickLogoutButton = () => {
    dispatch({
      type: AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS,
      data: {isAuthorised: false},
    });
    dispatch({
      type: AUTH_REDUX_CONSTANTS.LOGOUT_USER_ACTION
    })
  };

useEffect(() => {
  const userName = getAuthUserNameFromLocalStorage();
  if(userName?.length) {
    dispatch(setLoggedInUserNameAction(userName))
  }
}, [])

  return (
    <div className="dashboard">
      <div className="dashboard-container">

        <div className="dashboard-navbar">
          <div className="logged-in-user-name">{userName}</div>
          <Button
            buttonType="primary"
            buttonText="LOGOUT"
            className="logout-button"
            onClick={onClickLogoutButton}
          />
        </div>

        <div className="dashboard-content-container">
           <UserDetailForm />

           <UserInfoTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
