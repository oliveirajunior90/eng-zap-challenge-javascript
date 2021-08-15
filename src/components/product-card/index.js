import React from 'react';
import Carousel from 'react-slick';
import { useStyles } from './style';
import { Card } from '@material-ui/core';
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
        <div key={`a-${i}`}>
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
    <span className={classes.price}>{data.price}</span>
  </div>
);

const ProductCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Card>
      <CustomCarousel gallery={data.gallery} />
      <Details data={data} classes={classes} />
    </Card>
  );
};

export default ProductCard;
