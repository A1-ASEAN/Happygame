
import { Box, Stack } from "@mui/system";
import Styles from '../styles/animation.module.css'
import Vs from "./SVGS/Vs"
import { Typography } from "@mui/material";
import localFont from '@next/font/local'
import Footernavbar from '../companemt/recover-footer'
import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })

export default function App() {

  // CSS 

  const animate1 = {
    opacity: [0, 0, 1, 1, 1],
    y: [0, -100, 60, 60, 0],
  }

  const animate2 = {
    opacity: [0, 0, 1, 1, 1],
    y: [0, 100, -60, -60, 0]
  }

  const transition = {
    duration: 5,
    ease: "easeOut",
    times: [0, 2, 1, 1, 0.5, 0.5],
    // repeat: Infinity,
    repeatDelay: 3,
  }

  const TimeOpacity = {
    duration: 5,
    ease: "easeOut",
    repeatDelay: 5,
  }

  const TimeOpacity2 = {
    duration: 5.2,
    ease: "easeOut",
    repeatDelay: 5,
  }

  const TimeOpacity3 = {
    duration: 5.5,
    ease: "easeOut",
    repeatDelay: 5,
  }

  const itemDelay = {
    duration: 5.5,
    repeatDelay: 5,
  }

  const itemOpacity = {
    opacity: [0, 0, 0, 0, 1]
  }

  const Statusdelay = {
    duration: 7,
    repeatDelay: 6,
  }

  const StatusOpacity = {
    opacity: [0, 0, 0, 0, 0, 1]
  }

  const pointOpacity = {
    opacity: [0, 0, 0, 0, 0, 1]
  }

  const pointDelay = {
    duration: 8,
    repeatDelay: 6,
  }

  const Font = {
    display: "flex", alignItems: 'center', justifyContent: "center", fontSize: "50px", height: '20px', pl: 3, pb: 3
  }

  const Clound1 = {
    top: { xs: "15%" }, right: { xs: "10%" }
  }

  const Clound2 = {
    top: { xs: "40%", }, left: { xs: "-30%", sm: "8%" }
  }

  const Clound3 = {
    top: { xs: "65%" }, right: { xs: "5%" }
  }

  const Top = {
    top: { xs: "23%", sm: '32%', md: '33%' }, left: { xs: "20%", sm: "38%" }
  }

  

  let ScoreMinus = -50
  let ScorePlus = 50
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round)
    
  useEffect(() => {
    const animation = animate(count, ScoreMinus, { duration: 1.5,delay:8 });
    return animation.stop;
  }, []);

  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  useEffect(() => {
    const animation1 = animate(count1, ScorePlus, { duration: 1.5,delay:8 });
    return animation1.stop;
  }, []);
 
  
  // HTML

  return (
    <Box height={"100%"} width={"100%"} paddingBottom={15}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={pointOpacity}
        transition={pointDelay}>
        <Box display={"flex"} position={"fixed"} sx={Top}>
          <Stack spacing={"250px"} paddingBottom={10} className={myFont.className}>

            <motion.h1 className={Styles.FontGreen}>{rounded}</motion.h1>
           
            <motion.h1 className={Styles.FontRed}>{rounded1}</motion.h1>

          </Stack >
        </Box>
      </motion.div>

      <Box display={"flex"} position={"fixed"} sx={Clound1}>
        <img src='/image/recover/clounds-1.svg' />
      </Box>

      <Box display={"flex"} position={"fixed"} sx={Clound2}>
        <img src='/image/recover/clounds-2.svg' />
      </Box>

      <Box display={"flex"} position={"fixed"} sx={Clound3}>
        <img src='/image/recover/clounds-3.svg' />
      </Box>


      <Stack height={"100%"} width={"100%"} alignItems={'center'} justifyContent={"center"} direction={"column"} spacing={"160px"} >

        {/* PF 1 */}

        <motion.div
          initial={{ opacity: 0 }}
          className={Styles.Box1}
          animate={animate1}
          transition={transition}>

          {/* font Win */}

          <motion.div animate={StatusOpacity} transition={Statusdelay}>
            <Typography className={myFont.className} sx={Font} >
              WIN
            </Typography>
          </motion.div>
          <Box width={"20px"} height={"20px"}>
            <img className={Styles.Item1} src="/image/PF1.png" />
          </Box>

          {/* Item Enamy */}

          <motion.div
            initial={{ opacity: 0 }}
            transition={itemDelay}
            animate={itemOpacity}
          >
            <img className={Styles.Item2} src="/image/item/6.svg" />
          </motion.div>
        </motion.div>

        {/* PF 2 */}

        <motion.div
          initial={{ opacity: 0 }}
          className={Styles.Box1}
          animate={animate2}
          transition={transition}
        >

          {/* font Win */}
          <motion.div animate={StatusOpacity} transition={Statusdelay}
          >
            <Typography className={myFont.className} sx={Font} >
              LOSE
            </Typography>
          </motion.div>
          <Box width={"20px"} height={"20px"}>
            <img className={Styles.Item1} src="/image/PF2.png" />
          </Box>

          {/* Item Player */}

          <motion.div initial={{ opacity: 0 }} transition={itemDelay} animate={itemOpacity}>
            <img className={Styles.Item2} src="/image/item/1.svg" />
          </motion.div>

        </motion.div>



        <Box display={'flex'} position={"fixed"} zIndex={2000} paddingBottom={30} paddingRight={20} opacity={0} >

          {/* VS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 1, 0] }}
            transition={{
              duration: 2,

            }}>
            <Box width={"50px"} height={"120px"} paddingTop={12}  >
              <Vs />
            </Box>
          </motion.div >

          {/* Boom sm */}

          <Box width={"1px"} height={"120px"} position={"fixed"} paddingTop={7} paddingLeft={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 1, 0]
              }}
              transition={TimeOpacity}
            >
              <img className="boom" src="/image/Attack/2.svg" />
            </motion.div>
          </Box>

          {/* Boom md */}

          <Box width={"1px"} height={"120px"} position={"fixed"} paddingTop={6} paddingLeft={4} >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 1, 0]
              }}
              transition={TimeOpacity2}
            >
              <img className="boom" src="/image/Attack/2.svg" />
            </motion.div>
          </Box>

          {/* Boom big */}

          <Box width={"1px"} height={"20px"} position={"fixed"} paddingTop={1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 1, 0]
              }}
              transition={TimeOpacity3}
            >
              <img className="boom" src="/image/Attack/3.svg" />
            </motion.div>
          </Box>

        </Box>

      </Stack>


      < Footernavbar />

    </Box >


  );
}
