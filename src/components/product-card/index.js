import React from 'react';
import Carousel from 'react-slick';
import withStyles from './style';
import { Card } from '@material-ui/core';
import { PrevArrow, NextArrow } from '../arrows';
import { formatCurrency } from '../../utils/currency';

const slide = {
  autoPlay: false,
  slidesToShow: 1,
  swipe: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const CustomCarousel = ({ gallery, classes }) => (
  <Carousel {...slide}>
    {gallery.map((item, i) => (
      <div key={`a-${i}`}>
        <img className={classes.image} key={i} src={item} alt="carousel" />
      </div>
    ))}
  </Carousel>
);

const Details = ({ data, classes }) => (
  <div className={classes.wrapperDetails}>
    <h3 className={classes.neighborhood}>{data.neighborhood}</h3>
    <span className={classes.city}>{data.city}</span>
    {data.type === 'venda' ? (
      <span className={classes.price}>{formatCurrency(data.price)}</span>
    ) : (
      <span className={classes.price}>
        {formatCurrency(data.rentalTotalPrice)}
      </span>
    )}
  </div>
);

const ProductCard = ({ data, classes }) => (
  <Card>
    <CustomCarousel gallery={data.gallery} classes={classes} />
    <Details data={data} classes={classes} />
  </Card>
);

export default withStyles(ProductCard);
