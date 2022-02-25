import React from 'react';
import { useThemeContext } from './contexts/ThemeContext';
import Login from './pages/Login';
import AppRoutes from './routes';

function App() {
  const { theme } = useThemeContext();
  return (
    <AppRoutes />
  )
}

export default App
