export const canBeSold =
  (brand, businessType) =>
  ({ pricingInfos, usableAreas }) => {
    const { price } = pricingInfos;

    if (businessType !== 'SALE') return false;

    const setRule = {
      zap: price > 600000 && usableAreas > 0,
      viva: price > 700000 && usableAreas > 0,
    };

    return setRule[brand];
  };

export const canBeRented =
  (brand, businessType) =>
  ({ pricingInfos }) => {
    const { rentalTotalPrice } = pricingInfos;

    if (businessType !== 'RENTAL') return false;

    const setRule = {
      zap: rentalTotalPrice > 3500,
      viva: rentalTotalPrice > 4000,
    };

    return setRule[brand];
  };

export const isValid = ({ address }) => {
  const { lat, lon } = address.geoLocation.location;
  return lat !== 0 && lon !== 0;
};

export const byBrand =
  (brand) =>
  ({ address }) => {
    const { lon, lat } = address.geoLocation.location;

    if (!brand) return true;

    const isZap =
      lon >= -46.693419 &&
      lon <= -46.641146 &&
      lat <= -23.546686 &&
      lat >= -23.568704;
    const bound = isZap ? 'zap' : 'viva';
    return brand === bound;
  };
