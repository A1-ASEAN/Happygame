
import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../companemt/shop-header'
import Footernavbar from '../companemt/foternavbar'
import Main from '../companemt/shop-main'



export default function Home() {
    return (

        <Box height={"100vh"} overflow={'hidden'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                    <Header />


                </Box>

                <Box  flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>

                <Main/>
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>

    );
}