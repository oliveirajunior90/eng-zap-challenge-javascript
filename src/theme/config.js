import { createTheme } from '@material-ui/core/styles';

const zap = {
  palette: {
    primary: {
      main: '#dedede',
    },
    secondary: {
      main: '#ffa500',
    },
  },
};

const viva = {
  palette: {
    primary: {
      main: '#dddd',
    },
    secondary: {
      main: '#ffa500',
    },
  },
};

const theme = { zap, viva };

export default createTheme(theme);
