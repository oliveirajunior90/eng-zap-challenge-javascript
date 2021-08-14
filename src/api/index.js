import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';

// Para o imóvel ser listado no ZAP:
// No caso de aluguel, o valor mínimo deve ser de R$ 3.500,00.
// No caso de venda, o valor mínimo deve ser de R$ 600.000,00. \
// Para o imóvel ser listado no Viva Real:
// No caso de aluguel, o valor máximo deve ser de R$ 4.000,00.
// No caso de venda, o valor máximo deve ser de R$ 700.000,00.

const getData = ({ brand, businessType }) => {
  const dataApi = source.filter(isValid).filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand, businessType)),
    RENTAL: dataApi.filter(canBeRented(brand, businessType)),
  };

  const data = setData[businessType] || dataApi;

  // const data2 = data.map((res) => {
  //   return {
  //     address: res.address.city,
  //     lat: res.address.geoLocation.location.lat,
  //     lon: res.address.geoLocation.location.lon,
  //     preco: res.pricingInfos.price,
  //     info: res.pricingInfos.businessType,
  //   };
  // });

  return data;
};

export default getData;
