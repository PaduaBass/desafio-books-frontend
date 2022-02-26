import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { useAuthContext } from '../contexts/AuthContext';

const AppRoutes: React.FC = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route path='/' element={<Login />} />
            ) : (
          <Route path='/' element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  )
};
export default AppRoutes;
