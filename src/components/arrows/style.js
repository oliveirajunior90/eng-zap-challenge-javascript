import { withStyles } from '@material-ui/core';

const stylesArrow = {
  top: '99px',
  zIndex: 99,
  position: 'absolute',
  background: 'black',
  width: '21px',
  height: '21px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '18px',
};

const styles = () => ({
  icon: {
    color: 'white',
    fontSize: '14px',
  },

  nextArrow: {
    ...stylesArrow,
    right: '5px',
    justifyContent: 'center',
  },

  prevArrow: {
    ...stylesArrow,
    justifyContent: 'flex-end',
    left: '5px',
  },
});

export default withStyles(styles);
