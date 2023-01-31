import { Box } from '@mui/material';
import React from 'react';
import Header from '@/companemt/Header-Reward';
import Body from"../companemt/Reward-body";
import Footer from '../companemt/foternavbar';

const Reward = () => {
    return <div>
        
      <Box height={'100vh'} overflow={"hidden"}  maxWidth={"100%"} sx={{bgcolor:"#f1f1f1f1 "}}>
        <Box height={"100%"} display={"flex"} flexDirection={"column"}>
        <Box>
          <Header/>
        </Box>
        <Box flex={1} overflow={"hidden"} sx={{overflowY:"auto"}}>
          <Body/>
        </Box>

        <Box >
            <Footer/>

        </Box>


        </Box>
      </Box>
    


    </div>;
}


export default Reward;