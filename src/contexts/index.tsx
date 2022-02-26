import React from 'react';
import { AuthContextProvider } from './AuthContext';
import { BookContextProvider } from './BookContext';
import { ModalContextProvider } from './ModalContext';

const RootProvider: React.FC = ({ children }) => {
  return <ModalContextProvider>
     <AuthContextProvider>
       <BookContextProvider>
        { children }
       </BookContextProvider>
     </AuthContextProvider>
    </ModalContextProvider>;
}

export default RootProvider;