import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Logic from "./logic";
export default function App() {
  // const [A, setA] = useState(0)

  const [B, setB] = useState(0);
  // const [A, setA] = useState(0)
  console.log("B =", B);

  //   let ScoreMinus = 100;
  //   let ScorePlus = B;

  const count = useMotionValue(0);
  let C = 10;
  const rounded = useTransform(count, Math.round);

  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  useEffect(() => {
    let A = B + C;
    setB(A);
    console.log("B useEffect =", B);
    const animation = animate(count, 100, { duration: 3, delay: 0 });

    const animation1 = animate(count1, A, { duration: 3, delay: 0 });

    return () => {
      animation1.stop;
      animation.stop;
    };
  }, []);

  //   console.log("ScoreMinus = ", ScoreMinus);
  //   console.log("ScorePlus =", ScorePlus);

  // useEffect(() => {

  // }, []);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <motion.p>{rounded1}</motion.p>
      <motion.p>{B}</motion.p>
      <motion.p>{rounded}</motion.p>
    </div>
  );
}

// const [Result_of_vs, setResult] = useState(1) // have 4 state 0 = lose, 1 = win  ,2 = calculate ATK complete,3 = calculate def complete

//     const [Item_attack, setItem_attack] = useState(1)//have 4 item [1,2,3,4]
//     const [Item_def, setItem_def] = useState(4) //have 4 item [1,2,3,4]

//     const [Reward_vs_player, setsReward_vs_player] = useState(0) // coin player have
//     const [Deward_vs_enemy, setsDeward_vs_enemy] = useState(0) // coin enemy have
//     const [Coin, setCoin] = useState(50)// variable have value random coin

//     let winner = 1;
//     let loser = -1;

//     useEffect(() => {

//         if (Result_of_vs == 0) {
//             console.log("_______________________________________________")
//             console.log("Condition lose")

//             setsReward_vs_player(Coin * loser) //-
//             setsDeward_vs_enemy(Coin * winner) //+
//             console.log('Reward_vs_player is :', Reward_vs_player);
//             console.log('Deward_vs_enemy is :', Deward_vs_enemy);
//             setResult(3)
//             console.log("__________________________________")
//             if (Item_attack == 4) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 4   if lose x1.5")
//                 console.log("__________________________________")
//                 setsReward_vs_player(Math.floor((Coin * loser) * 1.5));
//                 setItem_attack(0);
//                 console.log('Reward_vs_player is :', Reward_vs_player);
//                 console.log('Deward_vs_enemy is :', Deward_vs_enemy);
//                 setResult(3)
//             }
//         } else if (Result_of_vs == 1) {
//             console.log("_______________________________________________")
//             console.log("Condition win")

//             setsReward_vs_player(Coin * winner)
//             setsDeward_vs_enemy(Coin * loser)
//             console.log("__________________________________")
//             if (Item_attack == 0) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 0")
//                 console.log("__________________________________")
//                 setResult(2)
//                 console.log('Result_of_vs is :', Result_of_vs)
//             }
//             else if (Item_def == 4) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item def 4 cut item atk")
//                 console.log("__________________________________")
//                 setResult(3)
//             }
//             else if (Item_attack == 1) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 1  x2 coin player")
//                 console.log("__________________________________")
//                 setsReward_vs_player((Coin * winner) * 2);
//                 setItem_attack(0);
//                 console.log('Reward_vs_player is :', Reward_vs_player);
//                 console.log('Deward_vs_enemy is :', Deward_vs_enemy);
//                 setResult(2)
//             } else if (Item_attack == 2) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 2  x2 point enemy")
//                 console.log("__________________________________")
//                 setsDeward_vs_enemy((Coin * loser) * 2);
//                 setItem_attack(0);
//                 console.log('Reward_vs_player is :', Reward_vs_player);
//                 console.log('Deward_vs_player is :', Deward_vs_enemy);
//                 setResult(2)
//             } else if (Item_attack == 3) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 3   cut-item")
//                 console.log("__________________________________")
//                 setItem_def(0)
//                 setResult(2)
//             } else if (Item_attack == 4) {
//                 console.log("_______________________________________________")
//                 console.log("Condition win item 4   if win x3")
//                 console.log("__________________________________")
//                 setsReward_vs_player((Coin * winner) * 3);
//                 setItem_attack(0);
//                 console.log('Reward_vs_player is :', Reward_vs_player);
//                 setResult(2)
//             } else { }
//         } else if (Result_of_vs == 2 && Deward_vs_enemy < 0) {
//             console.log("_______________________________________________")
//             console.log("Condition Def")
//             console.log("_______________________________________________")
//             if (Item_def == 0) {
//                 console.log("_______________________________________________")
//                 console.log("Condition calculater def no Item  ")
//                 console.log("__________________________________")
//                 setResult(3)
//                 console.log('Result_of_vs is :', Result_of_vs)
//             }
//             else if (Item_def == 1) {
//                 console.log("_______________________________________________")
//                 console.log("Condition calculater def  Item 1 full_block ")
//                 console.log("__________________________________")
//                 setsDeward_vs_enemy(0);
//                 setItem_def(0);
//                 console.log('Deward_vs_player is :', Deward_vs_enemy);
//                 setResult(3)
//             } else if (Item_def == 2) {
//                 console.log("_______________________________________________")
//                 console.log("Condition calculater def  Item 2   we with u ")
//                 console.log("__________________________________")
//                 setsReward_vs_player(Deward_vs_enemy);
//                 setItem_def(0);
//                 console.log('Reward_vs_player is :', Reward_vs_player);
//                 console.log('Deward_vs_player is :', Deward_vs_enemy);
//                 setResult(3)
//             } else if (Item_def == 3) {
//                 console.log("_______________________________________________")
//                 console.log("Condition calculater def  Item 3   divide by 2 ")
//                 console.log("__________________________________")
//                 setsDeward_vs_enemy(Math.floor(Deward_vs_enemy / 2));
//                 setResult(3)
//             }
//         } else if (Result_of_vs == 3) {
//             console.log("_______________________________________________")
//             console.log("state3 Show value ")
//             console.log("_______________________________________________")
//             console.log('item_attack is :', Item_attack);
//             console.log('item_def is :', Item_def);
//             console.log('Result_of_vs is :', Result_of_vs);
//             console.log('Reward_vs_player is :', Reward_vs_player);
//             console.log('Deward_vs_player is :', Deward_vs_enemy);
//             setResult(4)
//             console.log("_______________________________________________")
//         } else if (Result_of_vs == 5) {
//             console.log("_______________________________________________")
//             console.log("state5 draw ")
//             console.log("_______________________________________________")
//             setsReward_vs_player(0);
//             setsDeward_vs_enemy(0);
//             console.log('item_attack is :', Item_attack);
//             console.log('item_def is :', Item_def);
//             console.log('Result_of_vs is :', Result_of_vs);
//             console.log('Reward_vs_player is :', Reward_vs_player);
//             console.log('Deward_vs_player is :', Deward_vs_enemy);
//             setResult(3)
//             console.log("_______________________________________________")
//         } else { }

// //     }, []);

// console.log("Reward_vs_player = ",Reward_vs_player)
//     console.log("Deward_vs_enemy = ",Deward_vs_enemy)
