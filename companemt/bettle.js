
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
                    height: '100%', width: "260px", position: 'absolute',
                    zIndex: 'tooltip', pt: 17,
                }}>
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="center">

                        <Typography className={myFont.className} variant='h4' onClick={() => toggle(1)} color={"primary"} >BETTLE</Typography>
                        {tab == 1 ?
                            <Box sx={{
                                position: 'absolute',
                                pt: 7,
                                pr: 0.2,
                                zIndex: 'tooltip',
                            }}>
                                <Box sx={{ width: 80.5, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                            </Box> : <Box></Box>}
                        <Box onClick={() => toggle(2)}>

                            <Typography className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>ITEM</Typography>
                            {tab == 2 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.7,
                                    pl: 1,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 55, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
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