
import Header from '../companemt/recover-header'
import Footer from '../companemt/recover-footer'
import Main from '@/companemt/Main_attack';
import { Box } from '@mui/system';
import App from "../companemt/boom";
import React, { useEffect, useState } from 'react';
// import Recover from './Recover'
import Link from 'next/link';

const flight = () => {
    
  const [countInTimeout, setCountInTimeout] = useState("");
    
    return <div>
        <Box height={"100vh"} overflow={'hidden'} bgcolor={'#fff'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                    <Header />

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>

                    <Main />
                    
                   
                </Box>

                <Box >

                    <Footer />

                </Box>


            </Box>

        </Box>
        



    </div>;
}



export default flight;