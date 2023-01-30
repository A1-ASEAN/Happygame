import { Button, Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import localFont from '@next/font/local'
import Buy from './buy'

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })



function shopmain() {

    const [itembuy, setItembuy] = useState(false)


    const toggle = (index) => {
        setItembuy(index)
        console.log(index)
    }




    return (


        
        <Box width={'100%'} sx={{}}>
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Box onClick={() => toggle(1)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/1.svg" />

                </Box>
                <Box onClick={() => toggle(2)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/2.svg" />

                </Box>

                <Box onClick={() => toggle(3)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/3.svg" />

                </Box>



            </Stack>
            {itembuy ==1 ? <Buy/>: ""}
            {itembuy ==2 ? <Buy/>: ""}
            {itembuy ==3 ? <Buy/>: ""}
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Box onClick={() => toggle(4)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/4.svg" />

                </Box>
                <Box onClick={() => toggle(5)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/5.svg" />

                </Box>

                <Box onClick={() => toggle(6)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/6.svg" />

                </Box>



            </Stack>
            {itembuy ==4 ? <Buy/>: ""}
            {itembuy ==5 ? <Buy/>: ""}
            {itembuy ==6 ? <Buy/> : ""}
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Box onClick={() => toggle(7)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/7.svg" />

                </Box>
                <Box onClick={() => toggle(8)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/8.svg" />

                </Box>

                <Box onClick={() => toggle(9)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/9.svg" />

                </Box>



            </Stack>
            {itembuy ==7 ? <Buy/>: ""}
            {itembuy ==8 ? <Buy/>: ""}
            {itembuy ==9 ? <Buy/>: ""}
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center">

                <Box onClick={() => toggle(10)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/4.svg" />

                </Box>
                <Box onClick={() => toggle(11)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/5.svg" />

                </Box>

                <Box onClick={() => toggle(12)} sx={{ zIndex: 'modal' }} position={'relative'}>

                    <img src="/image/shop/6.svg" />

                </Box>



            </Stack>
            {itembuy ==10 ? <Buy/>: ""}
            {itembuy ==11 ? <Buy/>: ""}
            {itembuy ==12 ? <Buy/>: ""}

        </Box>


    )
}

export default shopmain 