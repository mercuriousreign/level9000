import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar, Collapse } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css";
import CardListItem from "../CardListItem";
import { Card, Button } from "antd";

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
        cover={
          <div
            style={{
              width: "690px" /* desired width of the cropped image */,
              height: "400px" /* desired height of the cropped image */,
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
              src={props.img}
            ></img>
          </div>
        }
      >
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.exercises(props.user.plan_id)}
      </Card>
    </div>
  );
}
