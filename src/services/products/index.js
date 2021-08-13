import React from 'react';
import getData from '../../api';

const withProducts = (Component) => (props) => {
  const data = getData({ brand: 'zap', businessType: 'SALE' });
  console.log(data);
  const data2 = data.map((res) => {
    return {
      address: res.address.city,
      lat: res.address.geoLocation.location.lat,
      lon: res.address.geoLocation.location.lon,
      preco: res.pricingInfos.price,
      info: res.pricingInfos.businessType,
    };
  });

  console.log(data2);

  return <Component {...props} data={data} />;
};

export default withProducts;
