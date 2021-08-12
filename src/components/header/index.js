import React from 'react';
import * as S from './style';
import Logo from '../static/zap.svg';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Image src={Logo} alt="logo" />
    </S.Wrapper>
  );
};

export default Header;
