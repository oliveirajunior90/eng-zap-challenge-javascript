import React from 'react';
import withStyles from './style';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const SampleNextArrow = ({ onClick, classes }) => (
  <div className={classes.nextArrow} onClick={onClick}>
    <ArrowForwardIosIcon className={classes.icon} />
  </div>
);

export const SamplePrevArrow = ({ onClick, classes }) => (
  <div className={classes.prevArrow} onClick={onClick}>
    <ArrowBackIosIcon className={classes.icon} />
  </div>
);

const PrevArrow = withStyles(SamplePrevArrow);
const NextArrow = withStyles(SampleNextArrow);

export { PrevArrow, NextArrow };
