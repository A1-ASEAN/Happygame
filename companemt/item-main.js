import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Bottom from './buttom'
import { useState } from 'react';
import Healling from './healing'
import Button from '@mui/material/Button';
import { Grid, SvgIcon } from '@mui/material';
import Window from '../companemt/SVGS/window'
const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
};

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#fff",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#a4a4a4',
        },
    },
});



function itemmain() {
    const [item, setItem] = useState(false)


    const toggle = (index) => {
        setItem(index)
        console.log(index)
    }

    return (
        <Box sx={{ m: '20px' }}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
                <ThemeProvider theme={theme}>
                    <Grid item xs={6} >
                        <Stack alignItems="center">
                            <Typography className={myFont.className} sx={{ fontSize: '26px' }} color={"secondary"}>ATTACK</Typography>

                        </Stack>
                    </Grid>
                    <Grid item xs={6} >
                        <Stack alignItems="center">
                            <Typography className={myFont.className} sx={{ fontSize: '26px' }} color={"secondary"}>DEFEND</Typography>
                        </Stack>
                    </Grid>
                </ThemeProvider>
                <Grid item xs={6} >
                    <Stack alignItems="center">
                        <Box>
                            <img src="/image/item/window.svg" />
                        </Box>
                        <Box position={'relative'} sx={{ bottom: 90, left: 10, height: 10 }} >
                            {item == 1 ? <Box><img src='/image/item/1.svg' /></Box> : ""}
                            {item == 2 ? <Box><img src='/image/item/2.svg' /></Box> : ""}
                            {item == 3 ? <Box><img src='/image/item/3.svg' /></Box> : ""}
                            {item == 4 ? <Box><img src='/image/item/4.svg' /></Box> : ""}
                            {item == 9 ? <Box><img src='/image/item/3.svg' /></Box> : ""}
                            {item == 10 ? <Box><img src='/image/item/2.svg' /></Box> : ""}
                            {item == 11 ? <Box><img src='/image/item/1.svg' /></Box> : ""}
                            {item == 12 ? <Box><img src='/image/item/4.svg' /></Box> : ""}
                        </Box>


                    </Stack>
                </Grid>

                <Grid item xs={6} >
                    <Stack alignItems="center">
                        <Box>
                            <img src="/image/item/window.svg" />
                        </Box>
                        <Box position={'relative'} sx={{ bottom: 90, left: 10, height: 10 }} >
                            {item == 5 ? <Box><img src='/image/item/5.svg' /></Box> : ""}
                            {item == 6 ? <Box><img src='/image/item/6.svg' /></Box> : ""}
                            {item == 7 ? <Box><img src='/image/item/7.svg' /></Box> : ""}
                            {item == 8 ? <Box><img src='/image/item/8.svg' /></Box> : ""}

                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3} sx={{ mt: "5px" }}>
                <Grid item xs={3} sm={2.4} md={2} >
                    <Stack alignItems="center">


                        {item == 1 ? 
                        <Box onClick={() => toggle(1)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px red, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/1.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(1)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/1.svg' />
                            </Box>
                        </Box>
                        }

                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                        {item == 2 ? 
                        <Box onClick={() => toggle(2)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px red, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/2.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(2)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/2.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                    {item == 3 ? 
                        <Box onClick={() => toggle(3)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px red, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/3.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(3)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/3.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                    {item == 4 ? 
                        <Box onClick={() => toggle(4)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px red, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/4.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(4)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/4.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                    {item == 5 ? 
                        <Box onClick={() => toggle(5)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px #00D330, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/5.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(5)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/5.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>

                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                    {item == 6 ? 
                        <Box onClick={() => toggle(6)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px #00D330, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/6.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(6)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/6.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                    {item == 7 ? 
                        <Box onClick={() => toggle(7)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", boxShadow: " 0 0 30px #00D330, 0 0 0px darkblue" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/5.svg' />
                            </Box>
                        </Box> 
                        : 
                        <Box onClick={() => toggle(7)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/5.svg' />
                            </Box>
                        </Box>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2}  >
                    <Stack alignItems="center">
                        <Box onClick={() => toggle(8)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px", }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/8.svg' />
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                        <Box onClick={() => toggle(9)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/3.svg' />
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                        <Box onClick={() => toggle(10)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/2.svg' />
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                        <Box onClick={() => toggle(11)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/1.svg' />
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={3} sm={2.4} md={2} sx={{ borderRadius: "15px" }}>
                    <Stack alignItems="center">
                        <Box onClick={() => toggle(12)} sx={{ bgcolor: '#f1f1f1', height: '82px', width: '82px', borderRadius: "15px" }}>
                            <Box paddingTop={0.8} paddingLeft={0.8}>
                                <img src='/image/item/4.svg' />
                            </Box>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Box marginTop={3}>
                {item == 1 ? <Healling toggle={toggle} /> : ""}
                {item == 2 ? <Healling toggle={toggle} /> : ""}
                {item == 3 ? <Healling toggle={toggle} /> : ""}
                {item == 4 ? <Healling toggle={toggle} /> : ""}
                {item == 5 ? <Healling toggle={toggle} /> : ""}
                {item == 6 ? <Healling toggle={toggle} /> : ""}
                {item == 7 ? <Healling toggle={toggle} /> : ""}
                {item == 8 ? <Healling toggle={toggle} /> : ""}
                {item == 9 ? <Healling toggle={toggle} /> : ""}
                {item == 10 ? <Healling toggle={toggle} /> : ""}
                {item == 11 ? <Healling toggle={toggle} /> : ""}
                {item == 12 ? <Healling toggle={toggle} /> : ""}

            </Box>

        </Box>

    )
}

export default itemmain



