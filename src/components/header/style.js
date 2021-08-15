import { makeStyles } from '@material-ui/core/styles';

const styles = {
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
  },

  menu: {
    display: 'flex',
    listStyleType: 'none',
    alignItems: 'center',
  },

  link: {
    padding: '25px 0px 25px 0',
    marginLeft: '25px',
    fontWeight: 200,
    fontSize: '15px',
    color: '#6f6f6f',
    borderLeft: '1px solid #ccc',
    '&:first-child': {
      borderLeft: 0,
    },
  },

  menuItem: {},
};

export const useStyles = makeStyles(() => styles);
