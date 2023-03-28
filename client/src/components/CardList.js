import React, { useState } from "react";
import "./Application.css";
import CardListItem from "./CardListItem";
import { Card, Button } from "antd";

export default function CardList(props) {
  console.log("Props plans inside cardlist", props.plans);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [count, setCount] = useState(0);
  const exercises = [
    [15, 10, 19, 29, 43, 45],
    [12, 18, 24, 34, 39, 6],
    [7, 9, 37, 58, 56, 52],
    [11, 6, 3, 57, 39, 19],
    [1, 0, 9, 6, 10, 58],
    [16, 13, 26, 34, 35, 42],
    [37, 38, 39, 40, 41, 42],
    [18, 33, 59, 44, 8, 6],
    [18, 33, 11, 52, 53, 54],
    [31, 32, 34, 16, 53, 52],
  ];

  const plans = props.plans.map((plan, index) => (
    <li key={plan.id}>
      <Card
        hoverable
        style={{
          width: 400,
          backgroundColor: "#a4a299de",
          color: "white",
        }}
        cover={
          <div
            style={{
              width: "390px" /* desired width of the cropped image */,
              height: "250px" /* desired height of the cropped image */,
              overflow: "hidden",
              display: "inline-block" /* arrange the images horizontally */,
              margin: "5px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={plan.img}
            ></img>
          </div>
        }
        onClick={() => console.log("Links to character page")}
      >
        <CardListItem
          planList={props.planList}
          addLikes={props.addLikes}
          count={count}
          setCount={setCount}
          user={props.user}
          setUser={props.setUser}
          id={plan.id}
          name={plan.name}
          // img={plan.img}
          exercise={exercises[Number(index)].map((i) => props.exercises[i])}
          isSelected={selectedPlan}
          onSelect={() => {
            setSelectedPlan(plan.id);
          }}

          // onSelect={() => {setSelectedPlan(plan.id); props.addPlan(user,plan.id)}}
        />
      </Card>
    </li>
  ));

  return <ul className="cards">{plans}</ul>;
}
