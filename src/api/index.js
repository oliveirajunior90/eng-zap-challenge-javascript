import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';

const paginate = (array, limit, page) => {
  return array.slice((page - 1) * limit, page * limit);
};

const formatData = (data) =>
  data.map((res) => ({
    id: res.id,
    city: res.address.city,
    neighborhood: res.address.neighborhood,
    price: res.pricingInfos.price,
    rentalTotalPrice: res.pricingInfos.rentalTotalPrice,
    gallery: res.images,
    bathrooms: res.bathrooms,
    bedrooms: res.bedrooms,
    parkingSpaces: res.parkingSpaces,
  }));

const getData = ({ brand, businessType, page = 1 }) => {
  const dataApi = source.filter(isValid).filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand, businessType)),
    RENTAL: dataApi.filter(canBeRented(brand, businessType)),
  };

  const data = setData[businessType] || dataApi;
  console.log(data);
  const formattedData = formatData(data);
  return paginate(formattedData, 21, page);
};

export default getData;
