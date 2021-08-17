import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  image: {
    width: '110px',
    margin: '25px 0 15px',
  },

  wrapper: {
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px 0 rgb(0 0 0 / 24%)',
    position: 'relative',
    zIndex: 9,
  },

  logoArea: {
    flex: 1,
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  menu: {
    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
    paddingLeft: 0,
  },

  menuItem: {
    borderLeft: '1px solid #ccc',
    '&:first-child': {
      borderLeft: 0,
    },
  },

  link: {
    padding: '25px 25px 25px 20px',
    fontSize: '15px',
    color: '#6f6f6f',
    textTransform: 'uppercase',
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      padding: '6px 13px',
    },
    'li > &:first-child': {
      padding: '25px 25px 25px 26px',
    },
  },
});

export default withStyles(styles);
