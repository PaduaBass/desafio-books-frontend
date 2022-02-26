import styled from 'styled-components';
import background from '../../assets/1stBackground.png';

interface Props {
  isUserName?: boolean;
  openModal?: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;
  padding: 40px 120px 88px 115px;
  @media(max-width: 740px) {
    padding: 40px 40px 88px 40px;
  }
`;

export const Logo = styled.img`
  width: 104.4px;
  height: 36px;
  margin-right: 16.6px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
  font-family: 'Heebo', sans-serif;
  font-size: 28px;
  color: #3333;
`;

export const Text = styled.span<Props>`
  font-size: 12px;
  line-height: 16px;
  weight: 500;
  margin-right: 8px;
  @media(max-width: 740px) {
    display: ${({ isUserName }) => isUserName ?'none' : 'bloxk'};
  }
  strong {

  }
`;

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 530px;
  margin-top: 42px;
  animation: invertedBounce 2s;
  align-items: end;
  @media(max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    height: 800px;
    gap: 40px;
    overflow: ${({ openModal }) => openModal ? 'hidden' : 'visible'};
  }
  @media(max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    height: 10220px;
    overflow: ${({ openModal }) => openModal ? 'hidden' : 'visible'};
  }
  @media(max-width: 740px) {
    grid-template-columns: 1fr;
    height: 3095px;
    padding-left: 18%;
    overflow: ${({ openModal }) => openModal ? 'hidden' : 'visible'};
  }
`;


export const NavigationArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: right;
  margin-top: 10px;
  align-items: center;
  @media(max-width: 780px) {
    justify-content: center;
  }
`;
