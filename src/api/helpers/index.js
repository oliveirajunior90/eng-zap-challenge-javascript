//import { formatCurrency } from '../../utils/currency';

export const paginate = (array, limit, page) => {
  const data = array.slice((page - 1) * limit, page * limit);
  const pageTotal = Math.ceil(array.length / limit);

  return { data, currentPage: page, pageTotal };
};

const pricingToNumber = (value) => {
  if (!value) return null;

  return parseFloat(value);
};

export const formatData = (res) => {
  const rentalTotalPrice = pricingToNumber(res.pricingInfos.rentalTotalPrice);
  const monthlyCondoFee = pricingToNumber(res.pricingInfos.monthlyCondoFee);
  const price = pricingToNumber(res.pricingInfos.price);
  const location = res.address.geoLocation.location;

  return {
    id: res.id,
    city: res.address.city,
    location,
    neighborhood: res.address.neighborhood,
    price,
    monthlyCondoFee,
    rentalTotalPrice,
    type: rentalTotalPrice ? 'aluguel' : 'venda',
    gallery: res.images,
    bathrooms: res.bathrooms,
    bedrooms: res.bedrooms,
    parkingSpaces: res.parkingSpaces,
    usableAreas: res.usableAreas,
  };
};
