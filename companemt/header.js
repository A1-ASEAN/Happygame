import localFont from '@next/font/local'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Bettle from './bettle'
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

        <Box maxWidth="100%">

            <Box
                sx={{
                    height: "340px",
                    width: '100%',
                    position: 'relative',

                }}>
                <Stack alignItems="center">
                    <Box sx={{
                        position: 'absolute',
                        zIndex: 'tooltip',

                    }}>
                        <img src='/image/bg.svg' />
                    </Box>
                </Stack>

                <Box maxWidth="390px" sx={{
                    position: 'relative ',
                    zIndex: 'modal',
                }}><ThemeProvider theme={theme}>
                        <Stack direction="row"
                            justifyContent="space-between" 
                            alignItems="center"

                            spacing={1}>
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

                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 'tooltip',
                        width: '100%',
                    }}>

                    <Stack justifyContent="center"
                        alignItems="center" sx={{ mt: 2 }}>
                        <img src='/image/pro.svg' />
                    </Stack>
                    <Stack justifyContent="center"
                        alignItems="center"
                        sx={{ height: 18 }}>
                        <Typography className={myFont.className} variant='h4' >CHRISTOPHER NOLAN</Typography>
                    </Stack>
                    <Stack justifyContent="center"
                        direction="row"
                        alignItems="center"
                    >

                        <Box sx={{
                            pt: 1,
                            ml: 5,
                            zIndex: 'tooltip',
                        }}>
                            <img src='/image/nar.svg' />
                        </Box>
                        <Box sx={{
                            pt: 1,
                            zIndex: 'tooltip',
                            pl: 2
                        }}>
                            <img src='/image/key.svg' />
                        </Box>

                        <Box sx={{
                            pt: 1,
                            position: 'absolute ',
                            zIndex: 'modal',
                        }}>
                            <Typography className={myFont.className} variant='h5' sx={{ mb: 1 }} >HAPPINESS</Typography>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            zIndex: 'tooltip',
                            pt: 7,
                        }}>
                            <  img src='/image/flower-bg.svg' />
                        </Box >




                    </Stack>

                    <Stack justifyContent="center"
                        alignItems="center">
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 'modal',
                            pt: 18

                        }}>
                            <img src='/image/wall.png' />
                        </Box >

                    </Stack>
                    <Bettle />

                    {/* <ThemeProvider theme={theme}>
                        <Stack direction="row"
                            justifyContent="flex-start"
                            alignItems="center"

                        >
                            <Box sx={{
                                position: 'absolute',
                                pt: 18,
                                pl: 10,
                                zIndex: 'tooltip',

                            }}> <Typography onClick color={"primary"} className={myFont.className} variant='h4'
                                sx={{ mb: 1.5, }} >
                                    BATTLE
                                </Typography>
                            </Box>

                            <Box sx={{
                                position: 'absolute',
                                pt: 22.2,
                                pl: 9.6,
                                zIndex: 'tooltip',
                            }}>
                                <img src='/image/color-yallow.svg' />
                            </Box>

                        </Stack>
                        <Stack direction="row"
                            justifyContent="flex-end"
                            alignItems="center"

                        >
                            <Box sx={{
                                position: 'absolute',
                                pt: 18,
                                pr: 10,
                                zIndex: 'tooltip',

                            }}> <Typography color={"primary"} className={myFont.className} variant='h4'
                                sx={{ mb: 1.5, }}>
                                    ITEM
                                </Typography>
                            </Box>


                        </Stack>
                    </ThemeProvider> */}
                </Box>

            </Box >

        </Box>

    );
}

export default Top;
