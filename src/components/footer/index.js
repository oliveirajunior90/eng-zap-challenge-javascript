import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../static/zap-footer.svg';
import { Container } from '@material-ui/core';

const Footer = () => {
  return (
    <Wrapper>
      <Container fixed>
        <Image src={LogoFooter} alt="logo-footer" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.primary};
  padding: 40px 0;
  min-height: 70px;
`;

const Image = styled.img`
  width: 70px;
`;

export default Footer;
