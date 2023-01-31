import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import Home from './Home';


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up('sm')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}));

export default function MediaQuery() {
  return (
    <Root>
    <Home/>
    </Root>
  );
}