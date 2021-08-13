import React from 'react';
import * as S from './style';
import Logo from '../static/zap.svg';
import { Container } from '@material-ui/core';

const Header = () => {
  return (
    <S.Wrapper>
      <Container fixed>
        <S.Image src={Logo} alt="logo" />
      </Container>
    </S.Wrapper>
  );
};

export default Header;
