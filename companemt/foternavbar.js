import { BottomNavigation, Box, Button, Paper, Stack, Typography } from '@mui/material';
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


function chang() {
  const [state, setstate] = useState(false)


  const toggle = (index) => {
    setstate(index)
    console.log(index)
  }

  return (

    <Stack alignItems="center">
      <Box sx={{ width: "390px", height: "70px", bottom: 0, left: 0, right: 0, zIndex: 'tooltip', bgcolor: "#fff" }}>

        <Stack direction="row"
          justifyContent="space-between"
          alignItems="flex-end">
          <Button variant="text" onClick={() => toggle(1)}>
            {state == 1 ? <Redeemb /> : <Redeem />}
          </Button>
          <Button variant="text" onClick={() => toggle(2)}>

            <Stack direction="column"
              justifyContent="flex-end"
              alignItems="center">
              {state == 2 ? <Shopb /> : <Shop />}
            </Stack>

          </Button>
          <Button variant="text" onClick={() => toggle(3)}>
            {state == 3 ? <Profileb /> : <Profile />}
          </Button>
          <Button variant="text" onClick={() => toggle(4)}>
            {state == 4 ? <Missonb /> : <Misson />}
          </Button>
          <Button variant="text" onClick={() => toggle(5)}>
            {state == 5 ? <Settingb /> : <Setting />}
          </Button>


        </Stack>

      </Box>

    </Stack>

  );
}
export default chang;