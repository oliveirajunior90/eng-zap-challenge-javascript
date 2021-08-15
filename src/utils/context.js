import React from 'react';
import { withRouter } from 'react-router-dom';

export const ApiContext = React.createContext({});

const Context = ({ children, location }) => {
  const [, brand, businessType] = location.pathname.split('/', 4);
  const params = new URLSearchParams(location.search);
  const page = params.get('page');

  const setBrand = {
    zap: { name: 'zap', label: 'zap' },
    vivareal: { name: 'viva', label: 'vivareal' },
  } || { name: 'zap', label: 'zap' };

  const setBusinessType = {
    venda: { name: 'SALE', label: 'venda' },
    aluguel: { name: 'RENTAL', label: 'aluguel' },
  };

  return (
    <ApiContext.Provider
      value={{
        page: parseInt(page) || 1,
        brand: setBrand[brand],
        businessType: setBusinessType[businessType],
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default withRouter(Context);
