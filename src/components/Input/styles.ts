import styled from 'styled-components';

export const InputText = styled.input`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 16px;
  color: #fff;
  font-size: 16px;
  outline: 0px;
  padding-right: 120px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -webkit-appearance:none;

`;

export const Label = styled.label`
  position: relative;
  padding-top: 13px;
`;

export const ButtonSubmit = styled.button`
  position: absolute;
  width: 85px;
  height: 36px;
  left: 265px;
  top: 25px;
  border-radius: 44px;
  color: #B22E6F;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  z-index: 9999;
  transition: opacity 500ms;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    left: 255px;
  }
`;
