import { withStyles } from '@material-ui/core/';

export const styles = (theme) => ({
  image: {
    height: '230px',
  },
  neighborhood: {
    margin: '0',
    fontSize: '18px',
    fontWeight: '100',
  },

  city: {
    fontWeight: 700,
    fontSize: '10px',
    color: theme.palette.primary.main,
    marginBottom: '5px',
  },

  price: {
    color: '#000',
    fontWeight: 700,
    fontSize: '17px',
  },

  link: {
    textDecoretion: 'none !important',
  },

  wrapperDetails: {
    display: 'flex',
    padding: '10px 15px 10px',
    flexDirection: 'column',
  },
});

export default withStyles(styles);
