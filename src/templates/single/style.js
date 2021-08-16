import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  neighborhood: {
    fontSze: '30px',
    fontWeight: '700',
    color: '#222',
    margin: '5px 0 0',
  },

  acommodations: {
    display: 'flex',
    margin: '30px 0 45px',
  },

  area: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 20px 0 0',
    color: '#222',
  },

  price: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#181515',
    display: 'flex',
  },

  city: {
    display: 'flex',
    fontSize: '24px',
    fontWeight: 100,
    marginBottom: '20px',
  },

  status: {
    background: 'orange',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '4px',
    fontWeight: '800',
    textTransform: 'uppercase',
  },

  wrapper: {
    margin: '30px auto 30px',
  },

  image: {
    height: '350px',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
    },
  },
});

export default withStyles(styles);
