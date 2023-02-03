import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import localFont from "@next/font/local";

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

const Setting_header = () => {
  return (
    <div>
      {" "}
      <Stack alignItems={"center"}>
        <Box width={"100%"}>
          <Box>
            <Box sx={{ height: "105px", width: "100%", position: "relative" }}>
              <Stack alignItems="center">
                <Box
                  sx={{ position: "relative", zIndex: "modal", height: "67px" }}
                >
                  <img src="/image/2bg.svg" />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: "tooltip",
                    mt: 2,
                    height: "20px",
                  }}
                >
                  <img src="/image/flower-bg.svg" />
                </Box>
                <Box
                  width="100%"
                  sx={{ position: "absolute ", zIndex: "tooltip" }}
                >
                  <ThemeProvider theme={theme}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={28}
                    >
                      <Stack direction="row" alignItems="center" sx={{ pl: 1 }}>
                        <img src="/image/taket.svg" />
                        <Typography
                          className={myFont.className}
                          sx={{ pl: 1, fontSize: 30 }}
                          color={"secondary"}
                        >
                          500
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" sx={{ pr: 1 }}>
                        <Typography
                          className={myFont.className}
                          sx={{ pr: 1, fontSize: 30 }}
                          color={"secondary"}
                        >
                          HEPL
                        </Typography>
                        <img src="/image/book.svg" />
                      </Stack>
                    </Stack>
                  </ThemeProvider>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Setting_header;
