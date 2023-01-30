
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Top from '../companemt/header'
import Main from '../companemt/main'
import localFont from '@next/font/local'
import Butoom from '../companemt/buttom'
import { createTheme } from '@mui/material/styles';
import LukyIcon from '../companemt/luky-icon'
import Footernavbar from '../companemt/foternavbar'




const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })



const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#0968FF",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#0288d1',
        },
    },
});

export default function Home() {
    return (

        <Box height={"100vh"} overflow={'hidden'} bgcolor={'#fff'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                <Top />

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>

                    <Main />
                    <Butoom />
                   
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>

);
}

    //     <React.Fragment>
    //         <CssBaseline />
    //         <Container maxWidth="100%" sx={{ m: 0, p: 0, height: '100vh',  }} >
    //             <Box maxWidth="390px" component="div" sx={{ bgcolor: "white", height: '342px', overflow: 'hidden' }}>
                   
    //                 <Top />
                    

    //             </Box>
    //             <Main />
    //             <Box maxWidth="390px" className={myFont.className}
    //                 sx={{ backgroundColor: "#fff", height: '130px', pt: 1 }}>
    //                 <Butoom />
    //                 <LukyIcon/>
    //             </Box>


    //             <Footernavbar />

    //         </Container>
    //     </React.Fragment>
    // 