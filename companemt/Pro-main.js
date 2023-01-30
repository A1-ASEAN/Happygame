
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import localFont from '@next/font/local'
import Stack from '@mui/material/Stack';
import Bottom from './Pro-buttom'

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

function Promain() {
    return (
        

            <Stack 
                justifyContent="center"
                alignItems="center">
                <Box sx={{ position: 'relative', width: '100%' ,height:"100%", mt:'75px' }}>
                    <Stack direction="column"
                        justifyContent="space-evenly"
                        alignItems="center" spacing={2} >
                        <img src='/image/Pro-Lock/Luck.svg' />
                        <ThemeProvider theme={theme}>
                            <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px' }} >YOU PROFILE IS LOCK</Typography>
                        </ThemeProvider>
                        <Bottom />
                    </Stack>
                </Box>
            </Stack>
        
    )
}

export default Promain


