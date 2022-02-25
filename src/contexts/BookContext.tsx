import React, { createContext, useContext, useState } from 'react';
import { BookDTO } from '../dtos';
import api from '../services/api';

// import { Container } from './styles';
interface BookContextProps {
  books: BookDTO[];
  totalPages: number;
  page: number;
  getBooks: (page: number) => Promise<void>;
  resetPage: () => void;
}
const BookContext = createContext({} as BookContextProps);
const BookContextProvider: React.FC = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(2);
  const [totalPages, setTotalPages] = useState(2);

  const getBooks = async (page: number) => {
    try {
        const { data } = await api.get(`books?page=${page}&amount=12`);
        setBooks(data.data);
        setPage(page);
        setTotalPages(Number(data.totalPages.toFixed(0)))
    } catch(e) {
        console.log(e);
    }
  }
  const resetPage = () => {
    setPage(1);
  }
  return <BookContext.Provider value={{ books, page, getBooks, totalPages, resetPage }}>{children}</BookContext.Provider>;
}

const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error('Book context not found');
  return context;
}

export { BookContextProvider, useBookContext };