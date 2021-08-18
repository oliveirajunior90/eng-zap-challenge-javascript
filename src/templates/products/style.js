import { withStyles } from '@material-ui/core/';

const styles = (theme) => ({
  wrapper: {
    marginTop: '25px',
    marginBottom: '25px',
  },

  pagination: {
    margin: '20px 0 20px',
    display: 'flex',
    justifyContent: 'center',
  },

  loadingText: {
    textAlign: 'center',
    fontWeight: 700,
    color: theme.palette.primary.main,
  },

  loading: {
    maxWidth: '400px',
    margin: '220px auto',
    padding: '0 30px',
    [theme.breakpoints.down('sm')]: {
      margin: '100px auto',
    },
  },
});

export default withStyles(styles);
