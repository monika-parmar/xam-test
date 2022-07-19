import { useState } from "react";
import { UserType } from "../../../assets/data/users_data";
import Modal, { ButtonType } from "../../../components/modal/Modal";
import { getAuthUserNameFromLocalStorage } from "../../../helpers/localstoragehelper";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { onDeleteUserRecordAction } from "../../../store/actions/userManagementActions";

const UserInfoTable = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(
        ({ userManagementReducer }: Record<string, any>) => userManagementReducer ?? {}
    )
    const [recordForDeletion, setRecordForDeletion] = useState<number>(-1);
const onClickRemove = (index: number) => {
    setRecordForDeletion(index);
}

const onClickDeleteConfirmation = () => {
dispatch(onDeleteUserRecordAction(recordForDeletion))
}

const alertModalButton: ButtonType[] = [
  {
    title: 'Okay',
    onClick: () => setRecordForDeletion(-1),
    color: 'primary',
  },
]

const deleteModalButton: ButtonType[] = [
    {
      title: 'Cancel',
      onClick: () => {
        setRecordForDeletion(-1);
      },
      color: 'secondary',
    },
    {
      title: 'Yes',
      onClick: onClickDeleteConfirmation,
      color: 'primary',
    },
  ];
    return(<div className="user-info-table-container">
        {users?.length && (
        <table>
            <thead>
                <th>#</th>
                <th>Branch ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
            </thead>
            <tbody>
            {users.map((user: UserType, index: number) =>
            <tr>
                <td>{index +  1}</td>
                <td>{user.branchId}</td>
                <td>{user.userName}</td>
                <td>{user.firstName} {user.middleName} {user.lastName}</td>
                <td>{user.position}</td>
                <td><button onClick={() => onClickRemove(index)}>REMOVE</button></td>
            </tr>)             
        }
        </tbody>
        </table>) }
         {recordForDeletion >= 0 && (
        <Modal
          header={users[recordForDeletion].userName === getAuthUserNameFromLocalStorage() ? 'Cannot delete this user' : 'Delete User'}
          buttons={users[recordForDeletion].userName === getAuthUserNameFromLocalStorage() ? alertModalButton : deleteModalButton}
          hideModal={() => setRecordForDeletion(-1)}
        >
            {users[recordForDeletion].userName === getAuthUserNameFromLocalStorage() ? 'Logged in user cannot be deleted' :'Are you sure you want to delete?'}
        </Modal>
      )}
    </div>)
}

export default UserInfoTable;