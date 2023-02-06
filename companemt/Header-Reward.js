import localFont from "@next/font/local";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";

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
    },
  },
});

const Header_Reward = () => {
  return (
    <Stack alignItems={"center"}>
    <Box maxWidth={"100%"}height={"160px"} >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "fixed",
            zIndex: "app bar",
            height: "51px",
            width: "100%",
             
          }}
        >
          <img src="/image/reward/bg.svg" />
        </Box>
        <Box sx={{ position: "relative", zIndex: "drawer" ,pr:3}}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Typography
              color={"secondary"}
              className={myFont.className}
              sx={{ fontSize: "30px", height: "51px" }}
            >
              HELP
            </Typography>

            <Box>
              <img src="/image/book.svg" />
            </Box>
          </Stack>
        </Box>
        <Box sx={{ bgcolor: "#f2f2f2", width: "100%", height: "90px" }}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                spacing={0}
              >
                <Box sx={{ pl: 2, height: "90px", pt: 1 }}>
                  <img src="/image/Reward_page/Profile.png" />
                </Box>
                <Box sx={{ height: "50.3", pt: "1px" }}>
                  <img src="/image/Reward_page/cartoon.png" />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
              >
                <Typography
                  className={myFont.className}
                  sx={{ fontSize: "23.5px",pr:4 }}
                >
                  CHRISTOPHER NOLAN
                </Typography>
                <Box sx={{ height: "50.3", pt: "1px" }}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box position={"absolute"} sx={{ pb: 4.8, pr: 3 }}>
                      <Typography
                        color={"secondary"}
                        className={myFont.className}
                        sx={{ fontSize: "50px", height: "50px" }}
                      >
                        99,999 
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 12 }}>
                      <img src="/image/taket.svg" />
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
          <Box zIndex={"drawer"}>
          <img src="/image/Reward_page/redflag.svg" />
        </Box>
        </Box>
        
      </ThemeProvider>
    </Box>
    </Stack>
  );
};

export default Header_Reward;
