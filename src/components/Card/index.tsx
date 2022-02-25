import React from 'react';

import * as S from './styles';
import book from '../../assets/Book.png';
import { BookDTO } from '../../dtos';
import imgNotFound from '../../assets/image-not-found.png';
import { COMMA, PUBLISHED_AT } from '../../constants';
interface Props {
  onPress?: () => void;
  book: BookDTO;
}

const Card: React.FC<Props> = ({ onPress, book }) => {
  const { imageUrl, authors, title, pageCount, publisher, published } = book;
  return <S.Container onClick={() => onPress ? onPress() : null}>
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
        <S.SimpleText>{pageCount} páginas</S.SimpleText>
        <S.SimpleText>{PUBLISHED_AT}{publisher}</S.SimpleText>
        <S.SimpleText>Publicado em {published}</S.SimpleText>
      </S.InfoArea>
      </S.Column>
    </S.DetailsArea>

  </S.Container>;
}

export default Card;