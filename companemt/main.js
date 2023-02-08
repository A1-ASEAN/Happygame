import * as React from "react";
import Table from "@mui/material/Table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import localFont from "@next/font/local";
import Footer from "./footer";
import BG from "../companemt/SVGS/PF_BG";

const myFont = localFont({ src: "../gamer_2/Gamer.ttf" });

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#8B8B8B",
    },
  },
});

export default function AccessibleTable() {
  return (
    <Stack alignItems={"center"}>
      <Box
        sx={{
          height: "100%",
          width: "100vw",
          position: "relative",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "100%" }} aria-label="caption table">
            <TableHead>
              <ThemeProvider theme={theme}>
                <TableRow>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          pb: 2,
                          zIndex: "tooltip",
                          width: 30,
                        }}
                      >
                        <img src="/image/table/1.svg" />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: "tooltip",
                          pt: 3,
                          pl: 2,
                        }}
                      >
                        <img src="/image/table/2.png" />
                      </Box>
                      <Box
                        sx={{
                          zIndex: "modal",
                          pl: 4,
                        }}
                      >
                        <img src="/image/table/profile.png" />
                      </Box>

                      <Stack direction="row">
                        <Box>
                          <Stack direction="row">
                            <Typography
                              className="Status-Scan"
                              color={"secondary"}
                              sx={{
                                pl: 2,
                                fontSize: "12px",
                                zIndex: "tooltip",
                              }}
                            >
                              Scan
                            </Typography>
                            <Typography
                              className="Scan-By"
                              sx={{ pl: 0.5, fontSize: "12px" }}
                            >
                              Nicholas Hoult
                            </Typography>
                          </Stack>
                          <Typography
                            className="P-type"
                            sx={{ pl: 2, fontSize: "12px" }}
                          >
                            Possint
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                      <Box
                        className={myFont.className}
                        sx={{
                          backgroundColor: "#0968FF",
                          fontSize: 20,
                          borderRadius: "5px",
                          width: "100px ",
                          right: 0,
                        }}
                      >
                        <Stack justifyContent="center" alignItems="center">
                          <Typography
                            sx={{ fontSize: 20 }}
                            className={myFont.className}
                            color={"primary"}
                          >
                            10 POINTS
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          pb: 2,
                          zIndex: "tooltip",
                          width: 30,
                        }}
                      >
                        <img src="/image/table/2-1.svg" />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: "tooltip",
                          pt: 3,
                          pl: 2,
                        }}
                      >
                        <img src="/image/table/2-2.svg" />
                      </Box>
                      <Box
                        sx={{
                          zIndex: "modal",
                          pl: 4,
                        }}
                      >
                        <img src="/image/table/2-3.svg" />
                      </Box>
                      <Stack direction="row">
                        <Box>
                          <Stack direction="row">
                            <Typography
                              className="Status-Scan"
                              color={"secondary"}
                              sx={{
                                pl: 2,
                                fontSize: "12px",
                                zIndex: "tooltip",
                              }}
                            >
                              Scan by
                            </Typography>
                            <Typography
                              className="Scan-By"
                              sx={{ pl: 0.5, fontSize: "12px" }}
                            >
                              Christian Bale
                            </Typography>
                          </Stack>
                          <Typography
                            className="P-type"
                            sx={{ pl: 2, fontSize: "12px" }}
                          >
                            Happiness
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                      <Box
                        className={myFont.className}
                        sx={{
                          backgroundColor: "#FFE000",
                          fontSize: 20,
                          borderRadius: "5px",
                          width: "100px ",
                        }}
                      >
                        <Stack justifyContent="center" alignItems="center">
                          <Typography
                            sx={{ fontSize: 20 }}
                            className={myFont.className}
                            color={"primary"}
                          >
                            1 DRAW
                          </Typography>
                        </Stack>
                      </Box></Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          pb: 2,
                          zIndex: "tooltip",
                          width: 30,
                        }}
                      >
                        <img src="/image/table/3-1.svg" />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: "tooltip",
                          pt: 3,
                          pl: 2,
                        }}
                      >
                        <img src="/image/table/3-2.svg" />
                      </Box>
                      <Box
                        sx={{
                          zIndex: "modal",
                          pl: 4,
                        }}
                      >
                        <img src="/image/table/3-3.svg" />
                      </Box>
                      <Stack direction="row">
                        <Box>
                          <Stack direction="row">
                            <Typography
                              className="Status-Scan"
                              color={"secondary"}
                              sx={{
                                pl: 2,
                                fontSize: "12px",
                                zIndex: "tooltip",
                              }}
                            >
                              Scan
                            </Typography>
                            <Typography
                              className="Scan-By"
                              sx={{ pl: 0.5, fontSize: "12px" }}
                            >
                              Tom Holland
                            </Typography>
                          </Stack>
                          <Typography
                            className="P-type"
                            sx={{ pl: 2, fontSize: "12px" }}
                          >
                            Sadness
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                      <Box
                        alignItems
                        sx={{
                          backgroundColor: "#FD7066",
                          borderRadius: "5px",
                          width: "100px ",
                        }}
                      >
                        <Stack justifyContent="center" alignItems="center">
                          <Typography
                            sx={{ fontSize: 20 }}
                            className={myFont.className}
                            color={"primary"}
                          >
                            -2 POINTS
                          </Typography>
                        </Stack>
                      </Box></Stack>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          pb: 2,
                          zIndex: "tooltip",
                          width: 30,
                        }}
                      >
                        <img src="/image/table/4-1.svg" />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          zIndex: "tooltip",
                          pt: 3,
                          pl: 2,
                        }}
                      >
                        <img src="/image/table/2.png" />
                      </Box>
                      <Box
                        sx={{
                          zIndex: "modal",
                          pl: 4,
                        }}
                      >
                        <img src="/image/table/4-3.svg" />
                      </Box>
                      <Stack direction="row">
                        <Box>
                          <Stack direction="row">
                            <Typography
                              className="Status-Scan"
                              color={"secondary"}
                              sx={{
                                pl: 2,
                                fontSize: "12px",
                                zIndex: "tooltip",
                              }}
                            >
                              Scan by
                            </Typography>
                            <Typography
                              className="Scan-By"
                              sx={{ pl: 0.5, fontSize: "12px" }}
                            >
                              Mark Wahlberg
                            </Typography>
                          </Stack>
                          <Typography
                            className="P-type"
                            sx={{ pl: 2, fontSize: "12px" }}
                          >
                            Possint
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Stack direction="row"
                      justifyContent="flex-end"
                      alignItems="center">
                      <Box
                        className={myFont.className}
                        alignItems
                        sx={{
                          backgroundColor: "#0ACD7A",
                          fontSize: 20,
                          borderRadius: "5px",
                          width: "100px ",
                        }}
                      >
                        <Stack justifyContent="center" alignItems="center">
                          <Typography
                            sx={{ fontSize: 20 }}
                            className={myFont.className}
                            color={"primary"}
                          >
                            RECOVER
                          </Typography>
                        </Stack>
                      </Box></Stack>
                  </TableCell>
                </TableRow>
              </ThemeProvider>
            </TableHead>
          </Table>
        </TableContainer>

        <Box
          sx={{
            bgcolor: "#fff",
            width: "100%",
            height: "10px",
            zIndex: "tooltip",
            position: "absolute",
          }}
          button={0}
        ></Box>
      </Box>
    </Stack>
  );
}
