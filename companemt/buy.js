import React, { useState } from 'react'
import { Button, Box, Stack,Typography } from '@mui/material'
import localFont from '@next/font/local'

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })

function buy() {
    const [itembuy, setItembuy] = useState(false)


    const toggle = (index) => {
        setItembuy(index)
        console.log(index)
    }
  return (

    
    <Stack direction="row" justifyContent="center" alignItems="center">
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

                                       
                                            <Box sx={{bgcolor:'#0963F3',width:'30px',height:"30px" ,borderRadius: '5px'}}><Typography fontSize={"19px" } sx={{ml:1.5}}>-</Typography></Box>
                                            <Typography fontSize={"40px" } sx={{width:'20px',pb:1,pl:0.5}} className={myFont.className} >5</Typography>
                                            <Box sx={{bgcolor:'#0963F3',width:'30px',height:"30px" ,borderRadius: '5px'}}><Typography fontSize={"19px" } sx={{ml:1.2}}>+</Typography></Box>
                                            
                                    </Stack>
                                </Box>

                                <Button onClick={() => toggle(13)} variant="contained" color='success'className={myFont.className} fontSize={"30px"} sx={{mb:2,fontSize:23,p:0}}>
                                    BUY
                                </Button>
                                <Button variant="contained" color='error' className={myFont.className} fontSize={"30px"} sx={{mb:2,fontSize:23,p:0}}>
                                    cencle
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            
  )
}

export default buy