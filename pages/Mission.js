
import Header from '../companemt/Misson-header'
import Battle from '../companemt/Mission-bettle'
import Main from '../companemt/mission-main'
import * as React from 'react';
import Weekly from '@/companemt/mission_weekly';
import Box from '@mui/material/Box';
import SPECIAL from '@/companemt/mission-special';

import Footernavbar from '../companemt/misson-foternavbar'
import { Stack } from '@mui/system';


function Mission() {
    const [page, setPage] = React.useState();
  const [showmain, setShowmain] = React.useState(<Main/>);

  const secpage = (index) => {
    setPage(index), setShowmain();
    console.log(index);
  };

    return (
        <Box height={"100vh"} overflow={'hidden'}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>

                <Box >

                <Header />
                <Stack justifyContent="center"
                    alignItems="center">
                    <Box sx={{
                        position: 'absolute',
                        zIndex: 'modal',
                        pt: 3,



                    }}>
                        <img src='/image/wall_bar.png' />
                    </Box >
                    <Battle secpage={secpage} />
                </Stack>

                </Box>

                <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
                    
                    {page == "Daily" ? <Main /> : ""}
            {page == "WEEKLY" ? <Weekly /> : ""}
            {page == "SPECIAL" ? <SPECIAL /> : ""}
            {showmain}
                    

                    
                    
                </Box>

                <Box >

                    <Footernavbar />

                </Box>


            </Box>

        </Box>
        // <React.Fragment>
        //     <CssBaseline />
        //     <Container maxWidth="390px" sx={{ m: 0, p: 0, height: '100vh', bgcolor: "#fff" }}  >
        //         <Box maxWidth="100%" component="div" sx={{ height: '100%', }}>
        //             <Header />
        //             <Main />
        //         </Box>




        //     </Container>
        //     <Footernavbar />
        // </React.Fragment>
    );
}

export default Mission