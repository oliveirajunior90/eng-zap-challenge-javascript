import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import themeConfig from './config';
import GlobalStyles from './global-styles';

import { ApiContext } from '../utils/context';

import Header from '../components/header';
import Footer from '../components/footer';

const Theme = (props) => {
  const { children } = props;
  const { brand } = useContext(ApiContext);

  return (
    <ThemeProvider theme={themeConfig[brand]}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Theme;
