import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css"
import CardListItem from "../CardListItem";
import {Card,Button} from "antd";
import { Card as CardM } from "@mui/material";


//import Button from "antd";

export default function CharacterPage(props){
  const { name, img, exercise,description} = props;

  function addPlan (){
    console.log("addedPlan")
  }

  return (
    //<CardListItem name={name} img={img}/>
    <div>
    <Card hoverable
    style={{
      width: 700,
    }}
    
    cover={<img src={props.img}></img>}
    
    >
      <h1>{props.name}</h1>
      <p>Muscle target : {props.muscle}</p>
      <p>{props.description}</p>
      <ul>
      </ul>
      </Card>
    {/* <div>
    
      <h1>{props.name}</h1>
      <img src={props.img}></img>
      <p>Muscle target :{props.muscle}</p>
      <p>{props.description}</p>
    </div> */}
    {/* <div>
    <ButtonCalendar default={true} onClick={addPlan}>Add to my Calendar</ButtonCalendar>
    </div> */}
    </div>
  )

}