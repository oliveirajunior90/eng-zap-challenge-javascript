import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';
import { formatData, paginate } from './helpers';

export const getData = ({ brand, businessType, page }) => {
  const res = source.map(formatData).filter(isValid).filter(byBrand(brand));

  const dataApi = res;

  const setData = {
    SALE: dataApi.filter(canBeSold(brand)),
    RENTAL: dataApi.filter(canBeRented(brand)),
  };

  const data = setData[businessType] || dataApi;
  return paginate(data, 21, page);
};

export const getDataById = ({ id }) => {
  const data = source.find((res) => res.id === id);
  return formatData(data);
};
