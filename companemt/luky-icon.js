
import { Box, Link, Stack, ThemeProvider, Typography } from '@mui/material';
import localFont from '@next/font/local'
import { createTheme } from '@mui/material/styles';

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })
const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: "#0968FF",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#0288d1',
        },
    },
});
export default function LuckyIcon() {

    return (

        <Stack
            alignItems="center">
            <Box width={"390px"}>
                <Box sx={{
                    position: 'relative',
                    zIndex: 'tooltip',
                    width: '100%'


                }}>
                    <Link href="#" underline="none">
                        <Stack sx={{ pl: 0.5 }}>
                            <Box>
                                <img src=' /image/buttom/lucky.svg' />
                            </Box>
                            <Box sx={{
                                position: 'fixed',
                                zIndex: 'tooltip',
                                ml: 2.5,
                                pb: 2
                            }}>
                                <img src=' /image/buttom/1.svg' />
                            </Box>
                        </Stack>
                    </Link>
                    <Stack
                        direction="column" sx={{ height: "20px" }}>
                        <ThemeProvider theme={theme}>
                            <Typography className={myFont.className} sx={{ fontSize: '20px', height: "10px" }}>LUCKY</Typography>
                            <Typography className={myFont.className} sx={{ fontSize: '20px' }}>DRAW</Typography>
                        </ThemeProvider>
                    </Stack>
                </Box>
            </Box>
        </Stack>


    );
}
