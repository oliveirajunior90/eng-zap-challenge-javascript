import React, { useContext } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import { config } from './config';
import GlobalStyles from './global-styles';

import { ApiContext } from 'utils/context';

import Header from 'components/header';
import Footer from 'components/footer';

const Theme = (props) => {
  const { children } = props;
  const context = useContext(ApiContext);
  const theme = createTheme(config[context.brand.name]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      <Header {...context} />
      {children}
      <Footer {...context} />
    </ThemeProvider>
  );
};

export default Theme;
