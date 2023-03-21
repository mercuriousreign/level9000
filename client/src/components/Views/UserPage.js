import React, { useState } from "react";
import Navbar from "../navbar";
import { Calendar } from "antd";
import ButtonCalendar from "../Calendar/ButtonCalendar";
export default function UserPage(props) {


  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return(
    <div>
    <Navbar/>
    <ButtonCalendar children={"Start today's workout"}/>
    <ButtonCalendar children={"Create a new character"}/>
    <Calendar onPanelChange={onPanelChange}/>
    
    </div>
  )
}