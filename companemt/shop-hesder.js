import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Item } from 'semantic-ui-react'
function shophesder() {
    return (
        <Box marginTop={10}>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6} md={8}>
                <Item></Item>
                <Item>xs=6 md=8</Item>
            </Grid>
            <Grid xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
        </Grid>
        </Box>
    )
}

export default shophesder