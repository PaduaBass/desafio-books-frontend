import styled from 'styled-components';
import background from '../../assets/Background.png';
export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;
  align-items: center;

  @media (max-width: 500px) {
    background-position: -500px;
  }
  @media (max-width: 700px) {
    background-position: -200px;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 368px;
    height: 224px;
    display: flex;
    margin-left: 115px;

    @media (max-width: 600px) {
      margin-left: 80px;
    }
    @media (max-width: 474px) {
      margin-left: 40px;
    }
`;

export const Row = styled.div`
   display: flex;
   flex-direction: row;
   animation: bounce 2s;
   @keyframes bounce {
     from {
       transform: translateY(-15px);
       opacity: 0;
     }
     to {
       transform: translateY(0px)
       opacity: 1;
      }
    }
`;

export const Logo = styled.img`
  width: 104.4px;
  height: 36px;
  margin-right: 16px;
`;

export const Title = styled.span`
  font-size: 28px;
  color: ${({ theme }) => theme.COLORS.text_white};
`;

export const InputArea = styled.div`
    margin-top: 50px;
    animation: invertedBounce 1.5s;
    @keyframes invertedBounce {
      from {
        transform: translateY(15px);
        opacity: 0;
      }
      to {
        transform: translateY(0px);
        opacity: 1;
      }
    }
`;
