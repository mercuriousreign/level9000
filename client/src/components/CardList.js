import React, { useState } from "react";
import "./Application.css";
import CardListItem from "./CardListItem";

export default function CardList(props) {
  console.log("Props plans inside cardlist", props.plans);

  const [selectedPlan, setSelectedPlan] = useState(null);

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
        key={plan.id}
        name={plan.name}
        img={plan.img}
        exercise={exercises[Number(index)].map((i) => props.exercises[i])}
        isSelected={selectedPlan}
        onSelect={() => {
          setSelectedPlan(plan.id);
        }}
        // onSelect={() => {setSelectedPlan(plan.id); props.addPlan(user,plan.id)}}
      />
    </li>
  ));

  return <ul className="cards">{plans}</ul>;
}
