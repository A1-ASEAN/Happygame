import { Button, Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import localFont from '@next/font/local'
import Buy from './buy'

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })


const Comfirm = ({ }) => {
    return
    <Box>
        <Box bgcolor={"#000"} sx={{ opacity: 0.6, width: "100%", height: "100%", position: 'absolute', zIndex: "tooltip", top: 0 }}>

        </Box>
        <Box position={"absolute"} sx={{ top: "30%", right: "20%", zIndex: "tooltip", }} >
            <ThemeProvider theme={theme}>
                <Typography sx={{ pl: 0, height: '30px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                    DO TOU WANT
                </Typography >
                <Typography sx={{ pl: 6, height: '30px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                    TO BUY
                </Typography>
                <Typography sx={{ pl: 3, height: '30px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                    5 HEALING
                </Typography>
                <Typography sx={{ pl: 6, height: '100px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                    POTION?
                </Typography>
            </ThemeProvider>
            <Box sx={{ pl: 2 }}>
                <Button variant="contained" sx={{ height: '54px', width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }} >
                    <Typography className={myFont.className} sx={{ fontSize: 30, height: '40px', mb: 1 }} >
                        COMFIRM
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ pl: 2, pt: 3 }}>
                <Button variant="contained" color='error' sx={{ height: '54px', width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }} >
                    <Typography className={myFont.className} sx={{ fontSize: 30, height: '40px', mb: 1 }} >
                        CANCLE
                    </Typography>
                </Button>
            </Box>

        </Box>
    </Box>
}



const Explain = ({toggle}) => {

    

   
    
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
                        หมั่นโถว คาร์โก้เคลียร์สป็อต เอสเพรสโซ กู๋ปาสเตอร์
                        บร็อคโคลี ฮิแฮปปี้ทับซ้อน กาญจนาภิเษกวิลล์ฮากกา
                        สต็อกดีพาร์ตเมนท์แคทวอล์คแฟรนไชส์ เทปไฟแนนซ์
                        เอเซียคอร์ปอเรชั่น ไตรมาสตุ๊ด เทรดอุปนายก
                        แอดมิสชันวัคค์ป๊อกเซอร์ไพรส์เซี้ยว
                    </Typography>
                </Box>
                <Box width={"110px"} height={"100%"}>
                    <Stack spacing={0}>
                        <Box>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center" spacing={0}>


                                <Box sx={{ bgcolor: '#0963F3', width: '30px', height: "30px", borderRadius: '5px' }}><Typography fontSize={"19px"} sx={{ ml: 1.5 }}>-</Typography></Box>
                                <Typography fontSize={"40px"} sx={{ width: '20px', pb: 1, pl: 0.5 }} className={myFont.className} >5</Typography>
                                <Box sx={{ bgcolor: '#0963F3', width: '30px', height: "30px", borderRadius: '5px' }}><Typography fontSize={"19px"} sx={{ ml: 1.2 }}>+</Typography></Box>

                            </Stack>
                        </Box>

                        <Button onClick={() => toggle(13)} variant="contained" color='success' className={myFont.className} fontSize={"30px"} sx={{ mb: 2, fontSize: 23, p: 0, boxShadow: "inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)" }}>
                            BUY
                        </Button>
                        <Button variant="contained" color='error' className={myFont.className} fontSize={"30px"} sx={{ mb: 2, fontSize: 23, p: 0, boxShadow: "inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)" }}>
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

            <Box width={'390px'} sx={{}}>
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
                {itembuy == 1 ? <Explain  /> : ""}
                {itembuy == 2 ? <Explain /> : ""}
                {itembuy == 3 ? <Explain /> : ""}
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
                {itembuy == 4 ? <Explain /> : ""}
                {itembuy == 5 ? <Explain /> : ""}
                {itembuy == 6 ? <Explain /> : ""}
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
                {itembuy == 7 ? <Explain /> : ""}
                {itembuy == 8 ? <Explain /> : ""}
                {itembuy == 9 ? <Explain />  : ""}
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
                {itembuy == 10 ? <Explain /> : ""}
                {itembuy == 11 ? <Explain /> : ""}
                {itembuy == 12 ? <Buy /> : ""}
                {itembuy == 13 ? <Buy toggle={()=> toggle}/> : ""}
            </Box>
            
        </Stack>

    )
}

export default shopmain 