import React, { useContext } from 'react';
import getData from '../../api';

import { ApiContext } from '../../utils/context';

const withProducts = (Component) => () => {
  const { brand, businessType, page } = useContext(ApiContext);
  const data = getData({ brand, businessType, page });

  const type = !businessType
    ? null
    : businessType === 'SALE'
    ? 'venda'
    : 'aluguel';

  return <Component products={data} businessType={type} />;
};

export default withProducts;
