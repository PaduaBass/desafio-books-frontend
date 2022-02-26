import React from 'react';
import * as S from './styles';
import { BookDTO } from '../../dtos';
import imgNotFound from '../../assets/image-not-found.png';
import { COMMA, EDITORY, PAGES, PUBLISHED_AT } from '../../constants';
import { useContextModal } from '../../contexts/ModalContext';
interface Props {
  onPress?: () => void;
  book: BookDTO;
}

const Card: React.FC<Props> = ({ onPress, book }) => {
  const { imageUrl, authors, title, pageCount, publisher, published } = book;
  const { toggleModal } = useContextModal();

  return <S.Container onClick={() => onPress ? onPress() : toggleModal(book)}>
    <S.ImageArea>
      <S.BookLogo src={ imageUrl ? `${imageUrl}` : imgNotFound} />
    </S.ImageArea>
    <S.DetailsArea>
      <S.Column>
        <S.InfoArea>
        <S.TitleBook>{title}</S.TitleBook>
        {
          authors.map((author, index) => (
            <S.AuthorBook key={String(index)}>
              {`${author}${authors.length > index + 1 && COMMA}`}
            </S.AuthorBook>
          ))}
        </S.InfoArea>
      <S.InfoArea>
        <S.SimpleText>{`${pageCount} ${PAGES}`}</S.SimpleText>
        <S.SimpleText>{`${EDITORY} ${publisher}`}</S.SimpleText>
        <S.SimpleText>{`${PUBLISHED_AT}${published}`}</S.SimpleText>
      </S.InfoArea>
      </S.Column>
    </S.DetailsArea>
  </S.Container>;
}

export default Card;
