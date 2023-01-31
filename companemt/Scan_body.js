import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import localFont from "@next/font/local";
import Link from 'next/link';
import Home from '../pages/Home'
import Footer from '../companemt/Scan_footer';
const myFont = localFont({ src: "../gamer_2/Gamer.ttf" });

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#FFC05F",
    },three: {
      main: "#F5f5f5",
    },
    four:{
        main:"#0968FF",
    },
  },
});

const Scan_body = () => {
  return ( <ThemeProvider theme={theme}>
    <div>
      
        <Stack alignItems="center" justifyContent="center">
        <Box width={"414px"} 
            sx={{ bgcolor: "#FFFF", pt: 1 }}>
          
            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                p: 1,
                
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-end"
                
              >
                <Box sx={{pr:2}}>
                  <Link href={"http://localhost:3000/Home"}>
                <img src="/image/Scan/Ox.png"/>
                </Link>
                </Box>

               

                <Stack direction="row" spacing={1} alignItems="center">
                  
                </Stack>
              </Stack>
            </Box>

            
            <Stack alignItems="center" justifyContent="center" paddingTop={10}>
              <Box>
              <img src="/image/Scan/scan.png"/>
              </Box>

             <Link href={'/connect-attack'}>
             <Box sx={{pt:4}}> 
              <img src="/image/Scan/Record button.png"/>
             </Box>
             </Link>
                
            </Stack>


          
        </Box>
        <Footer />
      </Stack>
      
    </div></ThemeProvider>
  );
};

export default Scan_body;
