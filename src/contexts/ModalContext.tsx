import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';
import { BookDTO } from '../dtos';

interface ModalContextProps {
  openModal: boolean;
  toggleModal: (book: BookDTO | null) => void;
}

const ContextModal = createContext<ModalContextProps>({} as ModalContextProps);

const ModalContextProvider: React.FC = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [book, setBook] = useState<BookDTO | null>(null);
  const toggleModal = (book: BookDTO | null) => {
    setOpenModal(!openModal);
    setBook(book);
  }
  return <ContextModal.Provider value={{ openModal, toggleModal }}>
    { openModal && book && <Modal book={book} />}
    { children }
  </ContextModal.Provider>;
}

const useContextModal = () => {
  const context = useContext(ContextModal);
  if (!context) throw new Error('Modal Context Not Found');
  return context;
} 

export { useContextModal, ModalContextProvider };