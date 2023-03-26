import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css";
import CardListItem from "../CardListItem";
import { Card, Button } from "antd";
import { Card as CardM } from "@mui/material";

//import Button from "antd";

export default function CharacterPage(props) {
  function addPlan() {
    console.log("addedPlan");
  }
  console.log("exercises", props.exercises(1));
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 700,
        }}
        cover={<img src={props.img}></img>}
      >
        <h1>{props.name}</h1>
        <p>Muscle target : {props.muscle}</p>
        <p>{props.description}</p>
        {props.exercises(props.user.plan_id)}
      </Card>
    </div>
  );
}
