import React from 'react';
import { useStyles } from './style';
import Logo from '../../static/zap.svg';
import { Container } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container fixed maxWidth="md">
        <img className={classes.image} src={Logo} alt="logo" />
      </Container>
    </div>
  );
};

export default Header;
