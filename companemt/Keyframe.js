import { Box, Button, Typography } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import React, {  useEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useServerInsertedHTML } from 'next/navigation';
import Footernavbar from '../companemt/recover-footer'
import localFont from '@next/font/local'

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })

const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
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
    animation: ${props => props.lucky } 3s   forwards;
    `
    const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    position: relative;
    animation:${props => props.opcity} 3.2s ease-in-out;
    `

export default function ChildComponent() {
    
    
    const [rendomdeg, setRendomdeg] = useState();

    useEffect(() => {
        // setRendomdeg(Math.floor(Math.random() * 30))
        setRendomdeg(Math.floor(Math.random() * 29))
    }, [setRendomdeg])
    
    console.log(rendomdeg)

    let gift = rendomdeg

    console.log ("gift = ",gift)

    const [divide,setDivide] = useState()
    


    console.log ("divide = " ,divide)

    let deg = rendomdeg+1456
    
    // useState Lucky and opcity gift

    const [lucky, setLucky] = useState()
    const [opcity, setOpcityy] = useState()

    // startRotation

    const startRotation = () => {
        setRendomdeg(Math.floor(Math.random() * 360))
        setLucky(keyframes` 
        0% {transform: rotate(0)}
        
        100% {transform: rotate(${deg + `deg`})  }  
        
        `)
        
        setDivide (Math.floor(gift/30))
        setOpcityy(keyframes` 
        0% {opacity:0;}
        99% {opacity:0; }  
        100% {opacity:1; }
        `)
    }
   
    // Style companent

    

    
    return (
        <Box height={"100vh"} width={"100%"}>
            
            <Body>
                <Krob className='krob'>
                    <img src="/krob.svg" />
                </Krob>
                <Midder className='midder'>
                    <img src="/midder.svg" />
                </Midder >

                <Cirecle lucky= {lucky} className='cirecle'>
                    <img src='/lucky.svg' />
                </Cirecle>

            </Body>
            
            <Button onClick={startRotation} variant="contained" color='error'
                    sx={{ height: "54px", width: '186px', mt: 0, boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)", zIndex: 2 }}>
                    <Typography className={myFont.className} sx={{ p: 0, fontSize: "30px", height: "50px" }} >
                        SPIN
                    </Typography>
            </Button>
            {divide==0 ? <Text opcity={opcity}>600$</Text>:""}
            {divide==1 ? <Text opcity={opcity}>500$</Text>:""}
            {divide==2 ? <Text opcity={opcity}>400$</Text>:""}
            {divide==3 ? <Text opcity={opcity}>300$</Text>:""}
            {divide==4 ? <Text opcity={opcity}>200$</Text>:""}
            {divide==5 ? <Text opcity={opcity}>100$</Text>:""}
            {divide==6 ? <Text opcity={opcity}>50$</Text>:""}
            {divide==7 ? <Text opcity={opcity}>LOSE</Text>:""}
            {divide==8 ? <Text opcity={opcity}>900$</Text>:""}
            {divide==9 ? <Text opcity={opcity}>800$</Text>:""}
            {divide==10 ? <Text opcity={opcity}>700$</Text>:""}
            {divide==11 ? <Text opcity={opcity}>JACKTOP</Text>:""} 

            <Footernavbar/>
            
            
        </Box>
    )
}
