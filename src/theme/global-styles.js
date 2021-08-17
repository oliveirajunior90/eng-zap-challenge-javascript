import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      ['html,body']: {
        height: '100%',
      },
      ['#root']: {
        height: '100%',
      },
      body: {
        background: '#f1f1f1',
      },
      a: {
        textDecoration: 'none',
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
