import { Box, Stack } from '@mui/system';
import React from 'react';
import Footer from "../companemt/foternavbar";
import Header from "../companemt/Setting_header";
import Body from "../companemt/Setting_body";


const set = () => {
    return <div>
       
        <Box
        height={"100vh"}
        overflow={"hidden"}
        maxWidth={"100%"}
        sx={{ bgcolor: "#ffff " }}
      >
        <Box height={"100%"} display={"flex"} flexDirection={"column"}>
          <Box>
            <Header/>
          </Box>
          <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
           <Body/>
          </Box>

          <Box>
            <Footer />
          </Box>
        </Box>
      </Box>


    </div>;
}



export default set;