import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footernavbar from '../companemt/recover-footer'


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

const Popup = ({index}) => {

    return (
        <Box sx={{ width: "200px", height: "50px", bgcolor: '#fafafa' }}>
            <Typography>
                xxxxxxx{index}
            </Typography>
        </Box>
    );
}


function infectmain() {




    const [state, setstate] = useState('circle');
    
    const [index, setindex] = useState(0);


    //                 0         1       2       3       4       5      6       7        8       9      10     11

    const fruits = [4100.33, 4260.33, 4427.33, 4593.33, 4760.33, 4930.33, 5100.33, 5270.33, 5440.33, 5610.33, 5770.33, 5930.33]
    


    let number = fruits[index]
    


    const startRotation = () => {
        
        setindex (Math.floor(Math.random() * fruits.length+1))
        setstate("circle start-rotate");
        console.log(state)
        setTimeout(() => {
            setstate("circle start-rotate stop-rotate")

        }, Math.floor(Math.random() * 150 + number));
        // setTimeout(() => {
        //     setstate("circle start-rotate stop-rotate")

        // },5930.33);
        console.log(index)
    }



    return (

        <Box width={"100%"} sx={{ pt: "20px" }}>
            <Stack alignItems={"center"}>

                {/* Font */}

                <Box height={30} zIndex={"toltip"}>
                    <img src="/font.svg" />
                </Box>


                {/* clounds 1 */}

                <Box width={"450px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 70 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-1.svg' />
                        </Box>
                    </Stack>
                </Box>

                {/* clounds 2 */}

                <Box width={"650px"}>
                    <Stack direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                        <Box position={"relative"} sx={{ height: 10 }} zIndex={'tooltip'} >
                            <img src='/image/recover/clounds-2.svg' />
                        </Box>
                    </Stack>
                </Box>

                {/* lucky */}

                <Box>
                    <div className='body'>

                        <div className='krob'>
                            <img src="/krob.svg" />
                        </div>
                        <div className='midder'>
                            <img src="/midder.svg" />
                        </div>
                        <div className={state}>
                            <div className='lucky'>
                                <img src='/lucky.svg' />
                            </div>
                        </div>

                    </div>
                </Box>

                {/* clounds 3 */}

                <Box width={"350px"}>
                    <Stack direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start">
                        <Box position={"relative"} sx={{ height: 3, }} zIndex={2} >
                            <img src='/image/recover/clounds-3.svg' />
                        </Box>
                    </Stack>
                </Box>

                {/* botton */}


                <Button onClick={startRotation} variant="contained" color='error'
                    sx={{ height: "54px", width: '186px', mt: 0, boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", zIndex: 2 }}>
                    <Typography className={myFont.className} sx={{ p: 0, fontSize: "30px", height: "50px" }} >
                        SPIN
                    </Typography>
                </Button>
                {index == 1 ? <Popup index={index}/>  : ""}
                {index == 2 ? <Popup index={index}/>  : ""}
                {index == 3 ? <Popup index={index}/> : ""}
                {index == 4 ? <Popup index={index}/> : ""}
                {index == 5 ? <Popup index={index}/> : ""}
                {index == 6 ? <Popup index={index}/> : ""}
                {index == 7 ? <Popup index={index}/> : ""}
                {index == 9 ? <Popup index={index}/> : ""}
                {index == 10 ? <Popup index={index}/> : ""}
                {index == 11 ? <Popup index={index}/> : ""}
                {index == 12 ? <Popup index={index}/> : ""}




            </Stack>
            <Footernavbar />


        </Box>

    )
}

export default infectmain