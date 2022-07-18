export const saveAuthUserNameToLocalStorage = (authUserName: string) => {
  localStorage.setItem('authUserName', authUserName);
};

export const getAuthUserNameFromLocalStorage = () => {
  return localStorage.getItem('authUserName');
};

export const clearAuthUserNameFromLocalStorage = () => {
  localStorage.removeItem('authUserName');
};
