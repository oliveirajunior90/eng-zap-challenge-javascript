import React from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './global-styles';

import Header from '../components/header';
import Footer from '../components/footer';

const Theme = (props) => {
  const { children, location } = props;
  const param = location.pathname.split('/')[1];
  const brand = param === 'zap' ? 'zap' : 'viva';

  return (
    <ThemeProvider theme={theme[brand]}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default withRouter(Theme);
