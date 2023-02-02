import React, { useState } from 'react'
import { Button, Box, Stack, Typography, Link } from '@mui/material'
import localFont from '@next/font/local'
import { Opacity } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#fff",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#FFC05F',
        },
    },
    breakpoints: {
        values: {
          mobile: 0,
          iPadMini: 414,
          iPadAir: 600,
          iPadPro: 1023,

          desktop: 1200,
        },
      },
});




function buy({toggle,count,setcount}) {
    // const [itembuy, setItembuy] = useState(false)


    // const toggle = (index) => {
    //     setItembuy(index)
    //     console.log(index)
    // }
    return (


        <Box  >
            <Box bgcolor={"#000"} sx={{ opacity: 0.8, width: "100%", height: "100%", position: 'absolute', zIndex: "tooltip", top: 0, left: 0, right: 0 }}>

            </Box>
            <Box position={"absolute"} sx={{ top: "30%" , right: "20%", zIndex: "tooltip", }} >
                <ThemeProvider theme={theme}>
                    <Typography sx={{ pr: {iPadini:5,iPadAir:16,iPadPro:24}, height: '30px', fontSize:50}} className={myFont.className} color={"primary"}>
                        DO TOU WANT
                    </Typography >
                    <Typography sx={{ pl: 6, height: '30px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                        TO BUY
                    </Typography>
                    <Typography sx={{ pl: 3, height: '30px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                        {count} HEALING
                    </Typography>
                    <Typography sx={{ pl: 6, height: '100px', fontSize: 50 }} className={myFont.className} color={"primary"}>
                        POTION?
                    </Typography>
                </ThemeProvider>
                <Box sx={{ pl: 2 }}>
                    <Link href='/item'>
                        <Button variant="contained" sx={{ height: '54px', width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }} >
                            <Typography className={myFont.className} sx={{ fontSize: 30, height: '40px', mb: 1 }} >
                                COMFIRM
                            </Typography>
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ pl: 2, pt: 3 }}>
                    
                        <Button onClick={() => toggle(14)} variant="contained" color='error' sx={{ height: '54px', width: '186px', boxShadow: "inset 0 -0.9em 0 -0.35em rgba(0,0,0,0.17)" }} >
                            <Typography  className={myFont.className} sx={{ fontSize: 30, height: '40px', mb: 1 }} >
                                CANCLE
                            </Typography>
                        </Button>
                    
                </Box>

            </Box>
        </Box>


        // <Stack direction="row" justifyContent="center" alignItems="center">
        //             <Box sx={{ width: '100%', height: '130' }}>
        //                 <Stack direction="row"
        //                     justifyContent="space-around"
        //                     alignItems="center">
        //                     <Box width={"244px"} height={"100%"}>
        //                         <Typography fontSize={"30px"} className={myFont.className}>
        //                             HEALING POTION
        //                         </Typography>
        //                         <Typography 
        //                             fontSize={"12px"}>
        //                             หมั่นโถว คาร์โก้เคลียร์สป็อต เอสเพรสโซ กู๋ปาสเตอร์
        //                             บร็อคโคลี ฮิแฮปปี้ทับซ้อน กาญจนาภิเษกวิลล์ฮากกา
        //                             สต็อกดีพาร์ตเมนท์แคทวอล์คแฟรนไชส์ เทปไฟแนนซ์
        //                             เอเซียคอร์ปอเรชั่น ไตรมาสตุ๊ด เทรดอุปนายก
        //                             แอดมิสชันวัคค์ป๊อกเซอร์ไพรส์เซี้ยว
        //                         </Typography>
        //                     </Box>
        //                     <Box width={"110px"} height={"100%"}>
        //                         <Stack spacing={0}>
        //                             <Box>
        //                                 <Stack direction="row"
        //                                     justifyContent="space-between"
        //                                     alignItems="center" spacing={0}>


        //                                         <Box sx={{bgcolor:'#0963F3',width:'30px',height:"30px" ,borderRadius: '5px'}}><Typography fontSize={"19px" } sx={{ml:1.5}}>-</Typography></Box>
        //                                         <Typography fontSize={"40px" } sx={{width:'20px',pb:1,pl:0.5}} className={myFont.className} >5</Typography>
        //                                         <Box sx={{bgcolor:'#0963F3',width:'30px',height:"30px" ,borderRadius: '5px'}}><Typography fontSize={"19px" } sx={{ml:1.2}}>+</Typography></Box>

        //                                 </Stack>
        //                             </Box>

        //                             <Button onClick={() => toggle(13)} variant="contained" color='success'className={myFont.className} fontSize={"30px" } sx={{mb:2,fontSize:23,p:0,boxShadow:"inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)"}}>
        //                                 BUY
        //                             </Button>
        //                             <Button variant="contained" color='error' className={myFont.className} fontSize={"30px"} sx={{mb:2,fontSize:23,p:0,boxShadow:"inset 0 -0.9em 0 -0.65em rgba(0,0,0,0.17)"}}>
        //                                 cencle
        //                             </Button>
        //                         </Stack>
        //                     </Box>
        //                 </Stack>
        //             </Box>
        //         </Stack>

    )
}

export default buy