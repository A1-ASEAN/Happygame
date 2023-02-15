import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Winlose from '../pages/winlose' 


const logic = () => {

// logic Attack
    
    const [Item_attack, setItem_attack] = useState(0)//have 4 item [1,2,3,4]
    const [Item_def, setItem_def] = useState(0) //have 4 item [1,2,3,4]


    const [Result_of_vs, setResult] = useState() // have 4 state 0 = lose, 1 = win  ,2 = calculate ATK complete,3 = calculate def complete
    const [Reward_vs_player, setsReward_vs_player] = useState(0) // coin player have 
    const [Deward_vs_enemy, setsDeward_vs_enemy] = useState(0) // coin enemy have

    const [Coin, setCoin] = useState(50)// variable have value random coin

    const AAA = Reward_vs_player


    let winner =1;
    let loser = -1;

    const arrayItem = [1,2,3,4];
   
    useEffect(() => {
        
        setItem_attack( Item_attack + arrayItem[1]);
        setItem_def( Item_def + arrayItem[1]);
      }, []);

    

// คอน กระดาษ กรรไก

    const [state, setstate] = useState('')
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
    

// if   คอน กระดาษ กรรไก

    if (player == "A" && enemy == "A" ) {
        console.log("Draw")
        setA("ค้อน")
        setB("ค้อน")
        setplayer('')
        setstate('Draw')  
        setResult('5')
    } else if (player == "A" && enemy == "B"){
        console.log("Lose")
        setA("ค้อน")
        setB("กรรไก")
        setplayer('')
        setstate('Lose')
        setResult('0')
    }
    else if (player == "A" && enemy == "C"){
        console.log("Win")
        setA("ค้อน")
        setB("กระดาษ")
        setplayer('')
        setstate('Win')
        setResult('1')

    }else if (player == "B" && enemy == "A"){
        console.log("Lose ")
        setA("กรรไก")
        setB("ค้อน")
        setplayer('')
        setstate('Lose')
        setResult('0')

    }else if (player == "B" && enemy == "B"){
        console.log("Draw")
        setA("กรรไก")
        setB("กรรไก")
        setplayer('')
        setstate('Draw')
        setResult('5') 

    }else if (player == "B" && enemy == "C"){
        console.log("Win")
        setA("กรรไก")
        setB("กระดาษ")
        setplayer('')
        setstate('Win')
        setResult('1')
        
        

    }else if (player == "C" && enemy == "A"){
        console.log("Win")
        setA("กระดาษ")
        setB("ค้อน")
        setplayer('')
        setstate('Win')
        setResult('1')

    }else if (player == "C" && enemy == "B"){
        console.log("Lose")
        setA("กระดาษ")
        setB("กรรไก")
        setplayer('')
        setstate('Lose')
        setResult('0')

    }else if (player == "C" && enemy == "C"){
        console.log("Draw")
        setA("กระดาษ")
        setB("กระดาษ")
        setplayer('')
        setstate('Draw') 
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


    return <div> 
        <Typography>Reward_vs_player is : {Reward_vs_player}</Typography>
        <Typography>Deward_vs_player is : {Deward_vs_enemy}</Typography>
        <Typography>Result of playing is : {state} </Typography>
        <Typography>Result of playing is : {A} </Typography>
        <Typography>Result of enemy is : {B} </Typography>
        
       
    </div>;
}


// #endregion

export default logic;