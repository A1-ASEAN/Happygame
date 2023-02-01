
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import localFont from '@next/font/local'
import Button from '@mui/material/Button';
import { useState } from 'react';
import All from './shop-all'


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
        pt: 0.3,
        pl: 0.4,
        zIndex: 'tooltip',
    }}>
        <Box sx={{ width: 40, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
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
                    height: '100%', width: "350px",
                    mt: 5,
                    zIndex: 'tooltip',
                }}>
                    <Stack direction="row"
                        justifyContent="space-between"
                        alignItems="center">

                        <Box onClick={() => toggle(1)} sx={{cursor: "pointer"}}>

                            <Typography onClick={() => secpage("ALL")} className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>ALL</Typography>
                            {tab == 1 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.3,
                                    pl: 0.4,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 40, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}
                                {showbar}

                        </Box>
                        <Box onClick={() => toggle(2)} sx={{cursor: "pointer"}}>

                            <Typography onClick={() => secpage("ATTACK")} className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>ATTACK</Typography>
                            {tab == 2 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.29,
                                    pl: 0.8,
                                    zIndex: 'tooltip',
                                }}>
                                    <Box sx={{ width: 83, height: 3.5, bgcolor: "#FFC05F", zIndex: 'tooltip' }}></Box>
                                </Box> : <Box >

                                </Box>}

                        </Box>
                        <Box onClick={() => toggle(3)} sx={{cursor: "pointer"}}>

                            <Typography onClick={() => secpage("DEFEND")} className={myFont.className} variant='h4' sx={{ pl: 1 }} color={"primary"}>DEFEND</Typography>
                            {tab == 3 ?
                                <Box sx={{
                                    position: 'absolute',
                                    pt: 0.29,
                                    pl: 0.6,
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