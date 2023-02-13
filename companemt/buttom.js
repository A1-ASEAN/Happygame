
import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import localFont from '@next/font/local'
import { Link, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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
            <Stack alignItems="center">
                <Box width={'390px'}>
                    
                    <Stack direction="row" justifyContent="center"
                        alignItems="center" spacing={3} >
                        <Box>
                            <Stack justifyContent="center"
                                alignItems="center" >
                                    


                                <Link href='/Scan'>
                                <Button color="primary" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", mt: 1, width: 180, height: 60, zIndex: 'tooltip' }}   >
                                    <Stack justifyContent="center"
                                        alignItems="center"
                                        direction="column"
                                        spacing={0}
                                        sx={{ m: 0 }}>
                                        <Typography className={myFont.className} sx={{ fontSize: '30px', height: "35px" }}>
                                            match
                                        </Typography>
                                        <Box sx={{ mb: 1.5 }}>
                                            <img src='/image/buttom/hart.svg' />
                                        </Box>
                                    </Stack>
                                </Button>

                                </Link>
                            </Stack>
                        </Box>
                        <Box>
                            <Button color="primary" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", mt: 1, width: 180, height: 60, zIndex: 'tooltip' }}   >
                                    <Stack justifyContent="center"
                                        alignItems="center"
                                        direction="column"
                                        spacing={0}
                                        sx={{ m: 0 }}>
                                        <Typography className={myFont.className} sx={{ fontSize: '30px', height: "35px" }}>
                                            scan
                                        </Typography>
                                        <Box sx={{ mb: 1.5 }}>
                                            <img src='/image/buttom/hart.svg' />
                                        </Box>
                                    </Stack>
                                </Button></Box>
                        <Box sx={{
                            position: 'relative',
                            zIndex: 'tooltip',
                            width: '20px',pt:2
                            
                        }}>
                            <Link href="/luckydraw" underline="none">
                                <Stack sx={{ pl: 7 }}>
                                    <Box>
                                        <img src=' /image/buttom/lucky.svg' />
                                    </Box>
                                    <Box sx={{
                                        position: 'absolute',
                                        zIndex: 'tooltip',
                                        ml: 2.5,
                                        pb: 2
                                    }}>
                                        <img src=' /image/buttom/1.svg' />
                                    </Box>
                                </Stack>
                            </Link>
                            <Stack
                                direction="column"  justifyContent="center"
                                alignItems="center"sx={{ height: "20px",pl: 9,pb:1 }}>
                                <ThemeProvider theme={theme}>
                                    <Typography className={myFont.className} sx={{ fontSize: '20px', height: "10px" }}>LUCKY</Typography>
                                    <Typography className={myFont.className} sx={{ fontSize: '20px' }}>DRAW</Typography>
                                </ThemeProvider>
                            </Stack>
                        </Box>
                    </Stack>

                </Box>
            </Stack>

        </ThemeProvider>
    );
}