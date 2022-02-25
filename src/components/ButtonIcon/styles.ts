import styled from 'styled-components';

export const Container = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #3333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  background: #fff;
  transition: background 300ms;
  :hover {
      cursor: pointer;
      background: #f2f2f2;
  }
`;
