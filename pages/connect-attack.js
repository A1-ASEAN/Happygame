import React, { useEffect, useState } from 'react';
import App from "./Recover";

import Flight from './flight'

const TimeoutExample = () => {
  
  const [countInTimeout, setCountInTimeout] = useState(<Flight/>);

  useEffect(() => {
    setTimeout(() => {
      setCountInTimeout(<App/>); // count is 0 here
    }, 5500);
  }, []);

  return (
    <div>
      {countInTimeout}
    </div>
  );
};

export default TimeoutExample;