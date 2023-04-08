import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import * as authService from '../services/authService';

export const Contexts = createContext();

export const AuthProvider = ({
  children,
}) => {
  const [auth, setAuth] = useLocalStorage('auth', {});
  const [errorr, setError] = useState('');

  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    if (!data.email || !data.password) {
      return setError('required!');
    }

    const res = await authService.login(data);

    if (res.code) {
      setAuth({});
      return setError(res.message);
    }

    setAuth(res);
    navigate('/');
  }

  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...regData } = data;

    if (!regData.password || !regData.email || !confirmPassword) {
      return setError('required!');
    }

    if (regData.password.length < 4 || regData.password.length > 10) {
      return setError("Your password must be 4-10 characters long");
    }

    if (confirmPassword !== regData.password) {
      return setError("Password not match!");
    }

    const res = await authService.register(regData);
    if (res.code) {
      setAuth({});
      setError(res.message);
      return;
    }

    setAuth(res);
    navigate('/');
  }

  const onLogoutClick = async () => {
    const response = await authService.logout(auth.accessToken)
    if (!response.ok) {
      setError(response.message);
      return;
    }

    setAuth({});
    setError(null);
  }

  const contex = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogoutClick,
    errorr,
    auth,
    isAuth: !!auth.accessToken
  }

  return (
    <>
      <Contexts.Provider value={contex}>
        {children}
      </Contexts.Provider>
    </>
  )
}