import React, { useContext } from 'react';
import getData from '../../api';

import { ApiContext } from '../../utils/context';

const withProducts = (Component) => (props) => {
  const { history, location } = props;
  const { brand, businessType, page } = useContext(ApiContext);

  const { data, currentPage, pageTotal } = getData({
    brand: brand.name,
    businessType: businessType.name,
    page,
  });

  const onChangePage = (_, value) => {
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
      businessType={businessType}
      onChangePage={onChangePage}
    />
  );
};

export default withProducts;
