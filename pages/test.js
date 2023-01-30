
import * as React from 'react';

import Box from '@mui/material/Box';

import Header from '../companemt/deward-header'

import Footernavbar from '../companemt/foternavbar'





export default function test() {
    return (

        <Box height={"100vh"} overflow={'hidden'} maxWidth={"390px"}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                    <Header />


                </Box>

                {/* <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>


                </Box>

                <Box >

                    <Footernavbar />

                </Box> */}


            </Box>

        </Box>

    );
}