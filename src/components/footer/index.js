import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../static/zap-footer.svg';

const Footer = () => {
  return (
    <Wrapper>
      <Image src={LogoFooter} alt="logo-footer" />
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
