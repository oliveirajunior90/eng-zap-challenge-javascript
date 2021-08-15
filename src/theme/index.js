import React, { useContext } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import themeConfig from './config';
import GlobalStyles from './global-styles';

import { ApiContext } from '../utils/context';

import Header from '../components/header';
import Footer from '../components/footer';

const Theme = (props) => {
  const { children } = props;
  const { brand } = useContext(ApiContext);
  const theme = createTheme(themeConfig[brand]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Theme;
