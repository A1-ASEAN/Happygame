import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footernavbar from '../companemt/recover-footer'
import styled, { keyframes } from 'styled-components';


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })





const Popup = ({ divide, reset }) => {


    
    return (
        <Box sx={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center',top:0, position: 'fixed', zIndex: 1000, }}>
            <Box sx={{ width: "100%", height: "100%", bgcolor: '#000', position: 'absolute', opacity: 0.7 }}>

            </Box>

            <Box className={myFont.className}  sx={{zIndex: 1100,color:'#fff',fontSize:{xs:50,sm:80} }}>

                {/* // YOU GIFT IS  */}

                YOU GIFT IS <Typography color={'#F7EF8A'} display={"flex"} alignItems={"center" } justifyContent={"center"} className={myFont.className} sx={{fontSize:{xs:70,sm:100},zIndex: 2000 }} >
                {divide== 0 ? "600$":''}
                {divide==1 ? "500$":''}
                {divide==2 ? "400$":''}
                {divide==3 ? "300$":''}
                {divide==4 ? "200$":''}
                {divide==5 ? "100$":''}
                {divide==6 ? "50$":''}
                {divide==7 ? "LOSE":''}
                {divide==8 ? "900$":''}
                {divide==9 ? "800$":''}
                {divide==10 ? "700$":''}
                {divide==11 ? "JECKPOT$":''}
                </Typography>

                {/* /// botton reset */}
                <Box sx={{ width: "100%", height: "100%", display: 'flex', alignItems: 'center', justifyContent: "center",mt:5 }}>
                    <Button onClick={reset} variant="contained" color='error'
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", height: "54px", width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", zIndex: 2000 }}>
                        <Typography className={myFont.className} sx={{ p: 0, fontSize: "30px", height: "50px" }} >
                            COMFIRM
                        </Typography>
                    </Button>
                </Box>

            </Box>



        </Box>

    );
}



const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    position: relative;
    `


const Krob = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    `

const Midder = styled.div`
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    `


const Cirecle = styled.div`
    width: 279.05px;
    height: 279.05px;
    margin-bottom: 3px;
    position: relative;
    z-index: 950;
    opacity:1; 
    animation: ${props => props.lucky} 3s   forwards;
    `
const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation:${props => props.opcity} 3.2s ease-in-out;
    `

function infectmain() {

    

    const [rendomdeg, setRendomdeg] = useState();

    useEffect(() => {
        setRendomdeg(Math.floor(Math.random() * 359))
        
    }, [setRendomdeg])

    console.log(rendomdeg)

    let gift = rendomdeg

    console.log("gift = ", gift)

    const [divide, setDivide] = useState()


    console.log (divide)

    let deg = rendomdeg + 1455

    // useState Lucky and opcity gift

    const [lucky, setLucky] = useState()
    const [opcity, setOpcityy] = useState()

    // startRotation

    const startRotation = () => {
        setRendomdeg(Math.floor(Math.random() * 359))
        // check rendom
        // setRendomdeg(360)
        setLucky(keyframes` 
        0% {transform: rotate(0)}
        
        100% {transform: rotate(${deg + `deg`})  }  
        
        `)

        setDivide(Math.floor(gift / 30))
        setOpcityy(keyframes` 
        0% {opacity:0;}
        99% {opacity:0; }  
        100% {opacity:1; }
        `)
    }

    // Style companent
    const reset = () =>{ setDivide() }



    return (



        <Box width={"100%"} sx={{ pt: { xs: "20px", sm: "100px", md: "100px" ,lg:"220px"} }}>
            <Stack alignItems={"center"}>

                {/* Font */}

                <Box height={20} zIndex={"toltip"}>
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
                    <Body>
                        <Krob className='krob'>
                            <img src="/krob.svg" />
                        </Krob>
                        <Midder className='midder'>
                            <img src="/midder.svg" />
                        </Midder >

                        <Cirecle lucky={lucky} className='cirecle'>
                            <img src='/lucky.svg' />
                        </Cirecle>

                    </Body>
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
                

                {divide == 0 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 1 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 2 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 3 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 4 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 5 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 6 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 7 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 8 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 9 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 10 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}
                {divide == 11 ? <Text opcity={opcity}><Popup  divide={divide} reset={reset}/></Text>  : ""}


            </Stack>
            <Footernavbar />


        </Box>

    )
}

export default infectmain