import { FC, SyntheticEvent } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { onAuthInputValueChangeAction, onLoginClickAction } from "../../../store/actions/authActions";
import { LOGIN_PAGE_TEST_CONSTANTS } from "./loginTestConstants";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { branchId, userName, password, error } = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer ?? {}
  );

  const onInputValueChange = (name: string, value: string | number) => {
    dispatch(onAuthInputValueChangeAction({name, value}))
  };

  const onLoginClick = async () => {
   await dispatch(onLoginClickAction({branchId: parseInt(branchId), userName, password}));
  };

  const onEnterKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      onLoginClick();
    }
  };

  return (
    <div className="login-container">
      <div data-testid={LOGIN_PAGE_TEST_CONSTANTS.loginForm}>
        <label data-testid={LOGIN_PAGE_TEST_CONSTANTS.loginLabel} className="login-title">Login</label>

        <Input
         data-testid={LOGIN_PAGE_TEST_CONSTANTS.branchIdInput}
          type="text"
          placeholder="Branch id"
          onKeyUp={onEnterKeyUp}
          onChange={(e) => onInputValueChange("branchId", e.target.value)}
          value={branchId}
        />
        <Input
         data-testid={LOGIN_PAGE_TEST_CONSTANTS.userNameInput}
          type="text"
          onKeyUp={onEnterKeyUp}
          placeholder="User name"
          onChange={(e) => onInputValueChange("userName", e.target.value)}
          value={userName}
        />
        <Input
         data-testid={LOGIN_PAGE_TEST_CONSTANTS.passwordInput}
          type="password"
          onKeyUp={onEnterKeyUp}
          placeholder="Password"
          onChange={(e) => onInputValueChange("password", e.target.value)}
          value={password}
        />

        <Button data-testid={LOGIN_PAGE_TEST_CONSTANTS.loginButton} buttonType="primary" buttonText="LOGIN" onClick={onLoginClick} />

        {error && <div className="login-error-message">Error: {error}</div>}
      </div>
    </div>
  );
};

export default Login;
