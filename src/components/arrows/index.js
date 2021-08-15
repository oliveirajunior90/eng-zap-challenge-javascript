import React from 'react';
import { useStyles } from './style';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const SampleNextArrow = (props) => {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.nextArrow} onClick={onClick}>
      <ArrowForwardIosIcon className={classes.icon} />
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.prevArrow} onClick={onClick}>
      <ArrowBackIosIcon className={classes.icon} />
    </div>
  );
};
