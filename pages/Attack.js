import Mian from "../companemt/boom";
import React from 'react'
import { Box } from "@mui/system";
import Header from '../companemt/recover-header'


function Attack() {
  return (
    <Box height={"100vh"} overflow={'hidden'} bgcolor={'#fff'}>
    <Box height={"100%"} display={"flex"} flexDirection={"column"}>

        <Box >

        <Header />

        </Box>

        <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>

            <Mian/>
           
        </Box>

        

    </Box>

</Box>
    
    
    
  )
}

export default Attack