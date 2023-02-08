import React from 'react'

import {  Box } from '@mui/material';

import Header from '../companemt/recover-header'
import Mian from '../companemt/luckydraw-main'

// https://www.youtube.com/watch?v=2plnsl8P2zE&t=132s


export default function Home() {
    



    return (
        <Box height={"100vh"} overflow={'hidden'} bgcolor={'#fff'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                {/* header */}

                <Box >

                <Header/>

                </Box>

                {/* main */}

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
                    <Mian/>
                    

                </Box>
                {/* Footer */}
                


            </Box>

        </Box>




    )
}