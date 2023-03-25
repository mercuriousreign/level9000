import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css";
import CharacterPage from "./CharacterPage";

export default function UserPage(props) {
  const exercises = (planID) => {
    const exerciseIndex = [
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
    const exerciseList = exerciseIndex[parseInt(planID) - 1].map(
      (each, index) => (
        <li key={index}>
          {" "}
          <h3>{props.exercises[parseInt(each)].name}</h3>
          {props.exercises[parseInt(each)].instructions}
          <br />
        </li>
      )
    );
    console.log("exercises2", props.exercises[1].instructions);
    return (
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {exerciseList}
      </ul>
    );
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const fakeDB = {};

  function deleteItem() {
    console.log("delete");
  }

  function addItem() {
    console.log("add");
  }

  function dayItem(date) {
    //
    if (date.format("YYYY-MM-DD") === "2023-03-21") {
      return (
        <div>
          <DayListItem img="Naruto_newshot.webp"></DayListItem>
          <ButtonCalendar
            children=" X "
            danger={true}
            onClick={deleteItem}
          ></ButtonCalendar>
        </div>
      );
    }

    return <ButtonCalendar children=" ➕ " onClick={addItem}></ButtonCalendar>;
  }

  function monthItem(month) {
    return <DayListItem img="Naruto_newshot.webp"></DayListItem>;
  }

  console.log("current user plan", props.plan);
  return (
    <div>
      <h1 className="headerfont">Planned schedule</h1>
      {props.plan && (
        <CharacterPage
          name={props.plan.name}
          img={props.plan.img}
          description={props.plan.description}
          exercises={exercises}
          user={props.user}
        />
      )}
      {!props.plan && <h1>GO CHOOSE A PLAN!!!!</h1>}
      {/* <div className="calendarborder">
    <Calendar onPanelChange={onPanelChange} dateCellRender={(date)=>dayItem(date)} monthCellRender={(month)=>{monthItem(month)}}/>
    </div> */}
    </div>
  );
}
