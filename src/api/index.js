import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';

const paginate = (array, limit, page) => {
  return array.slice((page - 1) * limit, page * limit);
};

const getData = ({ brand, businessType, page = 1 }) => {
  const dataApi = source.filter(isValid).filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand, businessType)),
    RENTAL: dataApi.filter(canBeRented(brand, businessType)),
  };

  const data = setData[businessType] || dataApi;

  return paginate(data, 20, page);
  // const data2 = data.map((res) => {
  //   return {
  //     address: res.address.city,
  //     lat: res.address.geoLocation.location.lat,
  //     lon: res.address.geoLocation.location.lon,
  //     preco: res.pricingInfos.price,
  //     info: res.pricingInfos.businessType,
  //   };
  // });
};

export default getData;
