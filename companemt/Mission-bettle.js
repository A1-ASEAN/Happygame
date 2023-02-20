
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import localFont from '@next/font/local'

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
const Showbaryallow = ()=>{
    return <Box sx={{
        position: 'absolute',
        pt: 0.7,
        pl: 0.4,
        zIndex: 'tooltip',
    }}>
        <Box sx={{ width: 70, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
    </Box>
};

const Top = ({secpage}) => {

    const [tab, settab] = useState(false)
    const [showbar,setShowbar] = useState(<Showbaryallow/>)

    const toggle = (index) => {
        settab(index),setShowbar()
        console.log(index)
    }
    return (
        <ThemeProvider theme={theme}>
            <Stack alignItems="center" justifyContent="center">
                <Box sx={{
                    height: '100%', width: "100vw",
                    zIndex: 'tooltip',pt:1.2
                }}>
                    <Stack direction="row"
                        justifyContent="space-evenly"
                        alignItems="center">

                        <Box onClick={() => toggle(1)}>

                            <Typography onClick={() => secpage("Daily")} className={myFont.className} variant='h4' sx={{ pl: 1 ,cursor:'pointer'}} color={"primary"}>DAILY</Typography>
                            {tab == 1 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.7,
                                    pl: 0.4,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 70, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}
                                {showbar}

                        </Box>
                        <Box onClick={() => toggle(2)}>

                            <Typography onClick={() => secpage("WEEKLY")} className={myFont.className} variant='h4' sx={{ pl: 1,cursor:'pointer' }} color={"primary"}>WEEKLY</Typography>
                            {tab == 2 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.7,
                                    pl: 1,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 83, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}

                        </Box>
                        <Box onClick={() => toggle(3)}>

                            <Typography onClick={() => secpage("SPECIAL")} className={myFont.className} variant='h4' sx={{ pl: 1,cursor:'pointer' }} color={"primary"}>SPECIAL</Typography>
                            {tab == 3 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.7,
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