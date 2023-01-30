
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import localFont from '@next/font/local'
import Button from '@mui/material/Button';
import { useState } from 'react';



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

    const [tab, settab] = useState(false)


    const toggle = (index) => {
        settab(index)
        console.log(index)
    }
    return (
        <ThemeProvider theme={theme}>
            <Stack alignItems="center" justifyContent="center">
                <Box sx={{
                    height: '100%', width: "350px",

                    zIndex: 'tooltip',
                }}>
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="center">

                        <Box onClick={() => toggle(1)}>

                            <Typography className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>DAILY</Typography>
                            {tab == 1 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.5,
                                    pl: 0.4,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 70, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}

                        </Box>
                        <Box onClick={() => toggle(2)}>

                            <Typography className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>WEEKLY</Typography>
                            {tab == 2 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.1,
                                    pl: 1,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 83, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}

                        </Box>
                        <Box onClick={() => toggle(3)}>

                            <Typography className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>SPECIAL</Typography>
                            {tab == 3 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.1,
                                    pl: 1,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 86, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}

                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </ThemeProvider>

    );
}

export default Top;