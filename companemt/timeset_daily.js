import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'


const Clock = ({ timerDay, timerHours, timerMinutes}) => {
    return (
        <Box>
            <Stack direction={"row"} justifyContent={"cennter"} alignItems={"center"} spacing={2}>
                <Stack direction={"column"} >
                    <p>เหลือ {timerDay} วัน</p>
                </Stack>
                <Stack direction={"column"} justifyContent={"cennter"} alignItems={"center"}>
                    <p>{timerHours} ชั่วโมง</p>
                    
                </Stack>
                <Stack direction={"column"} justifyContent={"cennter"} alignItems={"center"}>
                    <p>{timerMinutes} นาที </p>
                    
                </Stack>
                {/* <Stack direction={"column"} justifyContent={"cennter"} alignItems={"center"}>
                    <p>{timerSeconds}</p>
                    
                </Stack> */}

            </Stack>

        </Box>
        
    )
}

Clock.defaultProps={
    timerDay:10,
    timerHours :10,
    timerMinutes :10,
    
   
    
}

function time() {

    const [timerDay, setTimerDay] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    

    let interval;
    useEffect(() => {
        startTimer();
    });

    const startTimer = () =>{
        const countDownDate=new Date("Feb 30,2023").getTime();

        interval=setInterval(() => {
            
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance/(24*60*60*1000))

            const hours = Math.floor(distance%(24*60*60*1000) / (1000*60*60))

            const minutes = Math.floor(distance%(60*60*1000) / (1000*60))

            

            if(distance < 0){
                //Stop Timer
                clearInterval(interval.current);
            }else{
                // Update Timer
                setTimerDay(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                
            }
        });

    }

  

    return (
        <div>
            <Clock timerDay={timerDay} timerHours={timerHours} timerMinutes={timerMinutes} />

        </div>
    )
}

export default time