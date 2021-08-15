import React from 'react';
import { withRouter } from 'react-router-dom';

export const ApiContext = React.createContext({});

const Context = ({ children, location }) => {
  const path = location.pathname.split('/', 4);

  const brand = path[1];
  const businessType = path[2];
  const page = path[3];

  const setBrand =
    {
      zap: 'zap',
      vivareal: 'viva',
    } || 'zap';

  const setBusinessType = {
    venda: 'SALE',
    aluguel: 'RENTAL',
  };

  return (
    <ApiContext.Provider
      value={{
        page,
        brand: setBrand[brand],
        businessType: setBusinessType[businessType],
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default withRouter(Context);
