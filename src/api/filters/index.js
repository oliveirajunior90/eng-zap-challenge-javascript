export const canBeSold =
  (brand, businessType) =>
  ({ pricingInfos, usableAreas }) => {
    const { price } = pricingInfos;

    if (businessType !== 'SALE' || usableAreas < 1) return false;

    const squareValue = price / usableAreas;

    const setRule = {
      zap: price >= 600000 && squareValue > 3500,
      viva: price <= 700000,
    };

    return setRule[brand];
  };

export const canBeRented =
  (brand, businessType) =>
  ({ pricingInfos }) => {
    const { rentalTotalPrice, monthlyCondoFee } = pricingInfos;

    if (businessType !== 'RENTAL' || !monthlyCondoFee) return false;

    const setRule = {
      zap: rentalTotalPrice >= 3500,
      viva: rentalTotalPrice <= 4000,
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
