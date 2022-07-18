import { FC } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { onAuthInputValueChangeAction, onLoginClickAction } from "../../../store/actions/authActions";

const Login: FC = () => {
    const dispatch = useAppDispatch();
  const { branchId, userName, password, error } = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer ?? {}
  );

  const onInputValueChange = (name: string, value: string | number) => {
    dispatch(onAuthInputValueChangeAction({name, value}))
  };

  const onLoginClick = async () => {
   await dispatch(onLoginClickAction({branchId, userName, password}));
  };

  return (
    <div className="login-container">
      <div>
        <div className="login-title">Login</div>

        <Input
          type="text"
          placeholder="Branch id"
          onChange={(e) => onInputValueChange("branchId", e.target.value)}
          value={branchId}
        />
        <Input
          type="text"
          placeholder="User name"
          onChange={(e) => onInputValueChange("userName", e.target.value)}
          value={userName}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => onInputValueChange("password", e.target.value)}
          value={password}
        />

        <Button buttonType="primary" buttonText="LOGIN" onClick={onLoginClick} />

        {error && <div className="login-error-message">Error: {error}</div>}
      </div>
    </div>
  );
};

export default Login;
