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

const renderAcomodations = (acomodations, classes) =>
  acomodations.map((data, index) => {
    return (
      data.area > 0 && (
        <div key={`i${index}`} className={classes.area}>
          <data.Icon />
          <span>
            {data.area} {data.area > 1 ? `${data.text}s` : data.text}
          </span>
        </div>
      )
    );
  });

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

  const acomodations = [
    {
      area: bedrooms,
      Icon: () => <SingleBedIcon />,
      text: 'quarto',
    },
    {
      area: bathrooms,
      Icon: () => <BathtubIcon />,
      text: 'banheiro',
    },
    {
      area: parkingSpaces,
      Icon: () => <DirectionsCarIcon />,
      text: 'vaga',
    },
  ];

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
            {renderAcomodations(acomodations, classes)}
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
