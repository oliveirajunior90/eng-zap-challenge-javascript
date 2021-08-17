import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },

  item: {
    background: '#0000000d',
    padding: '25px 0',
    margin: '23px',
    width: '300px',
    borderRadius: '6px',
    display: 'flex',
    flexDirection: 'column',
    height: '160px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:first-child': {
      borderLeft: 0,
    },
  },

  listItem: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#666',
    marginBottom: '5px',
  },

  list: {
    paddingLeft: 0,
    listStyleType: 'none',
    textAlign: 'center',
    display: 'flex',
    width: '70%',
    justifyContent: 'space-around',
  },

  link: {
    color: '#666',
    '&:hover': {
      color: '#000',
    },
  },

  logoZap: {
    width: '110px',
    margin: '0px 70px 0',
  },

  logoViva: {
    width: '204px',
    margin: '0px 70px 0',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default withStyles(styles);
