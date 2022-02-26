import React from 'react';
import { MdLogout } from 'react-icons/md';
import { iconList } from '../../util';
import * as S from './styles';
interface Props {
  type: 'logout' | 'left' | 'right' | 'close';
  onPress?: () => void;
}
const ButtonIcon: React.FC<Props> = ({ type, onPress }) => {
  const Icon = iconList[type];
  return <S.Container onClick={() => onPress ? onPress() : null}>
      { Icon && <Icon size={16} /> }
  </S.Container>;
}

export default ButtonIcon;