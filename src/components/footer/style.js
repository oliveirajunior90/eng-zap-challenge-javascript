import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  wrapper: {
    background: '#eaeaea',
    padding: '40px 0',
    minHeight: '70px',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },

  image: {
    width: '70px',
  },
});

export default withStyles(styles);
