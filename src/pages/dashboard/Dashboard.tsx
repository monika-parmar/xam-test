import { FC } from "react";
import Button from "../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
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
      isAuthorised: false,
    });
  };
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
