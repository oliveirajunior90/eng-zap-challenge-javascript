import React, { useEffect, useState } from 'react';

const withLoading = (Component) => (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 100) return;

    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 10);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return <Component counter={counter} {...props} />;
};

export default withLoading;
