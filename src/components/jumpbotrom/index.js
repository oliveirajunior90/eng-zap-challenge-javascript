import React from 'react';
import { styles } from './style';
import { withStyles } from '@material-ui/core';

const Jumbotron = ({ text, classes }) => {
  if (!text) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
export default withStyles(styles)(Jumbotron);
