import React, { createContext, useContext, useEffect, useState } from 'react';
import { ACCESS_TOKEN, ACCESS_USER, THEME_CONTEXT_ERROR } from '../constants';
import { UserDTO } from '../dtos';
import api from '../services/api';

interface AuthContextProps {
  user: null | UserDTO;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: boolean;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<null | UserDTO>(null);
  const [error, setError] = useState(false);
  const login = async (email: string, password: string) => {
    setError(false);
    try {
      const { data, headers } = await api.post('/auth/sign-in', {
        email,
        password,
      });
      await localStorage.setItem(ACCESS_USER, JSON.stringify(data));
      data.token = headers.authorization;
      await localStorage.setItem(ACCESS_TOKEN, data.token);

      setUser(data);
    } catch(e) {
      setError(true);
    }
  }

  const autoLogin = async () => {
    const dataUser = await localStorage.getItem(ACCESS_USER);
    if (dataUser) {
      const user = await JSON.parse(dataUser);
      setUser(user);
    }
  }

  const logout = async () => {
    await localStorage.clear();
    setUser(null);
  }

  useEffect(() => {
    autoLogin();
  }, []);

  return <AuthContext.Provider value={{ user, login, error, logout }}>{ children }</AuthContext.Provider>;
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if(!context) throw new Error(THEME_CONTEXT_ERROR);
  return context;
}

export { AuthContextProvider, useContext };
