import React, { useEffect, useState } from 'react';
import WinLose from "./Recover";
import Boom from './Attack'


const TimeoutExample = ({rounded}) => {
  

  
  const [countInTimeout, setCountInTimeout] = useState(<Boom/>);
  console.log(rounded)
  useEffect(() => {
    setTimeout(() => {
  
      setCountInTimeout(<WinLose rounded={rounded}/>); // count is 0 here
    },10000);
  }, []);

  return (
    <div>
    {countInTimeout}
    </div>
  );
};

export default TimeoutExample;