import React, { useEffect, useState } from 'react';
import Carousel from 'react-slick';
import withStyles from './style';
import { Card } from '@material-ui/core';
import { PrevArrow, NextArrow } from 'components/arrows';
import { formatCurrency } from 'utils/currency';
import Skeleton from '@material-ui/lab/Skeleton';

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
      <span className={classes.price}>{formatCurrency(data.netPrice)}</span>
    ) : (
      <span className={classes.price}>
        {formatCurrency(data.netRentalPrice)}
      </span>
    )}
  </div>
);

const ProductCard = ({ data, classes }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {}, 10000);
    setLoading(false);
  }, []);

  return (
    <Card>
      {loading ? (
        <Skeleton variant="rect" width="100%" height={350} />
      ) : (
        <CustomCarousel gallery={data.gallery} classes={classes} />
      )}
      <Details data={data} classes={classes} />
    </Card>
  );
};

export default withStyles(ProductCard);
