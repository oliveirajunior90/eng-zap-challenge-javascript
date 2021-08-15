import React, { useContext } from 'react';
import getData from '../../api';

import { ApiContext } from '../../utils/context';

const types =
  {
    SALE: 'venda',
    RENTAL: 'aluguel',
  } || null;

const withProducts = (Component) => (props) => {
  const { history, location } = props;
  const { brand, businessType, page } = useContext(ApiContext);

  const { data, currentPage, pageTotal } = getData({
    brand,
    businessType,
    page,
  });

  const onChangePage = (event, value) => {
    history.push({
      pathname: location.pathname,
      search: '?page=' + value,
    });
  };

  return (
    <Component
      products={data}
      currentPage={currentPage}
      pageTotal={pageTotal}
      businessType={types[businessType]}
      onChangePage={onChangePage}
    />
  );
};

export default withProducts;
