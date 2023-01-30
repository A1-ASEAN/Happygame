
import Header from '../companemt/Misson-header'

import Main from '../companemt/mission-main'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Footernavbar from '../companemt/foternavbar'


function Mission() {
    return (
        <Box height={"100vh"} overflow={'hidden'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                <Header />

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
                    
                    <Main />
                    

                    
                    
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>
        // <React.Fragment>
        //     <CssBaseline />
        //     <Container maxWidth="390px" sx={{ m: 0, p: 0, height: '100vh', bgcolor: "#fff" }}  >
        //         <Box maxWidth="100%" component="div" sx={{ height: '100%', }}>
        //             <Header />
        //             <Main />
        //         </Box>




        //     </Container>
        //     <Footernavbar />
        // </React.Fragment>
    );
}

export default Mission