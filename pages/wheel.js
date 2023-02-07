import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";


const App = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;
`;

const Marker = styled.div`
  position: absolute;
  width: 60px;
  left: 50;
  top: -20px;
  z-index: 2;
`;

const Wheel = styled.div`
  width: 100%;
  height: 100%;
`;

const Btn = styled.div`
    display:block;
    width: 250px;
    margin:48 auto ;
    cursor: pointer;
`;

const wheel = () => {
    
  return ( <div>
      <App>
        <Marker>
          <img className={"marker"} src="./image/Luckydraw/nail.svg" />
        </Marker>
        <Wheel>
        <img className={"wheel"} src="./image/Luckydraw/wheel.svg" />
        </Wheel>
        <Btn>
        <Button  variant="contained" sx={{width:"250px"}}> <Typography fontSize="25px"> Spin </Typography> </Button>
        </Btn>
      </App>
    </div>
  );
};

export default wheel;
