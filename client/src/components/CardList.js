import React, { useState } from "react";
import "./Application.css";
import CardListItem from "./CardListItem";

export default function CardList(props) {
  const plans = props.plans.map((plan) => {
    return (
      <CardListItem
        key={plan.id}
        name={plan.name}
        img={plan.img}
        exercise={props.exercises[0]}
      />
    );
  });
  return <ul className="cards">{plans}</ul>;
}
