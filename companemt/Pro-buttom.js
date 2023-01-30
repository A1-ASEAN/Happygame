
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import localFont from '@next/font/local'
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';


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

export default function Butoom() {
    return (
        <ThemeProvider theme={theme}>    

            <Stack justifyContent="center"
                alignItems="center">

                <Button color="primary" variant="contained" sx={{ width: 180, height: 45, zIndex: 'tooltip' }}   >
                    <Stack justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing={0}
                        sx={{ m: 0 }}>
                        <Typography className={myFont.className} sx={{ fontSize: '30px', height: "35px" }}>
                            UNLOCK
                        </Typography>
                        <Box sx={{ mb: 1.5 }}>
                            
                        </Box>
                    </Stack>
                </Button>


                <Box className={myFont.className}
                    sx={{
                        mt: 2,
                        borderRadius: '3px',
                        width: 180, height: 45,
                        backgroundColor: "#0C4BAF", position: "absolute", zIndex: 'modal'
                    }}>
                </Box>
            </Stack>





        </ThemeProvider>
    );
}