
import * as React from 'react';

import Box from '@mui/material/Box';
import Main from '../companemt/Pro-main'
import Header from '../companemt/Pro-header'
import Footernavbar from '../companemt/redeem-foternavbar'


export default function Profile() {
    return (
        <Box height={"100vh"} overflow={'hidden'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                    <Header />

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }} bgcolor={"#00AFCC"}>

                    <Main />

                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>

        // <React.Fragment>
        //     <CssBaseline />
        //     <Container maxWidth="100%" sx={{ m: 0, p: 0, height: '100vh' }} >
        //         <Box maxWidth="390px" component="div" sx={{ bgcolor: "white", height: '100%', overflow: 'hidden' }}>
        //         <Header/>
                   
        //         </Box>


        //         <Footernavbar />

        //     </Container>
        // </React.Fragment>
    );
}
