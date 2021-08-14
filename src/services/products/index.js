import React, { useContext } from 'react';
import getData from '../../api';
import { compose } from 'redux';
import { ApiContext } from '../../utils/context';

const withProducts = (Component) => () => {
  const { brand, businessType, page } = useContext(ApiContext);
  const data = getData({ brand, businessType, page });

  return <Component data={data} />;
};

export default compose(withProducts);
