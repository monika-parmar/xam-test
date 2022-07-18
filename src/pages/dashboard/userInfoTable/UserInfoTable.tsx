import { useState } from "react";
import { UserType } from "../../../assets/data/users_data";
import Modal, { ButtonType } from "../../../components/modal/Modal";
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

        {users?.length ? <table>
            <thead>
                <th>#</th>
                <th>Branch ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Position</th>
                <th>Action</th>
            </thead>
            {users.map((user: UserType, index: number) =>
            <tr>
                <td>{index +  1}</td>
                <td>{user.branchId}</td>
                <td>{user.userName}</td>
                <td>{user.firstName} {user.middleName}  {user.lastName}</td>
                <td>{user.position}</td>
                <td><button onClick={() => onClickRemove(index)}>REMOVE</button></td>
            </tr>)             
        }
        </table> :
        <div className="no-record-found">No user found</div>}
         {recordForDeletion >= 0 && (
        <Modal
          header="Delete User"
          buttons={deleteModalButton}
          hideModal={() => setRecordForDeletion(-1)}
        >
            Are you sure you want to delete?
        </Modal>
      )}
    </div>)
}

export default UserInfoTable;