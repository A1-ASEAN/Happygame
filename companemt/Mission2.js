import { Box, Stack, Typography,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

import localFont from '@next/font/local'


const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })


function Mission2() {

    const [timerDay, setTimerDay] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()


    let interval;

    useEffect(() => {

        startTimer()


    },);

    const startTimer = () => {
        const countDownDate = new Date("Oct 20,2023").getTime();

        interval = setInterval(() => {

            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000))

            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))

            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))


            {
                distance < 0 ? clearInterval(interval.current) : setTimerDay(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            }

            // if(distance < 0){
            //     //Stop Timer
            //     clearInterval(interval.current);
            // }else{
            //     // Update Timer
            //     setTimerDay(days);
            //     setTimerHours(hours);
            //     setTimerMinutes(minutes);

            // }
        });
    }

    return (
        <Box sx={{ width: "100%", height: '110px' }}>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}>
        <Box>
          <Stack direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            <Box sx={{ height: 17.7, width: 17.7 }}><img src='/image/mission/Clock.svg' /></Box>
            <Typography sx={{ fontSize: "12px", mb: "0.5px",fontSize:'12px' }}> เหลือ{timerDay} วัน {timerHours} ชั่วโมง {timerMinutes} นาที</Typography>
          </Stack>
          <Typography sx={{ fontSize: "15px" }}>
            ไปสแกนพีทีภายใน 5 นาที
          </Typography>
          <Stack direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}>
            <Button sx={{ width: "81px", height: '35px' }} variant="contained" >
              <Typography sx={{ fontSize: "30px", width: "81px", height: '50px' }} className={myFont.className}>
                ACCEPT
              </Typography>
            </Button>
            <Button color="error" variant="contained" sx={{ width: "81px", height: '35px' }}>

              <Typography sx={{ fontSize: "30px", width: "81px", height: '50px' }} className={myFont.className}>
                DELETE
              </Typography>
            </Button>
          </Stack>

        </Box>
        <Box>
          <Stack justifyContent="center"
            alignItems="center">

            <Box sx={{ fontSize: "30px", width: "85px", height: '63.4px' }} >
              <img src='/image/mission/item-2.svg' />
            </Box>
            <Typography sx={{ fontSize: "30px", width: "100px", height: '20px', pr: 0 }} className={myFont.className}>
              REWARD
            </Typography>
          </Stack>

        </Box>
      </Stack>
    </Box>
    )
}

export default Mission2