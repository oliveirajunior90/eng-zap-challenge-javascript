import { makeStyles } from '@material-ui/core/styles';

const styles = {
  wrapper: {
    marginTop: '25px',
    marginBottom: '25px',
  },

  pagination: {
    margin: '20px 0 20px',
    display: 'flex',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles(() => styles);
