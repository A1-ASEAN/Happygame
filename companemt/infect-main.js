import { Button, Typography } from '@mui/material'
import { Box, height, Stack } from '@mui/system'
import React from 'react'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })




const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#FFE000",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#8B8B8B',
        },

    },
});



function infectmain() {
    return (
        <Box width={"100%"} sx={{ pt: "40px" }}>
            <Stack alignItems={"center"}>
                <img src='/image/Infect/font.svg' />

                <Typography position={'relative'} className={myFont.className} sx={{ pt: 0, fontSize: "40px", height: "10px" }} color={'error'}>
                    -2 POINTS
                </Typography>

                <Box width={"350px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 70 }} zIndex={'tooltip'} >
                            <img src='/image/Infect/sed-1.svg' />
                        </Box>
                    </Stack>
                </Box>
                <Box width={"300px"}>
                    <Stack direction="row"
                        justifyContent="center"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 10 }} zIndex={'tooltip'} >
                            <img src='/image/Infect/profile.svg' />
                        </Box>
                    </Stack>
                </Box>
                <Box width={"300px"}>
                    <Stack direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 60 }} zIndex={'tooltip'} >
                            <img src='/image/Infect/sed-2.svg' />
                        </Box>
                    </Stack>
                </Box>
                <Box width={"350px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 70,pr:8}} zIndex={'tooltip'} >
                            <img src='/image/Infect/sed-3.svg' />
                        </Box>
                    </Stack>
                </Box>
                <Typography className={myFont.className} sx={{ pt: 0, fontSize: "40px", height: "30px" }} >
                    YOU HAS BEEN INFECTED
                </Typography>
                <Typography className={myFont.className} sx={{ pt: 0, fontSize: "40px" }} >
                    BY CHAISTIAN BALE
                </Typography>
                <Button variant="contained" sx={{ height: "54px", width: '186px', mt: 5, boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }}>
                    <Typography className={myFont.className} sx={{ p: 0, fontSize: "25px", height: "45px" }} >
                        CONTINUE
                    </Typography>
                </Button>


            </Stack>


        </Box>

    )
}

export default infectmain