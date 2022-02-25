import styled from 'styled-components';

export const Container = styled.div`
  width: 283px;
  margin-right: 15px;
  height: 160px;
  overflow: scroll;
  overflow-x: hidden;

  display: flex;
  background: #FFFFFF;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  transition: background 300ms;
  :hover {
    cursor: pointer;
    background: #f2f2f2;
    transform: tranlateY(10px);
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    background-color: #fff;
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
  color: #AB2680;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 125px;
`;

export const InfoArea = styled.div`
`;
export const SimpleText = styled.p`
  font-size: 12px;
  color: #999;
`;
