import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import localFont from '@next/font/local'

import Mission3 from './Mission3';
import Mission2 from './Mission2';
import Mission1 from './Mission1';
const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })










function missionmain() {
  return (
    <Stack justifyContent="flex-start" alignItems="center" sx={{ mt: 2 }}>
      <Box sx={{ width: '100vw', height: '592px', ml: 3 }}>
        <Stack direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={0.5}>
    
        <Mission3/>
        <Mission2/>
        <Mission3/>
        <Mission1/>
        <Mission2/>
        <Mission3/>
        <Mission1/>
        <Mission2/>
        <Mission3/>
        <Mission2/>
        <Mission2/>
        <Mission2/>

          <Box sx={{ width: "100%", height: '110px', }}>

            <Stack direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}>

              <Box sx={{ opacity: 0.2 }}>
                <Stack direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}>
                  <Box sx={{ height: 17.7, width: 17.7 }}><img src='/image/mission/Tai.svg' /></Box>
                  <Typography sx={{ mb: "0.5px", fontSize: "12px" }}>ภารกิจเสร็จ</Typography>
                </Stack>

                <Typography sx={{ fontSize: "15px" }}>
                  เข้างานตรงเวลา รางวัลของคนทำดี
                </Typography>
                <Stack direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}>
                  <Button sx={{ width: "175px", height: '35px' }} variant="contained" disabled >
                    <Typography sx={{ fontSize: "30px", width: "150px", height: '50px' }} className={myFont.className}>
                      Claim reward
                    </Typography>
                  </Button>

                </Stack>


              </Box>
              <Box disabled sx={{ pr: 5 }} >
                <img src='/image/mission/com.svg' />
              </Box>
            </Stack>
          </Box>





        </Stack>

      </Box>



    </Stack>
  )
}

export default missionmain