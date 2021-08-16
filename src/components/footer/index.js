import React from 'react';
import { useStyles } from './style';
import ZapLogo from '../../static/zap-footer.svg';
import VivaLogo from '../../static/vivareal.png';
import { Container } from '@material-ui/core';

const logo = {
  viva: VivaLogo,
  zap: ZapLogo,
};

const Footer = ({ brand }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container fixed maxWidth="md">
        <img className={classes.image} src={logo[brand.name]} alt="logo" />
      </Container>
    </div>
  );
};

export default Footer;
