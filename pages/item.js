
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../companemt/item-header'
import Footernavbar from '../companemt/foternavbar'
import Mian from '../companemt/item-main'

function item() {
  return (

    <Box height={"100vh"} overflow={'hidden'}>
      <Box height={"100%"} display={"flex"} flexDirection={"column"}>

        <Box >

        <Header/>

        </Box>

        <Box flex={1}  overflow={"hidden"} sx={{overflowY :"auto"}}>

        <Mian/>

        </Box>

        <Box >

        <Footernavbar />
        
        </Box>


      </Box>

    </Box>





    // <React.Fragment>
    //         <CssBaseline />
    //         <Container maxWidth="370px" sx={{ m: 0, p: 0, height: '100vh'  }} >
    //             <Box maxWidth="370px" component="div" sx={{  height: '100%'  }}>
    //             <Header/>

    //             </Box>


    //             <Footernavbar />

    //         </Container>
    //     </React.Fragment>
  )
}

export default item