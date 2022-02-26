import React, { useEffect, useRef, useState } from 'react';
import imgNotFound from '../../assets/image-not-found.png';
import { COMMA, EDITORY, INFO, ISBN_10, ISBN_13, LANGUAGE, PAGES, PUBLISER_REVIEW, PUBLISHED, TITLE } from '../../constants';
import { useContextModal } from '../../contexts/ModalContext';
import { BookDTO } from '../../dtos';
import ButtonIcon from '../ButtonIcon';
import * as S from './styles';
import quotes from '../../assets/Quotes.png';

interface Props {
  book: BookDTO;
  close?: () => void;
}
interface RefObject extends HTMLDivElement {
  contains: (target: EventTarget | null) => boolean;
}
const Modal: React.FC<Props> = ({ book, close }) => {
  const { 
    imageUrl,
    authors,
    title,
    pageCount,
    category,
    description,
    isbn10,
    isbn13,
    published,
    publisher,
    language,
  } = book;
  const { toggleModal } = useContextModal();
  const [dismount, setDismount] = useState(false);
  const ref = useRef<RefObject | null>(null);
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDismount(true);
      setTimeout(() => {
        toggleModal(null);
      }, 500);
    }
  };
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    });
    

  return (
    <>
      <S.ContainerBackground dismount={dismount} />
      <S.AreaClose dismount={dismount}>
        { !dismount && <ButtonIcon type='close' /> }
      </S.AreaClose>
      <S.Container>
        <S.ContentGrid ref={ref} dismount={dismount}>
          <S.AreaLogo>
            <S.BookLogo src={ imageUrl ? `${imageUrl}` : imgNotFound} />
          </S.AreaLogo>
          <S.AreaText>
            <S.TitleBook>{title}</S.TitleBook>
            {
              authors.map((author, index) => (
               <S.AuthorBook key={String(index)}>
                  {`${author}${authors.length > index + 1 && COMMA}`}
                </S.AuthorBook>
            ))}
            
            <S.TableArea>
              <S.Text>{INFO}</S.Text>
              <section>
                <S.RowTable>
                    <strong>{PAGES}</strong>
                    <p>{`${pageCount} ${PAGES}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{EDITORY}</strong>
                    <p>{`${EDITORY} ${publisher}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{PUBLISHED}</strong>
                    <p>{`${published}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{LANGUAGE}</strong>
                    <p>{`${language}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{TITLE}</strong>
                    <p>{`${title}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{ISBN_10}</strong>
                    <p>{`${isbn10}`}</p>
                </S.RowTable>
                <S.RowTable>
                    <strong>{ISBN_13}</strong>
                    <p>{`${isbn13}`}</p>
                </S.RowTable>
              </section>
              <S.ReviewArea>
                <S.Text>{PUBLISER_REVIEW}</S.Text>
                <S.RowReview>
                  <S.ReviewText>
                    <S.LogoQuotes src={quotes} />
                    {` ${description}`}
                  </S.ReviewText>
                </S.RowReview>
              </S.ReviewArea>
            </S.TableArea>
          </S.AreaText>
        </S.ContentGrid>
        {!dismount && <S.Bar />}
      </S.Container>
    </>
  );
}

export default Modal;