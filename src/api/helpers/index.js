import { formatCurrency } from '../../utils/currency';

export const paginate = (array, limit, page) => {
  const data = array.slice((page - 1) * limit, page * limit);
  const pageTotal = Math.ceil(array.length / limit);

  return { data, currentPage: page, pageTotal };
};

export const formatData = (res) => ({
  id: res.id,
  city: res.address.city,
  neighborhood: res.address.neighborhood,
  price: formatCurrency(res.pricingInfos.price),
  type: res.pricingInfos.rentalTotalPrice ? 'aluguel' : 'venda',
  rentalTotalPrice: formatCurrency(res.pricingInfos.rentalTotalPrice) || null,
  gallery: res.images,
  bathrooms: res.bathrooms,
  bedrooms: res.bedrooms,
  parkingSpaces: res.parkingSpaces,
  usableAreas: res.usableAreas,
});
