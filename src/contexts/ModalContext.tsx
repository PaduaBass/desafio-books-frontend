import React, { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  openModal: boolean;
  toggleModal: () => void;
}

const ContextModal = createContext<ModalContextProps>({} as ModalContextProps);

const ModalContextProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
      setOpenModal(!openModal);
  }
  return <ContextModal.Provider value={{ openModal, toggleModal }}>{ children }</ContextModal.Provider>;
}

const useContextModal = () => {
  const context = useContext(ContextModal);
  if (!context) throw new Error('Modal Context Not Found');
  return context;
} 

export { useContextModal, ModalContextProvider };