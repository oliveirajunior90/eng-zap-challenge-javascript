import React from 'react';
import { compose } from 'redux';
import withStyles from './style';
import withSingle from 'services/single';
import { Container } from '@material-ui/core';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import Carousel from 'react-slick';
import Button from '@material-ui/core/Button';
import { formatCurrency } from 'utils/currency';

const slide = {
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow: 4,
  swipe: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
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
  acomodations.map(
    (data, index) =>
      data.area > 0 && (
        <div key={`i${index}`} className={classes.area}>
          <data.Icon />
          <span>
            {data.area} {data.area > 1 ? `${data.text}s` : data.text}
          </span>
        </div>
      )
  );

const Single = ({
  gallery,
  neighborhood,
  type,
  netPrice,
  city,
  netRentalPrice,
  bedrooms,
  bathrooms,
  handleBack,
  parkingSpaces,
  usableAreas,
  classes,
}) => {
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
            Imovel de {usableAreas}m?? em {neighborhood}
          </h1>
          {city && (
            <span className={classes.city}>localizado na cidade de {city}</span>
          )}
          <span className={classes.price}>
            {type === 'venda'
              ? formatCurrency(netPrice)
              : formatCurrency(netRentalPrice)}
          </span>
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

const withComponents = compose(withSingle, withStyles);
export default withComponents(Single);
