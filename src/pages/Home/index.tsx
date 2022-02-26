import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo dark.png';
import ButtonIcon from '../../components/ButtonIcon';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { OF, PAGE, WELCOME } from '../../constants';
import { useAuthContext } from '../../contexts/AuthContext';
import { useBookContext } from '../../contexts/BookContext';
import { useContextModal } from '../../contexts/ModalContext';
import * as S from './styles';

const Home: React.FC = () => {
  const { getBooks, page, books, totalPages, resetPage } = useBookContext();
  const { user } = useAuthContext();
  const { openModal } = useContextModal();
  useEffect(() => {
    getBooks(page);
  }, []);

  const loadBooks = (pageTo: number) => {
    if (pageTo >= 1 && pageTo <= totalPages) {
      getBooks(pageTo);
    }
  };
  const handleLogout = () => {
    logout();
    resetPage();
  }

  const { logout } = useAuthContext();
  return <S.Container>
      <S.Header>
        <S.Row>
            <S.Logo src={logo} />
            <S.Title>Books</S.Title>
        </S.Row>
        <S.Row>
            <S.Text isUserName>
              {WELCOME} 
              <strong>{user?.name}</strong>
            </S.Text>
            <ButtonIcon type='logout' onPress={handleLogout} />
        </S.Row>
      </S.Header>
      <S.Grid openModal={openModal}>
        {books.map(book => <Card key={book.id} book={book} />)}
      </S.Grid>
      <S.NavigationArea>
        <S.Text>
          {PAGE}
          <strong>{page}</strong>
          {OF}
          <strong>{totalPages}</strong>
        </S.Text>
        <ButtonIcon type='left' onPress={() => loadBooks(page - 1)} />
        <ButtonIcon type='right' onPress={() => loadBooks(page + 1)} />
      </S.NavigationArea>
  </S.Container>;
}

export default Home;
