import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { getAuthUserNameFromLocalStorage } from './helpers/localstoragehelper';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Login from './pages/auth/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { loadExistingUsersAction } from './store/actions/userManagementActions';
import { store } from './store/redux/store';
import { AUTH_REDUX_CONSTANTS } from './store/reduxConstants/authReduxConstants';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAuthorised } = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer ?? {}
  );

  useEffect(() => {
    dispatch(loadExistingUsersAction());
  
      const cb = () => {       
          dispatch({
            type: AUTH_REDUX_CONSTANTS.CHANGE_AUTH_STATUS,
            data: {isAuthorised: getAuthUserNameFromLocalStorage() ? true :false},
          });
      };
      if(getAuthUserNameFromLocalStorage()) {
        console.log('dfkjhsdjfh');
       cb();
      }
      
      window.addEventListener('storage', cb);
  
      return () => {
        window.removeEventListener('storage', cb);
      };
 
  }, [])

  return (
    <div className='app-container'>
    {!isAuthorised ? <Login /> : <Dashboard />}
    </div>
  );
}

export default App;
