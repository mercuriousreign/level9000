import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
import DayListItem from "../Calendar/DayListItem";
import ProgressBar from "../Calendar/Progressbar";
import "../Calendar/DayListItem.css"


export default function UserPage(props) {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  const fakeDB = {}

  function deleteItem(){
    console.log("delete")
  }

  function addItem(){
    console.log("add")
  }

  function dayItem(date){
    
    //
    if(date.format('YYYY-MM-DD') === '2023-03-21' ){
      return(
      <div>
      <DayListItem img="Naruto_newshot.webp"></DayListItem>
      <ButtonCalendar children=" X " danger={true} onClick={deleteItem}></ButtonCalendar>
      </div>
      )
    }
    
    return(
      <ButtonCalendar children=" ➕ " onClick={addItem}></ButtonCalendar>
    )
    

  }

  function monthItem(month){
    return (
      <DayListItem img="Naruto_newshot.webp"></DayListItem>
    )

  }


  return(
    <div>
    <h1 className="headerfont">Planned schedule</h1>
    <div className="calendarborder">
    <Calendar onPanelChange={onPanelChange} dateCellRender={(date)=>dayItem(date)} monthCellRender={(month)=>{monthItem(month)}}/>
    </div>
    </div>
  )
}