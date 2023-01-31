import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import localFont from '@next/font/local'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Bottom from './buttom'
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
        <Stack alignItems="center">



            <Box sx={{ position: 'relative', width: '414px', height: "100%", mt: "5px" }}>

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

                        {/* Items that are ATTACK and DEFEND */}

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

                            {item == 4 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 36.5, mt: 0.9 }}><img src='/image/item/bg-4.svg' /></Box> : ""}
                            
                            {/* bg-item 4 */}

                            
                                <Stack justifyContent="center" alignItems="center" sx={{ pt: 0.5 }} >
                                    <Box onClick={() => toggle(4)} className="Box-4" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px", boxShadow:3 }}>
                                     <img src='/image/item/4.svg' />
                                    </Box>
                                </Stack>
                            

                            {item == 3 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 11.5, mt: 0.9 }}><img src='/image/item/bg-3.svg' /></Box> : ""}
                            
                            {/* bg-item 3 */}

                            <Box onClick={() => toggle(3)} className="Box-3" sx={{ boxShadow: 4, bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/3.svg' />
                                </Stack>
                            </Box>

                            {item == 2 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 11.5, mt: 0.9 }}><img src='/image/item/bg-2.svg' /></Box> : ""}
                            
                            {/* bg-item 2 */}

                            <Box onClick={() => toggle(2)} className="Box-2" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/2.svg' />
                                </Stack>
                            </Box>

                            {item == 1 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 36.5, mt: 0.9 }}><img src='/image/item/bg-1.svg' /></Box> : ""}
                            
                            {/* bg-item 1 */}

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
                            {item == 8 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 36.5, mt: 0.9 }}><img src='/image/item/bg-8.svg' /></Box> : ""}
                            
                            {/* bg-item 8 */}
                            
                            <Box onClick={() => toggle(8)} className="Box-8" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/8.svg' />
                                </Stack>
                            </Box>
                            {item == 7 ? <Box sx={{ position: 'absolute', zIndex: 'modal', ml: 11.5, mt: 0.9 }}><img src='/image/item/bg-7.svg' /></Box> : ""}
                            
                            {/* bg-item 7 */}

                            <Box onClick={() => toggle(7)} className="Box-7" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/7.svg' />
                                </Stack>
                            </Box>

                            {item == 6 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 11.5, mt: 0.9 }}><img src='/image/item/bg-6.svg' /></Box> : ""}
                            
                            {/* bg-item 6 */}
                            
                            <Box onClick={() => toggle(6)} className="Box-6" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/6.svg' />
                                </Stack>
                            </Box>

                            {item == 5 ? <Box sx={{ position: 'absolute', zIndex: 'modal', mr: 36.5, mt: 0.9 }}><img src='/image/item/bg-5.svg' /></Box> : ""}
                            
                            {/* bg-item 5 */}
                            
                            <Box onClick={() => toggle(5)} className="Box-5" sx={{ bgcolor: '#fff', width: "81px", height: '81px', borderRadius: "10px" }}>
                                <Stack justifyContent="center"
                                    alignItems="center" sx={{ pt: 0.5 }} >
                                    <img src='/image/item/5.svg' />
                                </Stack>
                            </Box>
                        </Stack>

                    </Stack>
                </Box>
                
                {/* Explanation of item properties */}

                {item == 1 ? <Healling toggle={toggle}/> : ""}
                {item == 2 ? <Healling toggle={toggle}/> : ""}
                {item == 3 ? <Healling toggle={toggle}/> : ""}
                {item == 4 ? <Healling toggle={toggle}/> : ""}
                {item == 5 ? <Healling toggle={toggle}/> : ""}
                {item == 6 ? <Healling toggle={toggle}/> : ""}
                {item == 7 ? <Healling toggle={toggle}/> : ""}
                {item == 8 ? <Healling toggle={toggle}/> : ""}
                
                <Bottom />



            </Box>

        </Stack >

    )
}

export default itemmain


