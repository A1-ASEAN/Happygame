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
    timerDay:0,
    timerHours :0,
    timerMinutes :0,
    
   
    
}

function time() {

   
  

    return (
        <div>
            

        </div>
    )
}

export default time