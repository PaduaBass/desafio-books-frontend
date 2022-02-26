import styled from 'styled-components';

export const Container = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.COLORS.text_black};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  background: ${({ theme }) => theme.COLORS.text_white};
  transition: background 300ms;
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.gray};
  }
`;
