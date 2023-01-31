import React from "react";
import PropTypes from "prop-types";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Stack, Switch, Typography, SwitchProps, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    three: {
      main: "#F5f5f5",
    },
    four:{
        main:"#0968FF",
    },
  },
});

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 14,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#0ACD7A" : "#0ACD7A",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Setting_body = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
      <Stack alignItems="center" justifyContent="center">
        <Box width={"380px"} 
            sx={{ bgcolor: "#FFFF", pt: 1 }}>
          
            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1" paddingTop={1} >
                  Notification
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <AntSwitch
                    defaultChecked
                    inputProps={{ "aria-label": "ant design" }}
                  />
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1" paddingTop={1} >
                Profile picture
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <ArrowForwardIosIcon fontSize="small" color="disabled" />
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1"  paddingTop={1}>
                E-mail
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontSize={"12px"} variant="body1" paddingTop={1}>
                Christopher@jenosize.com
                </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1" paddingTop={1}>
                Change password
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <ArrowForwardIosIcon fontSize="small" color="disabled" />
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1" paddingTop={1}>
                Team deverloper
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <ArrowForwardIosIcon fontSize="small" color="disabled" />
                </Stack>
              </Stack>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFF",
                height: "50px",
                
                p: 1,
                borderBottom: 1,
                borderBottomColor:"#f5f5f5"
                
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontSize={"12px"} variant="body1" paddingTop={1}>
                Version
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography fontSize={"12px"} variant="body1" paddingTop={1}>
                1.0.0
                </Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack alignItems="center" justifyContent="center">

             <Button  color="four" variant="contained" sx={{ boxShadow:"inset 0 -0.9em 0 -0.55em rgba(0,0,0,0.17)",mt: 1.8, width:186, height: 54          , zIndex: 'tooltip' }}   >
                    <Stack justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing={0}
                        sx={{ m: 0 }}>
                        <Typography color={"primary"} className={myFont.className} sx={{ fontSize: '30px',height:"50px"  }}>
                            Logout
                        </Typography>
                        
                    </Stack>
                </Button>
                
            </Stack>


          
        </Box>
      </Stack>
      </ThemeProvider>
    </div>
    
  );
};

export default Setting_body;
