import React from 'react';
import Carousel from 'react-slick';
import { useStyles } from './style';
import { Grid, Card } from '@material-ui/core';
import { getPrice } from '../../utils/currency';
import { Link } from 'react-router-dom';

import { SamplePrevArrow, SampleNextArrow } from '../arrows';

const slide = {
  autoPlay: false,
  slidesToShow: 1,
  swipe: true,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CustomCarousel = ({ gallery }) => {
  const classes = useStyles();
  return (
    <Carousel {...slide}>
      {gallery.map((item, i) => (
        <div key={`a-${i}`} className={classes.imageWrapper}>
          <img className={classes.image} key={i} src={item} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
};

const Details = ({ data, classes }) => (
  <div className={classes.wrapperDetails}>
    <h3 className={classes.neighborhood}>{data.neighborhood}</h3>
    <span className={classes.city}>{data.city}</span>
    <span className={classes.price}>{getPrice(data.price)}</span>
  </div>
);

const ProductCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link underline="none" to="/">
        <Card>
          <CustomCarousel gallery={data.gallery} />
          <Details data={data} classes={classes} />
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCard;
