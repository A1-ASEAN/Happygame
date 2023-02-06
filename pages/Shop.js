import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../companemt/shop-header";
import Footernavbar from "../companemt/shop-foternavbar";
import Main_All from "../companemt/shop-all";
import Main_Defend from "../companemt/shop-defend";
import { Stack } from "@mui/system";
import Navbar from "../companemt/Shop-Navbar";
import Main_Attack from "../companemt/shop-attack";
import { createTheme, ThemeProvider } from "@mui/material";

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
  breakpoints: {
    values: {
      mobile: 0,
      iPadMini: 414,
      iPadAir: 600,
      iPadPro: 1023,

      desktop: 1200,
    },
  },
});

export default function Home() {
  const [page, setPage] = React.useState();
  const [showmain, setShowmain] = React.useState(<Main_All />);

  const secpage = (index) => {
    setPage(index), setShowmain();
    console.log(index);
  };

  return (
    <Box height={"100vh"} overflow={"hidden"} bgcolor={"#fff"}>
      <Box height={"100%"} display={"flex"} flexDirection={"column"}>
        <ThemeProvider theme={theme}>
          <Box>
            <Header />
            {/* wall */}
            <Stack justifyContent="center" alignItems="center">
              <Box overflow={"hidden"}
                sx={{
                  maxWidth: "100%",
                  position: { mobile: "fixed", iPadAir: "absolute" },
                  zIndex: "modal",
                  pt: 3 
                }}
              >
                <img src="/image/wall_bar.png" />
              </Box>
              {/* Font ALL ATTACK DEDEND */}

              <Navbar secpage={secpage} />
            </Stack>
          </Box>
          </ThemeProvider>

          <Box flex={1} overflow={"hidden"} sx={{ overflowY: "auto" }}>
            {page == "ALL" ? <Main_All /> : ""}
            {page == "ATTACK" ? <Main_Attack /> : ""}
            {page == "DEFEND" ? <Main_Defend /> : ""}
            {showmain}
          </Box>

          <Box>
            <Footernavbar />
          </Box>
        
      </Box>
    </Box>
  );
}
