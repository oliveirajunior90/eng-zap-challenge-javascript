import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';
import { formatData, paginate } from './helpers';

export const getData = ({ brand, businessType, page = 1 }) => {
  const dataApi = source
    .map(formatData(brand))
    .filter(isValid)
    .filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand)),
    RENTAL: dataApi.filter(canBeRented(brand)),
  };

  const data = setData[businessType] || dataApi;

  return paginate(data, 21, page);
};

export const getDataById = ({ id, brand }) => {
  const data = source.find((res) => res.id === id);
  return formatData(brand)(data);
};
