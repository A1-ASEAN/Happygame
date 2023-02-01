import { Button, Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import localFont from '@next/font/local'
import Comflrm from './comflrm'

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })





const Explain = ({ toggle }) => {

    const [counter, setCounter] = useState(1);

    const clickplas = () => {
        setCounter((prevState) => +prevState + 1)
    };
    const clickdelete = () => {
        setCounter((prevState) => +prevState - 1)
    }


    return <Stack direction="row" justifyContent="center" alignItems="center">
        <Box sx={{ width: '100%', height: '130' }}>
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Box width={"244px"} height={"100%"}>
                    <Typography fontSize={"30px"} className={myFont.className}>
                        HEALING POTION
                    </Typography>
                    <Typography
                        fontSize={"12px"}>
                        บางคนกลัวผีเวลาเพ่ง" ผีอยู่ที่ไหนล่ะ "วันหนึ่ง ๆ ฝังกี่ศพ ที่คนตายไปกลัว" ที่ฝังในตัวเองไม่กลัว กี่ศพล่ะวันนี้ ผีปลาทู ปูเค็ม ผีวัว ผีควาย ผีเป็ด ไก่ สุกร "เต็มอยู่ในท้องโม๊ด" ทำไมไม่กลัวล่ะ
                    </Typography>
                </Box>
                <Box width={"110px"} height={"100%"}>
                    <Stack spacing={0}>
                        <Box>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center" spacing={0}>


                                <Box onClick={clickdelete} sx={{ bgcolor: '#0963F3', width: '30px', height: "30px", borderRadius: '5px', cursor: "pointer" }}>
                                    <Typography fontSize={"19px"} sx={{ ml: 1.5 }}>
                                        -
                                    </Typography>
                                </Box>

                                <Typography fontSize={"40px"} sx={{ width: '20px', pb: 1, pl: 0.5 }} className={myFont.className} >
                                    
                                {counter}
                                
                                </Typography>
                                <Box onClick={clickplas} sx={{ bgcolor: '#0963F3', width: '30px', height: "30px", borderRadius: '5px', cursor: "pointer" }}>
                                    <Typography fontSize={"19px"} sx={{ ml: 1.2 }}>
                                        +

                                    </Typography>

                                </Box>

                            </Stack>
                        </Box>

                        <Button onClick={() => toggle(13)} variant="contained" color='success' className={myFont.className} fontSize={"30px"} sx={{ mb: 2, fontSize: 23, p: 0, boxShadow: "inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)" }}>
                            BUY
                        </Button>
                        <Button onClick={() => toggle(14)} variant="contained" color='error' className={myFont.className} fontSize={"30px"} sx={{ mb: 2, fontSize: 23, p: 0, boxShadow: "inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)" }}>
                            cencle
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </Stack>
}


function shopmain() {

    const [itembuy, setItembuy] = useState(false)


    const toggle = (index) => {
        setItembuy(index)
        console.log(index)
    }




    return (

        <Stack alignItems="center">

            <Box width={'414px'} sx={{ pl: 2, pr: 2 ,pt:3}}>
                
                
                <Stack direction="row"
                    justifyContent="space-around"
                    alignItems="center">

                    <Box onClick={() => toggle(4)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/9.svg" />

                    </Box>
                    <Box onClick={() => toggle(5)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/5.svg" />

                    </Box>

                    <Box onClick={() => toggle(6)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/6.svg" />

                    </Box>



                </Stack>
                {itembuy == 4 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 5 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 6 ? <Explain toggle={toggle} /> : ""}
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
                {itembuy == 7 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 8 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 9 ? <Explain toggle={toggle} /> : ""}
                <Stack direction="row"
                    justifyContent="space-around"
                    alignItems="center">

                    <Box onClick={() => toggle(10)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/6.svg" />

                    </Box>
                    <Box onClick={() => toggle(11)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/5.svg" />

                    </Box>

                    <Box onClick={() => toggle(12)} sx={{ zIndex: 'modal' }} position={'relative'}>

                        <img src="/image/shop/6.svg" />

                    </Box>



                </Stack>
                {itembuy == 10 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 11 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 12 ? <Explain toggle={toggle} /> : ""}
                {itembuy == 13 ? <Comflrm toggle={toggle} /> : ""}

            </Box>

        </Stack>

    )
}

export default shopmain 