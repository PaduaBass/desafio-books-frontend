import React, { createContext, useContext, useState } from 'react';
import { COMMON_THEME, } from '../constants/index';
import { THEME_CONTEXT_ERROR } from '../constants/labels';

interface ThemeContextProps {
  theme: string;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(COMMON_THEME);
    
  return <ThemeContext.Provider value={{ theme}} >
      { children }
  </ThemeContext.Provider>;
}

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(THEME_CONTEXT_ERROR);
    }
    return context;
}

export { useThemeContext, ThemeContextProvider };