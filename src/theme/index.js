import React from 'react';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const Theme = (props) => {
  const { children, location } = props;
  const param = location.pathname.split('/')[2];
  const brand = param === 'zap' ? 'zap' : 'viva';

  return <ThemeProvider theme={theme[brand]}>{children}</ThemeProvider>;
};

export default withRouter(Theme);
