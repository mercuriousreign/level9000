// import React, { useState } from "react";
// import "./Application.css";
// import CardListItem from "./CardListItem";

// export default function CardList(props) {
//   console.log("Props plans inside cardlist", props.plans);
//   const ex1 = [
//     props.exercises[0],
//     props.exercises[1],
//     props.exercises[2],
//     props.exercises[3],
//     props.exercises[4],
//     props.exercises[5],
//   ];
//   const ex2 = [
//     props.exercises[6],
//     props.exercises[7],
//     props.exercises[8],
//     props.exercises[9],
//     props.exercises[10],
//     props.exercises[11],
//   ];
//   const ex3 = [
//     props.exercises[13],
//     props.exercises[14],
//     props.exercises[15],
//     props.exercises[16],
//     props.exercises[17],
//     props.exercises[18],
//   ];
//   const ex4 = [
//     props.exercises[19],
//     props.exercises[20],
//     props.exercises[21],
//     props.exercises[22],
//     props.exercises[23],
//     props.exercises[24],
//   ];
//   const ex5 = [
//     props.exercises[25],
//     props.exercises[26],
//     props.exercises[27],
//     props.exercises[28],
//     props.exercises[29],
//     props.exercises[30],
//   ];
//   const ex6 = [
//     props.exercises[31],
//     props.exercises[32],
//     props.exercises[33],
//     props.exercises[34],
//     props.exercises[35],
//     props.exercises[36],
//   ];
//   const ex7 = [
//     props.exercises[37],
//     props.exercises[38],
//     props.exercises[39],
//     props.exercises[40],
//     props.exercises[41],
//     props.exercises[42],
//   ];
//   const ex8 = [
//     props.exercises[43],
//     props.exercises[44],
//     props.exercises[45],
//     props.exercises[46],
//     props.exercises[47],
//     props.exercises[48],
//   ];
//   const ex9 = [
//     props.exercises[49],
//     props.exercises[50],
//     props.exercises[51],
//     props.exercises[52],
//     props.exercises[53],
//     props.exercises[54],
//   ];
//   const ex10 = [
//     props.exercises[54],
//     props.exercises[55],
//     props.exercises[56],
//     props.exercises[57],
//     props.exercises[58],
//     props.exercises[59],
//   ];

//   const plan1 = (
//     <CardListItem
//       key={props.plans[0].id}
//       name={props.plans[0].name}
//       img={props.plans[0].img}
//       exercise={ex1}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan2 = (
//     <CardListItem
//       key={props.plans[1].id}
//       name={props.plans[1].name}
//       img={props.plans[1].img}
//       exercise={ex2}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan3 = (
//     <CardListItem
//       key={props.plans[2].id}
//       name={props.plans[2].name}
//       img={props.plans[2].img}
//       exercise={ex3}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan4 = (
//     <CardListItem
//       key={props.plans[3].id}
//       name={props.plans[3].name}
//       img={props.plans[3].img}
//       exercise={ex4}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan5 = (
//     <CardListItem
//       key={props.plans[4].id}
//       name={props.plans[4].name}
//       img={props.plans[4].img}
//       exercise={ex5}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan6 = (
//     <CardListItem
//       key={props.plans[5].id}
//       name={props.plans[5].name}
//       img={props.plans[5].img}
//       exercise={ex6}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan7 = (
//     <CardListItem
//       key={props.plans[6].id}
//       name={props.plans[6].name}
//       img={props.plans[6].img}
//       exercise={ex7}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan8 = (
//     <CardListItem
//       key={props.plans[7].id}
//       name={props.plans[7].name}
//       img={props.plans[7].img}
//       exercise={ex8}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan9 = (
//     <CardListItem
//       key={props.plans[8].id}
//       name={props.plans[8].name}
//       img={props.plans[8].img}
//       exercise={ex9}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   const plan10 = (
//     <CardListItem
//       key={props.plans[9].id}
//       name={props.plans[9].name}
//       img={props.plans[9].img}
//       exercise={ex10}
//       //   <Excercise excercise={props.excercise}
//       //
//     />
//   );

//   return (
//     <ul className="cards">
//       <li>{plan1}</li>
//       <li>{plan2}</li>
//       <li>{plan3}</li>
//       <li>{plan4}</li>
//       <li>{plan5}</li>
//       <li>{plan6}</li>
//       <li>{plan7}</li>
//       <li>{plan8}</li>
//       <li>{plan9}</li>
//       <li>{plan10}</li>
//     </ul>
//   );
// }

import React from "react";
import "./Application.css";
import CardListItem from "./CardListItem";

export default function CardList(props) {
  console.log("Props plans inside cardlist", props.plans);

  const exercises = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53, 54],
    [54, 55, 56, 57, 58, 59],
  ];

  const plans = props.plans.map((plan, index) => (
    <li key={plan.id}>
      <CardListItem
        name={plan.name}
        img={plan.img}
        exercise={exercises[Number(index)].map((i) => props.exercises[i])}
      />
    </li>
  ));

  return <ul className="cards">{plans}</ul>;
}
