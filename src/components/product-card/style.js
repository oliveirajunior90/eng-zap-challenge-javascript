import { makeStyles } from '@material-ui/core/styles';

const styles = {
  image: {
    height: '219px',
  },
  neighborhood: {
    margin: '0',
    fontSize: '18px',
    fontWeight: '100',
  },

  city: {
    fontWeight: 700,
    fontSize: '10px',
    color: '#f85901',
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
};

export const useStyles = makeStyles(() => styles);