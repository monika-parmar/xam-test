import { FC, useState } from "react";
import { UserType } from "../../../assets/data/users_data";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { userDetailFormConstant } from "../../../constants/userDetailFormConstant";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  onAddUserDetailFormAction,
  onResetUserDetailFormAction,
  onUserDetailFormInputChangeAction,
} from "../../../store/actions/userManagementActions";

const UserDetailForm: FC = () => {
  const dispatch = useAppDispatch();
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [userAlreadyExist, setUserAlreadyExist] = useState<boolean>(false);
  const onUserDetailFormInputChange = (
    name: string,
    value: string | number
  ) => {
    dispatch(onUserDetailFormInputChangeAction({ name, value }));
  };
  const { users, newUserDetails } = useAppSelector(
    ({ userManagementReducer }: Record<string, any>) =>
      userManagementReducer ?? {}
  );
  const onUserDetailFormReset = () => {
    dispatch(onResetUserDetailFormAction());   
  };

  const onUserDetailAdd = () => {
    let isFormValidated = true;
    setIsFormSubmitted(true);
    for (const key in newUserDetails) {
      if (!newUserDetails[key]?.toString()?.trim()?.length) {
        isFormValidated = false;
      }
    }
    const existingUser = users?.find(
      (user: UserType) => user.userName === newUserDetails.userName
    );
    if (existingUser) {       
      isFormValidated = false;
      setUserAlreadyExist(true);
    } else {
        setUserAlreadyExist(false);
    }
    if (isFormValidated) {
      setIsFormSubmitted(false);
      dispatch(onAddUserDetailFormAction({...newUserDetails, branchId: parseInt(newUserDetails.branchId)}));
    }
  };

  return (
    <div className="dashboard__user-form">
      {userDetailFormConstant.map((field, index) => (
        <div>
          <Input
            key={index}
            type={field?.type ?? 'text'}
            placeholder={field.placeholder}
            value={newUserDetails?.[field?.name]}
            onChange={(e) =>
              onUserDetailFormInputChange(field.name, e.target.value)
            }
          />
          {isFormSubmitted && !newUserDetails?.[field?.name]?.length
             && (
                <div className="user-form-error">
                  Please enter {field.placeholder.toLocaleLowerCase()}
                </div>
              )}
              {
                field?.name === "userName" &&
                userAlreadyExist ? <div className="user-form-error">
                Username already exists</div> : ''}
        </div>
      ))}

      <div className="user-detail-form-button-container">
        <Button
          buttonType="secondary"
          buttonText="RESET"
          onClick={onUserDetailFormReset}
        />
        <Button
          buttonType="primary"
          buttonText="ADD"
          onClick={onUserDetailAdd}
        />
      </div>
    </div>
  );
};

export default UserDetailForm;
