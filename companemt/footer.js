import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";







export default function Footer() {
    
    return (

        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0  , zIndex: 'tooltip'}}
            elevation={3}  
        >
            <Box sx={{ mr: 1, ml: 1, height: "100%", }}>


                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end">
                    <Box sx={{ position: 'relative' }}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Box>
                                <img src='/image/footer/Redeem.svg' />
                            </Box>
                            <Typography sx={{ fontSize: 14 }}>
                                Redeem
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        <Stack
                            justifyContent="flex-end"
                            alignItems="center">
                            <Box>
                                <img src='/image/footer/shop.svg' />
                            </Box>
                            <Typography sx={{ fontSize: 14 }}>
                                Shop
                            </Typography>
                        </Stack>
                    </Box >
                    <Box sx={{ position: 'relative' }}>
                        <Stack
                            justifyContent="flex-star"
                            alignItems="center">
                            <Box>
                                <img src='/image/footer/Profile.svg' />
                            </Box>
                            <Typography sx={{ fontSize: 14 }}>
                                Profile
                            </Typography>
                        </Stack>
                    </Box >
                    <Box sx={{ position: 'relative' }}>
                        <Stack
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Box sx={{ pb: 0.5}}>
                                <img src='/image/footer/Mission.svg' />
                            </Box>
                            <Typography sx={{ fontSize: 14 }}>
                                Mission
                            </Typography>
                        </Stack>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        <Stack
                            justifyContent="flex-end"
                            alignItems="center">
                            <Box>
                                <img src='/image/footer/Setting.svg' />
                            </Box>
                            <Typography sx={{ fontSize: 14 }}>
                                Setting
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>

            </Box>

        </Paper>
    );
}