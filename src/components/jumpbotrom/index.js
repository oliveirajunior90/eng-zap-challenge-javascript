import React from 'react';
import { useStyles } from './style';

const Jumbotron = ({ text }) => {
  const classes = useStyles();

  if (!text) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
export default Jumbotron;
