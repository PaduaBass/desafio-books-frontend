import React, { InputHTMLAttributes } from 'react';
import { ERROR_SIGN_IN } from '../../constants';
import { ENTRAR } from '../../constants/labels';
import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isSubmit?: boolean;
    onPress?: () => void;
    error?: boolean;
}

const Input: React.FC<Props> = ({ label, isSubmit, onPress, error, ...rest}) => {
  return <>
    <div className='label-float'>
      <S.InputText placeholder={label} {...rest} />
      <S.Label>{label}</S.Label>
      { isSubmit && <S.ButtonSubmit type='submit' onClick={() => onPress ? onPress() : null}>{ENTRAR}</S.ButtonSubmit> }
      { isSubmit && error && (
        <S.AlertError>
          {ERROR_SIGN_IN}
        </S.AlertError>
      )}
    </div>
  </>;
}

export default Input;