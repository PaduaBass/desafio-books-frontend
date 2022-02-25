import React, { InputHTMLAttributes } from 'react';
import { ENTRAR } from '../../constants/labels';
import { ButtonSubmit, InputText, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    isSubmit?: boolean;
    onPress?: () => void;
}

const Input: React.FC<Props> = ({ label, isSubmit, onPress, ...rest}) => {
  return <>
    <div className='label-float'>
      <InputText placeholder={label} {...rest} />
      <Label>{label}</Label>
      { isSubmit && <ButtonSubmit type='submit' onClick={() => onPress ? onPress() : null}>{ENTRAR}</ButtonSubmit> }
    </div>
  </>;
}

export default Input;