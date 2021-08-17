const checkCondoFee = (monthlyCondoFee, rentalTotalPrice) => {
  const thirdPartTotalPrice = (30 / 100) * rentalTotalPrice;
  return monthlyCondoFee < thirdPartTotalPrice;
};

export const canBeSold =
  (brand) =>
  ({ type, usableAreas, price }) => {
    if (type !== 'venda' || usableAreas < 1) return false;

    const squareValue = price / usableAreas;

    const setRule = {
      zap: price >= 600000 && squareValue > 3500,
      viva: price <= 700000,
    };

    return setRule[brand];
  };

export const canBeRented =
  (brand) =>
  ({ type, rentalTotalPrice, monthlyCondoFee }) => {
    if (type !== 'aluguel' || !monthlyCondoFee) return false;

    const isValidCondoFee = checkCondoFee(monthlyCondoFee, rentalTotalPrice);

    const setRule = {
      zap: rentalTotalPrice >= 3500,
      viva: rentalTotalPrice <= 4000 && isValidCondoFee,
    };

    return setRule[brand];
  };

export const isValid = ({ location }) => {
  const { lat, lon } = location;
  return lat !== 0 && lon !== 0;
};

export const byBrand =
  (brand) =>
  ({ location }) => {
    const { lon, lat } = location;

    if (!brand) return true;

    const isZap =
      lon >= -46.693419 &&
      lon <= -46.641146 &&
      lat <= -23.546686 &&
      lat >= -23.568704;
    const bound = isZap ? 'zap' : 'viva';
    return brand === bound;
  };
