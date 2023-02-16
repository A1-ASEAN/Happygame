
import { Box, Stack } from "@mui/system";
import Styles from '../styles/animation.module.css'
import Vs from "./SVGS/Vs"
import { Typography } from "@mui/material";
import localFont from '@next/font/local'
import Footernavbar from '../companemt/recover-footer'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const myFont = localFont({ src: '../gamer_2/Gamer.ttf' })

export default function App() {


  const [Item_attack, setItem_attack] = useState(0)//have 4 item [1,2,3,4]
    const [Item_def, setItem_def] = useState(0) //have 4 item [1,2,3,4]
    

    const [Result_of_vs, setResult] = useState() // have 4 state 0 = lose, 1 = win  ,2 = calculate ATK complete,3 = calculate def complete
    const [Reward_vs_player, setsReward_vs_player] = useState(0) // coin player have 
    const [Deward_vs_enemy, setsDeward_vs_enemy] = useState(0) // coin enemy have

    const [Coin, setCoin] = useState(50)// variable have value random coin


    const [SoreP, setSoreP] = useState(0) // coin player have 
    const [SoreE, setSoreE] = useState(0) // coin enemy have

   


    let winner =1;
    let loser = -1;

    const arrayItem = [1,2,3,4];
   
    useEffect(() => {
        
        setItem_attack( Item_attack + arrayItem[1]);
        setItem_def( Item_def + arrayItem[1]);
      }, []);
    console.log(arrayItem[0])

// คอน กระดาษ กรรไก

    const [StatusP, setStatusP] = useState('')
    const [StatusE, setStatusE] = useState('')
    const abc = ["A","B","C"];
    const index = abc.length
    const lengthE = Math.floor(Math.random() * index);
    const lengthP = Math.floor(Math.random() * index);
    const enemy = abc[lengthE]
    console.log("enemy = ",enemy)

    const [player, setplayer] = useState("")
    
    useEffect(() => {
        
        setplayer( player + abc[lengthP] );
        
      }, []);
    
    console.log("player = ", player)
    const [A, setA] = useState()
    const [B, setB] = useState()
    
      
    const count1 = useMotionValue(0);
    const rounded1 = useTransform(count1, Math.round);
    
  
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round)
      
    useEffect(() => {
  
      
      const animation = animate(count,Deward_vs_enemy, { duration: 1.5,delay:8 });
     
      const animation1 = animate(count1,Reward_vs_player, { duration: 1.5,delay:8 });
      return ()=>{
        animation.stop
        animation1.stop
      }
    }, [Deward_vs_enemy,Reward_vs_player]);
    

// if   คอน กระดาษ กรรไก

    if (player == "A" && enemy == "A" ) {
        console.log("DRAW")
        setA("ค้อน")
        setB("ค้อน")
        setplayer('')
        setStatusP('DRAW')  
        setStatusE('DRAW') 
        setResult('5')
    } else if (player == "A" && enemy == "B"){
        console.log("LOSE")
        setA("ค้อน")
        setB("กรรไก")
        setplayer('')
        setStatusP('LOSE')
        setStatusE('WIN') 
        setResult('0')
    }
    else if (player == "A" && enemy == "C"){
        console.log("WIN")
        setA("ค้อน")
        setB("กระดาษ")
        setplayer('')
        setStatusP('WIN')
        setStatusE('LOSE')
        setResult('1')

    }else if (player == "B" && enemy == "A"){
        console.log("Lose ")
        setA("กรรไก")
        setB("ค้อน")
        setplayer('')
        setStatusP('LOSE')
        setStatusE('WIN')
        setResult('0')

    }else if (player == "B" && enemy == "B"){
        console.log("DRAW")
        setA("กรรไก")
        setB("กรรไก")
        setplayer('')
        setStatusP('DRAW')
        setStatusE('DRAW')
        setResult('5') 

    }else if (player == "B" && enemy == "C"){
        console.log("Win")
        setA("กรรไก")
        setB("กระดาษ")
        setplayer('')
        setStatusP('WIN')
        setStatusE('LOSE')
        setResult('1')
        
        

    }else if (player == "C" && enemy == "A"){
        console.log("Win")
        setA("กระดาษ")
        setB("ค้อน")
        setplayer('')
        setStatusP('WIN')
        setStatusE('LOSE')
        setResult('1')

    }else if (player == "C" && enemy == "B"){
        console.log("Lose")
        setA("กระดาษ")
        setB("กรรไก")
        setplayer('')
        setStatusP('LOSE')
        setStatusE('WIN')
        setResult('0')

    }else if (player == "C" && enemy == "C"){
        console.log("DRAW")
        setA("กระดาษ")
        setB("กระดาษ")
        setplayer('')
        setStatusP('DRAW') 
        setStatusE('DRAW')
        setResult('5')

    }else {}
    


    // console.log('item_attack is :',Item_attack);
    // console.log('item_def is :',Item_def);
    // console.log('Result_of_vs is :',Result_of_vs);
    // console.log('Reward_vs_player is :',Reward_vs_player);
    // console.log('Deward_vs_enemy is :',Deward_vs_enemy);
    // console.log("coin is :",Coin)
    // // console.log('Value of winner is',winner);
    // // console.log('Value of loser is',loser);
   
