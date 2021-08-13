import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import themeConfig from '../../theme/config';

export const renderWithTheme = (children) => {
  render(<ThemeProvider theme={themeConfig['zap']}>{children}</ThemeProvider>);
};
