
import * as React from 'react';
import Box from '@mui/material/Box';
import Header from '../companemt/shop-header'
import Footernavbar from '../companemt/shop-foternavbar'
import Main_All from '../companemt/shop-all'
import Main_Defend from '../companemt/shop-defend'
import { Stack } from '@mui/system';
import Navbar from '../companemt/Shop-Navbar'
import Main_Attack from '../companemt/shop-attack'




export default function Home() {

    const [page, setPage] = React.useState()
    const [showmain,setShowmain] = React.useState(<Main_All />)

    const secpage = (index) => {
        setPage(index),setShowmain()
        console.log(index)
    }

    return (

        <Box height={"100vh"} overflow={'hidden'} bgcolor={"#fff"}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                    <Header />
                    {/* wall */}
                    <Stack justifyContent="center"
                        alignItems="center">
                        <Box sx={{
                            position: 'absolute',
                            zIndex: 'modal',
                            pt: 6,
                        }}>

                            <img src='/image/wall.png' />
                        </Box >
                        {/* Font ALL ATTACK DEDEND */}

                        <Navbar secpage={secpage} />

                    </Stack>

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
                    {page == "ALL" ? <Main_All /> : ''}
                    {page == "ATTACK" ? <Main_Attack /> : ''}
                    {page == "DEFEND" ? <Main_Defend /> : ''}
                    {showmain}
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>

    );
}