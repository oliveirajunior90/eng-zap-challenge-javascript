import React, { useContext } from 'react';
import { ApiContext } from '../../utils/context';
import { getDataById } from '../../api';

const withSingle =
  (Component) =>
  ({ match, history }) => {
    const { brand } = useContext(ApiContext);

    const data = getDataById({ brand: brand.name, id: match.params.id });

    const handleBack = () => history.goBack();

    return <Component handleBack={handleBack} {...data} />;
  };

export default withSingle;
