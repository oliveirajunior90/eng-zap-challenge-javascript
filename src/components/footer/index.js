import React from 'react';
import { useStyles } from './style';
import LogoFooter from '../../static/zap-footer.svg';
import { Container } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container fixed maxWidth="md">
        <img className={classes.image} src={LogoFooter} alt="logo-footer" />
      </Container>
    </div>
  );
};

export default Footer;
