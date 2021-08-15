import { makeStyles } from '@material-ui/core/styles';

const styles = {
  image: {
    width: '110px',
    margin: '20px 0 20px',
  },

  wrapper: {
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px 0 rgb(0 0 0 / 24%)',
    position: 'relative',
    zIndex: 9,
  },
};

export const useStyles = makeStyles(() => styles);
