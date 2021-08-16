import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';
import { formatData, paginate } from './helpers';

const formatResults = (data) => data.map((res) => formatData(res));

export const getData = ({ brand, businessType, page }) => {
  const dataApi = source.filter(isValid).filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand, businessType)),
    RENTAL: dataApi.filter(canBeRented(brand, businessType)),
  };

  const data = setData[businessType] || dataApi;
  const formattedData = formatResults(data);

  return paginate(formattedData, 21, page);
};

export const getDataById = ({ brand, id }) => {
  const data = source
    .filter(isValid)
    .filter(byBrand(brand))
    .find((res) => res.id === id);
  return formatData(data);
};
