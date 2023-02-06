import { Box, height, Stack } from '@mui/system'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Itemmain from './item-main'

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
});


function healing({toggle}) {

   
    return (

       
            <Box sx={{ pl: 2, pr: 2, }}>
                <Stack direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    spacing={2} >
                    <Box sx={{ width: '282px', height: "76px", }}>
                        <Typography className={myFont.className} sx={{ fontSize: '26px', height: '30px' }}>
                            HEALING POTION <img src='/image/item/lukydraw.svg' />
                        </Typography>
                        <Typography sx={{ fontSize: '8px' }}>
                            หมั่นโถว คาร์โก้เคลียร์สป็อต เอสเพรสโซ กู๋ปาสเตอร์ บร็อคโคลี ฮิแฮปปี้ทับซ้อน กาญจนาภิเษกวิลล์ฮากกา สต็อกดีพาร์ตเมนท์แคทวอล์คแฟรนไชส์ เทปไฟแนนซ์
                        </Typography>
                    </Box>

                    <Box sx={{ width: '82px', height: "76px", }}>
                        <Stack direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}>

                            <Button className={myFont.className} variant="contained" sx={{ fontSize: '26px', height: '30px', width: '82px' }}  >
                                EQUIP

                            </Button >
                            <Button className={myFont.className} variant="contained" color="error" 
                            sx={{ fontSize: '26px', height: '30px', width: '82px' }}
                            onClick={() => toggle("Delete")}>

                                DELETE

                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
           
    )
}

export default healing