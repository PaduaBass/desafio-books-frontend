import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  margin-right: 15px;
  height: 160px;
  display: flex;
  background: ${({ theme }) => theme.COLORS.text_white};
  box-shadow: 0px 6px 24px ${({ theme }) => theme.COLORS.card_shadow_color};
  border-radius: 4px;
  transition: background 300ms;
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.gray};
    transform: tranlateY(10px);
  }

  @media(max-width: 740px) {
    width: 288px;
  }
`;

export const ImageArea = styled.div`
  width: 113px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookLogo = styled.img`
  width: 81px;
  height: 118.54px;
  object-fit: cover;
`;


export const DetailsArea = styled.div`
  width: 50%;
  padding-top: 10px;
  margin-left: 16px;
  max-width: 50%;
`;

export const TitleBook = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  weight: 500;
`;

export const AuthorBook = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.text_purple};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 121px;
  margin-top: 10px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    background-color: ${({ theme }) => theme.COLORS.text_white};
  }
`;

export const InfoArea = styled.div``;

export const SimpleText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.text_color_gray};
`;
