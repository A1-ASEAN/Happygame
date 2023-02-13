import React from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import localFont from "@next/font/local";
const myFont = localFont({ src: "../gamer_2/Gamer.ttf" });
const Mision_bar=()=>{
    return(<Box sx={{ width: "100%", height: "110px" }}>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ height: 17.7, width: 17.7 }}>
            <img src="/image/mission/Clock.svg" />
          </Box>
          <Typography sx={{ mb: "0.5px" }}>-</Typography>
        </Stack>
        <Typography sx={{ fontSize: "15px" }}>
          ภารกิจจะเปิดเผยเมื่อกดทำภารกิจ
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          <Button
            sx={{ width: "81px", height: "35px" }}
            variant="contained"
          >
            <Typography
              sx={{ fontSize: "30px", width: "81px", height: "50px" }}
              className={myFont.className}
            >
              ACCEPT
            </Typography>
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ width: "81px", height: "35px" }}
          >
            <Typography
              sx={{ fontSize: "30px", width: "81px", height: "50px" }}
              className={myFont.className}
            >
              DELETE
            </Typography>
          </Button>
        </Stack>
      </Box>

      <Box>
        <Stack justifyContent="center" alignItems="center">
          <Box
            sx={{ fontSize: "30px", width: "85px", height: "63.4px" }}
          >
            <img src="/image/mission/item-1.svg" />
          </Box>
          <Typography
            sx={{
              fontSize: "30px",
              width: "100px",
              height: "20px",
              pr: 2,
            }}
            className={myFont.className}
          >
            REWARD
          </Typography>
        </Stack>
      </Box>
    </Stack>
  </Box>)
    

}


const mission_special = () => {
    return <div>
        <Stack justifyContent="flex-start" alignItems="center" sx={{ mt: 2 }}>
      <Box sx={{ width: "100vw", height: "100%", ml: 5 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={0.5}
        >
          <Mision_bar/>
          <Mision_bar/>
          <Mision_bar/>




          

          <Box sx={{ width: "100%", height: "110px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}
            >
              <Box>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Box sx={{ height: 17.7, width: 17.7 }}>
                    <img src="/image/mission/Clock.svg" />
                  </Box>
                  <Typography sx={{ fontSize: "12px", mb: "0.5px" }}>
                    เหลือเวลา 5.00 นาที
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "15px" }}>
                  ไปสแกนพีทีภายใน 5 นาที
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Button
                    sx={{ width: "81px", height: "35px" }}
                    variant="contained"
                  >
                    <Typography
                      sx={{ fontSize: "30px", width: "81px", height: "50px" }}
                      className={myFont.className}
                    >
                      ACCEPT
                    </Typography>
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    sx={{ width: "81px", height: "35px" }}
                  >
                    <Typography
                      sx={{ fontSize: "30px", width: "81px", height: "50px" }}
                      className={myFont.className}
                    >
                      DELETE
                    </Typography>
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    sx={{ fontSize: "30px", width: "85px", height: "63.4px" }}
                  >
                    <img src="/image/mission/item-2.svg" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      width: "100px",
                      height: "20px",
                      pr: 0,
                    }}
                    className={myFont.className}
                  >
                    REWARD
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ width: "100%", height: "110px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={0}
            >
              <Box>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Box sx={{ height: 17.7, width: 17.7 }}>
                    <img src="/image/mission/Clock.svg" />
                  </Box>
                  <Typography sx={{ fontSize: "12px", mb: "0.5px" }}>
                    เหลือเวลา 1 ชั่วโมง
                  </Typography>
                </Stack>
                <Typography sx={{ fontSize: "15px" }}>
                  มองต่ำเข้าไว้มันอยู่ในห้องประชุมชั้น 3
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Button
                    sx={{ width: "81px", height: "35px" }}
                    variant="contained"
                  >
                    <Typography
                      sx={{ fontSize: "30px", width: "81px", height: "50px" }}
                      className={myFont.className}
                    >
                      ACCEPT
                    </Typography>
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    sx={{ width: "81px", height: "35px" }}
                  >
                    <Typography
                      sx={{ fontSize: "30px", width: "81px", height: "50px" }}
                      className={myFont.className}
                    >
                      DELETE
                    </Typography>
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    sx={{ fontSize: "30px", width: "85px", height: "63.4px" }}
                  >
                    <img src="/image/mission/item-3.svg" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      width: "100px",
                      height: "20px",
                      pr: 2,
                    }}
                    className={myFont.className}
                  >
                    REWARD
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Box sx={{ width: "100%", height: "220px" }}>
              <Box sx={{ width: "100%", height: "110px" }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={0}
                >
                  <Box sx={{ opacity: 1 }}>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      <Box sx={{ height: 17.7, width: 17.7 }}>
                        <img src="/image/mission/Tai.svg" />
                      </Box>
                      <Typography sx={{ mb: "0.5px", fontSize: "12px" }}>
                        ภารกิจเสร็จ
                      </Typography>
                    </Stack>

                    <Typography sx={{ fontSize: "15px" }}>
                      เข้างานตรงเวลา รางวัลของคนทำดี
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      <Button
                        sx={{ width: "175px", height: "35px" }}
                        variant="contained"
                        color="success"
                      >
                        <Typography
                          sx={{
                            fontSize: "30px",
                            width: "150px",
                            height: "50px",
                          }}
                          className={myFont.className}
                        >
                          Claim reward
                        </Typography>
                      </Button>
                    </Stack>
                  </Box>
                  <Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    sx={{ fontSize: "30px", width: "85px", height: "63.4px" }}
                  >
                    <img src="/image/mission/item-3.svg" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      width: "100px",
                      height: "20px",
                      pr: 2,
                    }}
                    className={myFont.className}
                  >
                    REWARD
                  </Typography>
                </Stack>
              </Box>
                </Stack>
              </Box>

              <Box sx={{ width: "100%", height: "110px" }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={0}
                >
                  <Box sx={{ opacity: 0.2 }}>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={2}
                    >
                      <Box sx={{ height: 17.7, width: 17.7 }}>
                        <img src="/image/mission/Tai.svg" />
                      </Box>
                      <Typography sx={{ mb: "0.5px", fontSize: "12px" }}>
                        ภารกิจเสร็จ
                      </Typography>
                    </Stack>

                    <Typography sx={{ fontSize: "15px" }}>
                      เข้างานตรงเวลา รางวัลของคนทำดี
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      <Button
                        sx={{ width: "175px", height: "35px" }}
                        variant="contained"
                        disabled
                      >
                        <Typography
                          sx={{
                            fontSize: "30px",
                            width: "150px",
                            height: "50px",
                          }}
                          className={myFont.className}
                        >
                          Claim reward
                        </Typography>
                      </Button>
                    </Stack>
                  </Box>
                  <Box disabled sx={{ pr: 5 }}>
                    <img src="/image/mission/com.svg" />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Stack>

    </div>;
}

// #endregion

export default mission_special;