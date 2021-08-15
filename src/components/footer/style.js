import { makeStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    background: '#eaeaea',
    padding: '40px 0',
    minHeight: '70px',
  },

  image: {
    width: '70px',
  },
};

export const useStyles = makeStyles(() => styles);