// comdition use item


    if (Result_of_vs == 0) {
        console.log("_______________________________________________")
        console.log("Condition lose")
        
        setsReward_vs_player(Coin*loser) //-
        setsDeward_vs_enemy(Coin*winner) //+
        console.log('Reward_vs_player is :',Reward_vs_player);
        console.log('Deward_vs_enemy is :',Deward_vs_enemy);
        setResult(3)
        console.log("__________________________________")
        if (Item_attack == 4) {
            console.log("_______________________________________________")
            console.log("Condition win item 4   if lose x1.5")
        console.log("__________________________________")
            setsReward_vs_player(Math.floor((Coin*loser)*1.5));
            setItem_attack(0);
            console.log('Reward_vs_player is :',Reward_vs_player);
            console.log('Deward_vs_enemy is :',Deward_vs_enemy);
            setResult(3)
        }
    }else if (Result_of_vs == 1) {
        console.log("_______________________________________________")
        console.log("Condition win")
       
        setsReward_vs_player(Coin*winner)
        setsDeward_vs_enemy(Coin*loser)
        console.log("__________________________________")
        if(Item_attack == 0){ 
            console.log("_______________________________________________")
            console.log("Condition win item 0")
        console.log("__________________________________")
            setResult(2)
            console.log('Result_of_vs is :',Result_of_vs)
        }
         else if (Item_def == 4) {
            console.log("_______________________________________________")
            console.log("Condition win item def 4 cut item atk")
        console.log("__________________________________")
            setResult(3)
        } 
        else if (Item_attack == 1) {
            console.log("_______________________________________________")
            console.log("Condition win item 1  x2 coin player")
        console.log("__________________________________")
            setsReward_vs_player((Coin*winner)*2);
            setItem_attack(0);
            console.log('Reward_vs_player is :',Reward_vs_player);
            console.log('Deward_vs_enemy is :',Deward_vs_enemy);
            setResult(2)
        }else if (Item_attack == 2) {
            console.log("_______________________________________________")
            console.log("Condition win item 2  x2 point enemy")
        console.log("__________________________________")
            setsDeward_vs_enemy((Coin*loser)*2);
            setItem_attack(0);
            console.log('Reward_vs_player is :',Reward_vs_player);
            console.log('Deward_vs_player is :',Deward_vs_enemy);
            setResult(2)
        }else if (Item_attack == 3){
            console.log("_______________________________________________")
            console.log("Condition win item 3   cut-item")
        console.log("__________________________________")
            setItem_def(0)
            setResult(2)
        }else if (Item_attack == 4) {
            console.log("_______________________________________________")
            console.log("Condition win item 4   if win x3")
        console.log("__________________________________")
            setsReward_vs_player((Coin*winner)*3);
            setItem_attack(0);
            console.log('Reward_vs_player is :',Reward_vs_player);
            setResult(2)
        }else{ } 
    }else if(Result_of_vs == 2 && Deward_vs_enemy <0 ){
        console.log("_______________________________________________")
        console.log("Condition Def")
        console.log("_______________________________________________")
        if(Item_def  == 0){ 
            console.log("_______________________________________________")
            console.log("Condition calculater def no Item  ")
        console.log("__________________________________")
            setResult(3)
            console.log('Result_of_vs is :',Result_of_vs)
        }
        else if (Item_def == 1) {
            console.log("_______________________________________________")
            console.log("Condition calculater def  Item 1 full_block ")
        console.log("__________________________________")
            setsDeward_vs_enemy(0);
            setItem_def(0);
            console.log('Deward_vs_player is :',Deward_vs_enemy);
            setResult(3)
        }else if (Item_def == 2) {
            console.log("_______________________________________________")
            console.log("Condition calculater def  Item 2   we with u ")
        console.log("__________________________________")
            setsReward_vs_player(Deward_vs_enemy);
            setItem_def(0);
            console.log('Reward_vs_player is :',Reward_vs_player);
            console.log('Deward_vs_player is :',Deward_vs_enemy);
            setResult(3)
        }else if (Item_def == 3){
            console.log("_______________________________________________")
            console.log("Condition calculater def  Item 3   divide by 2 ")
        console.log("__________________________________")
            setsDeward_vs_enemy(Math.floor(Deward_vs_enemy/2));
            setResult(3)
        }
    }else if(Result_of_vs == 3){
        console.log("_______________________________________________")
        console.log("state3 Show value ")
        console.log("_______________________________________________")
        console.log('item_attack is :',Item_attack);
        console.log('item_def is :',Item_def);
        console.log('Result_of_vs is :',Result_of_vs);
        console.log('Reward_vs_player is :',Reward_vs_player);
        console.log('Deward_vs_player is :',Deward_vs_enemy);



        setSoreP( Reward_vs_player)
        setSoreE (Deward_vs_enemy)
    setResult(4)
    console.log("_______________________________________________")
    }else if(Result_of_vs == 5){
        console.log("_______________________________________________")
        console.log("state5 draw ")
        console.log("_______________________________________________")
        setsReward_vs_player(0);
        setsDeward_vs_enemy(0);
        console.log('item_attack is :',Item_attack);
        console.log('item_def is :',Item_def);
        console.log('Result_of_vs is :',Result_of_vs);
        console.log('Reward_vs_player is :',Reward_vs_player);
        console.log('Deward_vs_player is :',Deward_vs_enemy);
    setResult(3)
    console.log("_______________________________________________")
    }else{}

    

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

  

  


 


 
  
  // HTML

  return (
    <Box height={"100%"} width={"100%"} paddingBottom={15}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={pointOpacity}
        transition={pointDelay}>
        <Box display={"flex"} position={"fixed"} sx={Top}>
          <Stack spacing={"260px"} paddingBottom={10} className={myFont.className}>

            
            <motion.h1 className={Styles.FontGreen}>{rounded}</motion.h1>
            
            <motion.h1 className={Styles.FontGreen}>{rounded1}</motion.h1>

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

          {/* font Enemy */}

          <motion.div animate={StatusOpacity} transition={Statusdelay}>
            <Typography className={myFont.className} sx={Font} >
              {StatusE}
            </Typography>
          </motion.div>
          <Box width={"20px"} height={"20px"}>
            <img className={Styles.Item1} src="/image/PF1.png" />
          </Box>

          {/* Item Enemy */}

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

          {/* font Player */}
          <motion.div animate={StatusOpacity} transition={Statusdelay}
          >
            <Typography className={myFont.className} sx={Font} >
              {StatusP}
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
