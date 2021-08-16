import React from 'react';
import { withRouter } from 'react-router-dom';

export const ApiContext = React.createContext({});

const Context = ({ children, location }) => {
  const [, brand, businessType] = location.pathname.split('/', 4);
  const params = new URLSearchParams(location.search);
  const page = params.get('page');

  const zap = { name: 'zap', label: 'zap' };
  const vivareal = { name: 'viva', label: 'vivareal' };

  const setBrand = {
    zap,
    vivareal,
  };

  const setBusinessType = {
    venda: { name: 'SALE', label: 'venda' },
    aluguel: { name: 'RENTAL', label: 'aluguel' },
  };

  return (
    <ApiContext.Provider
      value={{
        page: parseInt(page) || 1,
        brand: setBrand[brand] || zap,
        businessType: setBusinessType[businessType] || null,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default withRouter(Context);
