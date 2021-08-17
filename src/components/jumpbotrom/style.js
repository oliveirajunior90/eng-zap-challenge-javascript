export const styles = (theme) => ({
  text: {
    textAlign: 'center',
    fontSize: '50px',
    color: 'white',
    fontWeight: 200,
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      lineHeight: '20px',
      fontWeight: 400,
    },
  },

  wrapper: {
    padding: '15px 0',
    background: theme.palette.primary.main,
    marginBottom: '50px',
    opacity: '0.8',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px',
      padding: '5px 0',
    },
  },
});
