import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footernavbar from '../companemt/recover-footer'


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })





const Popup = ({ gift, reset }) => {

    return (
        <Box sx={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', zIndex: 1000, pb:{ xs:'195px',sm:"360px",md:"700px"} }}>
            <Box sx={{ width: "100%", height: "100%", bgcolor: '#000', position: 'absolute', opacity: 0.7 }}>

            </Box>

            <Box className={myFont.className}  sx={{pt:20,zIndex: 1100,color:'#fff',fontSize:{xs:50,sm:80} }}>

                {/* // YOU GIFT IS  */}

                YOU GIFT IS <Typography color={'#F7EF8A'} display={"flex"} alignItems={"center" } justifyContent={"center"} className={myFont.className} sx={{fontSize:{xs:70,sm:100}}} >{gift}</Typography>

                {/* /// botton reset */}
                <Box sx={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: "center",mt:5 }}>
                    <Button onClick={reset} variant="contained" color='error'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: "54px", width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", zIndex: 2 }}>
                        <Typography className={myFont.className} sx={{ p: 0, fontSize: "30px", height: "50px" }} >
                            COMFIRM
                        </Typography>
                    </Button>
                </Box>

            </Box>



        </Box>

    );
}


function infectmain() {


    const reset = () => {

        setstate('circle')
        setIdxPop()  
        
    }

    const [state, setstate] = useState('circle');
    const [IdxPop, setIdxPop] = useState();


    let time = [4100.33, 4260.33, 4427.33, 4593.33, 4760.33, 4930.33, 5100.33, 5270.33, 5440.33, 5610.33, 5770.33, 5930.33]
    let jacpot = ["600$", "500$", "400$", "300$", "200$", "100$", "50$", "LOSE", "900$", "800$", "700$", "JACKPOT"]

    const [index, setindex] = useState();

    useEffect(() => {
        setindex(Math.floor(Math.random() * time.length))
    }, [])
    const [gift, setGift] = useState();



    let number = time[index]

    console.log("index top = ", index)
    console.log("gift top = ", gift)

    const startRotation = () => {
        
        setindex(Math.floor(Math.random() * time.length))
        setstate("circle start-rotate");
        setTimeout(() => {
            setstate("circle start-rotate stop-rotate")
            setIdxPop(index)
            setGift(jacpot[index])

        }, Math.floor(Math.random() * 150 + number));

        console.log("number in = ", number)
        console.log("index in = ", index)
        console.log("setindex in = ", index)
        // setTimeout(() => {
        //     setNumber(number = fruits[index])

        // }, Math.floor(Math.random() * 150 + number));
        // setTimeout(() => {
        //     setstate("circle start-rotate stop-rotate")

        // },5930.33);
        // console.log(setTimeout)
    }



    return (

        <Box width={"100%"} sx={{ pt:{xs:"20px",sm:"100px",md:"230px"} }}>
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
                {IdxPop == 0 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 1 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 2 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 3 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 4 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 5 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 6 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 7 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 8 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 9 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 10 ? <Popup gift={gift} reset={reset}/> : ""}
                {IdxPop == 11 ? <Popup gift={gift} reset={reset}/> : ""}




            </Stack>
            <Footernavbar />


        </Box>

    )
}

export default infectmain