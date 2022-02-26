import styled from 'styled-components';

interface Props {
  dismount?: boolean;
}

export const ContainerBackground = styled.div<Props>`
  position: absolute;
  background: ${({ theme }) => theme.COLORS.modal_background};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${({ dismount }) => dismount ? 'animateOpacityOut' : 'animateOpacityIn'} 600ms;
  @keyframes animateOpacityIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes animateOpacityOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: 9999;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media(max-width: 780px) {
    padding-top: 20px;
    align-items: start;
    overflow: hidden;
  }
`;

export const ContentGrid = styled.div<Props>`
  width: 769px;
  height: 608px;
  box-shadow: 0px 16px 80px ${({ theme }) => theme.COLORS.input_background};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 4px;
  background: ${({ theme }) => theme.COLORS.text_white};
  padding: 48px;
  animation: ${({ dismount }) => dismount ? 'animateOpacityOut' : 'invertedBounce'} 600ms;
  @media(max-width: 780px) {
    padding: 0px;
    grid-template-columns: 1fr;
    width: 70%;
    padding-top: 24px;
    height: 700px;
    overflow: hidden;
  }
`;

export const TitleBook = styled.span`
  font-size: 28px;
  font-weight: bold;
  weight: 500;
  line-height: 40px;
`;

export const AuthorBook = styled.p`
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.COLORS.text_purple};
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
`;

export const AreaLogo = styled.div`
  width: 349px;
  height: 512.29px;
  @media(max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 351px;
    align-items: center;
    overflow: hidden;
  }
`;

export const AreaText = styled.div`
  width: 349px;
  height: 512.29px;
  padding-left: 48px;
  padding-right: 48px;
  overflow: scroll;
  overflow-x: hidden;
  @media(max-width: 780px) {
    display: flex;
    height: 412.29px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    padding-left: 48px;
    padding-top: 300px;
    padding-bottom: 100px;

    padding-right: 48px;
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    background-color: ${({ theme }) => theme.COLORS.text_white};
  }
`;

export const BookLogo = styled.img`
  width: 349px;
  height: 512.29px;
  object-fit: cover;
  @media(max-width: 780px) {
    width: 240px;
    height: 351px;
  }
`;

export const Bar = styled.div`
  background: ${({ theme }) => theme.COLORS.text_purple};
  border-radius: 30px;
  width: 4px;
  height: 48px;
  margin-left: -10px;
  margin-top: 400px;
  animation: invertedBounce 600ms;
`;

export const AreaClose = styled.div<Props>`
  position: absolute;
  right: 17px;
  top: 16px;
  animation: ${({ dismount }) => dismount ? 'animateOpacityOut' : 'animateOpacityIn'} 600ms;
`;

export const TableArea = styled.div`
  margin-top: 32px;
  section {
    margin-top: 10px;
    strong {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const ReviewArea = styled.div`
  margin-top: 32px;
`;

export const ReviewText = styled.span`
  margin-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.COLORS.text_color_gray};
`;

export const RowTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RowReview = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoQuotes = styled.img`
  width: 17.58px;
  height: 14.14px;
  opacity: 0.5;
`;
