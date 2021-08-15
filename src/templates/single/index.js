import React from 'react';
import { useStyles } from './style';
import withSingle from '../../services/product';
import { Container } from '@material-ui/core';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Carousel from 'react-slick';
import Button from '@material-ui/core/Button';

const slide = {
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow: 4,
  swipe: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Gallery = ({ gallery, classes }) => (
  <Carousel {...slide}>
    {gallery.map((image, index) => (
      <div key={`i-${index}`}>
        <img className={classes.image} src={image} alt="single gallery" />
      </div>
    ))}
  </Carousel>
);

const Single = ({
  gallery,
  neighborhood,
  type,
  price,
  city,
  rentalTotalPrice,
  bedrooms,
  bathrooms,
  handleBack,
  parkingSpaces,
  usableAreas,
}) => {
  const classes = useStyles();
  return (
    <>
      <Gallery gallery={gallery} classes={classes} />
      <div className={classes.wrapper}>
        <Container fixed maxWidth="md">
          <span className={classes.status}>{type}</span>
          <h1 className={classes.neighborhood}>
            Imovel de {usableAreas}m² em {neighborhood}
          </h1>
          {city && (
            <span className={classes.city}>localizado na cidade de {city}</span>
          )}
          <span className={classes.price}>{price || rentalTotalPrice}</span>
          <div className={classes.acommodations}>
            {bedrooms > 0 && (
              <div className={classes.area}>
                <SingleBedIcon />
                <span>
                  {bedrooms} {bedrooms > 1 ? ' quartos' : ' quarto'}
                </span>
              </div>
            )}
            {bathrooms > 0 && (
              <div className={classes.area}>
                <BathtubIcon />
                <span>
                  {bathrooms} {bathrooms > 1 ? ' banheiros' : ' banheiro'}
                </span>
              </div>
            )}
            {parkingSpaces > 0 && (
              <div className={classes.area}>
                <DirectionsCarIcon />
                <span>
                  {parkingSpaces} {parkingSpaces > 1 ? ' vagas' : ' vaga'}
                </span>
              </div>
            )}
          </div>
          <Button variant="contained" onClick={handleBack}>
            voltar
          </Button>
        </Container>
      </div>
    </>
  );
};

export default withSingle(Single);
