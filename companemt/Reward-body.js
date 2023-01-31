import { Button, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import localFont from "@next/font/local";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Comfirm from './comflrm-reward'

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
    three: {
      main: '#0ACD7A',
    },
  },
});



const myFont = localFont({ src: "../gamer_2/Gamer.ttf" });
const Reward_body = () => {

  const [click, setClick] = useState(false)


  const toggle = (idx) => {
    setClick(idx)
    console.log(idx)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack alignItems={"center"}>
          <Box maxWidth={"414px"} sx={{pt:"30px"}}>
            <Stack alignItems={"center"}>
              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item1.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 1 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        Starbuck gift card A 200 THB voucher{" "}
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          200
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button onClick={() => toggle(1)} color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item2.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 1 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        Major cineplex ticket 2 seat ticket
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          200
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button onClick={() => toggle(1)} color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item3.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 1 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        Central gift card A 500 THB voucher
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          500
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button disabled color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item3.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 1 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        Central gift card A 1,000 THB voucher
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          1,000
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button disabled color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item5.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 1 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        2,000 THB <br /> A 2,000 THB money
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          2,000
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button disabled color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ bgcolor: "#ffff", borderRadius: "8px", height: "100px", mt: 1, width: "98%", }}>
                <Grid container direction={"row"}>
                  <Grid xs={4}>
                    <img src="/image/Reward_page/reward_item6.png" />
                  </Grid>

                  <Grid xs={4} sx={{ p: 1, pt: 2 }}>
                    <Box paddingLeft={1}>
                      <Typography fontSize={"11.5px"}>
                        Mercedez Benz <br /> SLK 2020
                      </Typography>
                    </Box>
                    <Stack justifyContent={"flex-start"} alignItems="center" direction={"row"} spacing={1} >
                      <Box sx={{ mb: 1, ml: 1 }}>
                        <img src="/image/Reward_page/coin.svg" />
                      </Box>

                      <Box >
                        <Typography color={"secondary"} fontSize={30} className={myFont.className} sx={{ height: 60 }} >
                          2,500,000
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid xs={4} >
                    <Stack justifyContent="flex-end"
                      alignItems="flex-end" sx={{ pr: 2, pt: 5 }}>


                      <Button disabled color="three" variant="contained" sx={{ boxShadow: "inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)", mt: 1.8, width: 95, height: 37, zIndex: 'tooltip' }}   >
                        <Stack justifyContent="center"
                          alignItems="center"
                          direction="column"
                          spacing={0}
                          sx={{ m: 0 }}>
                          <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px', height: "50px" }}>
                            Redeem
                          </Typography>

                        </Stack>
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

            </Stack>

            {click == 1 ? <Comfirm /> : ""}
          </Box>
        </Stack>
      </ThemeProvider>
    </div>

  );
};

export default Reward_body;
