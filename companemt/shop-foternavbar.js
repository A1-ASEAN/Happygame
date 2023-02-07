import { BottomNavigation, Box, Button, createTheme, Link, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Misson from '../public/image/footer/Mission.svg'
import Missonb from '../public/image/footer/Missin-b.svg'
import Profile from '../public/image/footer/Profile.svg'
import Profileb from '../public/image/footer/Profile-b.svg'
import Shop from '../public/image/footer/shop.svg'
import Shopb from '../public/image/footer/shop-b.svg'
import Redeem from '../public/image/footer/Redeem.svg'
import Redeemb from '../public/image/footer/Redeem-b.svg'
import Setting from '../public/image/footer/Setting.svg'
import Settingb from '../public/image/footer/Setting-b.svg'


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

function chang() {
  const [state, setstate] = useState(false)
 

  const toggle = (index) => {
    setstate(index),setShowicon(index)
    console.log(index)
  }

  return (

    <Stack alignItems="center">
      <Box sx={{ width: "100%", height: {sx:"75px",sm:"79px"}, bottom: 0, left: 0, right: 0, zIndex: 'modal', bgcolor: "#fff",pl:{xs:1,lg:3},pr:{xs:1,lg:3} }}>

        <Stack direction="row"
          justifyContent="space-between"
          alignItems="flex-end">
            <Link href='../Reward' underline="none">
          <Button variant="text" onClick={() => toggle(1)}>
            {state == 1 ? <Redeemb /> : <Redeem />}
          </Button>
          </Link>
          <Link href='../Shop' underline="none">
          <Button variant="text" onClick={() => toggle(2)}>

            <Stack direction="column"
              justifyContent="flex-end"
              alignItems="center">
                <Shopb />
            </Stack>

          </Button>
          </Link>
          <Link href='../Home' underline="none">
          <Button variant="text" onClick={() => toggle(3)}>
            {state == 3 ? <Profileb /> : <Profile />}
          </Button>
          </Link>
          <Link href='../Mission' underline="none">
          <Button variant="text" onClick={() => toggle(4)}>
            {state == 4 ? <Missonb /> : <Misson />}
          </Button>
          </Link>
          <Link href='../setting' underline="none">
          
          <Button variant="text" onClick={() => toggle(5)}>
          
            {state == 5 ? <Settingb /> : <Setting />}
          </Button>
          </Link>


        </Stack>

      </Box>

    </Stack>

  );
}
export default chang;