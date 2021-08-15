import { makeStyles } from '@material-ui/core/styles';

const styles = {
  text: {
    textAlign: 'center',
    fontSize: '50px',
    color: 'white',
    fontWeight: 200,
  },

  wrapper: {
    padding: '15px 0',
    background: '#f85901',
    marginBottom: '50px',
    opacity: '0.8',
  },
};

export const useStyles = makeStyles(() => styles);
