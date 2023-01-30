import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Bottom from './item-buttom'
import { useState } from 'react';
import Healling from './healing'
import Button from '@mui/material/Button';
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



function itemmain() {

    const [item, setItem] = useState(false)


    const toggle = (index) => {
        setItem(index)
        console.log(index)
    }
    return (
        <Box >
            


                <Box sx={{ position: 'relative', width: '100%', height: "100%", mt: "5px" }}>

                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        <Box sx={{ width: "271px", height: '27px' }}>
                            <Box sx={{ width: "271px", height: '40px', pl: 0.8, pr: 0.8, }}>
                                <Stack direction="row"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Typography className={myFont.className} sx={{ fontSize: '26px' }}>ATTACK</Typography>
                                    <Typography className={myFont.className} sx={{ fontSize: '26px' }}>DEFEND</Typography>
                                </Stack>
                            </Box>


                        </Box >
                        <Box sx={{ width: "271px", height: '80px' }}>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">

                                <Box sx={{ zIndex: 'modal' }} ><img src='/image/item/window.svg' /></Box>

                                {item == 1 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 2, mb: 3 }}><img src='/image/item/1.svg' /></Box> : ""}
                                {item == 2 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 2, mb: 3 }}><img src='/image/item/2.svg' /></Box> : ""}
                                {item == 3 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 2, mb: 3 }}><img src='/image/item/3.svg' /></Box> : ""}
                                {item == 4 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 2, mb: 3 }}><img src='/image/item/4.svg' /></Box> : ""}

                                <Box sx={{ zIndex: 'modal' }} ><img src='/image/item/window.svg' /></Box>

                                {item == 5 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 27, mb: 3 }}><img src='/image/item/5.svg' /></Box> : ""}
                                {item == 6 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 27, mb: 3 }}><img src='/image/item/6.svg' /></Box> : ""}
                                {item == 7 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 27, mb: 3 }}><img src='/image/item/7.svg' /></Box> : ""}
                                {item == 8 ? <Box sx={{ zIndex: 'tooltip', position: 'absolute', ml: 27, mb: 3 }}><img src='/image/item/8.svg' /></Box> : ""}
                            </Stack>
                        </Box>

                    </Stack>
                    <Box sx={{ width: "100%", height: '200px', mt: "25px" }}>
                        <Stack spacing={"9.6px"}>
                            <Stack direction="row-reverse"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={0}>
                                {item == 4 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 34, mt: 0.9 }}><img src='/image/item/bg-4.svg' /></Box> : ""}
                                <Box onClick={() => toggle(4)} className="Box-4" sx={{ boxShadow: 3, bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/4.svg' />
                                    </Stack>
                                </Box>
                                {item == 3 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 11.5, mt: 0.9 }}><img src='/image/item/bg-3.svg' /></Box> : ""}
                                <Box onClick={() => toggle(3)} className="Box-3" sx={{ boxShadow: 4, bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/3.svg' />
                                    </Stack>
                                </Box>
                                {item == 2 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 11.5, mt: 0.9 }}><img src='/image/item/bg-2.svg' /></Box> : ""}
                                <Box onClick={() => toggle(2)} className="Box-2" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/2.svg' />
                                    </Stack>
                                </Box>
                                {item == 1 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 34, mt: 0.9 }}><img src='/image/item/bg-1.svg' /></Box> : ""}
                                <Box className="Box-1" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px", zIndex: 'tooltip' }}>
                                    <Box onClick={() => toggle(1)} sx={{ zIndex: 'tooltip' }}>
                                        <Stack justifyContent="center"
                                            alignItems="center" sx={{ pt: 0.5 }} >
                                            < img src='/image/item/1.svg' />


                                        </Stack>
                                    </Box>

                                </Box>


                            </Stack>
                            <Stack direction="row-reverse"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={0}>
                                {item == 8 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 34, mt: 0.9 }}><img src='/image/item/bg-8.svg' /></Box> : ""}
                                <Box onClick={() => toggle(8)} className="Box-8" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/8.svg' />
                                    </Stack>
                                </Box>
                                {item == 7 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 11.5, mt: 0.9 }}><img src='/image/item/bg-7.svg' /></Box> : ""}
                                <Box onClick={() => toggle(7)} className="Box-7" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/7.svg' />
                                    </Stack>
                                </Box>
                                {item == 6 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 11.5, mt: 0.9 }}><img src='/image/item/bg-6.svg' /></Box> : ""}
                                <Box onClick={() => toggle(6)} className="Box-6" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/6.svg' />
                                    </Stack>
                                </Box>
                                {item == 5 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 34, mt: 0.9 }}><img src='/image/item/bg-5.svg' /></Box> : ""}
                                <Box onClick={() => toggle(5)} className="Box-5" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                    <Stack justifyContent="center"
                                        alignItems="center" sx={{ pt: 0.5 }} >
                                        <img src='/image/item/5.svg' />
                                    </Stack>
                                </Box>
                            </Stack>

                        </Stack>
                    </Box>
                    {item == 1 ? <Box sx={{ pl: 2, pr: 2 }}>
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

                                    <Button className={myFont.className} variant="contained" sx={{ fontSize: '26px', height: '30px', width: '82px' }} onClick={() => toggle(8)} >
                                        EQUIP

                                    </Button >
                                    <Button className={myFont.className} variant="contained" color="error" sx={{ fontSize: '26px', height: '30px', width: '82px' }}>

                                        DELETE

                                    </Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box> : ""}
                    {item == 2 ? <Healling /> : ""}
                    {item == 3 ? <Healling /> : ""}
                    {item == 4 ? <Healling /> : ""}
                    {item == 5 ? <Healling /> : ""}
                    {item == 6 ? <Healling /> : ""}
                    {item == 7 ? <Healling /> : ""}
                    {item == 8 ? <Healling /> : ""}
                    <Bottom />



                </Box>
            </Box>

       
    )
}

export default itemmain


