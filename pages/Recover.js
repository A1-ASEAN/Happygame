import Footernavbar from '../companemt/recover-footer'
import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../companemt/recover-header'
import Mian from '../companemt/recover-main'
import { Main } from 'next/document';

function infect() {
  return (

    <Box height={"100vh"} overflow={'hidden'} bgcolor={'#fff'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                <Header />

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>

                    <Mian/>
                   
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>
  )
}

export default infect 