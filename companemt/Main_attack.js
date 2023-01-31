import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material'
import { Box, height, Stack } from '@mui/system'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })
const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#0ACD7A",
        },
        palette: {
            // This is green.A700 as hex.
            main: '',
        },

    },
});


const Main_attack = () => {
    
    return <div>
        <Box width={"100%"} sx={{ pt: "40px" }}>
            <Stack alignItems={"center"}>

                <Box width={"420px"} height={"30px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ width: 120, height: 20, pl: 5 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-1.svg' />
                        </Box>
                    </Stack>
                </Box>


                <Box width={"300px"}>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Box position={"relative"} sx={{ height: 100, pb: 0 }} zIndex={'tooltip'} >
                                <img src='/image/flight/profile1.png' />
                            </Box>
                        </Stack>
                    </Box>
                <Box width={"650px"} height={"30px"} sx={{ mt: 0 }}>
                    <Stack direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 40, pt: 0 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-2.svg' />
                        </Box>
                    </Stack>
                </Box>

                <Box sx={{ pb: 0 }}>
                    
                    <Box width={"300px"} sx={{opacity:0}}>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="flex-end">
                            <Box position={"relative"} sx={{ height: 60,pt:8}} zIndex={'tooltip'} >
                                <img src='/image/flight/vs.svg' />
                            </Box>
                        </Stack>
                    </Box>

                    <Box width={"300px"}>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="flex-end">
                            <Box position={"relative"} sx={{ height: 20, pt:5}} zIndex={'tooltip'} >
                                <img src='/image/flight/profile2.svg' />
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                <Box width={"414px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 40, }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-3.svg' />
                        </Box>
                    </Stack>
                </Box>



            </Stack>


        </Box>


    </div>;
}


// #endregion

export default Main_attack;