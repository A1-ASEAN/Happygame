import localFont from '@next/font/local'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bettle from './Shop-Navbar'
import { Button } from '@mui/material';


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#fff",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#FFC05F',
        },
    },
});


const Top = () => {
    return (

        <Box maxWidth="100%" >
            <Box sx={{ height: "79px", width: '100%', position: 'relative', }}>
                <Stack alignItems="center">
                    <Box sx={{ position: 'relative', zIndex: 'drawer', height: "67px" }}>
                        <img src='/image/2bg.svg' />
                    </Box>
                    <Box maxWidth="390px" sx={{ position: 'absolute ', zIndex: 'modal', }}>
                        <ThemeProvider theme={theme}>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={28}>
                                <Stack direction="row" alignItems="center" sx={{ pl: 1 }}>
                                    <img src="/image/taket.svg" />
                                    <Typography className={myFont.className} sx={{ pl: 1, fontSize: 30 }} color={"secondary"} >500</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" sx={{ pr: 1 }}>

                                    <Typography className={myFont.className} sx={{ pr: 1, fontSize: 30 }} color={"secondary"} >HEPL</Typography>
                                    <img src="/image/book.svg" />
                                </Stack>
                            </Stack>
                        </ThemeProvider>
                    </Box>

                </Stack>
            </Box>
            
        </Box >
        




    );
}

export default Top;
