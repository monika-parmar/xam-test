import { fireEvent } from '@testing-library/react';
import Login from './Login';
import { LOGIN_PAGE_TEST_CONSTANTS } from './loginTestConstants';
import { renderWithProviders } from '../../../utils/testUtils';

describe('LoginPage', () => {
  it('renders login page', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const loginContainer = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.loginForm);
    expect(loginContainer).toBeInTheDocument();
  });

  it('label should be in the document', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const loginLabel = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.loginLabel);
    expect(loginLabel).toBeInTheDocument();
  })

  it('input should be initially empty', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const branchIdInputElement = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.branchIdInput);
    const userNameInputElement = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.userNameInput);
    const passwordInputElement = getByTestId(
      LOGIN_PAGE_TEST_CONSTANTS.branchIdInput
    );
    
    expect(branchIdInputElement).toHaveValue('');
    expect(userNameInputElement).toHaveValue('');
    expect(passwordInputElement).toHaveValue('');
  });

  it('should be able to type in branch id input', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const branchIdInputElement = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.branchIdInput);
    fireEvent.change(branchIdInputElement, {
      target: { value: '10001' },
    });
    expect(branchIdInputElement).toHaveValue('10001');
  });

  it('should be able to type in user name input', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const userNameInputElement = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.userNameInput);
    fireEvent.change(userNameInputElement, {
      target: { value: 'testuser01' },
    });
    expect(userNameInputElement).toHaveValue('testuser01');
  });

  it('should be able to type in password input', () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const passswordInputElement = getByTestId(LOGIN_PAGE_TEST_CONSTANTS.passwordInput);
    fireEvent.change(passswordInputElement, {
      target: { value: 'pa55w0rd001' },
    });
    expect(passswordInputElement).toHaveValue('pa55w0rd001');
  });

  it('should be able to click on login button', async () => {
    const { getByTestId } = renderWithProviders(<Login />);
    const loginButtonElement = getByTestId(
      LOGIN_PAGE_TEST_CONSTANTS.loginButton
    );
    fireEvent.click(loginButtonElement);
    expect(loginButtonElement).toBeInTheDocument();
  });
});
