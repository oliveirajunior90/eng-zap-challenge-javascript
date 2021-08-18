const apiImages = 'https://oliveirajunior90.000webhostapp.com/olx';

export const paginate = (array, limit, page) => {
  const data = array.slice((page - 1) * limit, page * limit);
  const pageTotal = Math.ceil(array.length / limit);

  return { data, currentPage: page, pageTotal };
};

const pricingToNumber = (value) => {
  if (!value) return null;

  return parseFloat(value);
};

const formatGallery = (gallery) => {
  return gallery.map((res) => {
    const [, name] = res.split('images');
    return apiImages + name;
  });
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
    gallery: formatGallery(res.images),
    bathrooms: res.bathrooms,
    bedrooms: res.bedrooms,
    parkingSpaces: res.parkingSpaces,
    usableAreas: res.usableAreas,
  };
};
