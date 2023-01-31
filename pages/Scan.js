import { Box } from '@mui/system';
import React from 'react';
import Header from '@/companemt/Scan_header';
import Footer from '../companemt/Scan_footer';
import Body from '../companemt/Scan_body';
const Scan = () => {
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
          <Box zIndex={"modal"} flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
           <Body/>
          </Box>

          <Box position={"relative"} zIndex={"tooltip"}>
            <Footer />
          </Box>
        </Box>
      </Box>




    </div>;
}



export default Scan;