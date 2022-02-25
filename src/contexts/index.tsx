import React from 'react';
import { AuthContextProvider } from './AuthContext';
import { BookContextProvider } from './BookContext';
import { ModalContextProvider } from './ModalContext';
import { ThemeContextProvider } from './ThemeContext';

const RootProvider: React.FC = ({ children }) => {
  return <ThemeContextProvider>
    <ModalContextProvider>
     <AuthContextProvider>
       <BookContextProvider>
        { children }
       </BookContextProvider>
     </AuthContextProvider>
    </ModalContextProvider>
    </ThemeContextProvider>;
}

export default RootProvider;