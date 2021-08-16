import React from 'react';
import withStyles from './style';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import VivaLogo from '../../static/vivareal.png';
import ZapLogo from '../../static/zap.svg';

const logo = {
  viva: VivaLogo,
  zap: ZapLogo,
};

const Header = ({ brand, classes }) => (
  <div className={classes.wrapper}>
    <Container fixed maxWidth="md">
      <div className={classes.flex}>
        <div className={classes.logoArea}>
          <img className={classes.image} src={logo[brand.name]} alt="logo" />
        </div>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Link className={classes.link} to={`/${brand.label}/venda`}>
              Comprar
            </Link>
          </li>
          <li className={classes.link}>
            <Link className={classes.link} to={`/${brand.label}/aluguel`}>
              Alugar
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);

export default withStyles(Header);
