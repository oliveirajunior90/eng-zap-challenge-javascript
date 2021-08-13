import source from './source/api.json';
import { byBrand, isValid, canBeSold, canBeRented } from './filters';

// Para o imóvel ser listado no ZAP:
// No caso de aluguel, o valor mínimo deve ser de R$ 3.500,00.
// No caso de venda, o valor mínimo deve ser de R$ 600.000,00. \
// Para o imóvel ser listado no Viva Real:
// No caso de aluguel, o valor máximo deve ser de R$ 4.000,00.
// No caso de venda, o valor máximo deve ser de R$ 700.000,00.

const getData = (params) => {
  const { brand, businessType } = params;
  const dataApi = source.filter(isValid).filter(byBrand(brand));

  const setData = {
    SALE: dataApi.filter(canBeSold(brand, businessType)),
    RENTAL: dataApi.filter(canBeRented(brand, businessType)),
  };

  const data = setData[businessType] || dataApi;

  return formatData(data);
};

export default getData;
